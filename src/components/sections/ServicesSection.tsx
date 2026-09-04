"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const SERVICES = [
  {
    num: "01",
    title: "Residential Interior Design",
    desc: "Beautiful, functional interiors designed around your lifestyle, comfort, and everyday ease.",
    image: "/images/Living Room/1783865300485.jpg",
  },
  {
    num: "02",
    title: "Institutional Interior Design",
    desc: "Thoughtfully planned spaces for offices, schools, and healthcare facilities that support productivity.",
    image: "/images/Office/1783865299630.jpg",
  },
  {
    num: "03",
    title: "Commercial Interior Design",
    desc: "Modern, brand-focused interiors that create a lasting impression and improve customer experience.",
    image: "/images/Dining Space/1783865300427.jpg",
  },
  {
    num: "04",
    title: "Construction",
    desc: "Reliable construction solutions from planning to execution, built with quality craftsmanship.",
    image: "/images/Main Gate/1783865299708.png",
  },
  {
    num: "05",
    title: "Renovation",
    desc: "Smart renovation services that refresh, upgrade, and modernize existing spaces with minimal disruption.",
    image: "/images/Baathroom/1783865300446.jpg",
  },
].map((s) => ({ ...s, image: encodeURI(s.image) }));

export default function ServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="py-20 lg:py-32 bg-linen relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="mb-16 lg:mb-20">
          <SectionHeader
            eyebrow="What We Offer"
            title="Our"
            titleAccent="Services"
            subtitle="From a fresh new space to a thoughtful renovation, we deliver design and construction solutions that feel practical, elegant, and easy to live with."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* List */}
          <div>
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                onMouseEnter={() => setActive(i)}
                className="group border-t border-charcoal/10 last:border-b py-6 sm:py-7 cursor-default transition-colors duration-300 lg:hover:pl-3"
              >
                <div className="flex items-start gap-5 sm:gap-8">
                  <span
                    className={`font-display text-xl sm:text-2xl font-light transition-colors duration-300 ${
                      active === i ? "text-gold-500" : "text-charcoal/30"
                    }`}
                  >
                    {service.num}
                  </span>
                  <div className="flex-1 flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl font-light text-charcoal group-hover:text-gold-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-charcoal/50 text-sm leading-relaxed mt-2 max-w-md">
                        {service.desc}
                      </p>
                    </div>
                    <ArrowRight
                      size={18}
                      className={`hidden sm:block flex-shrink-0 transition-all duration-300 ${
                        active === i ? "text-gold-500 translate-x-0 opacity-100" : "text-charcoal/20 -translate-x-2 opacity-0"
                      } lg:group-hover:opacity-100 lg:group-hover:translate-x-0`}
                    />
                  </div>
                </div>

                {/* Inline image on mobile / tablet */}
                <div className="relative lg:hidden mt-5 ml-[2.6rem] sm:ml-[3.2rem] h-40 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sticky reveal image (desktop) */}
          <div className="hidden lg:block sticky top-28 h-[480px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={SERVICES[active].image}
                alt={SERVICES[active].title}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-charcoal/10"
        >
          <p className="text-charcoal/60 text-sm sm:text-base font-body">
            Not sure which service is the right fit for your space?
          </p>
          <a
            href="/contact"
            className="group flex items-center gap-2 text-charcoal text-sm tracking-wide font-body border-b border-charcoal/30 pb-1 hover:border-charcoal transition-colors duration-300 flex-shrink-0"
          >
            Book a Free Consultation
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
