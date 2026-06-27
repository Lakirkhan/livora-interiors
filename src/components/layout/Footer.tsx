import { Phone, Mail, MapPin, Instagram, MessageCircle, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#070707] border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-gold-500 flex items-center justify-center">
                <span className="text-gold-500 font-display text-2xl font-light">A</span>
              </div>
              <div>
                <span className="font-display text-2xl font-semibold tracking-widest text-white block leading-none">FS</span>
                <span className="text-gold-500 text-[9px] tracking-[0.3em] uppercase block leading-tight">INTERIOR</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Premium boutique interior design studio in Ahmedabad. We turn spaces into meaningful experiences — crafted personally, executed perfectly.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/fsinterior.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/50 hover:text-gold-400 hover:border-gold-500/40 transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#25D366] hover:border-[#25D366]/40 transition-all duration-300"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="tel:+919876543210"
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/50 hover:text-gold-400 hover:border-gold-500/40 transition-all duration-300"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold-500 text-xs tracking-[0.3em] uppercase mb-6 font-body">Quick Links</h4>
            <ul className="space-y-3">
              {[
                ["About Us", "#about"],
                ["Our Services", "#services"],
                ["Interior Packages", "#packages"],
                ["Portfolio", "#portfolio"],
                ["Client Reviews", "#reviews"],
                ["Book Consultation", "#consultation"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/50 hover:text-gold-400 text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-gold-500/0 group-hover:bg-gold-500 transition-all duration-300" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold-500 text-xs tracking-[0.3em] uppercase mb-6 font-body">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-gold-500 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+919876543210" className="text-white/70 hover:text-gold-400 text-sm transition-colors block">+91 98765 43210</a>
                  <a href="tel:+919876543211" className="text-white/70 hover:text-gold-400 text-sm transition-colors block">+91 98765 43211</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={16} className="text-gold-500 mt-0.5 flex-shrink-0" />
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#25D366] text-sm transition-colors"
                >
                  +91 98765 43210 (WhatsApp)
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-gold-500 mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@fsinterior.in" className="text-white/70 hover:text-gold-400 text-sm transition-colors">
                  hello@fsinterior.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold-500 mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Prahlad Nagar, Ahmedabad,<br />Gujarat – 380015
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs tracking-wider text-center sm:text-left">
            © {new Date().getFullYear()} FS Interior. All rights reserved. | Ahmedabad, Gujarat, India
          </p>
          <div className="flex items-center gap-6">
            <span className="text-white/30 text-xs">Interior Designer in Ahmedabad</span>
            <a
              href="#"
              className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/30 hover:text-gold-400 hover:border-gold-500/40 transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
