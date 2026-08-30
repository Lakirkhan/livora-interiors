"use client";
import { motion } from "framer-motion";
import { User, Wallet, Gem, Scale, Clock, Headphones, MapPin, Layers, ArrowRight } from "lucide-react";
import Image from "next/image";

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
    <section id="why-us" className="py-20 lg:py-32 bg-warm-black relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Philosophy statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-gold-400" />
              <span className="text-gold-300 text-xs tracking-[0.35em] uppercase font-body">Design Philosophy</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] text-ivory text-balance">
              Good design is not about adding more. It is about choosing{" "}
              <span className="italic text-gold-300">what matters.</span>
            </h2>
            <p className="text-ivory/50 leading-relaxed font-body max-w-lg">
              What sets us apart is simple — we treat your home as if it were our own. Every material, every finish, every corner is considered, so nothing is included without a reason.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-5 relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src={encodeURI("/images/Dining Space/1783865300427.jpg")}
              alt="A considered, uncluttered interior detail"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </motion.div>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-ivory/10">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="border-r border-b border-ivory/10 p-7 sm:p-8 group"
            >
              <feature.icon size={18} className="text-gold-400 mb-5" />
              <h3 className="text-ivory font-display text-lg mb-2">{feature.title}</h3>
              <p className="text-ivory/40 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 py-10 border-t border-ivory/10"
        >
          <div>
            <p className="text-ivory font-display text-2xl font-light mb-1">Ready to transform your space?</p>
            <p className="text-ivory/40 text-sm font-body">Book a free site visit today — no obligation, no pressure.</p>
          </div>
          <a
            href="/contact"
            className="group flex-shrink-0 flex items-center gap-2 px-8 py-4 bg-ivory text-charcoal text-xs font-medium tracking-[0.2em] uppercase hover:bg-gold-200 transition-colors duration-300"
          >
            Get Free Site Visit
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
