"use client";

import React, { createContext, useContext, useState } from "react";

export type Locale = "en" | "mn";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Nav
    "nav.professional": "Professional",
    "nav.personal": "Personal",
    "nav.contact": "Contact",

    // Hero
    "hero.role": "Software Engineer",
    "hero.greeting": "Hello I'm",
    "hero.tagline": "IT Specialist & Full-Stack Developer | Pragmatic,\ndelivery-oriented | Fintech & Cloud | Your City",
    "hero.cta": "VIEW CV",

    // Stats
    "stats.age": "Age",
    "stats.experience": "Years of\nexperience",
    "stats.projects": "Projects\nworked on",
    "stats.deployed": "Projects\nDeployed",

    // About
    "about.tag": "// about me",
    "about.title": "Who I Am",
    "about.p1": "I'm a Full-Stack Developer passionate about building scalable, high-quality software. I thrive at the intersection of clean engineering and real business impact — especially in Fintech and Cloud infrastructure.",
    "about.p2": "When I'm not coding, I'm exploring new technologies, contributing to open-source projects, or experimenting with side projects.",
    "about.p3": "Based in Your City. Open to remote opportunities worldwide.",

    // Projects
    "projects.tag": "// projects",
    "projects.title": "Selected Work",
    "projects.view": "View Project",

    // Contact
    "contact.tag": "// contact",
    "contact.title": "Get In Touch",
    "contact.intro": "I'm currently open to new opportunities. Whether you have a project in mind, a question, or just want to say hi — my inbox is always open.",
    "contact.name": "NAME",
    "contact.email": "EMAIL",
    "contact.message": "MESSAGE",
    "contact.name.placeholder": "Your name",
    "contact.email.placeholder": "your@email.com",
    "contact.message.placeholder": "Tell me about your project...",
    "contact.send": "SEND MESSAGE",

    // Footer
    "footer.built": "Designed & built by",
    "footer.year": "2025",
  },

  mn: {
    // Nav
    "nav.professional": "Мэргэжлийн",
    "nav.personal": "Хувийн",
    "nav.contact": "Холбоо барих",

    // Hero
    "hero.role": "Програм хангамжийн инженер",
    "hero.greeting": "Сайн байна уу, би",
    "hero.tagline": "IT мэргэжилтэн & Full-Stack хөгжүүлэгч | Практик,\nүр дүнд чиглэсэн | Санхүү & Клауд | Таны хот",
    "hero.cta": "CV ҮЗЭХ",

    // Stats
    "stats.age": "Нас",
    "stats.experience": "Жилийн\nтуршлага",
    "stats.projects": "Ажилласан\nтөслүүд",
    "stats.deployed": "Нийтэлсэн\nтөслүүд",

    // About
    "about.tag": "// миний тухай",
    "about.title": "Би хэн бэ",
    "about.p1": "Би масштабтай, чанартай програм хангамж бүтээхэд хүсэл эрмэлзэлтэй Full-Stack хөгжүүлэгч. Цэвэр инженерчлэл болон бизнесийн нөлөөллийн уулзвар дээр ажиллахдаа хамгийн сайн — ялангуяа Санхүүгийн технологи болон Клауд дэд бүтцэд.",
    "about.p2": "Код бичихгүй үедээ шинэ технологи судалж, нээлттэй эхийн төсөлд хувь нэмрээ оруулж, өөрийн жижиг төслүүд туршдаг.",
    "about.p3": "Таны хотод суурилсан. Алсын ажлын боломжид нээлттэй.",

    // Projects
    "projects.tag": "// төслүүд",
    "projects.title": "Сонгосон ажлууд",
    "projects.view": "Төсөл үзэх",

    // Contact
    "contact.tag": "// холбоо барих",
    "contact.title": "Холбоо барих",
    "contact.intro": "Одоогоор шинэ боломжид нээлттэй байна. Төсөл санаатай эсвэл зүгээр л мэндчилэхийг хүссэн бол — шуудан хайрцаг минь үргэлж нээлттэй.",
    "contact.name": "НЭР",
    "contact.email": "И-МЭЙЛ",
    "contact.message": "МЕССЕЖ",
    "contact.name.placeholder": "Таны нэр",
    "contact.email.placeholder": "та@имэйл.мн",
    "contact.message.placeholder": "Төслийнхөө талаар хэлээрэй...",
    "contact.send": "ИЛГЭЭХ",

    // Footer
    "footer.built": "Зохиосон",
    "footer.year": "2025",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  const t = (key: string): string => {
    return translations[locale][key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
