"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  image: string;
}

export default function PageHeader({ eyebrow, title, titleAccent, subtitle, image }: PageHeaderProps) {
  return (
    <section className="relative h-[48vh] min-h-[360px] flex items-end overflow-hidden">
      <Image src={encodeURI(image)} alt={title} fill priority className="object-cover object-center" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-warm-black/85 via-warm-black/35 to-warm-black/10" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 pb-14 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 mb-5"
        >
          <span className="w-8 h-px bg-gold-300" />
          <span className="text-gold-200 text-xs tracking-[0.35em] uppercase font-body">{eyebrow}</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-ivory leading-[1.1]"
        >
          {title} {titleAccent && <span className="italic text-gold-300">{titleAccent}</span>}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-ivory/70 max-w-xl leading-relaxed font-body"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
