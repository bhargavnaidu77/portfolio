"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const lineEase = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  const reveal = (i: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 40 },
    animate: reduce ? { opacity: 1 } : { opacity: 1, y: 0 },
    transition: { duration: 1.1, ease: lineEase, delay: 0.15 + i * 0.12 },
  });

  return (
    <section
      id="top"
      className="relative pt-40 md:pt-44 pb-28 md:pb-36 px-6 md:px-10 max-w-[1440px] mx-auto"
    >
      {/* Hairlines */}
      <div className="absolute top-32 left-6 right-6 md:left-10 md:right-10 h-px bg-rule/70" />
      <div className="absolute bottom-0 left-6 right-6 md:left-10 md:right-10 h-px bg-rule/70" />

      {/* Floating mono coordinates */}
      <motion.div
        {...reveal(0)}
        className="mono-label absolute top-32 right-6 md:right-10 translate-y-3 hidden md:block"
      >
        17.385° N / 78.487° E ・ Hyderabad
      </motion.div>

      <div className="grid grid-cols-12 gap-y-10 md:gap-x-8 items-end">
        {/* Index marker */}
        <motion.div
          {...reveal(0)}
          className="col-span-12 md:col-span-2 mono-label pt-6"
        >
          01 — Intro
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          {...reveal(1)}
          className="col-span-12 md:col-span-10 flex flex-wrap items-center gap-3 mono-label pt-6"
        >
          <span>A portfolio · 2026</span>
          <span className="opacity-40">/</span>
          <span>2+ years in production</span>
        </motion.div>

        {/* Headline */}
        <div className="col-span-12 mt-4 md:mt-8 relative lg:pb-32 xl:pb-44">
          <h1 className="display tracking-tightest leading-[0.86] text-[18vw] md:text-[12.5vw] lg:text-[11.5rem] text-ink">
            <motion.span className="block" {...reveal(2)}>
              Bhargava
            </motion.span>
            <motion.span
              className="block pl-[8vw] md:pl-[14vw]"
              {...reveal(3)}
            >
              <span className="display-italic">Kishore</span>
              <span className="text-sienna">.</span>
            </motion.span>
          </h1>

          {/* Portrait — below headline on mobile, anchored top-right on lg+ */}
          <motion.figure
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: lineEase, delay: 0.85 }}
            className="mt-10 mx-auto w-[220px] sm:w-[260px] md:w-[300px] lg:mt-0 lg:mx-0 lg:absolute lg:top-0 lg:right-0 lg:w-[340px] xl:w-[400px]"
            style={{
              filter: "drop-shadow(0 18px 40px rgba(21, 20, 15, 0.10))",
            }}
          >
            <div
              className="relative aspect-[3/4] w-full"
              style={{
                maskImage:
                  "radial-gradient(ellipse 85% 90% at 50% 45%, black 58%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 85% 90% at 50% 45%, black 58%, transparent 100%)",
              }}
            >
              <Image
                src="/profile.png"
                alt="Portrait of Bhargava Kishore Tsavatapalli"
                fill
                sizes="(min-width: 1280px) 400px, 340px"
                className="object-cover"
                priority
              />
            </div>
            <figcaption className="mt-2 mono-label text-center !text-ink/45 tracking-[0.22em]">
              Bhargava Kishore · Hyderabad · 2026
            </figcaption>
          </motion.figure>
        </div>

        {/* Caption row */}
        <motion.div
          {...reveal(4)}
          className="col-span-12 md:col-span-5 md:col-start-2 mt-10"
        >
          <p className="text-pretty text-[15px] md:text-base leading-relaxed text-ash max-w-md">
            A backend developer based in{" "}
            <span className="text-ink">Hyderabad</span>, building scalable REST
            APIs, event-driven microservices, and cloud-native systems for
            healthcare, fintech, and on-demand services.
          </p>
        </motion.div>

        <motion.div
          {...reveal(5)}
          className="col-span-12 md:col-span-4 md:col-start-8 mt-10 md:mt-10"
        >
          <div className="flex items-baseline gap-4">
            <span className="mono-label">Currently</span>
            <span className="text-ink text-[15px]">
              Software Developer at{" "}
              <a
                href="#experience"
                className="underline-link text-sienna"
              >
                Redblocks Solutions
              </a>
            </span>
          </div>
          <div className="mt-4 flex items-baseline gap-4">
            <span className="mono-label">Reach</span>
            <a
              href="mailto:bhargavnaidu23494@gmail.com"
              className="underline-link text-ink text-[15px]"
            >
              bhargavnaidu23494@gmail.com
            </a>
          </div>
          <div className="mt-3 flex items-baseline gap-4">
            <span className="mono-label">Phone</span>
            <span className="text-ink text-[15px] tabular-nums">
              +91 91330 07708
            </span>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="/Bhargava_Kishore_Resume.pdf"
              download
              className="group inline-flex items-center gap-2 px-5 py-3 bg-ink text-parchment text-[13px] tracking-wide hover:bg-sienna transition-colors duration-300"
            >
              <span className="mono-label !text-parchment">Download CV</span>
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              >
                ↓
              </span>
            </a>
            <a
              href="mailto:bhargavnaidu23494@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 border border-ink/30 hover:border-ink text-ink text-[13px] tracking-wide transition-colors duration-300"
            >
              <span className="mono-label">Get in touch</span>
              <span aria-hidden>→</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom badges */}
      <motion.div
        {...reveal(6)}
        className="mt-20 md:mt-24 flex flex-wrap items-center gap-x-8 gap-y-3 mono-label"
      >
        <span>Node.js / Express</span>
        <span className="text-sienna">●</span>
        <span>TypeScript</span>
        <span className="text-sienna">●</span>
        <span>RabbitMQ</span>
        <span className="text-sienna">●</span>
        <span>PostgreSQL / MySQL</span>
        <span className="text-sienna">●</span>
        <span>AWS (Lambda · RDS · API Gateway)</span>
        <span className="text-sienna">●</span>
        <span>ReactJS</span>
      </motion.div>
    </section>
  );
}
