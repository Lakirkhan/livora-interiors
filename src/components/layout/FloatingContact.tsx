"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Calendar, X, ChevronUp } from "lucide-react";

const WHATSAPP = "917096557674";
const PHONE = "+917096557674";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-3 mb-1"
          >
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP}?text=Hello! I'm interested in interior design services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 shadow-xl hover:bg-[#20ba5a] transition-all duration-300 group rounded-sm"
            >
              <MessageCircle size={20} />
              <span className="text-sm font-semibold tracking-wide whitespace-nowrap">WhatsApp Us</span>
            </a>

            {/* Call */}
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-3 bg-charcoal text-ivory px-4 py-3 shadow-xl hover:bg-charcoal/85 transition-all duration-300"
            >
              <Phone size={20} />
              <span className="text-sm font-medium tracking-wide whitespace-nowrap font-body">Call Now</span>
            </a>

            {/* Book Site Visit */}
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 bg-gold-500 text-ivory px-4 py-3 shadow-xl hover:bg-gold-600 transition-all duration-300"
            >
              <Calendar size={20} />
              <span className="text-sm font-medium tracking-wide whitespace-nowrap font-body">Free Site Visit</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-charcoal text-ivory flex items-center justify-center shadow-[0_8px_32px_rgba(21,18,13,0.35)] hover:bg-charcoal/85 transition-all duration-300"
        aria-label="Contact options"
      >
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {open ? <X size={22} /> : <ChevronUp size={22} />}
        </motion.div>
      </motion.button>
    </div>
  );
}
