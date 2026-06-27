"use client";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const textAlign = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`flex flex-col gap-4 ${textAlign}`}
    >
      {eyebrow && (
        <span className="text-gold-500 text-xs tracking-[0.35em] uppercase font-body">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-tight ${
          light ? "text-charcoal" : "text-white"
        }`}
      >
        {title}
        {titleAccent && (
          <>
            {" "}
            <span className="gold-text italic">{titleAccent}</span>
          </>
        )}
      </h2>
      <div className={`gold-divider ${align === "center" ? "self-center" : "self-start"}`} />
      {subtitle && (
        <p
          className={`text-base sm:text-lg max-w-2xl leading-relaxed ${
            light ? "text-charcoal/60" : "text-white/60"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
