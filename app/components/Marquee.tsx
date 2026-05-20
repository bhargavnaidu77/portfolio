"use client";

const items = [
  "REST APIs",
  "Event-driven",
  "Microservices",
  "RabbitMQ",
  "Sequelize",
  "PostgreSQL",
  "AWS Lambda",
  "TypeScript",
  "JWT · OAuth",
  "Redis",
  "Scalable systems",
  "Clean architecture",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <section
      aria-hidden
      className="relative border-y border-rule/70 bg-paper/40 overflow-hidden py-6"
    >
      <div className="marquee-track animate-marquee gap-12 px-6">
        {doubled.map((it, i) => (
          <span
            key={i}
            className="flex items-baseline gap-12 text-ink"
          >
            <span className="display text-3xl md:text-5xl tracking-tightest">
              {it}
            </span>
            <span className="display-italic text-sienna text-3xl md:text-5xl">
              "
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
