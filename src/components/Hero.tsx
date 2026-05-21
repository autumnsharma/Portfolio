"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Spotlight } from "./ui/spotlight";
import { Button } from "./ui/moving-border";

const SOCIAL_LINKS = [
  { icon: "fab fa-facebook-f",   href: "#", label: "Facebook" },
  { icon: "fab fa-instagram",    href: "#", label: "Instagram" },
  { icon: "fab fa-youtube",      href: "#", label: "YouTube" },
  { icon: "fab fa-linkedin-in",  href: "#", label: "LinkedIn" },
  { icon: "fab fa-github",       href: "#", label: "GitHub" },
];

export default function Hero() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden:   { opacity: 0, y: 24 },
    visible:  { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="professional"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "100px" }}
    >
      {/* Aceternity Spotlight */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#00e87a" />

      {/* Grid bg */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,232,122,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,232,122,0.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-8 md:px-14 pb-0">
        {/* ── LEFT ── */}
        <motion.div
          className="flex flex-col gap-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Role */}
          <motion.p
            variants={itemVariants}
            className="font-mono text-sm tracking-widest"
            style={{ color: "#6b7a96" }}
          >
            {t("hero.role")}
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-mono font-bold leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 5.5vw, 5rem)" }}
          >
            {t("hero.greeting")}
            <br />
            <span style={{ color: "#00e87a", display: "block", textShadow: "0 0 40px rgba(0,232,122,0.3)" }}>
              Your Full
            </span>
            <span style={{ color: "#00e87a", display: "block", textShadow: "0 0 40px rgba(0,232,122,0.3)" }}>
              Name
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="font-mono text-[0.83rem] leading-loose max-w-md"
            style={{ color: "#6b7a96", fontStyle: "italic" }}
          >
            {t("hero.tagline").split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </motion.p>

          {/* CTA + Socials */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-5 flex-wrap"
          >
            {/* Moving border CTA */}
            <Button
              containerClassName="h-12 w-36"
              className="font-mono font-bold text-[0.73rem] tracking-[0.12em] text-[#00e87a]"
              duration={3000}
              as="a"
              href="#"
            >
              {t("hero.cta")} ›
            </Button>

            {/* Social icons */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center font-mono text-sm transition-all duration-200"
                  style={{
                    border: "1.5px solid rgba(240,244,255,0.18)",
                    color: "rgba(240,244,255,0.7)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "#00e87a";
                    el.style.color = "#00e87a";
                    el.style.background = "rgba(0,232,122,0.08)";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "rgba(240,244,255,0.18)";
                    el.style.color = "rgba(240,244,255,0.7)";
                    el.style.background = "transparent";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  <i className={icon} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Photo ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center items-center"
        >
          <div className="relative" style={{ width: "min(400px, 40vw)", height: "min(400px, 40vw)" }}>
            {/* Outer spinning dashed ring */}
            <motion.div
              className="absolute rounded-full"
              style={{
                inset: "-22px",
                border: "2px dashed rgba(0,232,122,0.55)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            />

            {/* Inner counter-spinning ring */}
            <motion.div
              className="absolute rounded-full"
              style={{
                inset: "-10px",
                border: "1px solid rgba(0,232,122,0.18)",
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            />

            {/* Green dot on the ring */}
            <motion.div
              className="absolute rounded-full z-10"
              style={{
                width: "10px",
                height: "10px",
                background: "#00e87a",
                boxShadow: "0 0 14px #00e87a",
                top: "-26px",
                left: "50%",
                marginLeft: "-5px",
                transformOrigin: `5px calc(50% + 26px)`,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            />

            {/* Glow behind circle */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                inset: "-30px",
                background: "radial-gradient(circle, rgba(0,232,122,0.1) 0%, transparent 70%)",
                zIndex: 1,
              }}
            />

            {/* Photo circle */}
            <div
              className="w-full h-full rounded-full overflow-hidden relative z-10"
              style={{
                border: "3px solid rgba(0,232,122,0.4)",
                background: "linear-gradient(145deg, #0d1f17, #061410)",
              }}
            >
              {/* 
                REPLACE THIS with your actual photo:
                <Image src="/photo.jpg" alt="Your Name" fill className="object-cover" />
              */}
              <div className="w-full h-full flex flex-col items-center justify-center gap-4"
                style={{ background: "linear-gradient(145deg, #0d1f17, #061410)" }}>
                <i className="fas fa-user text-5xl" style={{ color: "rgba(0,232,122,0.3)" }} />
                <span className="font-mono text-[0.65rem] tracking-[0.16em]"
                  style={{ color: "rgba(0,232,122,0.45)" }}>
                  YOUR PHOTO
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
