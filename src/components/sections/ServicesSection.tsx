"use client";
import { motion } from "framer-motion";
import { Home, Sofa, Layout, Layers, Wrench } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const SERVICES = [
  {
    icon: Home,
    title: "Residential Interior Design",
    desc: "Beautiful, functional interiors designed around your lifestyle, comfort, and everyday ease.",
    image: "/images/Living Room/1783865300485.jpg",
  },
  {
    icon: Layout,
    title: "Institutional Interior Design",
    desc: "Thoughtfully planned spaces for offices, schools, and healthcare facilities that support productivity and comfort.",
    image: "/images/Office/1783865299630.jpg",
  },
  {
    icon: Sofa,
    title: "Commercial Interior Design",
    desc: "Modern, brand-focused interiors that create a lasting impression and improve customer experience.",
    image: "/images/Dining Space/1783865300427.jpg",
  },
  {
    icon: Wrench,
    title: "Construction",
    desc: "Reliable construction solutions from planning to execution, built with quality craftsmanship and care.",
    image: "/images/Main Gate/1783865299708.png",
  },
  {
    icon: Layers,
    title: "Renovation",
    desc: "Smart renovation services that refresh, upgrade, and modernize existing spaces with minimal disruption.",
    image: "/images/Baathroom/1783865300446.jpg",
  },
].map((s) => ({ ...s, image: encodeURI(s.image) }));

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
            subtitle="From a fresh new space to a thoughtful renovation, we deliver design and construction solutions that feel practical, elegant, and easy to live with."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
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
                <p className="text-white/70 text-sm sm:text-[0.95rem] leading-7">{service.desc}</p>

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
          <p className="text-white/70 mb-6 text-sm sm:text-base">
            Not sure which service is the right fit for your space?
          </p>
          <a
            href="#consultation"
            className="inline-flex items-center gap-3 px-8 py-4 border border-gold-500 text-gold-400 text-sm tracking-wider uppercase hover:bg-gold-500 hover:text-black transition-all duration-300 font-semibold"
          >
            Book a Free Consultation
            <div className="w-6 h-px bg-current" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
