"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import type { Review } from "@/types";

const STATS = [
  { value: "50+", label: "Happy Clients" },
  { value: "100+", label: "Rooms Designed" },
  { value: "5★", label: "Customer Satisfaction" },
  { value: "100%", label: "Transparent Pricing" },
];

export default function TestimonialsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((d) => { setReviews(d.reviews || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const next = useCallback(() => setCurrent((c) => (c + 1) % reviews.length), [reviews.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + reviews.length) % reviews.length), [reviews.length]);

  useEffect(() => {
    if (reviews.length === 0) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, reviews.length]);

  return (
    <section id="reviews" className="py-24 lg:py-32 bg-[#090909] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      {/* Background gold gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(212,160,23,0.04)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 border border-gold-500/15 bg-white/[0.02]"
            >
              <div className="font-display text-4xl lg:text-5xl gold-text font-light mb-2">{stat.value}</div>
              <div className="text-white/40 text-xs tracking-wider uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mb-16">
          <SectionHeader
            eyebrow="Client Reviews"
            title="What Our"
            titleAccent="Clients Say"
            subtitle="Real words from real homeowners who trusted us with their most personal spaces."
          />
        </div>

        {/* Carousel */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border border-gold-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : reviews.length > 0 ? (
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-[#111] border border-white/5 p-8 sm:p-12 relative"
              >
                {/* Quote icon */}
                <Quote size={40} className="text-gold-500/20 absolute top-8 right-8" />

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: reviews[current].rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-gold-500 fill-gold-500" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-white/80 text-lg leading-relaxed font-display font-light italic mb-8">
                  "{reviews[current].review_text}"
                </p>

                {/* Client info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold-500 font-display text-lg font-semibold">
                      {reviews[current].client_name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{reviews[current].client_name}</div>
                    <div className="text-gold-500/70 text-xs mt-0.5">{reviews[current].project_type}</div>
                    {reviews[current].location && (
                      <div className="text-white/30 text-xs mt-0.5">{reviews[current].location}</div>
                    )}
                  </div>
                  <div className="ml-auto flex-shrink-0">
                    <div className="text-[10px] tracking-wider text-white/20 uppercase">Verified Review</div>
                    <div className="text-gold-500 text-xs mt-0.5">★ Google Review</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prev}
                className="w-11 h-11 border border-white/10 flex items-center justify-center text-white/40 hover:text-gold-400 hover:border-gold-500/50 transition-all duration-300"
                aria-label="Previous review"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`transition-all duration-300 ${
                      i === current ? "w-8 h-1.5 bg-gold-500" : "w-1.5 h-1.5 bg-white/20 rounded-full"
                    }`}
                    aria-label={`Review ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-11 h-11 border border-white/10 flex items-center justify-center text-white/40 hover:text-gold-400 hover:border-gold-500/50 transition-all duration-300"
                aria-label="Next review"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
