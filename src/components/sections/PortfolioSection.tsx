"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const CATEGORIES = ["All", "Living Room", "Bedroom", "Modular Kitchen", "Complete Home", "Office Interior"];

const PORTFOLIO_ITEMS = [
  { id: 1, title: "Modern Minimalist Living", category: "Living Room", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80", aspect: "tall" },
  { id: 2, title: "Luxe Master Bedroom", category: "Bedroom", image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80", aspect: "wide" },
  { id: 3, title: "Contemporary Kitchen", category: "Modular Kitchen", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80", aspect: "normal" },
  { id: 4, title: "3 BHK Complete Transformation", category: "Complete Home", image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80", aspect: "tall" },
  { id: 5, title: "Executive Office Suite", category: "Office Interior", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80", aspect: "normal" },
  { id: 6, title: "Cozy Kids Bedroom", category: "Bedroom", image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80", aspect: "wide" },
  { id: 7, title: "Open Concept Living & Dining", category: "Living Room", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=80", aspect: "normal" },
  { id: 8, title: "Compact Smart Kitchen", category: "Modular Kitchen", image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80", aspect: "tall" },
  { id: 9, title: "2 BHK Premium Package", category: "Complete Home", image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80", aspect: "normal" },
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImg, setLightboxImg] = useState<{ image: string; title: string } | null>(null);

  const filtered =
    activeCategory === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((i) => i.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-[#0a0a0a] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <SectionHeader
            eyebrow="Our Work"
            title="Portfolio"
            titleAccent="Gallery"
            subtitle="A curated showcase of spaces we've designed and executed with passion."
          />
        </div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gold-500 text-black font-bold"
                  : "border border-white/20 text-white/50 hover:border-gold-500/50 hover:text-gold-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-0">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="break-inside-avoid mb-4 relative overflow-hidden group cursor-pointer"
                onClick={() => setLightboxImg({ image: item.image, title: item.title })}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${
                    item.aspect === "tall" ? "h-80" : item.aspect === "wide" ? "h-48" : "h-64"
                  }`}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-gold-400 text-[10px] tracking-wider uppercase mb-1">{item.category}</div>
                    <div className="text-white font-display text-lg">{item.title}</div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <ZoomIn size={20} className="text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://instagram.com/_fs_interior"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white/60 text-sm tracking-wider uppercase hover:border-gold-500 hover:text-gold-400 transition-all duration-300"
          >
            View More on Instagram
            <div className="w-6 h-px bg-current" />
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxImg(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
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
                <p className="text-white/70 font-display text-lg">{lightboxImg.title}</p>
                <button
                  onClick={() => setLightboxImg(null)}
                  className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-gold-400 hover:border-gold-500/50 transition-colors"
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
