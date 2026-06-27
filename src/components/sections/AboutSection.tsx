"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Eye, MessageSquare, Star, Banknote, Layers } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const VALUES = [
  { icon: Eye, title: "Personalized Attention", desc: "Every project is treated as a personal commitment, not just a contract." },
  { icon: MessageSquare, title: "Transparent Communication", desc: "Clear pricing, honest timelines, no hidden surprises." },
  { icon: Star, title: "Quality Workmanship", desc: "Premium materials and meticulous execution at every step." },
  { icon: Banknote, title: "Affordable Luxury", desc: "Stunning results without the boutique-agency price tag." },
  { icon: Layers, title: "End-to-End Management", desc: "From concept to handover — we handle everything." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#0d0d0d] relative">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left – Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative h-[520px] sm:h-[580px]">
              {/* Main image */}
              <div className="absolute inset-0 left-0 top-0 w-3/4 h-4/5">
                <Image
                  src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80"
                  alt="Our design studio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
              </div>

              {/* Accent image */}
              <div className="absolute right-0 bottom-0 w-3/5 h-3/5 border-4 border-[#0d0d0d]">
                <Image
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80"
                  alt="Premium interior execution"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 35vw"
                />
              </div>

              {/* Gold accent line */}
              <div className="absolute -left-4 top-12 w-2 h-32 bg-gold-500" />

              {/* Stats card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute left-4 bottom-4 bg-black/90 backdrop-blur-sm border border-gold-500/30 p-6"
              >
                <div className="flex gap-6">
                  <div className="text-center">
                    <div className="font-display text-3xl text-gold-400 font-semibold">50+</div>
                    <div className="text-white/50 text-[11px] tracking-wider mt-1">Happy Clients</div>
                  </div>
                  <div className="w-px bg-gold-500/30" />
                  <div className="text-center">
                    <div className="font-display text-3xl text-gold-400 font-semibold">100+</div>
                    <div className="text-white/50 text-[11px] tracking-wider mt-1">Rooms Designed</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right – Content */}
          <div className="flex flex-col gap-8">
            <SectionHeader
              eyebrow="About Us"
              title="One Team."
              titleAccent="One Vision."
              subtitle="We are two passionate interior design professionals who believe every space deserves a story. At FS Interior, your project isn't handled by a distant team — it's personally crafted by us, from the first sketch to the final handover."
              align="left"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-white/55 leading-relaxed"
            >
              With combined expertise in space planning, material science, and project execution, we bring your vision to life with uncompromising attention to detail — all while keeping the process transparent, affordable, and stress-free.
            </motion.p>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {VALUES.map((val, i) => (
                <motion.div
                  key={val.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex gap-3 p-4 border border-white/5 hover:border-gold-500/30 transition-colors duration-300 group"
                >
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 border border-gold-500/30 group-hover:bg-gold-500/10 transition-colors">
                    <val.icon size={15} className="text-gold-500" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold mb-1">{val.title}</div>
                    <div className="text-white/40 text-xs leading-relaxed">{val.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              href="#consultation"
              className="self-start px-8 py-4 bg-transparent border border-gold-500 text-gold-400 text-sm tracking-wider uppercase hover:bg-gold-500 hover:text-black transition-all duration-300 font-semibold"
            >
              Book Your Free Site Visit
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
