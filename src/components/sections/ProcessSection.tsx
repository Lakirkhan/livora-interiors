"use client";
import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "Discover",
    subtitle: "Understanding You",
    desc: "We begin by listening — your lifestyle, preferences, functional needs, and aspirations. This free session shapes everything that follows.",
  },
  {
    num: "02",
    title: "Define",
    subtitle: "Vision to Blueprint",
    desc: "Layout planning, 3D visualization, and material selection. You see your future home before a single nail is driven.",
  },
  {
    num: "03",
    title: "Design",
    subtitle: "Crafting Your Space",
    desc: "Our experienced team brings the design to life with premium materials, skilled workmanship, and daily progress updates.",
  },
  {
    num: "04",
    title: "Deliver",
    subtitle: "Your Dream, Delivered",
    desc: "On-time delivery with a thorough walkthrough, warranty documentation, and ongoing support for complete peace of mind.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 lg:py-32 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
              className="flex flex-col gap-3 py-8 lg:py-0 lg:px-8 first:lg:pl-0 last:lg:pr-0 border-t lg:border-t-0 lg:border-l border-charcoal/10 first:border-l-0"
            >
              <span className="font-display text-5xl font-light text-gold-400/70">{step.num}</span>
              <h3 className="font-display text-2xl text-charcoal font-light mt-2">{step.title}</h3>
              <div className="text-gold-600 text-xs tracking-[0.2em] uppercase font-body">{step.subtitle}</div>
              <p className="text-charcoal/50 text-sm leading-relaxed mt-1">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-10 border-t border-charcoal/10 text-center"
        >
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-charcoal text-ivory text-xs font-medium tracking-[0.2em] uppercase hover:bg-charcoal/85 transition-colors duration-300"
          >
            Start Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
}
