"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    number: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full cursor-pointer"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full block rounded-xl"
                style={{ background: "rgba(0,232,122,0.06)" }}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <Card hoveredIndex={hoveredIndex} idx={idx}>
            <p className="text-xs tracking-[0.14em] mb-3" style={{ color: "rgba(0,232,122,0.7)" }}>
              {item.number} ——
            </p>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <div className="flex flex-wrap gap-2 mt-5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[0.65rem] tracking-[0.08em] px-2 py-1 rounded-full border"
                  style={{ borderColor: "rgba(0,232,122,0.3)", color: "#00e87a" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  hoveredIndex,
  idx,
}: {
  className?: string;
  children: React.ReactNode;
  hoveredIndex: number | null;
  idx: number;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl h-full w-full p-6 overflow-hidden relative z-20 border transition-all duration-300",
        className
      )}
      style={{
        background: "rgba(255,255,255,0.02)",
        borderColor: hoveredIndex === idx ? "rgba(0,232,122,0.3)" : "rgba(255,255,255,0.08)",
        transform: hoveredIndex === idx ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      {/* top accent bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: "#00e87a" }}
        initial={{ scaleX: 0, transformOrigin: "left" }}
        animate={{ scaleX: hoveredIndex === idx ? 1 : 0, transformOrigin: "left" }}
        transition={{ duration: 0.3 }}
      />
      {children}
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <h4 className={cn("text-[#f0f4ff] font-bold text-base mb-2 tracking-tight", className)}>
    {children}
  </h4>
);

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <p className={cn("text-[#6b7a96] text-[0.78rem] leading-[1.8]", className)}>{children}</p>
);
