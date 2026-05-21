"use client";

import Reveal from "./Reveal";

type Group = { title: string; items: string[] };

const groups: Group[] = [
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "Event-driven Architecture",
      "Python",
      "JWT Auth",
      "OAuth 2.0",
      "Middleware",
      "WebSockets",
      "Async/Await",
      "Error Handling",
    ],
  },
  {
    title: "Frontend",
    items: ["ReactJS", "AngularJS", "HTML5", "CSS3", "JavaScript ES6+"],
  },
  {
    title: "Databases",
    items: [
      "MySQL",
      "PostgreSQL",
      "Sequelize ORM",
      "Query Optimisation",
      "Indexing",
      "Transactions",
      "Connection Pooling",
    ],
  },
  {
    title: "Messaging / Cache",
    items: ["RabbitMQ", "Redis — Caching", "Sessions", "Pub/Sub"],
  },
  {
    title: "Cloud · DevOps",
    items: [
      "AWS Lambda",
      "AWS RDS",
      "AWS API Gateway",
      "AWS S3",
      "Docker (basics)",
      "Git · GitHub",
      "Postman",
      "CI/CD",
      "Linux CLI",
    ],
  },
  {
    title: "Concepts",
    items: [
      "SOLID Principles",
      "MVC Architecture",
      "API Rate Limiting",
      "Data Validation",
      "Logging",
      "Unit Testing",
      "Agile / Scrum",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="stack"
      className="relative px-6 md:px-10 max-w-[1440px] mx-auto py-0 md:py-0"
    >
      <div className="grid grid-cols-12 gap-y-12 md:gap-x-8 mb-16">
        <Reveal className="col-span-12 md:col-span-2">
          <div className="mono-label">05 — Stack</div>
        </Reveal>

        <div className="col-span-12 md:col-span-10">
          <Reveal>
            <h2 className="display tracking-tightest text-[10vw] md:text-[5.5rem] leading-[0.92] text-ink">
              Tools I <span className="display-italic">use</span>
              <br /> every day.
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-rule/70">
        {groups.map((g, idx) => (
          <Reveal key={g.title} delay={idx * 0.04}>
            <div className="grid grid-cols-12 gap-y-4 md:gap-x-8 py-8 md:py-10 border-b border-rule/70 items-baseline group hover:bg-paper/40 transition-colors duration-500">
              <div className="col-span-12 md:col-span-3">
                <div className="num-marker">0{idx + 1}</div>
                <div className="display text-3xl md:text-4xl tracking-tightest text-ink mt-2">
                  {g.title}
                </div>
              </div>
              <div className="col-span-12 md:col-span-9">
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {g.items.map((it, i) => (
                    <span
                      key={it}
                      className="text-ash text-[15px] md:text-base hover:text-ink transition-colors"
                    >
                      {it}
                      {i < g.items.length - 1 && (
                        <span className="ml-6 text-rule hidden sm:inline" aria-hidden>
                          ·
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
