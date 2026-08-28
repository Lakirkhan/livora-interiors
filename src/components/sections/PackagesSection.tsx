"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const PACKAGES = [
  {
    type: "2 BHK",
    basicPrice: "₹6.50 Lakh",
    platinumPrice: "₹8.00 Lakh",
    popular: false,
    badge: null,
  },
  {
    type: "3 BHK",
    basicPrice: "₹9.50 Lakh",
    platinumPrice: "₹12.50 Lakh",
    popular: true,
    badge: "Most Popular",
  },
  {
    type: "4 BHK",
    basicPrice: "₹11.50 Lakh",
    platinumPrice: "₹13.50 Lakh",
    popular: false,
    badge: "Premium",
  },
];

export default function PackagesSection() {
  return (
    <section id="packages" className="py-20 lg:py-32 bg-linen relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-charcoal/40 text-xs tracking-wide mb-14"
        >
          * All prices are starting figures. Final quote based on site visit &amp; material selection.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-charcoal/10 border border-charcoal/10">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className={`relative flex flex-col p-8 sm:p-10 transition-colors duration-500 ${
                pkg.popular ? "bg-charcoal text-ivory" : "bg-linen text-charcoal hover:bg-ivory"
              }`}
            >
              <div
                className={`inline-block self-start mb-6 px-3 py-1 text-[10px] font-medium tracking-[0.2em] uppercase border ${
                  pkg.badge ? "" : "invisible"
                } ${pkg.popular ? "border-gold-300 text-gold-300" : "border-gold-500/50 text-gold-600"}`}
              >
                {pkg.badge || "spacer"}
              </div>

              <div className="mb-8">
                <div className={`text-xs tracking-[0.35em] uppercase mb-2 font-body ${pkg.popular ? "text-ivory/40" : "text-charcoal/40"}`}>
                  Package
                </div>
                <div className="font-display text-4xl font-light">{pkg.type}</div>
              </div>

              <div className={`mb-8 pb-8 border-b space-y-5 ${pkg.popular ? "border-ivory/15" : "border-charcoal/10"}`}>
                <div>
                  <div className={`text-xs mb-1 ${pkg.popular ? "text-ivory/40" : "text-charcoal/40"}`}>Basic — Starting From</div>
                  <div className={`font-display text-3xl sm:text-4xl font-light ${pkg.popular ? "text-gold-300" : "text-gold-600"}`}>
                    {pkg.basicPrice}
                  </div>
                </div>
                <div>
                  <div className={`text-xs mb-1 ${pkg.popular ? "text-ivory/40" : "text-charcoal/40"}`}>Platinum — Starting From</div>
                  <div className={`font-display text-3xl sm:text-4xl font-light ${pkg.popular ? "text-gold-300" : "text-gold-600"}`}>
                    {pkg.platinumPrice}
                  </div>
                </div>
              </div>

              <a
                href="/contact"
                className={`block text-center py-4 text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                  pkg.popular
                    ? "bg-ivory text-charcoal hover:bg-gold-200"
                    : "border border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory"
                }`}
              >
                Get {pkg.type} Quote
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-3 text-center"
        >
          {["Free Site Visit", "Flexible Payment Plans", "100% Transparent Pricing", "Dedicated Project Manager"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-charcoal/50 text-sm font-body">
              <Check size={14} className="text-gold-500" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
