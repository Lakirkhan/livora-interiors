"use client";
import { motion } from "framer-motion";
import { User } from "lucide-react";

// ponytail: placeholder photo + copy — swap PHOTO_SRC and the story paragraph
// for Faizan's real headshot and biography before this goes live.
const PHOTO_SRC = "";

export default function OwnerStorySection() {
  return (
    <section className="py-20 lg:py-32 bg-linen relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left – Story */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-gold-400" />
              <span className="text-gold-600 text-xs tracking-[0.35em] uppercase font-body">Owner&rsquo;s Story</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-light leading-[1.12] text-charcoal">
              Faizan <span className="italic text-gold-500">Saiyed</span>
            </h2>
            <div className="text-taupe text-xs tracking-[0.2em] uppercase font-body">Founder &amp; Principal Designer</div>
            <p className="text-charcoal/60 leading-relaxed font-body">
              [Placeholder — replace with Faizan&rsquo;s real story: how he started FS Interior, what led him to
              design, and the philosophy behind how he approaches every home. Two to three short paragraphs
              works well here.]
            </p>
          </motion.div>

          {/* Right – Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            {PHOTO_SRC ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={PHOTO_SRC} alt="Faizan Saiyed, Founder of FS Interior" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-ivory border border-charcoal/15 flex flex-col items-center justify-center gap-3 text-center px-6">
                <User size={40} className="text-charcoal/25" strokeWidth={1.2} />
                <span className="text-charcoal/40 text-xs tracking-wider uppercase font-body">
                  Add Faizan&rsquo;s photo here
                </span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
