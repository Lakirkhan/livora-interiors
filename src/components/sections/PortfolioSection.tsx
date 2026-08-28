"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CATEGORIES, getCoverImage } from "@/lib/portfolio-data";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CATEGORIES.map((cat, i) => (
            <motion.a
              key={cat.slug}
              href={`/projects/${cat.slug}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative overflow-hidden group cursor-pointer aspect-[4/3]"
            >
              <img
                src={getCoverImage(cat)}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-black/80 via-warm-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-gold-200 text-[10px] tracking-[0.25em] uppercase mb-1 font-body">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="text-ivory font-display text-2xl mb-2">{cat.name}</div>
                <div className="flex items-center gap-2 text-ivory/70 text-xs tracking-wide font-body opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  View All
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://instagram.com/_fs_interior"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-charcoal text-sm tracking-wide font-body border-b border-charcoal/30 pb-1 hover:border-charcoal transition-colors duration-300"
          >
            View More on Instagram
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
