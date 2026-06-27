"use client";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const INCLUSIONS = [
  "Safety Door Paneling",
  "TV Unit",
  "Modular Kitchen",
  "Wardrobe",
  "Dining Area",
  "False Ceiling",
  "Paint Work",
  "Electrical Work",
  "Custom Furniture",
  "Dressing Unit",
];

const PACKAGES = [
  {
    type: "2 BHK",
    price: "₹8.00 Lakh",
    area: "800 – 1100 sq ft",
    popular: false,
    color: "from-white/5 to-white/2",
    borderColor: "border-white/10",
    badge: null,
  },
  {
    type: "3 BHK",
    price: "₹11.50 Lakh",
    area: "1100 – 1600 sq ft",
    popular: true,
    color: "from-gold-500/10 to-gold-500/3",
    borderColor: "border-gold-500/40",
    badge: "Most Popular",
  },
  {
    type: "4 BHK",
    price: "₹15.50 Lakh",
    area: "1600 – 2400 sq ft",
    popular: false,
    color: "from-white/5 to-white/2",
    borderColor: "border-white/10",
    badge: "Premium",
  },
];

export default function PackagesSection() {
  return (
    <section id="packages" className="py-24 lg:py-32 bg-[#0a0a0a] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,160,23,0.03)_0%,_transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-6">
          <SectionHeader
            eyebrow="Interior Packages"
            title="Transparent"
            titleAccent="Pricing"
            subtitle="All-inclusive packages with no hidden costs. Premium materials, expert execution, guaranteed satisfaction."
          />
        </div>

        {/* Starting from note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/30 text-xs tracking-wider mb-12"
        >
          * All prices are starting figures. Final quote based on site visit & material selection.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.type}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className={`relative flex flex-col border ${pkg.borderColor} bg-gradient-to-b ${pkg.color} p-8 ${
                pkg.popular ? "shadow-[0_0_60px_rgba(212,160,23,0.12)] scale-[1.02]" : ""
              } hover:border-gold-500/50 transition-all duration-500 group`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-5 py-1.5 bg-gold-500 text-black text-xs font-bold tracking-wider uppercase">
                  <Star size={11} fill="currentColor" />
                  {pkg.badge}
                </div>
              )}

              {/* Header */}
              <div className="mb-8">
                <div className="text-gold-500 text-xs tracking-[0.35em] uppercase mb-2 font-body">Package</div>
                <div className="font-display text-4xl font-light text-white">{pkg.type}</div>
                <div className="text-white/30 text-xs mt-1">{pkg.area}</div>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-white/10">
                <div className="text-white/50 text-xs mb-1">Starting From</div>
                <div className="font-display text-5xl font-light gold-text">{pkg.price}</div>
                <div className="text-white/30 text-xs mt-2">All inclusive · No hidden charges</div>
              </div>

              {/* Inclusions */}
              <div className="flex-1 mb-8">
                <div className="text-white/50 text-xs tracking-wider uppercase mb-4">What's Included</div>
                <ul className="space-y-3">
                  {INCLUSIONS.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check size={14} className="text-gold-500 flex-shrink-0" />
                      <span className="text-white/70 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href="#consultation"
                className={`block text-center py-4 text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                  pkg.popular
                    ? "bg-gold-500 text-black hover:bg-gold-400 hover:shadow-[0_0_20px_rgba(212,160,23,0.4)]"
                    : "border border-gold-500/50 text-gold-400 hover:bg-gold-500 hover:text-black"
                }`}
              >
                Get {pkg.type} Quote
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-8 text-center"
        >
          {["Free Site Visit", "Flexible Payment Plans", "100% Transparent Pricing", "Dedicated Project Manager"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-white/40 text-sm">
              <Check size={14} className="text-gold-500" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
