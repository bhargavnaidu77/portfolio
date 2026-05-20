"use client";

import { motion, useReducedMotion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function Footer() {
  const reduce = useReducedMotion();

  return (
    <footer
      id="contact"
      className="relative bg-ink text-parchment px-6 md:px-10 pt-28 md:pt-36 pb-10 mt-12 overflow-hidden"
    >
      {/* Decorative giant glyph */}
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 80 }}
        whileInView={reduce ? { opacity: 0.05 } : { opacity: 0.05, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="display absolute -bottom-24 left-0 right-0 text-center text-[42vw] leading-none tracking-tightest pointer-events-none select-none"
      >
        tbk
      </motion.div>

      <div className="relative max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 gap-y-10 md:gap-x-8">
          <div className="col-span-12 md:col-span-2 mono-label !text-ember">
            07 — Contact
          </div>

          <div className="col-span-12 md:col-span-10">
            <motion.h2
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="display tracking-tightest text-[14vw] md:text-[10rem] leading-[0.86] max-w-[10ch]"
            >
              Let&apos;s
              <br />
              <span className="display-italic text-ember">build</span>{" "}
              something.
            </motion.h2>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
              <div>
                <div className="mono-label !text-ember/80">Email</div>
                <a
                  href="mailto:bhargavnaidu23494@gmail.com"
                  className="block mt-2 text-xl md:text-2xl underline-link"
                >
                  bhargavnaidu23494@gmail.com
                </a>
              </div>
              <div>
                <div className="mono-label !text-ember/80">Phone</div>
                <a
                  href="tel:+919133007708"
                  className="block mt-2 text-xl md:text-2xl tabular-nums underline-link"
                >
                  +91 91330 07708
                </a>
              </div>
              <div>
                <div className="mono-label !text-ember/80">Elsewhere</div>
                <a
                  href="https://www.linkedin.com/in/bhargava-kishore-tsavatapalli-284b5b25a"
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-2 text-xl md:text-2xl underline-link"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="/Bhargava_Kishore_Resume.pdf"
                  download
                  className="block mt-1 text-xl md:text-2xl underline-link"
                >
                  Download CV ↓
                </a>
                <a
                  href="https://bhargavnaidu-af38d.web.app"
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-1 text-xl md:text-2xl underline-link"
                >
                  bhargavnaidu-af38d.web.app ↗
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-2 mono-label !text-ember mt-20 md:mt-24">
            08 — Message
          </div>
          <div className="col-span-12 md:col-span-10 mt-20 md:mt-24">
            <div className="mb-10 max-w-xl text-parchment/75 text-[15px] md:text-base leading-relaxed">
              Have a role, a project, or an idea worth talking about? Send a
              note — I read every message and reply within a day or two.
            </div>
            <ContactForm />
          </div>
        </div>

        <div className="mt-24 pt-6 border-t border-parchment/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mono-label !text-parchment/55">
          <div>
            © 2026 · Bhargava Kishore Tsavatapalli · Hyderabad, IN
          </div>
          <div className="flex items-center gap-3">
            <span>Built with Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
