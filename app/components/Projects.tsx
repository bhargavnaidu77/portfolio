"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";

type WorkProject = {
  index: string;
  name: string;
  tagline: string;
  domain: string;
  role: string;
  body: string[];
  stack: string[];
  flair: string;
};

type PersonalProject = {
  name: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  accent: "sienna" | "moss" | "ember";
  image?: string;
};

const work: WorkProject[] = [
  {
    index: "I.",
    name: "Pumperpal",
    tagline: "On-demand septic-tank service, dispatched in real time.",
    domain: "Service Industry",
    role: "Backend lead · UI integration",
    body: [
      "Designed and implemented a scalable RESTful API in Node.js and Express for the full service-booking loop — customer requests, technician dispatch, scheduling, and live job-status tracking.",
      "Integrated a third-party payment gateway with webhook event handling for real-time transaction confirmation, refunds, and reconciliation.",
      "Built JWT-based auth and role-based access control for customer, technician, and admin roles, with secure middleware on every protected route.",
      "Indexed and tuned MySQL tables to keep high-frequency booking and tracking endpoints fast under load.",
    ],
    stack: ["Node.js", "Express", "MySQL", "Sequelize", "ReactJS", "JWT", "Webhooks"],
    flair: "/ dispatch · payments · live tracking",
  },
  {
    index: "II.",
    name: "CPD Health Network",
    tagline: "Multi-tenant CPD courses for healthcare professionals.",
    domain: "Healthcare",
    role: "Core backend · UI components",
    body: [
      "Built a multi-tenant RESTful API platform letting healthcare professionals discover, enrol in, and complete CPD-accredited courses with role-based access for learners, instructors, and admins.",
      "Modelled a normalised PostgreSQL schema in Sequelize for course content, profiles, enrolments, and progress milestones.",
      "Developed an automated certificate-generation pipeline triggered on completion, with progress-tracking APIs feeding real-time learner analytics.",
      "Hardened the surface with input validation, error-handling middleware, and structured logging for production debuggability.",
    ],
    stack: [
      "Node.js",
      "PostgreSQL",
      "Sequelize",
      "ReactJS",
      "Multi-tenant",
      "Certificates",
    ],
    flair: "/ multi-tenant · analytics · accreditation",
  },
  {
    index: "III.",
    name: "Exsplit",
    tagline: "Microservices for expense sharing & settlement.",
    domain: "Fintech",
    role: "Microservice architect · Admin UI",
    body: [
      "Architected a distributed Node.js microservices system with clear service boundaries for users, group expenses, settlements, and notifications.",
      "Wired RabbitMQ as the async message broker, delivering real-time balance-update notifications across devices with low latency.",
      "Engineered multi-party settlement algorithms supporting equal, percentage-based, and custom splits — with transaction-safe writes under concurrency.",
      "Cached session and group data in Redis, cutting redundant DB calls and lifting overall system throughput.",
      "Built the AngularJS admin panel for user management, transaction oversight, and settlement monitoring.",
    ],
    stack: [
      "Node.js",
      "RabbitMQ",
      "Redis",
      "AngularJS",
      "Microservices",
      "Event-driven",
    ],
    flair: "/ split · settle · notify",
  },
];

const personal: PersonalProject[] = [
  {
    name: "RyRa",
    description:
      "A B2B SaaS that lets website owners embed a streaming AI chat assistant via a React package or a one-line script tag. Handles multi-tenant workspaces, RAG over uploaded docs with pgvector, domain-locked API keys, plan-aware quotas, and Razorpay subscriptions — so customers ship the widget in minutes instead of building it for weeks.",
    stack: [
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "pgvector",
      "Razorpay",
      "SSE",
      "Docker",
      "GHCR",
      "GitHub Actions",
    ],
    live: "https://ryra.tbkpro.in",
    accent: "sienna",
    image: "/projects/RyRa.png",
  },
  {
    name: "AskAi",
    description:
      "An AI chatbot built on NVIDIA's hosted LLM endpoints. A lean Node.js + TypeScript backend handles prompt routing, streaming responses, and API-key safekeeping for a fast, focused chat experience.",
    stack: ["Node.js", "TypeScript", "NVIDIA AI"],
    live: "https://askai.tbkpro.in",
    accent: "moss",
    image: "/projects/askai.jpg",
  },
  {
    name: "Project Three",
    description:
      "Placeholder for an open-source contribution or tooling project. Swap in real details when ready.",
    stack: ["Python", "FastAPI", "Docker"],
    github: "https://github.com/",
    live: "https://example.com",
    accent: "ember",
  },
  {
    name: "Project Four",
    description:
      "Placeholder for an exploratory project — automation, scripts, or a UI experiment.",
    stack: ["React", "Vite", "Zustand"],
    github: "https://github.com/",
    accent: "sienna",
  },
];

