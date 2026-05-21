"use client";

import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 md:px-10 max-w-[1440px] mx-auto py-16 md:py-40"
    >
      <div className="grid grid-cols-12 gap-y-12 md:gap-x-8">
        <Reveal className="col-span-12 md:col-span-2" delay={0}>
          <div className="mono-label">02 — About</div>
        </Reveal>

        <div className="col-span-12 md:col-span-10">
          <Reveal>
            <h2 className="display tracking-tightest text-[10vw] md:text-[5.5rem] leading-[0.92] text-ink max-w-[12ch]">
              I build the
              <br />
              <span className="display-italic">systems</span>
              <br />
              behind the app.
            </h2>
          </Reveal>

          <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <Reveal delay={0.1}>
              <p className="text-pretty text-[17px] md:text-lg leading-[1.65] text-ash">
                For two years, I&apos;ve worked on production systems —
                designing REST APIs in{" "}
                <span className="text-ink">Node.js</span> and{" "}
                <span className="text-ink">Express</span>, building services
                with <span className="text-ink">RabbitMQ</span>, and designing
                schemas in <span className="text-ink">Sequelize</span> for
                Postgres and MySQL. The focus is on what matters: webhooks
                that don&apos;t double-charge, settlements that stay accurate,
                and dashboards that load quickly.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-pretty text-[17px] md:text-lg leading-[1.65] text-ash">
                I follow{" "}
                <span className="text-ink">SOLID principles</span>, MVC, and
                event-driven design — and use AWS{" "}
                <span className="text-ink">Lambda · RDS · API Gateway</span>{" "}
                when serverless makes sense. I&apos;ve also written ReactJS
                for the booking and learner screens I built on the backend,
                plus AngularJS for an admin panel. The goal stays the same:
                a clean system that works well for the people using it.
              </p>
            </Reveal>
          </div>

          {/* Stats strip */}
          <Reveal delay={0.3}>
            <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 border-t border-rule/70">
              {[
                { v: "2+", l: "Years shipping" },
                { v: "3", l: "Production apps" },
                { v: "12+", l: "Service boundaries" },
                { v: "∞", l: "Cups of chai" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="border-b border-rule/70 md:border-b-0 md:border-r last:border-r-0 py-7 pr-6 last:pr-0 [&:nth-last-child(-n+2)]:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0"
                >
                  <div className="display text-5xl md:text-6xl text-ink leading-none tracking-tightest">
                    {s.v}
                  </div>
                  <div className="mono-label mt-3">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
