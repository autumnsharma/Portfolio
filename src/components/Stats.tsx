"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const STATS = [
  { value: 22,  key: "stats.age" },
  { value: 2,   key: "stats.experience" },
  { value: 20,  key: "stats.projects" },
  { value: 10,  key: "stats.deployed" },
];

function CountUp({ target, start }: { target: number; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let current = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      setCount(current);
      if (current >= target) clearInterval(timer);
    }, 35);
    return () => clearInterval(timer);
  }, [start, target]);

  return <>{count}</>;
}

export default function Stats() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="relative z-10 grid grid-cols-2 md:grid-cols-4"
      style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
    >
      {STATS.map((stat, i) => (
        <motion.div
          key={stat.key}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="flex items-baseline gap-4 px-8 md:px-14 py-10"
          style={{
            borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
          }}
        >
          <span
            className="font-mono font-bold leading-none"
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
              color: "#00e87a",
              textShadow: "0 0 30px rgba(0,232,122,0.4)",
              letterSpacing: "-0.03em",
            }}
          >
            <CountUp target={stat.value} start={inView} />
          </span>
          <span
            className="font-mono text-[0.75rem] leading-snug tracking-wide"
            style={{ color: "#6b7a96" }}
          >
            {t(stat.key).split("\n").map((line, j) => (
              <span key={j}>
                {line}
                {j === 0 && <br />}
              </span>
            ))}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
