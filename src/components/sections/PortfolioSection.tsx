"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const CATEGORIES = ["All", "Living Room", "Bedroom", "Kitchen", "Office", "Dining Space", "Bathroom"];

// Each image lives in a folder named after its room — keep that mapping in sync with public/images/*
const PORTFOLIO_ITEMS = [
  // Living Room
  { title: "Modern Minimalist Living", category: "Living Room", folder: "Living Room", file: "1783865300485.jpg" },
  { title: "Open Concept Living Space", category: "Living Room", folder: "Living Room", file: "1783865300504.jpg" },
  { title: "Luxury Living Room Interior", category: "Living Room", folder: "Living Room", file: "1783865300559.jpg" },
  { title: "Contemporary Living Room", category: "Living Room", folder: "Living Room", file: "WhatsApp Image 2026-07-14 at 9.50.53 PM.jpeg" },
  { title: "Chic Living Space", category: "Living Room", folder: "Living Room", file: "WhatsApp Image 2026-07-14 at 9.50.54 PM.jpeg" },
  { title: "Cozy Living Room Corner", category: "Living Room", folder: "Living Room", file: "WhatsApp Image .jpeg" },

  // Bedroom
  { title: "Serene Master Bedroom", category: "Bedroom", folder: "BedRoom", file: "1783865299386.jpg" },
  { title: "Premium Bedroom Execution", category: "Bedroom", folder: "BedRoom", file: "1783865299412.jpg" },
  { title: "Luxe Master Bedroom", category: "Bedroom", folder: "BedRoom", file: "1783865300102.png" },
  { title: "Elegant Bedroom Interior", category: "Bedroom", folder: "BedRoom", file: "1783865300523.jpg" },
  { title: "Modern Bedroom Design", category: "Bedroom", folder: "BedRoom", file: "1783865300540.jpg" },
  { title: "Minimalist Bedroom Retreat", category: "Bedroom", folder: "BedRoom", file: "WhatsApp Image 2026-07-14 .jpeg" },
  { title: "Contemporary Bedroom Suite", category: "Bedroom", folder: "BedRoom", file: "WhatsApp Image 2026-07-14 at .jpeg" },

  // Kitchen
  { title: "Institutional Kitchen Design", category: "Kitchen", folder: "Kitchen", file: "1783865299286.png" },
  { title: "Contemporary Modular Kitchen", category: "Kitchen", folder: "Kitchen", file: "1783865299338.png" },
  { title: "Compact Smart Kitchen", category: "Kitchen", folder: "Kitchen", file: "1783865300464.jpg" },
  { title: "Modern Kitchen Design", category: "Kitchen", folder: "Kitchen", file: "WhatsApp Image 2026-07-14 at 9.50..jpeg" },
  { title: "Sleek Kitchen Interior", category: "Kitchen", folder: "Kitchen", file: "WhatsApp Image 2026-07-14 at 9.50.54 .jpeg" },

  // Office
  { title: "Executive Office Suite", category: "Office", folder: "Office", file: "1783865299363.jpg" },
  { title: "Modern Office Interior", category: "Office", folder: "Office", file: "1783865299630.jpg" },
  { title: "Professional Workspace Design", category: "Office", folder: "Office", file: "1783865299651.jpg" },
  { title: "Corporate Office Setup", category: "Office", folder: "Office", file: "1783865299671.jpg" },

  // Dining Space
  { title: "Open Concept Dining Area", category: "Dining Space", folder: "Dining Space", file: "1783865300389.jpg" },
  { title: "Elegant Dining Space", category: "Dining Space", folder: "Dining Space", file: "1783865300427.jpg" },

  // Bathroom
  { title: "Modern Bathroom Design", category: "Bathroom", folder: "Baathroom", file: "1783865300270.png" },
  { title: "Luxury Bathroom Interior", category: "Bathroom", folder: "Baathroom", file: "1783865300371.png" },
  { title: "Contemporary Bathroom Renovation", category: "Bathroom", folder: "Baathroom", file: "1783865300446.jpg" },
].map((item, i) => ({
  id: i + 1,
  ...item,
  image: encodeURI(`/images/${item.folder}/${item.file}`),
}));

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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative aspect-[4/3] overflow-hidden group cursor-pointer"
                onClick={() => setLightboxImg({ image: item.image, title: item.title })}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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
