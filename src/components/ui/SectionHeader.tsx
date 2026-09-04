"use client";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  align?: "left" | "center";
  /** Set true only inside dark-background sections (hero overlay, philosophy, CTA, footer) */
  dark?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  align = "left",
  dark = false,
}: SectionHeaderProps) {
  const textAlign = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col gap-5 ${textAlign}`}
    >
      {eyebrow && (
        <div className={`flex items-center gap-3 ${align === "center" ? "" : "flex-row"}`}>
          <span className="w-8 h-px bg-gold-400" />
          <span className={`text-xs tracking-[0.35em] uppercase font-body ${dark ? "text-gold-300" : "text-gold-600"}`}>
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={`font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-light leading-[1.08] text-balance ${
          dark ? "text-ivory" : "text-charcoal"
        }`}
      >
        {title}
        {titleAccent && (
          <>
            {" "}
            <span className="italic text-gold-500">{titleAccent}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p
          className={`text-base sm:text-lg max-w-xl leading-relaxed font-body ${
            dark ? "text-ivory/60" : "text-charcoal/60"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
