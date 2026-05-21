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
      className="relative pt-24 md:pt-24 pb-16 md:pb-36 px-6 md:px-10 max-w-[1440px] mx-auto"
    >
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
          <span>2+ years of experience in software development</span>
        </motion.div>

        {/* Headline */}
        <div className="col-span-12 mt-4 md:mt-8 relative lg:pb-32 xl:pb-44">
          <h1 className="display tracking-tightest leading-[0.86] text-[clamp(3.25rem,16vw,11.5rem)] md:text-[12.5vw] lg:text-[11.5rem] text-ink break-words">
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
            className="relative mt-10 mx-auto w-[220px] sm:w-[260px] md:w-[300px] lg:mt-0 lg:mx-0 lg:absolute lg:top-0 lg:right-0 lg:w-[340px] xl:w-[400px]"
          >
            {/* Warm halo: bridges the photo's dark room into the parchment page.
                Deep ink-brown core absorbs the portrait's edges, sienna midtones
                hand off to the page colour, full dissolve at the perimeter. */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-x-10 -top-10 -bottom-4"
              style={{
                background:
                  "radial-gradient(ellipse 62% 58% at 50% 44%, rgba(21, 20, 15, 0.82) 0%, rgba(58, 55, 47, 0.55) 28%, rgba(176, 80, 28, 0.14) 58%, rgba(241, 236, 226, 0) 86%)",
              }}
            />
            {/* Faint upper key-light, suggests the photo is lit from above */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-x-6 -top-6 h-1/2"
              style={{
                background:
                  "radial-gradient(ellipse 55% 70% at 50% 0%, rgba(241, 236, 226, 0.22), transparent 70%)",
                mixBlendMode: "screen",
              }}
            />

            <div
              className="relative aspect-[3/4] w-full"
              style={{
                maskImage:
                  "radial-gradient(ellipse 80% 92% at 50% 44%, #000 42%, rgba(0,0,0,0.9) 62%, rgba(0,0,0,0.45) 82%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 80% 92% at 50% 44%, #000 42%, rgba(0,0,0,0.9) 62%, rgba(0,0,0,0.45) 82%, transparent 100%)",
              }}
            >
              <Image
                src="/profile.jpg"
                alt="Portrait of Bhargava Kishore Tsavatapalli"
                fill
                sizes="(min-width: 1280px) 400px, 340px"
                className="object-cover"
                priority
                style={{
                  filter:
                    "sepia(0.14) saturate(1.05) contrast(1.04) brightness(1.02)",
                }}
              />
            </div>
            <figcaption className="relative mt-2 mono-label text-center !text-ink/45 tracking-[0.22em]">
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
            Backend developer based in Hyderabad with 2+ years of experience
            building scalable REST APIs and event-driven microservices using
            Node.js. Experienced in designing cloud-native systems on AWS, with
            a focus on performance, reliability, and maintainability. Worked
            across domains including healthcare, fintech, and on-demand
            services, delivering robust backend solutions for real-world
            applications.
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
          <div className="mt-6 flex flex-wrap items-center gap-3">
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
        className="mt-12 md:mt-24 flex flex-wrap items-center gap-x-8 gap-y-3 mono-label"
      >
        <span>Node.js / Express</span>
        <span className="text-sienna hidden sm:inline" aria-hidden>●</span>
        <span>TypeScript</span>
        <span className="text-sienna hidden sm:inline" aria-hidden>●</span>
        <span>RabbitMQ</span>
        <span className="text-sienna hidden sm:inline" aria-hidden>●</span>
        <span>PostgreSQL / MySQL</span>
        <span className="text-sienna hidden sm:inline" aria-hidden>●</span>
        <span>AWS (Lambda · RDS · API Gateway)</span>
        <span className="text-sienna hidden sm:inline" aria-hidden>●</span>
        <span>ReactJS</span>
        <span className="text-sienna hidden sm:inline" aria-hidden>●</span>
        <span>MongoDB</span>
      </motion.div>
    </section>
  );
}
