"use client";
import { motion } from "framer-motion";
import { User, Wallet, Gem, Scale, Clock, Headphones, MapPin, Layers } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const FEATURES = [
  { icon: User, title: "Personalized Design", desc: "Every detail tailored to your unique lifestyle, not a templated solution." },
  { icon: Wallet, title: "Affordable Packages", desc: "Luxury results at transparent, fair prices with no hidden surprises." },
  { icon: Gem, title: "Premium Materials", desc: "We source only high-quality, durable materials with proven longevity." },
  { icon: Scale, title: "Transparent Pricing", desc: "Detailed quotes upfront. You approve every rupee before work begins." },
  { icon: Clock, title: "Timely Delivery", desc: "We respect your time. Projects completed on schedule, always." },
  { icon: Headphones, title: "Dedicated Support", desc: "A direct line to your design team throughout the entire project." },
  { icon: MapPin, title: "Free Site Visit", desc: "Book a free consultation and site assessment — no obligation." },
  { icon: Layers, title: "Turnkey Solutions", desc: "One team, one project, zero coordination headaches for you." },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-[#111] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      {/* Large decorative text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-display text-[25vw] font-bold text-white/[0.02] select-none leading-none">
          FS
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="mb-16">
          <SectionHeader
            eyebrow="Why FS Interior"
            title="Why Choose"
            titleAccent="Us"
            subtitle="What sets us apart is simple — we treat your home as if it were our own."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              className="relative bg-[#111] p-8 group hover:bg-[#161616] transition-colors duration-300 cursor-default"
            >
              {/* Icon */}
              <div className="w-12 h-12 border border-gold-500/20 flex items-center justify-center mb-6 group-hover:border-gold-500/60 group-hover:bg-gold-500/5 transition-all duration-500">
                <feature.icon size={20} className="text-gold-500" />
              </div>

              <h3 className="text-white font-display text-xl mb-3 group-hover:text-gold-300 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">{feature.desc}</p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-gold-500 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 border border-gold-500/20 bg-gradient-to-r from-gold-500/5 to-transparent"
        >
          <div>
            <p className="text-white font-display text-2xl mb-1">
              Ready to transform your space?
            </p>
            <p className="text-white/40 text-sm">
              Book a free site visit today — no obligation, no pressure.
            </p>
          </div>
          <a
            href="#consultation"
            className="flex-shrink-0 px-8 py-4 bg-gold-500 text-black text-sm font-bold tracking-wider uppercase hover:bg-gold-400 transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,160,23,0.4)]"
          >
            Get Free Site Visit
          </a>
        </motion.div>
      </div>
    </section>
  );
}