function WorkCard({ p, last }: { p: WorkProject; last: boolean }) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`relative border-t border-rule/70 py-10 md:py-12 ${
        last ? "border-b" : ""
      }`}
    >
      <div className="grid grid-cols-12 gap-y-6 md:gap-x-8 items-start">
        {/* Number + meta */}
        <div className="col-span-12 md:col-span-2">
          <div className="num-marker">{p.index}</div>
          <div className="mt-3 mono-label">{p.domain}</div>
          <div className="mt-2 text-[12px] text-muted leading-relaxed">
            {p.role}
          </div>
        </div>

        {/* Title + body */}
        <div className="col-span-12 md:col-span-7">
          <h3 className="display tracking-tightest leading-[0.95] text-[8vw] md:text-[3.25rem] text-ink">
            {p.name}
            <span className="display-italic text-sienna text-3xl md:text-4xl align-top ml-1.5">
              *
            </span>
          </h3>
          <p className="mt-3 display-italic text-lg md:text-xl text-ash leading-snug max-w-[40ch]">
            {p.tagline}
          </p>

          <ul className="mt-6 space-y-3 max-w-2xl">
            {p.body.map((line, k) => (
              <li
                key={k}
                className="flex gap-4 text-[14.5px] md:text-[15px] leading-relaxed text-ash"
              >
                <span className="mono-label text-sienna pt-1 shrink-0 tabular-nums">
                  ·0{k + 1}
                </span>
                <span className="text-pretty">{line}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stack */}
        <div className="col-span-12 md:col-span-3">
          <div className="mono-label mb-3">Stack</div>
          <div className="flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <span
                key={s}
                className="text-[12px] px-2.5 py-1 border border-rule/80 text-ash hover:border-sienna hover:text-ink transition-colors duration-300"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-5 mono-label text-sienna">{p.flair}</div>
        </div>
      </div>
    </motion.article>
  );
}

const accentMap: Record<PersonalProject["accent"], string> = {
  sienna: "from-sienna/25 to-sienna/5",
  moss: "from-moss/25 to-moss/5",
  ember: "from-ember/30 to-ember/5",
};

function PersonalCard({ p, i }: { p: PersonalProject; i: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
      className="group border border-rule/70 hover:border-ink/40 transition-colors duration-500 bg-parchment"
    >
      {/* Thumbnail */}
      <div
        className={`relative aspect-[16/10] border-b border-rule/70 overflow-hidden ${
          p.image ? "bg-paper/40" : `bg-gradient-to-br ${accentMap[p.accent]}`
        }`}
      >
        {p.image ? (
          <Image
            src={p.image}
            alt={`${p.name} thumbnail`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="mono-label text-ash/60">
              thumbnail · 16:10
            </span>
          </div>
        )}
        <div className="absolute top-3 left-3 mono-label text-ash/70 mix-blend-multiply">
          {String(i + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Body */}
      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="display tracking-tightest text-2xl md:text-3xl leading-tight text-ink">
            {p.name}
          </h3>
          <div className="flex items-center gap-3 pt-2 shrink-0">
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.name} GitHub repository`}
                className="mono-label text-ash hover:text-sienna transition-colors"
              >
                GitHub ↗
              </a>
            )}
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.name} live site`}
                className="mono-label text-ash hover:text-sienna transition-colors"
              >
                Live ↗
              </a>
            )}
          </div>
        </div>

        <p className="mt-3 text-[14.5px] leading-relaxed text-ash text-pretty">
          {p.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <span
              key={s}
              className="text-[11.5px] px-2.5 py-1 border border-rule/80 text-ash group-hover:border-rule transition-colors"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

type Tab = "professional" | "personal";

function TabButton({
  active,
  onClick,
  label,
  count,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative pb-2 mono-label transition-colors ${
        active ? "text-ink" : "text-muted hover:text-ash"
      }`}
      aria-pressed={active}
    >
      <span>{label}</span>
      <span className="ml-2 text-[10px] tabular-nums opacity-70">
        ({String(count).padStart(2, "0")})
      </span>
      <span
        className={`absolute left-0 right-0 -bottom-px h-px transition-all duration-500 ${
          active ? "bg-sienna" : "bg-transparent"
        }`}
      />
    </button>
  );
}

export default function Projects() {
  const [tab, setTab] = useState<Tab>("professional");

  return (
    <section
      id="work"
      className="relative px-6 md:px-10 max-w-[1440px] mx-auto py-16 md:py-32"
    >
      <div className="grid grid-cols-12 gap-y-10 md:gap-x-8 mb-10 md:mb-12">
        <Reveal className="col-span-12 md:col-span-2">
          <div className="mono-label">04 — Projects</div>
        </Reveal>

        <div className="col-span-12 md:col-span-10">
          <Reveal>
            <h2 className="display tracking-tightest text-[11vw] md:text-[5.5rem] leading-[0.92] text-ink">
              Things I&apos;ve <span className="display-italic">built</span>
              <span className="text-sienna">.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-pretty text-base md:text-lg leading-relaxed text-ash max-w-2xl">
              Production systems shipped at Redblocks, alongside personal builds
              and experiments where I get to try new ideas end to end.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Tab bar */}
      <Reveal delay={0.2}>
        <div className="flex items-end justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <TabButton
              active={tab === "professional"}
              onClick={() => setTab("professional")}
              label="Professional"
              count={work.length}
            />
            <TabButton
              active={tab === "personal"}
              onClick={() => setTab("personal")}
              label="Personal"
              count={personal.length}
            />
          </div>
          <div className="hidden md:block mono-label text-muted">
            {tab === "professional" ? "client work" : "side builds"}
          </div>
        </div>
      </Reveal>

      {/* Content */}
      <AnimatePresence mode="wait">
        {tab === "professional" ? (
          <motion.div
            key="professional"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {work.map((p, i) => (
              <WorkCard
                key={p.name}
                p={p}
                last={i === work.length - 1}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="personal"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pt-10 md:pt-12"
          >
            {personal.map((p, i) => (
              <PersonalCard key={p.name} p={p} i={i} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
