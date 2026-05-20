"use client";

import Reveal from "./Reveal";

const bullets = [
  "Built and maintained production REST APIs with Node.js & Express.js powering 3 live client applications.",
  "Architected event-driven microservices using RabbitMQ, reducing inter-service coupling and improving reliability.",
  "Integrated AWS Lambda, RDS, and API Gateway for serverless deployments and scalable cloud infrastructure.",
  "Optimised MySQL/PostgreSQL schemas with Sequelize ORM, cutting slow query response times significantly.",
  "Implemented JWT-based auth, role-based access control, and secure third-party payment integrations.",
  "Contributed to ReactJS front-end across projects and shipped AngularJS admin-panel components on an earlier project.",
  "Wrote Python scripts to automate internal workflows and streamline data processing.",
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative px-6 md:px-10 max-w-[1440px] mx-auto py-28 md:py-40"
    >
      <div className="grid grid-cols-12 gap-y-12 md:gap-x-8">
        <Reveal className="col-span-12 md:col-span-2">
          <div className="mono-label">03 — Experience</div>
        </Reveal>

        <div className="col-span-12 md:col-span-10">
          <Reveal>
            <h2 className="display tracking-tightest text-[10vw] md:text-[5.5rem] leading-[0.92] text-ink">
              Where I <span className="display-italic">work</span>.
            </h2>
          </Reveal>

          <div className="mt-16 border-t border-rule/70">
            <div className="grid grid-cols-12 gap-y-6 md:gap-x-8 py-10 border-b border-rule/70">
              {/* Date column */}
              <Reveal className="col-span-12 md:col-span-2" delay={0.05}>
                <div className="mono-label leading-relaxed">
                  May 2024 —
                  <br />
                  Present
                </div>
                <div className="mt-2 text-[12px] text-muted font-mono">
                  2+ yrs
                </div>
              </Reveal>

              {/* Role / Org */}
              <div className="col-span-12 md:col-span-6">
                <Reveal delay={0.1}>
                  <div className="display tracking-tightest text-4xl md:text-5xl text-ink leading-tight">
                    Software Developer
                  </div>
                  <div className="mt-2 text-ash text-lg">
                    <span className="text-ink">Redblocks Solutions</span>
                    <span className="mx-3 text-rule">/</span>
                    <span>Hyderabad, India</span>
                  </div>
                </Reveal>

                <Reveal delay={0.2}>
                  <ul className="mt-8 space-y-4">
                    {bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex gap-4 text-[15.5px] md:text-base leading-relaxed text-ash"
                      >
                        <span className="mono-label text-sienna pt-1 tabular-nums shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-pretty">{b}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>

              {/* Tags */}
              <div className="col-span-12 md:col-span-4">
                <Reveal delay={0.25}>
                  <div className="mono-label mb-4">Primary tools</div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Node.js",
                      "Express.js",
                      "TypeScript",
                      "RabbitMQ",
                      "Sequelize",
                      "PostgreSQL",
                      "MySQL",
                      "Redis",
                      "AWS Lambda",
                      "AWS RDS",
                      "API Gateway",
                      "ReactJS",
                      "AngularJS",
                      "Python",
                    ].map((t) => (
                      <span
                        key={t}
                        className="text-[12px] px-3 py-1.5 border border-rule/80 text-ash hover:border-sienna hover:text-ink transition-colors duration-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
