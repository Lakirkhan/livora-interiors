"use client";
import { motion } from "framer-motion";
import { Home, ChefHat, Sofa, BedDouble, Layout, Layers, Box, Wrench } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const SERVICES = [
  {
    icon: Home,
    title: "Residential Interior Design",
    desc: "Complete home transformation tailored to your lifestyle and personality.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
  },
  {
    icon: ChefHat,
    title: "Modular Kitchen Design",
    desc: "Functional, sleek kitchens with smart storage and premium finishes.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
  },
  {
    icon: Sofa,
    title: "Living Room Design",
    desc: "Spaces that balance elegance and everyday comfort for the whole family.",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80",
  },
  {
    icon: BedDouble,
    title: "Bedroom Design",
    desc: "Serene personal sanctuaries designed for rest, comfort and style.",
    image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&q=80",
  },
  {
    icon: Layout,
    title: "Wardrobe Design",
    desc: "Custom wardrobe solutions that maximise storage while looking stunning.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    icon: Layers,
    title: "False Ceiling Design",
    desc: "Architectural ceiling designs that add drama and depth to every room.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
  },
  {
    icon: Box,
    title: "3D Visualization",
    desc: "Photo-realistic 3D renders so you see your space before execution begins.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
  },
  {
    icon: Wrench,
    title: "Complete Turnkey Solutions",
    desc: "End-to-end project management from planning through to final handover.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#111] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-16">
          <SectionHeader
            eyebrow="What We Offer"
            title="Our"
            titleAccent="Services"
            subtitle="From initial concept to full execution — every service delivered with precision and passion."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              className="group relative overflow-hidden border border-white/5 hover:border-gold-500/40 transition-all duration-500 cursor-pointer"
            >
              {/* Background image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 bg-[#141414] group-hover:bg-[#181818] transition-colors duration-300">
                <div className="w-10 h-10 border border-gold-500/40 flex items-center justify-center mb-4 group-hover:bg-gold-500/10 transition-colors">
                  <service.icon size={18} className="text-gold-500" />
                </div>
                <h3 className="text-white font-display text-lg font-medium mb-2 group-hover:text-gold-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">{service.desc}</p>

                {/* Hover arrow */}
                <div className="mt-4 flex items-center gap-2 text-gold-500 text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn More</span>
                  <div className="w-6 h-px bg-gold-500" />
                </div>
              </div>

              {/* Gold corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-14 text-center"
        >
          <p className="text-white/50 mb-6 text-sm">
            Not sure which service suits your needs?
          </p>
          <a
            href="#consultation"
            className="inline-flex items-center gap-3 px-8 py-4 border border-gold-500 text-gold-400 text-sm tracking-wider uppercase hover:bg-gold-500 hover:text-black transition-all duration-300 font-semibold"
          >
            Get a Free Consultation
            <div className="w-6 h-px bg-current" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
