"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";
import { Send, CheckCircle } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

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
  "w-full bg-[#1a1a1a] border border-white/10 text-white placeholder-white/25 px-4 py-3.5 text-sm focus:outline-none focus:border-gold-500/60 transition-colors duration-300 font-body";
const labelClass = "text-white/50 text-xs tracking-wider uppercase mb-2 block font-body";
const errorClass = "text-red-400 text-xs mt-1.5";

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
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
      const result = await res.json();

      if (result.success) {
        setSubmitted(true);
        reset();
        toast.success("Consultation request submitted! We'll reach out within 24 hours.");
      } else {
        toast.error(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again or WhatsApp us directly.");
    }
  };

  return (
    <section id="consultation" className="py-24 lg:py-32 bg-[#0a0a0a] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,160,23,0.04)_0%,_transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="mb-14">
          <SectionHeader
            eyebrow="Book Consultation"
            title="Start Your"
            titleAccent="Dream Project"
            subtitle="Fill in the details below and we'll reach out within 24 hours to schedule your free site visit."
          />
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center py-16 border border-gold-500/30 bg-gold-500/5 px-8"
          >
            <CheckCircle size={56} className="text-gold-500 mx-auto mb-6" />
            <h3 className="font-display text-3xl text-white mb-4">Request Received!</h3>
            <p className="text-white/50 leading-relaxed mb-8">
              Thank you for reaching out. Our design team will contact you within{" "}
              <span className="text-gold-400">24 hours</span> to schedule your free site visit.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-gold-500 text-sm underline underline-offset-4 hover:text-gold-300 transition-colors"
            >
              Submit another request
            </button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit(onSubmit)}
            className="border border-white/5 bg-[#111] p-8 sm:p-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className={labelClass}>Full Name *</label>
                <input
                  {...register("full_name")}
                  placeholder="Your full name"
                  className={inputClass}
                />
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
                <input
                  {...register("email")}
                  placeholder="your@email.com"
                  type="email"
                  className={inputClass}
                />
                {errors.email && <p className={errorClass}>{errors.email.message}</p>}
              </div>

              {/* Property Type */}
              <div>
                <label className={labelClass}>Property Type *</label>
                <select {...register("property_type")} className={inputClass}>
                  <option value="">Select property type</option>
                  <option>Apartment / Flat</option>
                  <option>Independent House / Villa</option>
                  <option>Penthouse</option>
                  <option>Row House</option>
                  <option>Office / Commercial</option>
                </select>
                {errors.property_type && <p className={errorClass}>{errors.property_type.message}</p>}
              </div>

              {/* BHK Type */}
              <div>
                <label className={labelClass}>BHK Type *</label>
                <select {...register("bhk_type")} className={inputClass}>
                  <option value="">Select BHK type</option>
                  <option>1 BHK</option>
                  <option>2 BHK</option>
                  <option>3 BHK</option>
                  <option>4 BHK</option>
                  <option>4+ BHK / Villa</option>
                  <option>Studio / 1 RK</option>
                </select>
                {errors.bhk_type && <p className={errorClass}>{errors.bhk_type.message}</p>}
              </div>

              {/* Budget */}
              <div>
                <label className={labelClass}>Estimated Budget *</label>
                <select {...register("budget")} className={inputClass}>
                  <option value="">Select budget range</option>
                  <option>₹5 – 8 Lakh</option>
                  <option>₹8 – 12 Lakh</option>
                  <option>₹12 – 16 Lakh</option>
                  <option>₹16 – 25 Lakh</option>
                  <option>₹25 Lakh+</option>
                  <option>Not Decided Yet</option>
                </select>
                {errors.budget && <p className={errorClass}>{errors.budget.message}</p>}
              </div>

              {/* Location */}
              <div className="sm:col-span-2">
                <label className={labelClass}>Project Location *</label>
                <input
                  {...register("location")}
                  placeholder="e.g. Satellite, Ahmedabad"
                  className={inputClass}
                />
                {errors.location && <p className={errorClass}>{errors.location.message}</p>}
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label className={labelClass}>Additional Message</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="Tell us more about your project, specific requirements, or any questions you have..."
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>

            {/* Privacy Note */}
            <p className="text-white/25 text-xs mt-6 mb-8">
              By submitting this form, you agree to be contacted by FS Interior regarding your project inquiry. We never share your information with third parties.
            </p>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-12 py-4 bg-gold-500 text-black font-bold text-sm tracking-wider uppercase hover:bg-gold-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_30px_rgba(212,160,23,0.4)]"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Book Free Consultation
                </>
              )}
            </motion.button>
          </motion.form>
        )}

        {/* Alternative contact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-6 text-center"
        >
          <span className="text-white/30 text-sm">Or reach us directly:</span>
          <a href="tel:+919876543210" className="text-gold-400 hover:text-gold-300 text-sm transition-colors">
            +91 7096557674
          </a>
          <span className="text-white/15">·</span>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#25D366] hover:text-[#20ba5a] text-sm transition-colors"
          >
            WhatsApp Us
          </a>
          <span className="text-white/15">·</span>
          <a href="mailto:hello@fsinterior.in" className="text-gold-400 hover:text-gold-300 text-sm transition-colors">
            hello@fsinterior.in
          </a>
        </motion.div>
      </div>
    </section>
  );
}
