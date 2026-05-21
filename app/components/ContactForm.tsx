"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Status = "idle" | "sending" | "success" | "error";
type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
const MIN_TIME_ON_PAGE_MS = 3000;
const COOLDOWN_MS = 60_000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const reduce = useReducedMotion();
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const mountedAtRef = useRef<number>(0);
  const lastSubmitAtRef = useRef<number>(0);

  useEffect(() => {
    mountedAtRef.current = Date.now();
  }, []);

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        setStatus("idle");
        setStatusMessage("");
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  function validate(data: FormData): FieldErrors {
    const errors: FieldErrors = {};

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name) errors.name = "Please enter your name.";
    else if (name.length < 2) errors.name = "Name is too short.";

    if (!email) errors.email = "Please enter your email.";
    else if (!EMAIL_REGEX.test(email))
      errors.email = "Please enter a valid email.";

    if (!message) errors.message = "Please write a message.";
    else if (message.length < 10)
      errors.message = "Message should be at least 10 characters.";

    return errors;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "sending" || status === "success") return;

    if (!ACCESS_KEY) {
      setStatus("error");
      setStatusMessage(
        "Contact form is not configured. Please email directly."
      );
      return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("botcheck")) return;

    const elapsed = Date.now() - mountedAtRef.current;
    if (elapsed < MIN_TIME_ON_PAGE_MS) {
      setStatus("error");
      setStatusMessage("Please take a moment before sending.");
      return;
    }

    const sinceLast = Date.now() - lastSubmitAtRef.current;
    if (lastSubmitAtRef.current > 0 && sinceLast < COOLDOWN_MS) {
      const wait = Math.ceil((COOLDOWN_MS - sinceLast) / 1000);
      setStatus("error");
      setStatusMessage(
        `Please wait ${wait} seconds before sending another message.`
      );
      return;
    }

    const errors = validate(data);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus("error");
      setStatusMessage("Please fix the highlighted fields.");
      return;
    }

    setFieldErrors({});
    setStatus("sending");
    setStatusMessage("");
    lastSubmitAtRef.current = Date.now();

    const payload = {
      access_key: ACCESS_KEY,
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      subject:
        String(data.get("subject") || "").trim() ||
        "New message from portfolio",
      message: String(data.get("message") || "").trim(),
      from_name: "Portfolio · www.tbkpro.in",
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
        setStatusMessage("Thanks — message received. I'll reply soon.");
        form.reset();
      } else {
        setStatus("error");
        setStatusMessage(result.message || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Network error. Please try again.");
    }
  }

  function clearFieldError(field: keyof FieldErrors) {
    if (fieldErrors[field]) {
      setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  const isSubmitting = status === "sending";
  const isSuccess = status === "success";
  const buttonDisabled = isSubmitting || isSuccess;

  const baseField =
    "w-full bg-transparent border-0 border-b py-3 text-[15px] md:text-base text-parchment placeholder:text-parchment/35 focus:outline-none transition-colors duration-300";
  const fieldClass = (hasError?: string) =>
    `${baseField} ${
      hasError
        ? "border-ember"
        : "border-parchment/25 focus:border-ember"
    }`;

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
          aria-invalid={Boolean(fieldErrors.name)}
          aria-describedby={fieldErrors.name ? "cf-name-error" : undefined}
          onChange={() => clearFieldError("name")}
          disabled={buttonDisabled}
          className={fieldClass(fieldErrors.name)}
          placeholder="Your name"
        />
        {fieldErrors.name && (
          <p
            id="cf-name-error"
            role="alert"
            className="mono-label !text-ember mt-2"
          >
            {fieldErrors.name}
          </p>
        )}
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
          aria-invalid={Boolean(fieldErrors.email)}
          aria-describedby={fieldErrors.email ? "cf-email-error" : undefined}
          onChange={() => clearFieldError("email")}
          disabled={buttonDisabled}
          className={fieldClass(fieldErrors.email)}
          placeholder="you@domain.com"
        />
        {fieldErrors.email && (
          <p
            id="cf-email-error"
            role="alert"
            className="mono-label !text-ember mt-2"
          >
            {fieldErrors.email}
          </p>
        )}
      </div>

      <div className="md:col-span-2">
        <label
          htmlFor="cf-subject"
          className="mono-label !text-ember/80 block"
        >
          Subject
        </label>
        <input
          id="cf-subject"
          name="subject"
          type="text"
          maxLength={160}
          disabled={buttonDisabled}
          className={fieldClass()}
          placeholder="What is this about? (optional)"
        />
      </div>

      <div className="md:col-span-2">
        <label
          htmlFor="cf-message"
          className="mono-label !text-ember/80 block"
        >
          Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          maxLength={4000}
          rows={5}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={
            fieldErrors.message ? "cf-message-error" : undefined
          }
          onChange={() => clearFieldError("message")}
          disabled={buttonDisabled}
          className={`${fieldClass(fieldErrors.message)} resize-none`}
          placeholder="A few lines about what you'd like to build together…"
        />
        {fieldErrors.message && (
          <p
            id="cf-message-error"
            role="alert"
            className="mono-label !text-ember mt-2"
          >
            {fieldErrors.message}
          </p>
        )}
      </div>

      <div className="md:col-span-2 flex flex-col md:flex-row md:items-center gap-5 md:gap-8 pt-2">
        <button
          type="submit"
          disabled={buttonDisabled}
          className="group inline-flex items-center justify-center gap-2 px-5 py-3 bg-parchment text-ink hover:bg-ember hover:text-parchment transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-parchment disabled:hover:text-ink"
        >
          <span className="mono-label !text-ink group-hover:!text-parchment group-disabled:group-hover:!text-ink transition-colors duration-300">
            {isSubmitting
              ? "Sending…"
              : isSuccess
              ? "Sent ✓"
              : "Send message"}
          </span>
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          >
            →
          </span>
        </button>

        <div className="mono-label min-h-[1.2em]" aria-live="polite">
          {isSuccess && <span className="!text-ember">{statusMessage}</span>}
          {status === "error" && (
            <span className="!text-ember">{statusMessage}</span>
          )}
        </div>
      </div>
    </motion.form>
  );
}
