"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft } from "lucide-react";
import type { PortfolioItem } from "@/lib/portfolio-data";

export default function CategoryGallery({ items }: { items: PortfolioItem[] }) {
  const [lightboxImg, setLightboxImg] = useState<{ image: string; title: string } | null>(null);

  return (
    <section className="py-20 lg:py-32 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          href="/projects"
          className="group inline-flex items-center gap-2 text-charcoal/60 text-sm tracking-wide font-body mb-12 hover:text-charcoal transition-colors duration-300"
        >
          <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform duration-300" />
          All Categories
        </motion.a>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              className="relative overflow-hidden group cursor-pointer aspect-[4/3]"
              onClick={() => setLightboxImg({ image: item.image, title: item.title })}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-black/75 via-warm-black/0 to-warm-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <div className="text-ivory font-display text-xl">{item.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-warm-black/95 lightbox-overlay flex items-center justify-center p-4"
            onClick={() => setLightboxImg(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImg.image}
                alt={lightboxImg.title}
                className="w-full h-full object-contain max-h-[80vh]"
              />
              <div className="mt-4 flex items-center justify-between">
                <p className="text-ivory/80 font-display text-lg">{lightboxImg.title}</p>
                <button
                  onClick={() => setLightboxImg(null)}
                  className="w-10 h-10 border border-ivory/20 flex items-center justify-center text-ivory/70 hover:text-gold-300 hover:border-gold-400/50 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
