"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/context/LanguageContext";

const NAV_ITEMS = [
  { key: "nav.professional", href: "#professional" },
  { key: "nav.personal",     href: "#personal" },
  { key: "nav.contact",      href: "#contact" },
];

export default function Navbar() {
  const { t } = useLanguage();
  const [active, setActive] = useState("#professional");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-14 py-5"
      style={{
        background: scrolled ? "rgba(8,12,24,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,232,122,0.07)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo */}
      <a href="#professional" className="flex items-center gap-3 no-underline">
        <span className="font-mono font-bold text-[#f0f4ff] text-lg tracking-tight">
          YourName
        </span>
        <motion.span
          className="w-2.5 h-2.5 rounded-full"
          style={{ background: "#00e87a", boxShadow: "0 0 10px #00e87a" }}
          animate={{ opacity: [1, 0.3, 1], scale: [1, 1.4, 1] }}
          transition={{ duration: 2.4, repeat: Infinity }}
        />
      </a>

      {/* Links */}
      <ul className="hidden md:flex items-center gap-9 list-none">
        {NAV_ITEMS.map((item) => (
          <li key={item.key}>
            <a
              href={item.href}
              onClick={() => setActive(item.href)}
              className="relative font-mono text-[0.82rem] tracking-wide no-underline transition-colors duration-200"
              style={{
                color: active === item.href ? "#00e87a" : "#f0f4ff",
                paddingBottom: "4px",
              }}
            >
              {t(item.key)}
              {active === item.href && (
                <motion.span
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] rounded"
                  style={{ background: "#00e87a" }}
                />
              )}
            </a>
          </li>
        ))}
      </ul>

      {/* Language selector */}
      <LanguageSelector />
    </motion.nav>
  );
}
