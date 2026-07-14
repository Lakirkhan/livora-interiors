"use client";
import { motion } from "framer-motion";
import { Calendar, MessageCircle, Images, CheckCircle } from "lucide-react";
import Image from "next/image";

const TRUST_BADGES = [
  { icon: CheckCircle, label: "Free Site Visit" },
  { icon: CheckCircle, label: "Design + Execution" },
  { icon: CheckCircle, label: "Ahmedabad Based" },
  { icon: CheckCircle, label: "Personalized Service" },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={encodeURI("/images/Living Room/1783865300504.jpg")}
          alt="Premium interior design"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Multi-layer overlay for luxury feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30" />
      </div>

      {/* Decorative Gold Lines */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gold-500/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-12 h-px bg-gold-500" />
          <span className="text-gold-400 text-xs tracking-[0.4em] uppercase font-body">
            Premium Interior Studio · Ahmedabad
          </span>
          <div className="w-12 h-px bg-gold-500" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-[1.1] max-w-5xl"
        >
          Designing Spaces.{" "}
          <span className="gold-text italic">Creating</span>
          <br />
          Lifestyles.{" "}
          <span className="gold-text italic">Delivering</span>
          <br />
          Trust.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7 }}
          className="mt-8 text-white/70 text-lg sm:text-xl max-w-2xl leading-relaxed font-body"
        >
          Complete interior planning, design and execution handled
          <span className="text-gold-400"> personally </span>
          by our expert team.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#consultation"
            className="flex items-center gap-2 px-7 py-4 bg-gold-500 text-black font-semibold text-sm tracking-wider uppercase hover:bg-gold-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,160,23,0.5)] group"
          >
            <Calendar size={16} className="group-hover:scale-110 transition-transform" />
            Book Free Consultation
          </a>
          <a
            href="https://wa.me/917096557674?text=Hello! I'm interested in interior design."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-4 border border-[#25D366] text-[#25D366] font-semibold text-sm tracking-wider uppercase hover:bg-[#25D366] hover:text-black transition-all duration-300"
          >
            <MessageCircle size={16} />
            WhatsApp Us
          </a>
          <a
            href="#portfolio"
            className="flex items-center gap-2 px-7 py-4 border border-white/30 text-white/80 font-semibold text-sm tracking-wider uppercase hover:border-gold-500 hover:text-gold-400 transition-all duration-300"
          >
            <Images size={16} />
            View Portfolio
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-3 sm:gap-6"
        >
          {TRUST_BADGES.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.1, duration: 0.4 }}
              className="flex items-center gap-2 px-4 py-2 border border-gold-500/30 bg-black/30 backdrop-blur-sm"
            >
              <badge.icon size={14} className="text-gold-500" />
              <span className="text-white/80 text-xs tracking-wider font-body">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-gold-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
