"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { HoverEffect } from "./ui/card-hover-effect";

const PROJECTS = [
  {
    number: "01",
    title: "Project Alpha",
    description: "A fintech platform for real-time payment processing with multi-currency support and fraud detection.",
    tags: ["REACT", "NODE.JS", "POSTGRESQL", "STRIPE"],
    link: "#",
  },
  {
    number: "02",
    title: "CloudDash",
    description: "Infrastructure monitoring dashboard with real-time alerts, cost analytics, and multi-cloud support.",
    tags: ["NEXT.JS", "AWS", "REDIS", "GRAFANA"],
    link: "#",
  },
  {
    number: "03",
    title: "DevFlow",
    description: "A developer productivity tool with AI-powered code reviews, PR analytics, and team velocity metrics.",
    tags: ["PYTHON", "FASTAPI", "DOCKER", "OPENAI"],
    link: "#",
  },
];

export default function Projects() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="projects"
      className="relative z-10 px-8 md:px-14 py-24"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="font-mono text-[0.72rem] tracking-[0.2em] mb-3"
        style={{ color: "#00e87a" }}
      >
        {t("projects.tag")}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.08, duration: 0.4 }}
        className="font-mono font-bold mb-10 tracking-tight"
        style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
      >
        {t("projects.title")}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.18, duration: 0.5 }}
      >
        <HoverEffect items={PROJECTS} />
      </motion.div>
    </section>
  );
}
