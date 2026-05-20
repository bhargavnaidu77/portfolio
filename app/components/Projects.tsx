"use client";

import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";

type Project = {
  index: string;
  name: string;
  tagline: string;
  domain: string;
  role: string;
  body: string[];
  stack: string[];
  flair: string;
};

const projects: Project[] = [
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

function Card({ p, i }: { p: Project; i: number }) {
  const reduce = useReducedMotion();
  const isOdd = i % 2 === 1;

  return (
    <motion.article
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 60 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative border-t border-rule/70 py-14 md:py-20 group ${
        i === projects.length - 1 ? "border-b" : ""
      }`}
    >
      <div className="grid grid-cols-12 gap-y-8 md:gap-x-8 items-start">
        {/* Number + meta */}
        <div className={`col-span-12 md:col-span-2 ${isOdd ? "md:order-2" : ""}`}>
          <div className="num-marker">{p.index}</div>
          <div className="mt-3 mono-label">{p.domain}</div>
          <div className="mt-2 text-[12px] text-muted leading-relaxed">
            {p.role}
          </div>
        </div>

        {/* Title + body */}
        <div
          className={`col-span-12 md:col-span-7 ${
            isOdd ? "md:order-1 md:col-start-3" : ""
          }`}
        >
          <h3 className="display tracking-tightest leading-[0.92] text-[12vw] md:text-[7.5rem] text-ink">
            {p.name}
            <span className="display-italic text-sienna text-[8vw] md:text-5xl align-top ml-2">
              ✺
            </span>
          </h3>
          <p className="mt-4 display-italic text-2xl md:text-3xl text-ash leading-snug max-w-[26ch]">
            {p.tagline}
          </p>

          <ul className="mt-10 space-y-4 max-w-2xl">
            {p.body.map((line, k) => (
              <li
                key={k}
                className="flex gap-4 text-[15.5px] md:text-base leading-relaxed text-ash"
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
        <div
          className={`col-span-12 md:col-span-3 ${
            isOdd ? "md:order-3" : ""
          }`}
        >
          <div className="mono-label mb-4">Stack</div>
          <div className="flex flex-col gap-2">
            {p.stack.map((s) => (
              <div
                key={s}
                className="flex items-baseline justify-between border-b border-rule/60 pb-1.5 group/it"
              >
                <span className="text-ink text-[14px]">{s}</span>
                <span className="mono-label opacity-0 group-hover/it:opacity-100 transition-opacity">
                  ◆
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 mono-label text-sienna">{p.flair}</div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="work"
      className="relative px-6 md:px-10 max-w-[1440px] mx-auto py-28 md:py-40"
    >
      <div className="grid grid-cols-12 gap-y-12 md:gap-x-8 mb-16 md:mb-20">
        <Reveal className="col-span-12 md:col-span-2">
          <div className="mono-label">04 — Selected Work</div>
        </Reveal>

        <div className="col-span-12 md:col-span-10">
          <Reveal>
            <h2 className="display tracking-tightest text-[12vw] md:text-[7rem] leading-[0.9] text-ink">
              Three <span className="display-italic">systems</span>
              <br />
              I&apos;ve <span className="text-sienna">built</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 text-pretty text-lg md:text-xl leading-relaxed text-ash max-w-2xl">
              A short list of the production apps I&apos;ve built at
              Redblocks — projects where reliability, accuracy, and good
              code go together.
            </p>
          </Reveal>
        </div>
      </div>

      <div>
        {projects.map((p, i) => (
          <Card key={p.name} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}
