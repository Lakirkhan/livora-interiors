"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/projects" },
  { label: "Packages", href: "/packages" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const dark = scrolled || menuOpen;

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        dark
          ? "bg-ivory/90 backdrop-blur-md border-b border-charcoal/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center group">
          <Image
            src="/images/logo.png"
            alt="Faizan Saiyed Home Interior"
            width={880}
            height={818}
            priority
            className="h-14 sm:h-20 w-auto object-contain"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-9">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs tracking-[0.2em] uppercase font-body transition-colors duration-300 relative group ${
                dark ? "text-charcoal/70 hover:text-charcoal" : "text-ivory/80 hover:text-ivory"
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-gold-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:+917096557674"
            className={`flex items-center gap-2 text-xs transition-colors ${
              dark ? "text-charcoal/70 hover:text-gold-600" : "text-ivory/80 hover:text-ivory"
            }`}
          >
            <Phone size={13} />
            <span className="font-body tracking-wide">+91 70965 57674</span>
          </a>
          <a
            href="/contact"
            className={`px-6 py-2.5 text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 border ${
              dark
                ? "bg-charcoal text-ivory border-charcoal hover:bg-transparent hover:text-charcoal"
                : "bg-transparent text-ivory border-ivory/60 hover:bg-ivory hover:text-charcoal"
            }`}
          >
            Consultation
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden p-2 transition-colors ${dark ? "text-charcoal" : "text-ivory"}`}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-ivory/95 backdrop-blur-md border-t border-charcoal/10"
          >
            <div className="px-5 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-charcoal/80 hover:text-charcoal text-sm tracking-[0.2em] uppercase py-3 border-b border-charcoal/5 transition-colors font-body"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 px-5 py-3.5 bg-charcoal text-ivory text-xs font-medium tracking-[0.15em] uppercase text-center"
              >
                Book Free Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
