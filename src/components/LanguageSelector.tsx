"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useLanguage, type Locale } from "@/context/LanguageContext";

const LOCALES: { code: Locale; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "mn", label: "Монгол", flag: "🇲🇳" },
];

export default function LanguageSelector() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LOCALES.find((l) => l.code === locale)!;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-mono transition-colors duration-200"
        style={{
          borderColor: "#00e87a",
          color: "#00e87a",
          background: open ? "rgba(0,232,122,0.1)" : "transparent",
          fontSize: "0.78rem",
          letterSpacing: "0.02em",
        }}
      >
        <Globe size={14} />
        <span>{current.label}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={12} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-36 rounded-xl overflow-hidden z-50"
            style={{
              background: "#0c1122",
              border: "1px solid rgba(0,232,122,0.2)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
            }}
          >
            {LOCALES.map((l) => (
              <button
                key={l.code}
                onClick={() => { setLocale(l.code); setOpen(false); }}
                className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left text-sm font-mono transition-colors duration-150"
                style={{
                  color: l.code === locale ? "#00e87a" : "#6b7a96",
                  background: l.code === locale ? "rgba(0,232,122,0.06)" : "transparent",
                  fontSize: "0.78rem",
                }}
                onMouseEnter={(e) => {
                  if (l.code !== locale) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                }}
                onMouseLeave={(e) => {
                  if (l.code !== locale) (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                <span className="flex items-center gap-2">
                  <span>{l.flag}</span>
                  <span>{l.label}</span>
                </span>
                {l.code === locale && <Check size={12} />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
