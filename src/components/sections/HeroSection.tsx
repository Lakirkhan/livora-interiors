"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, type PanInfo } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Slide {
  image: string;
  alt: string;
  headline: string;
  headlineAccent: string;
  subheadline: string;
}

const SLIDES: Slide[] = [
  {
    image: "/images/Living Room/1783865300504.jpg",
    alt: "A warm, light-filled living room designed by FS Interior",
    headline: "Spaces designed to",
    headlineAccent: "feel like home.",
    subheadline:
      "Thoughtful interiors, timeless materials and spaces designed around the way you live — planned and executed personally, start to finish.",
  },
  {
    image: "/images/Kitchen/1783865300464.jpg",
    alt: "A sleek modular kitchen designed by FS Interior",
    headline: "Kitchens built for",
    headlineAccent: "how you actually cook.",
    subheadline:
      "Smart layouts, premium finishes and storage that works as hard as you do — every inch planned around your routine.",
  },
  {
    image: "/images/BedRoom/1783865300102.png",
    alt: "A serene master bedroom designed by FS Interior",
    headline: "Bedrooms that feel like",
    headlineAccent: "a quiet retreat.",
    subheadline:
      "Calming palettes, considered lighting and details that make the end of every day feel a little softer.",
  },
  {
    image: "/images/Dining Space/1783865300389.jpg",
    alt: "An elegant open-concept dining space designed by FS Interior",
    headline: "Dining spaces made for",
    headlineAccent: "gathering.",
    subheadline:
      "Rooms built around the people you love — comfortable, warm, and made to be lived in, not just looked at.",
  },
];

const SWIPE_THRESHOLD = 60;
const SLIDE_TRANSITION = { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const };

export default function HeroSection() {
  const [[current, direction], setSlide] = useState([0, 1]);
  // Outgoing slide, kept mounted just long enough to play its exit animation.
  // AnimatePresence's automatic unmount-after-exit isn't reliably removing
  // nodes here, so it's cleaned up explicitly on a timer instead.
  const [prevSlide, setPrevSlide] = useState<{ index: number; direction: number } | null>(null);

  const goTo = useCallback(
    (index: number, dir: number) => {
      const nextIndex = (index + SLIDES.length) % SLIDES.length;
      if (nextIndex === current) return;
      setPrevSlide({ index: current, direction: dir });
      setSlide([nextIndex, dir]);
    },
    [current]
  );
  const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, current]);

  useEffect(() => {
    if (!prevSlide) return;
    const t = setTimeout(() => setPrevSlide(null), SLIDE_TRANSITION.duration * 1000 + 100);
    return () => clearTimeout(t);
  }, [prevSlide]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD) next();
    else if (info.offset.x > SWIPE_THRESHOLD) prev();
  };

  const slide = SLIDES[current];

  return (
    <section id="home" className="relative h-[100svh] min-h-[640px] flex items-end overflow-hidden">
      {/* Background Image Swiper */}
      {prevSlide && (
        <motion.div
          key={`prev-${prevSlide.index}`}
          initial={{ x: 0 }}
          animate={{ x: prevSlide.direction > 0 ? "-100%" : "100%" }}
          transition={SLIDE_TRANSITION}
          className="absolute inset-0"
        >
          <Image
            src={encodeURI(SLIDES[prevSlide.index].image)}
            alt={SLIDES[prevSlide.index].alt}
            fill
            className="object-cover object-center pointer-events-none select-none"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-black/90 via-warm-black/25 to-warm-black/10" />
        </motion.div>
      )}
      <motion.div
        key={current}
        initial={{ x: prevSlide ? (direction > 0 ? "100%" : "-100%") : 0 }}
        animate={{ x: 0 }}
        transition={SLIDE_TRANSITION}
        drag="x"
        dragElastic={0.12}
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={onDragEnd}
        className="absolute inset-0 cursor-grab active:cursor-grabbing touch-pan-y"
      >
        <Image
          src={encodeURI(slide.image)}
          alt={slide.alt}
          fill
          priority={current === 0}
          className="object-cover object-center pointer-events-none select-none"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-black/90 via-warm-black/25 to-warm-black/10" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 pb-16 sm:pb-20 pt-32">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex items-center gap-3 mb-7"
          >
            <div className="w-9 h-px bg-gold-300" />
            <span className="text-gold-200 text-xs tracking-[0.4em] uppercase font-body">
              Interior Design &amp; Architecture · Ahmedabad
            </span>
          </motion.div>

          {/* Headline + Subheadline (swap per slide) */}
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={SLIDE_TRANSITION}
          >
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light text-ivory leading-[1.08] text-balance">
              {slide.headline} <span className="italic text-gold-300">{slide.headlineAccent}</span>
            </h1>
            <p className="mt-6 text-ivory/70 text-base sm:text-lg max-w-lg leading-relaxed font-body">
              {slide.subheadline}
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4"
          >
            <a
              href="/contact"
              className="px-8 py-4 bg-ivory text-charcoal text-xs font-medium tracking-[0.2em] uppercase hover:bg-gold-200 transition-colors duration-300"
            >
              Book Free Consultation
            </a>
            <a
              href="/projects"
              className="group flex items-center gap-2 text-ivory text-sm tracking-wide font-body border-b border-ivory/40 pb-1 hover:border-ivory transition-colors duration-300"
            >
              Explore Projects
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>

          {/* Slide Dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-10 sm:mt-14 flex items-center gap-2"
          >
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 transition-all duration-300 ${
                  i === current ? "w-8 bg-gold-300" : "w-1.5 bg-ivory/30 rounded-full"
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Side Arrows */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-warm-black/25 backdrop-blur-sm border border-ivory/25 flex items-center justify-center text-ivory/80 hover:text-gold-300 hover:border-gold-300/60 hover:bg-warm-black/40 transition-colors duration-300"
      >
        <ChevronLeft size={18} />
      </motion.button>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-warm-black/25 backdrop-blur-sm border border-ivory/25 flex items-center justify-center text-ivory/80 hover:text-gold-300 hover:border-gold-300/60 hover:bg-warm-black/40 transition-colors duration-300"
      >
        <ChevronRight size={18} />
      </motion.button>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="hidden sm:flex absolute bottom-10 right-8 flex-col items-center gap-2 z-10"
      >
        <span className="text-ivory/40 text-[10px] tracking-[0.3em] uppercase [writing-mode:vertical-rl]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-ivory/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
