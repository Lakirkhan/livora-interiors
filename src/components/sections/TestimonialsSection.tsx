"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, BadgeCheck, Plus, X } from "lucide-react";
import toast from "react-hot-toast";
import type { Review } from "@/types";
import Combobox from "../ui/Combobox";

const PROJECT_TYPES = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "4+ BHK / Villa", "Studio / 1 RK", "Office / Commercial"];

const STATS = [
  { value: "10+", label: "Happy Clients" },
  { value: "50+", label: "Rooms Designed" },
  { value: "5★", label: "Customer Satisfaction" },
  { value: "100%", label: "Transparent Pricing" },
];

const inputClass =
  "w-full bg-transparent border-b border-charcoal/20 text-charcoal placeholder-charcoal/30 px-0 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors duration-300 font-body";
const labelClass = "text-charcoal/45 text-xs tracking-wider uppercase mb-2 block font-body";

function AddReviewForm({ onDone }: { onDone: () => void }) {
  const [name, setName] = useState("");
  const [projectType, setProjectType] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !projectType.trim() || !text.trim()) {
      toast.error("Please fill in your name, project type, and review.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ client_name: name, project_type: projectType, rating, review_text: text, location }),
      });
      const result = await res.json();
      if (result.success) {
        toast.success("Thank you for your review!");
        onDone();
      } else {
        toast.error(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={submit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <label className={labelClass}>Your Name *</label>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Project Type *</label>
          <Combobox
            options={PROJECT_TYPES}
            value={projectType}
            onChange={setProjectType}
            placeholder="Select project type"
            className={inputClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass}>Location</label>
          <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g. Satellite, Ahmedabad" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass}>Rating *</label>
          <div className="flex gap-1.5">
            {[1, 2, 3, 4, 5].map((n) => (
              <button key={n} type="button" onClick={() => setRating(n)} aria-label={`${n} star`}>
                <Star size={22} className={n <= rating ? "text-gold-500 fill-gold-500" : "text-charcoal/20"} />
              </button>
            ))}
          </div>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass}>Your Review *</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={4}
            placeholder="Tell us about your experience..."
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="self-start px-8 py-4 bg-charcoal text-ivory text-xs font-medium tracking-[0.2em] uppercase hover:bg-charcoal/85 transition-colors duration-300 disabled:opacity-50"
      >
        {submitting ? "Submitting..." : "Submit Review"}
      </button>
    </form>
  );
}

export default function TestimonialsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const loadReviews = useCallback(() => {
    return fetch("/api/reviews")
      .then((r) => r.json())
      .then((d) => {
        setReviews((d.reviews || []).filter((r: Review) => r.rating > 3));
        setCurrent(0);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    loadReviews().finally(() => setLoading(false));
  }, [loadReviews]);

  const next = useCallback(() => setCurrent((c) => (c + 1) % reviews.length), [reviews.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + reviews.length) % reviews.length), [reviews.length]);

  useEffect(() => {
    if (reviews.length === 0) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, reviews.length]);

  return (
    <section id="reviews" className="py-20 lg:py-32 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 pb-16 border-b border-charcoal/10">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center lg:text-left"
            >
              <div className="font-display text-4xl lg:text-5xl text-charcoal font-light mb-1">{stat.value}</div>
              <div className="text-taupe text-xs tracking-wider uppercase font-body">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <p className="text-charcoal/60 max-w-lg font-body">
            Real words from real homeowners who trusted us with their most personal spaces.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="group flex-shrink-0 flex items-center gap-2 self-start sm:self-auto px-6 py-3.5 border border-charcoal text-charcoal text-xs font-medium tracking-[0.15em] uppercase hover:bg-charcoal hover:text-ivory transition-colors duration-300"
          >
            <Plus size={15} />
            Add Your Review
          </button>
        </div>

        {/* Carousel */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border border-gold-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : reviews.length > 0 ? (
          <div className="relative max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative"
              >
                <Quote size={36} className="text-gold-400/40 mb-6" />

                <div className="flex gap-1 mb-6">
                  {Array.from({ length: reviews[current].rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-gold-500 fill-gold-500" />
                  ))}
                </div>

                <p className="text-charcoal text-2xl sm:text-3xl leading-snug font-display font-light italic mb-10 text-balance">
                  &ldquo;{reviews[current].review_text}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-linen border border-charcoal/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold-600 font-display text-base font-medium">
                      {reviews[current].client_name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-charcoal font-medium text-sm font-body">{reviews[current].client_name}</div>
                    <div className="text-taupe text-xs mt-0.5 font-body">
                      {reviews[current].project_type}
                      {reviews[current].location ? ` · ${reviews[current].location}` : ""}
                    </div>
                  </div>
                  {reviews[current].source === "google" && (
                    <div className="ml-auto flex-shrink-0 flex items-center gap-1.5 text-taupe text-xs font-body">
                      <BadgeCheck size={14} className="text-gold-500" />
                      Google Review
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center gap-6 mt-12">
              <button
                onClick={prev}
                className="w-10 h-10 border border-charcoal/15 flex items-center justify-center text-charcoal/50 hover:text-gold-600 hover:border-gold-500/50 transition-all duration-300"
                aria-label="Previous review"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 border border-charcoal/15 flex items-center justify-center text-charcoal/50 hover:text-gold-600 hover:border-gold-500/50 transition-all duration-300"
                aria-label="Next review"
              >
                <ChevronRight size={16} />
              </button>

              <div className="flex gap-2 ml-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 transition-all duration-300 ${
                      i === current ? "w-8 bg-gold-500" : "w-1.5 bg-charcoal/15 rounded-full"
                    }`}
                    aria-label={`Review ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {/* Add Review Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-warm-black/70 lightbox-overlay flex items-center justify-center p-4"
            onClick={() => setShowForm(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 12 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-lg w-full max-h-[85vh] overflow-y-auto bg-ivory p-8 sm:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-6 right-6 w-9 h-9 border border-charcoal/15 flex items-center justify-center text-charcoal/50 hover:text-gold-600 hover:border-gold-500/50 transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>
              <h3 className="font-display text-2xl sm:text-3xl font-light text-charcoal mb-2">Share your experience</h3>
              <p className="text-charcoal/50 text-sm mb-8 font-body">Your review helps other homeowners trust us with their space.</p>
              <AddReviewForm
                onDone={() => {
                  setShowForm(false);
                  loadReviews();
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
