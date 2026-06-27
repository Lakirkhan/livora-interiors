"use client";
import { motion } from "framer-motion";
import { MessageSquare, PenTool, Hammer, HandshakeIcon } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const STEPS = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Consultation",
    subtitle: "Understanding You",
    desc: "We begin by listening — your lifestyle, preferences, functional needs, and aspirations. This free session shapes everything that follows.",
  },
  {
    num: "02",
    icon: PenTool,
    title: "Design & Planning",
    subtitle: "Vision to Blueprint",
    desc: "Layout planning, 3D visualization, and material selection. You see your future home before a single nail is driven.",
  },
  {
    num: "03",
    icon: Hammer,
    title: "Execution",
    subtitle: "Crafting Your Space",
    desc: "Our experienced team brings the design to life with premium materials, skilled workmanship, and daily progress updates.",
  },
  {
    num: "04",
    icon: HandshakeIcon,
    title: "Handover",
    subtitle: "Your Dream, Delivered",
    desc: "On-time delivery with a thorough walkthrough, warranty documentation, and ongoing support for complete peace of mind.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-[#0d0d0d] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-500/3 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-16">
          <SectionHeader
            eyebrow="How It Works"
            title="Our"
            titleAccent="Process"
            subtitle="A seamless four-step journey from vision to your perfect space."
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: "easeOut" }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step number + Icon */}
                <div className="relative mb-8">
                  {/* Outer ring */}
                  <div className="w-20 h-20 rounded-full border border-gold-500/30 flex items-center justify-center group-hover:border-gold-500 transition-colors duration-500">
                    {/* Inner circle */}
                    <div className="w-14 h-14 rounded-full bg-[#1a1a1a] border border-white/5 flex items-center justify-center group-hover:bg-gold-500/10 transition-colors duration-500">
                      <step.icon size={22} className="text-gold-500" />
                    </div>
                  </div>
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold-500 flex items-center justify-center">
                    <span className="text-black text-xs font-bold">{i + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <div className="text-gold-500 text-[10px] tracking-[0.3em] uppercase font-body">{step.num}</div>
                  <h3 className="font-display text-2xl text-white font-light group-hover:text-gold-300 transition-colors">
                    {step.title}
                  </h3>
                  <div className="text-gold-500/70 text-xs tracking-wider font-body">{step.subtitle}</div>
                  <div className="gold-divider mx-auto my-3" />
                  <p className="text-white/45 text-sm leading-relaxed max-w-56">{step.desc}</p>
                </div>

                {/* Arrow connector (mobile) */}
                {i < STEPS.length - 1 && (
                  <div className="lg:hidden mt-8 w-px h-8 bg-gradient-to-b from-gold-500/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#consultation"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gold-500 text-black text-sm font-bold tracking-wider uppercase hover:bg-gold-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,160,23,0.4)]"
          >
            Start Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
}
