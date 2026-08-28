"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const VALUES = [
  { num: "01", title: "Personalized Attention", desc: "Every project is a personal commitment, not just a contract." },
  { num: "02", title: "Transparent Communication", desc: "Clear pricing, honest timelines, no hidden surprises." },
  { num: "03", title: "Quality Workmanship", desc: "Premium materials and meticulous execution at every step." },
  { num: "04", title: "Affordable Luxury", desc: "Stunning results without the boutique-agency price tag." },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left – Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative h-[420px] sm:h-[540px]">
              <div className="absolute inset-0 left-0 top-0 w-3/4 h-4/5">
                <Image
                  src={encodeURI("/images/Office/1783865299363.jpg")}
                  alt="FS Interior design studio at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="absolute right-0 bottom-0 w-3/5 h-3/5 border-[6px] border-ivory">
                <Image
                  src={encodeURI("/images/BedRoom/1783865299412.jpg")}
                  alt="A completed FS Interior bedroom project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 35vw"
                />
              </div>

              <div className="absolute -left-3 top-10 w-1.5 h-24 bg-gold-400" />

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute left-4 bottom-4 bg-ivory border border-charcoal/10 px-6 py-5"
              >
                <div className="flex gap-6">
                  <div>
                    <div className="font-display text-3xl text-charcoal font-light">10+</div>
                    <div className="text-taupe text-[11px] tracking-wider mt-1 uppercase">Happy Clients</div>
                  </div>
                  <div className="w-px bg-charcoal/10" />
                  <div>
                    <div className="font-display text-3xl text-charcoal font-light">50+</div>
                    <div className="text-taupe text-[11px] tracking-wider mt-1 uppercase">Rooms Designed</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right – Statement */}
          <div className="flex flex-col gap-8 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-gold-400" />
                <span className="text-gold-600 text-xs tracking-[0.35em] uppercase font-body">About the Studio</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-light leading-[1.12] text-charcoal text-balance">
                We create spaces that feel effortless, personal and timeless.
              </h2>
              <p className="text-charcoal/60 leading-relaxed font-body">
                We are two passionate interior design professionals who believe every space deserves a story. At FS Interior, your project isn&rsquo;t handed to a distant team — it&rsquo;s personally crafted by us, from the first sketch to the final handover, with an uncompromising eye for material, proportion and detail.
              </p>
            </motion.div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-2">
              {VALUES.map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="pt-4 border-t border-charcoal/10"
                >
                  <div className="text-gold-500 text-xs tracking-wider font-body mb-2">{val.num}</div>
                  <div className="text-charcoal text-sm font-medium mb-1.5">{val.title}</div>
                  <div className="text-charcoal/50 text-xs leading-relaxed">{val.desc}</div>
                </motion.div>
              ))}
            </div>

            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              href="/contact"
              className="group self-start mt-2 flex items-center gap-2 text-charcoal text-sm tracking-wide font-body border-b border-charcoal/30 pb-1 hover:border-charcoal transition-colors duration-300"
            >
              Discover our story
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
