"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "Practice" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const fmt = () => {
      const now = new Date();
      const opts: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      };
      setTime(new Intl.DateTimeFormat("en-GB", opts).format(now) + " IST");
    };
    fmt();
    const id = setInterval(fmt, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[2px]"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-5 flex items-center justify-between text-ink">
        <a href="#top" className="flex items-baseline gap-3 group">
          <span className="display text-2xl tracking-tightest leading-none">
            T<span className="display-italic">B</span>K
          </span>
          <span className="mono-label hidden sm:inline">
            ・ Node.js Backend Dev
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium tracking-wide text-ash hover:text-ink underline-link"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 text-[11px] mono-label">
          <span className="inline-flex items-center gap-1.5">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-moss" />
              <span className="absolute inset-0 rounded-full bg-moss animate-ping opacity-60" />
            </span>
            Open to work
          </span>
          <span className="hidden sm:inline opacity-40">/</span>
          <span className="hidden sm:inline tabular-nums">{time}</span>
          <a
            href="/Bhargava_Kishore_Resume.pdf"
            download
            className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 border border-ink text-ink bg-parchment hover:bg-ink hover:text-parchment transition-colors duration-300"
          >
            <span>CV</span>
            <span aria-hidden>↓</span>
          </a>
        </div>
      </div>
      <div className="h-px bg-rule/60 mx-6 md:mx-10" />
    </motion.header>
  );
}
