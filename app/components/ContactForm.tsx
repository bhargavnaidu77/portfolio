"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Status = "idle" | "sending" | "success" | "error";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export default function ContactForm() {
  const reduce = useReducedMotion();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!ACCESS_KEY) {
      setStatus("error");
      setErrorMessage(
        "Contact form is not configured. Please email directly."
      );
      return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("botcheck")) return;

    setStatus("sending");
    setErrorMessage("");

    const payload = {
      access_key: ACCESS_KEY,
      name: data.get("name"),
      email: data.get("email"),
      subject: data.get("subject") || "New message from portfolio",
      message: data.get("message"),
      from_name: "Portfolio · bhargavnaidu-af38d.web.app",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  }

  const fieldClass =
    "w-full bg-transparent border-0 border-b border-parchment/25 text-parchment placeholder:text-parchment/35 py-3 text-[15px] md:text-base focus:outline-none focus:border-ember transition-colors duration-300";

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
      noValidate
    >
      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="cf-name" className="mono-label !text-ember/80 block">
          Name
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          required
          maxLength={120}
          autoComplete="name"
          className={fieldClass}
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="cf-email" className="mono-label !text-ember/80 block">
          Email
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          maxLength={200}
          autoComplete="email"
          className={fieldClass}
          placeholder="you@domain.com"
        />
      </div>

      <div className="md:col-span-2">
        <label htmlFor="cf-subject" className="mono-label !text-ember/80 block">
          Subject
        </label>
        <input
          id="cf-subject"
          name="subject"
          type="text"
          maxLength={160}
          className={fieldClass}
          placeholder="What is this about? (optional)"
        />
      </div>

      <div className="md:col-span-2">
        <label htmlFor="cf-message" className="mono-label !text-ember/80 block">
          Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          maxLength={4000}
          rows={5}
          className={`${fieldClass} resize-none`}
          placeholder="A few lines about what you'd like to build together…"
        />
      </div>

      <div className="md:col-span-2 flex flex-col md:flex-row md:items-center gap-5 md:gap-8 pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center justify-center gap-2 px-5 py-3 bg-parchment text-ink hover:bg-ember hover:text-parchment transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="mono-label !text-ink group-hover:!text-parchment transition-colors duration-300">
            {status === "sending" ? "Sending…" : "Send message"}
          </span>
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          >
            →
          </span>
        </button>

        <div className="mono-label min-h-[1.2em]" aria-live="polite">
          {status === "success" && (
            <span className="!text-ember">
              Thanks — message received. I&apos;ll reply soon.
            </span>
          )}
          {status === "error" && (
            <span className="!text-ember">{errorMessage}</span>
          )}
        </div>
      </div>
    </motion.form>
  );
}
