"use client";

import Reveal from "./Reveal";

const items = [
  {
    year: "2020 — 2023",
    title: "B.Tech, Computer Science",
    org: "Dr. Paul Raj Engineering College",
  },
  {
    year: "2017 — 2020",
    title: "Diploma, Computer Science",
    org: "BVC Institute of Technology & Science",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative px-6 md:px-10 max-w-[1440px] mx-auto py-16 md:py-36"
    >
      <div className="grid grid-cols-12 gap-y-12 md:gap-x-8">
        <Reveal className="col-span-12 md:col-span-2">
          <div className="mono-label">06 — Education</div>
        </Reveal>

        <div className="col-span-12 md:col-span-10">
          <Reveal>
            <h2 className="display tracking-tightest text-[10vw] md:text-[5rem] leading-[0.92] text-ink">
              Where I <span className="display-italic">learned</span>{" "}
              to code.
            </h2>
          </Reveal>

          <div className="mt-14 border-t border-rule/70">
            {items.map((it, i) => (
              <Reveal key={it.title} delay={i * 0.1}>
                <div className="grid grid-cols-12 gap-y-3 md:gap-x-8 py-8 border-b border-rule/70 items-baseline">
                  <div className="col-span-12 md:col-span-3 mono-label">
                    {it.year}
                  </div>
                  <div className="col-span-12 md:col-span-6 display text-2xl md:text-3xl tracking-tightest text-ink">
                    {it.title}
                  </div>
                  <div className="col-span-12 md:col-span-3 text-ash md:text-right">
                    {it.org}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
