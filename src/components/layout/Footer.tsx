"use client";
import { Phone, Mail, MapPin, Instagram, MessageCircle, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-warm-black border-t border-ivory/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        {/* Closing statement */}
        <div className="mb-20">
          <span className="font-display italic text-5xl sm:text-6xl lg:text-7xl font-light text-ivory/90">
            Designed for living.
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 pt-14 border-t border-ivory/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 border border-gold-400/50 flex items-center justify-center">
                <span className="text-gold-300 font-display text-lg">FS</span>
              </div>
              <div>
                <span className="font-display text-xl tracking-[0.15em] text-ivory block leading-none">FS INTERIOR</span>
                <span className="text-gold-400 text-[9px] tracking-[0.3em] uppercase block leading-tight mt-0.5">Ahmedabad</span>
              </div>
            </div>
            <p className="text-ivory/40 text-sm leading-relaxed mb-6 font-body">
              Premium boutique interior design studio in Ahmedabad. We turn spaces into meaningful experiences — crafted personally, executed perfectly.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/_fs_interior"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-ivory/15 flex items-center justify-center text-ivory/50 hover:text-gold-300 hover:border-gold-400/40 transition-all duration-300"
              >
                <Instagram size={17} />
              </a>
              <a
                href="https://wa.me/917096557674"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-ivory/15 flex items-center justify-center text-ivory/50 hover:text-[#25D366] hover:border-[#25D366]/40 transition-all duration-300"
              >
                <MessageCircle size={17} />
              </a>
              <a
                href="tel:+917096557674"
                className="w-10 h-10 border border-ivory/15 flex items-center justify-center text-ivory/50 hover:text-gold-300 hover:border-gold-400/40 transition-all duration-300"
              >
                <Phone size={17} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-6 font-body">Quick Links</h4>
            <ul className="space-y-3">
              {[
                ["About Us", "/#about"],
                ["Our Services", "/#services"],
                ["Interior Packages", "/packages"],
                ["Our Process", "/process"],
                ["Portfolio", "/projects"],
                ["Why Choose Us", "/why-us"],
                ["Client Reviews", "/reviews"],
                ["Book Consultation", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-ivory/45 hover:text-gold-300 text-sm transition-colors duration-300 flex items-center gap-2 group font-body"
                  >
                    <span className="w-4 h-px bg-gold-400/0 group-hover:bg-gold-400 transition-all duration-300" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-6 font-body">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-gold-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+917096557674" className="text-ivory/60 hover:text-gold-300 text-sm transition-colors block font-body">
                  +91 7096557674
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={16} className="text-gold-400 mt-0.5 flex-shrink-0" />
                <a
                  href="https://wa.me/917096557674"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory/60 hover:text-[#25D366] text-sm transition-colors font-body"
                >
                  +91 7096557674 (WhatsApp)
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-gold-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:fbssaiyed@gmail.com" className="text-ivory/60 hover:text-gold-300 text-sm transition-colors font-body">
                  fbssaiyed@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-ivory/60 text-sm font-body">
                  Safar E Aman, opp. N. K. School, Mohammedi Park, Juhapura, Ahmedabad,<br />Gujarat – 380051
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-ivory/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-ivory/30 text-xs tracking-wider text-center sm:text-left font-body">
            © {new Date().getFullYear()} FS Interior. All rights reserved. | Ahmedabad, Gujarat, India
          </p>
          <div className="flex items-center gap-6">
            <span className="text-ivory/30 text-xs font-body">Interior Designer in Ahmedabad</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-9 h-9 border border-ivory/15 flex items-center justify-center text-ivory/40 hover:text-gold-300 hover:border-gold-400/40 transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
