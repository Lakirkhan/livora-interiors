"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative h-[100svh] min-h-[640px] flex items-end overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={encodeURI("/images/Living Room/1783865300504.jpg")}
          alt="A warm, light-filled living room designed by FS Interior"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-black/90 via-warm-black/25 to-warm-black/10" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 pb-16 sm:pb-20 pt-32">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex items-center gap-3 mb-7"
          >
            <div className="w-9 h-px bg-gold-300" />
            <span className="text-gold-200 text-xs tracking-[0.4em] uppercase font-body">
              Interior Design &amp; Architecture · Ahmedabad
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-ivory leading-[1.08] text-balance"
          >
            Spaces designed to <span className="italic text-gold-300">feel like home.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-6 text-ivory/70 text-base sm:text-lg max-w-lg leading-relaxed font-body"
          >
            Thoughtful interiors, timeless materials and spaces designed around the way you live — planned and executed personally, start to finish.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4"
          >
            <a
              href="/contact"
              className="px-8 py-4 bg-ivory text-charcoal text-xs font-medium tracking-[0.2em] uppercase hover:bg-gold-200 transition-colors duration-300"
            >
              Book Free Consultation
            </a>
            <a
              href="/projects"
              className="group flex items-center gap-2 text-ivory text-sm tracking-wide font-body border-b border-ivory/40 pb-1 hover:border-ivory transition-colors duration-300"
            >
              Explore Projects
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="hidden sm:flex absolute bottom-10 right-8 flex-col items-center gap-2 z-10"
      >
        <span className="text-ivory/40 text-[10px] tracking-[0.3em] uppercase [writing-mode:vertical-rl]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-ivory/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
