"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";
import { Send, CheckCircle, ArrowDown } from "lucide-react";
import Image from "next/image";
import Combobox from "../ui/Combobox";

const PROPERTY_TYPES = ["Apartment / Flat", "Independent House / Villa", "Penthouse", "Row House", "Office / Commercial"];
const BHK_TYPES = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "4+ BHK / Villa", "Studio / 1 RK"];
const BUDGET_RANGES = ["₹5 – 8 Lakh", "₹8 – 12 Lakh", "₹12 – 16 Lakh", "₹16 – 25 Lakh", "₹25 Lakh+", "Not Decided Yet"];

const schema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters"),
  mobile: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z.string().email("Enter a valid email address"),
  property_type: z.string().min(1, "Please select property type"),
  bhk_type: z.string().min(1, "Please select BHK type"),
  budget: z.string().min(1, "Please select your budget range"),
  location: z.string().min(3, "Please enter your project location"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const inputClass =
  "w-full bg-transparent border-b border-charcoal/20 text-charcoal placeholder-charcoal/30 px-0 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors duration-300 font-body";
const labelClass = "text-charcoal/45 text-xs tracking-wider uppercase mb-2 block font-body";
const errorClass = "text-red-600 text-xs mt-1.5";

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorBody = await res.json().catch(() => null);
        const errorMessage = errorBody?.message || `Request failed with status ${res.status}`;
        throw new Error(errorMessage);
      }

      const result = await res.json();

      if (result.success) {
        setSubmitted(true);
        reset();
        if (result.message?.includes("failed") || result.message?.includes("not configured")) {
          toast.error(result.message);
        } else {
          toast.success("Consultation request submitted! We'll reach out within 24 hours.");
        }
      } else {
        toast.error(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Consultation submit error:", error);
      const message = error instanceof Error ? error.message : String(error);
      if (message.toLowerCase().includes("network")) {
        toast.error("Network error. Please try again or WhatsApp us directly.");
      } else {
        toast.error(message || "Something went wrong. Please try again.");
      }
    }
  };

  return (
    <section id="consultation" className="relative bg-ivory">
      {/* Dramatic CTA banner */}
      <div className="relative h-[60vh] min-h-[440px] flex items-center justify-center overflow-hidden">
        <Image
          src={encodeURI("/images/Living Room/1783865300559.jpg")}
          alt="A finished FS Interior living room"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-warm-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl text-center px-5"
        >
          <span className="text-gold-200 text-xs tracking-[0.4em] uppercase font-body block mb-6">Get Started</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-ivory leading-[1.1] text-balance">
            Let&rsquo;s create a space that feels like you.
          </h2>
          <a
            href="#consultation-form"
            className="group mt-9 inline-flex items-center gap-2 px-8 py-4 bg-ivory text-charcoal text-xs font-medium tracking-[0.2em] uppercase hover:bg-gold-200 transition-colors duration-300"
          >
            Start a Conversation
            <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>

      {/* Form */}
      <div id="consultation-form" className="max-w-4xl mx-auto px-5 sm:px-8 py-24 lg:py-32">
        <div className="mb-14 flex flex-col items-start gap-5">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-gold-400" />
            <span className="text-gold-600 text-xs tracking-[0.35em] uppercase font-body">Book Consultation</span>
          </div>
          <h3 className="font-display text-3xl sm:text-4xl font-light text-charcoal">
            Start your <span className="italic text-gold-500">dream project</span>
          </h3>
          <p className="text-charcoal/50 max-w-lg font-body">
            Fill in the details below and we&rsquo;ll reach out within 24 hours to schedule your free site visit.
          </p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg text-left py-14 border-t border-charcoal/15"
          >
            <CheckCircle size={44} className="text-gold-500 mb-6" />
            <h3 className="font-display text-3xl text-charcoal mb-4 font-light">Request Received!</h3>
            <p className="text-charcoal/50 leading-relaxed mb-8">
              Thank you for reaching out. Our design team will contact you within{" "}
              <span className="text-gold-600">24 hours</span> to schedule your free site visit.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-gold-600 text-sm underline underline-offset-4 hover:text-gold-700 transition-colors"
            >
              Submit another request
            </button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit(onSubmit)}
            className="border-t border-charcoal/15 pt-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
              {/* Full Name */}
              <div>
                <label className={labelClass}>Full Name *</label>
                <input {...register("full_name")} placeholder="Your full name" className={inputClass} />
                {errors.full_name && <p className={errorClass}>{errors.full_name.message}</p>}
              </div>

              {/* Mobile */}
              <div>
                <label className={labelClass}>Mobile Number *</label>
                <input
                  {...register("mobile")}
                  placeholder="10-digit mobile number"
                  type="tel"
                  maxLength={10}
                  className={inputClass}
                />
                {errors.mobile && <p className={errorClass}>{errors.mobile.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label className={labelClass}>Email Address *</label>
                <input {...register("email")} placeholder="your@email.com" type="email" className={inputClass} />
                {errors.email && <p className={errorClass}>{errors.email.message}</p>}
              </div>

              {/* Property Type */}
              <div>
                <label className={labelClass}>Property Type *</label>
                <Combobox
                  options={PROPERTY_TYPES}
                  value={watch("property_type") || ""}
                  onChange={(v) => setValue("property_type", v, { shouldValidate: true })}
                  placeholder="Select property type"
                  className={inputClass}
                />
                {errors.property_type && <p className={errorClass}>{errors.property_type.message}</p>}
              </div>

              {/* BHK Type */}
              <div>
                <label className={labelClass}>BHK Type *</label>
                <Combobox
                  options={BHK_TYPES}
                  value={watch("bhk_type") || ""}
                  onChange={(v) => setValue("bhk_type", v, { shouldValidate: true })}
                  placeholder="Select BHK type"
                  className={inputClass}
                />
                {errors.bhk_type && <p className={errorClass}>{errors.bhk_type.message}</p>}
              </div>

              {/* Budget */}
              <div>
                <label className={labelClass}>Estimated Budget *</label>
                <Combobox
                  options={BUDGET_RANGES}
                  value={watch("budget") || ""}
                  onChange={(v) => setValue("budget", v, { shouldValidate: true })}
                  placeholder="Select budget range"
                  className={inputClass}
                />
                {errors.budget && <p className={errorClass}>{errors.budget.message}</p>}
              </div>

              {/* Location */}
              <div className="sm:col-span-2">
                <label className={labelClass}>Project Location *</label>
                <input {...register("location")} placeholder="e.g. Satellite, Ahmedabad" className={inputClass} />
                {errors.location && <p className={errorClass}>{errors.location.message}</p>}
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label className={labelClass}>Additional Message</label>
                <textarea
                  {...register("message")}
                  rows={3}
                  placeholder="Tell us more about your project, specific requirements, or any questions you have..."
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>

            <p className="text-charcoal/35 text-xs mt-8 mb-8 font-body">
              By submitting this form, you agree to be contacted by FS Interior regarding your project inquiry. We never share your information with third parties.
            </p>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-12 py-4 bg-charcoal text-ivory font-medium text-xs tracking-[0.2em] uppercase hover:bg-charcoal/85 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-ivory border-t-transparent rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send size={15} />
                  Book Free Consultation
                </>
              )}
            </motion.button>
          </motion.form>
        )}

        {/* Alternative contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-charcoal/10 flex flex-wrap gap-x-6 gap-y-2"
        >
          <span className="text-charcoal/40 text-sm font-body">Or reach us directly:</span>
          <a href="tel:+917096557674" className="text-gold-600 hover:text-gold-700 text-sm transition-colors font-body">
            +91 7096557674
          </a>
          <span className="text-charcoal/20">·</span>
          <a
            href="https://wa.me/917096557674"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1f9c53] hover:text-[#178043] text-sm transition-colors font-body"
          >
            WhatsApp Us
          </a>
          <span className="text-charcoal/20">·</span>
          <a href="mailto:fbssaiyed@gmail.com" className="text-gold-600 hover:text-gold-700 text-sm transition-colors font-body">
            fbssaiyed@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
