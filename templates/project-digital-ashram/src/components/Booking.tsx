"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { booking, contact, offerings } from "@/config/panditData";

type Errors = {
  name?: string;
  mobile?: string;
  service?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;
const TOTAL_STEPS = 3;
const services = offerings.services.filter((service) => service.enabled);

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3.5 20.5l1.4-4.3A8.5 8.5 0 1 1 20.5 11.6Z" />
      <path d="M8.7 7.8c.4 0 .7.2.9.6l.6 1.2c.1.3 0 .6-.2.8l-.5.5c-.2.2-.2.4-.1.6.5.9 1.3 1.6 2.2 2.1.2.1.4.1.6-.1l.5-.5c.2-.2.5-.3.8-.2l1.2.6c.4.2.6.5.5.9-.1.9-.8 1.6-1.7 1.8-1 .2-2.5-.3-3.9-1.7-1.4-1.4-1.9-2.9-1.7-3.9.2-.9.9-1.5 1.8-1.7Z" />
    </svg>
  );
}

export default function Booking() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [time, setTime] = useState(booking.timePreferences[0]);
  const [mode, setMode] = useState(booking.modes[0]);

  const [errors, setErrors] = useState<Errors>({});
  const [fallback, setFallback] = useState("");
  const [copied, setCopied] = useState(false);

  const [direction, setDirection] = useState<1 | -1>(1);
  const headingRef = useRef<HTMLParagraphElement>(null);
  const copyTimer = useRef<number | null>(null);

  /* A service card or dedicated offering reading page can hand its choice to the form. */
  useEffect(() => {
    const stored = window.sessionStorage.getItem("pandit:preselect-service");
    if (stored && services.some((service) => service.id === stored)) {
      setServiceId(stored);
      window.sessionStorage.removeItem("pandit:preselect-service");
    }

    const onSelect = (event: Event) => {
      const id = (event as CustomEvent<string>).detail;
      if (services.some((service) => service.id === id)) {
        setServiceId(id);
        setErrors((current) => ({ ...current, service: undefined }));
      }
    };

    window.addEventListener("pandit:select-service", onSelect);
    return () => window.removeEventListener("pandit:select-service", onSelect);
  }, []);

  const initialStep = useRef(step);

  useEffect(() => {
    if (initialStep.current === step) return;
    headingRef.current?.focus({ preventScroll: true });
  }, [step]);

  useEffect(() => {
    return () => {
      if (copyTimer.current) window.clearTimeout(copyTimer.current);
    };
  }, []);

  const selectedService = services.find((service) => service.id === serviceId);

  const validateStepOne = () => {
    const next: Errors = {};
    if (name.trim().length < 2) {
      next.name = "Please share the name you would like me to use.";
    }
    const digits = mobile.replace(/\D/g, "");
    if (digits.length < 7 || digits.length > 15) {
      next.mobile = "A reachable number, with the country code if you can.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const goBack = () => {
    setDirection(-1);
    setErrors({});
    setFallback("");
    setStep((current) => Math.max(current - 1, 1));
  };

  const buildMessage = () =>
    [
      "Namaste Pandit ji 🙏",
      "",
      "I would like to book a sitting.",
      "",
      `Name: ${name.trim()}`,
      `Mobile: ${mobile.trim()}`,
      `Service: ${selectedService?.title ?? ""}`,
      `Preferred time: ${time}`,
      `Mode: ${mode}`,
      "",
      "Sent from your website.",
    ].join("\n");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (step === 1) {
      if (validateStepOne()) {
        setDirection(1);
        setStep(2);
      }
      return;
    }

    if (step === 2) {
      if (!serviceId) {
        setErrors({ service: "Choose what feels closest — we can adjust later." });
        return;
      }
      setDirection(1);
      setErrors({});
      setStep(3);
      return;
    }

    const message = buildMessage();
    const digits = contact.whatsappNumber.replace(/\D/g, "");

    if (!digits) {
      setFallback(message);
      return;
    }

    window.open(
      `https://wa.me/${digits}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(fallback);
      setCopied(true);
      if (copyTimer.current) window.clearTimeout(copyTimer.current);
      copyTimer.current = window.setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };

  const stepTitle =
    step === 1 ? booking.steps.one : step === 2 ? booking.steps.two : booking.steps.three;

  return (
    <section id="book" className="scroll-mt-24 bg-sage-wash/70">
      <div className="border-y border-ink/[0.06]">
        <div className="container-page py-24 md:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-8 bg-terracotta/50" aria-hidden="true" />
              <p className="eyebrow">04 — {booking.eyebrow}</p>
            </div>
            <h2 className="mt-7 font-serif text-[clamp(2.1rem,4.4vw,3.5rem)] leading-[1.06] tracking-[-0.018em] text-ink [text-wrap:balance]">
              Contact <em className="italic text-terracotta">now.</em>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-[1.8] text-ink/70">
              {booking.intro}
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-[43rem] md:mt-14">
            <div className="rounded-[1.6rem] border border-ink/[0.08] bg-sand-soft p-6 shadow-[0_40px_90px_-70px_rgba(45,45,45,0.65)] sm:p-9 md:rounded-[2rem] md:p-11">
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex items-center justify-between border-b border-ink/10 pb-5">
                  <p className="text-[9px] uppercase tracking-[0.22em] text-ink/70">
                    Step {String(step).padStart(2, "0")}
                    <span className="mx-2 text-ink/20">/</span>
                    {String(TOTAL_STEPS).padStart(2, "0")}
                  </p>
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    {[1, 2, 3].map((index) => (
                      <span
                        key={index}
                        className={`h-px w-8 transition-colors duration-500 ${
                          step >= index ? "bg-terracotta/80" : "bg-ink/15"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <AnimatePresence mode="wait" initial={false} custom={direction}>
                  <motion.div
                    key={step}
                    custom={direction}
                    initial={{ opacity: 0, x: direction > 0 ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction > 0 ? -20 : 20 }}
                    transition={{ duration: 0.38, ease }}
                    className="min-h-[268px] pt-7 md:min-h-[276px]"
                  >
                    <p
                      ref={headingRef}
                      tabIndex={-1}
                      className="font-serif text-[clamp(1.45rem,2.6vw,1.9rem)] leading-snug tracking-[-0.01em] text-ink outline-none"
                    >
                      {stepTitle}
                    </p>

                    {step === 1 ? (
                      <div className="mt-7 grid gap-8 sm:grid-cols-2 sm:gap-6">
                        <div>
                          <label
                            htmlFor="booking-name"
                            className="text-[9px] uppercase tracking-[0.2em] text-ink/70"
                          >
                            Your name
                          </label>
                          <input
                            id="booking-name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            value={name}
                            onChange={(event) => {
                              setName(event.target.value);
                              if (errors.name) {
                                setErrors((current) => ({ ...current, name: undefined }));
                              }
                            }}
                            placeholder="Meera Iyer"
                            aria-invalid={Boolean(errors.name)}
                            aria-describedby={errors.name ? "name-error" : undefined}
                            className="field mt-2"
                          />
                          {errors.name ? (
                            <p
                              id="name-error"
                              role="alert"
                              className="mt-2.5 text-[11px] leading-relaxed text-terracotta"
                            >
                              {errors.name}
                            </p>
                          ) : null}
                        </div>

                        <div>
                          <label
                            htmlFor="booking-mobile"
                            className="text-[9px] uppercase tracking-[0.2em] text-ink/70"
                          >
                            Mobile number
                          </label>
                          <input
                            id="booking-mobile"
                            name="mobile"
                            type="tel"
                            inputMode="tel"
                            autoComplete="tel"
                            value={mobile}
                            onChange={(event) => {
                              setMobile(event.target.value);
                              if (errors.mobile) {
                                setErrors((current) => ({
                                  ...current,
                                  mobile: undefined,
                                }));
                              }
                            }}
                            placeholder="+91 98765 43210"
                            aria-invalid={Boolean(errors.mobile)}
                            aria-describedby={
                              errors.mobile ? "mobile-error" : undefined
                            }
                            className="field mt-2"
                          />
                          {errors.mobile ? (
                            <p
                              id="mobile-error"
                              role="alert"
                              className="mt-2.5 text-[11px] leading-relaxed text-terracotta"
                            >
                              {errors.mobile}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    ) : null}

                    {step === 2 ? (
                      <fieldset className="mt-7">
                        <legend className="sr-only">Choose a service</legend>
                        <div className="flex flex-wrap gap-2.5">
                          {services.map((service) => (
                            <label key={service.id} className="cursor-pointer">
                              <input
                                type="radio"
                                name="service"
                                value={service.id}
                                checked={serviceId === service.id}
                                onChange={() => {
                                  setServiceId(service.id);
                                  setErrors({});
                                }}
                                className="peer sr-only"
                              />
                              <span className="inline-flex rounded-full border border-ink/15 px-4 py-2.5 text-[12.5px] leading-none tracking-[0.005em] text-ink/70 transition-colors duration-300 hover:border-ink/30 peer-checked:border-terracotta peer-checked:bg-terracotta peer-checked:text-sand peer-focus-visible:outline peer-focus-visible:outline-1 peer-focus-visible:outline-offset-[3px] peer-focus-visible:outline-terracotta sm:px-4">
                                {service.title}
                              </span>
                            </label>
                          ))}
                        </div>
                        {errors.service ? (
                          <p
                            role="alert"
                            className="mt-4 text-[11px] leading-relaxed text-terracotta"
                          >
                            {errors.service}
                          </p>
                        ) : null}
                        <p className="mt-6 text-[11.5px] leading-relaxed text-ink/70">
                          Not certain? Choose the nearest one — we will find the
                          right shape together.
                        </p>
                      </fieldset>
                    ) : null}

                    {step === 3 ? (
                      <div className="mt-7 grid gap-8 sm:grid-cols-2 sm:gap-6">
                        <div>
                          <label
                            htmlFor="booking-time"
                            className="text-[9px] uppercase tracking-[0.2em] text-ink/70"
                          >
                            Preferred time
                          </label>
                          <div className="relative">
                            <select
                              id="booking-time"
                              name="time"
                              value={time}
                              onChange={(event) => setTime(event.target.value)}
                              className="field mt-2"
                            >
                              {booking.timePreferences.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>
                            <svg
                              width="10"
                              height="6"
                              viewBox="0 0 10 6"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1"
                              className="pointer-events-none absolute bottom-4 right-1 text-ink/40"
                              aria-hidden="true"
                            >
                              <path d="m1 1 4 4 4-4" />
                            </svg>
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="booking-mode"
                            className="text-[9px] uppercase tracking-[0.2em] text-ink/70"
                          >
                            How shall we meet
                          </label>
                          <div className="relative">
                            <select
                              id="booking-mode"
                              name="mode"
                              value={mode}
                              onChange={(event) => setMode(event.target.value)}
                              className="field mt-2"
                            >
                              {booking.modes.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>
                            <svg
                              width="10"
                              height="6"
                              viewBox="0 0 10 6"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1"
                              className="pointer-events-none absolute bottom-4 right-1 text-ink/40"
                              aria-hidden="true"
                            >
                              <path d="m1 1 4 4 4-4" />
                            </svg>
                          </div>
                        </div>

                        <p className="text-[11.5px] leading-relaxed text-ink/70 sm:col-span-2">
                          All times are IST. If you are in another part of the
                          world, tell me in the WhatsApp message and we will
                          find an hour that holds us both.
                        </p>
                      </div>
                    ) : null}
                  </motion.div>
                </AnimatePresence>

                <div className="mt-6 flex items-center justify-between gap-4 border-t border-ink/10 pt-6">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={goBack}
                      className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-ink/70 transition-colors duration-300 hover:text-ink"
                    >
                      <svg
                        width="14"
                        height="10"
                        viewBox="0 0 14 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        aria-hidden="true"
                      >
                        <path d="M13 5H1M5 1 1 5l4 4" />
                      </svg>
                      Back
                    </button>
                  ) : (
                    <span aria-hidden="true" />
                  )}

                  <button
                    type="submit"
                    className={`inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-[10px] uppercase tracking-[0.18em] transition-colors duration-500 sm:px-7 ${
                      step === 3
                        ? "bg-terracotta text-sand hover:bg-terracotta-deep"
                        : "bg-ink text-sand hover:bg-terracotta"
                    }`}
                  >
                    {step === 3 ? (
                      <>
                        <WhatsAppIcon />
                        {booking.submitLabel}
                      </>
                    ) : (
                      <>
                        Continue
                        <svg
                          width="14"
                          height="10"
                          viewBox="0 0 14 10"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          aria-hidden="true"
                        >
                          <path d="M1 5h12M9 1l4 4-4 4" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>

                {step === 3 && !fallback ? (
                  <p className="mt-4 text-right text-[10px] leading-relaxed text-ink/70">
                    {booking.successNote}
                  </p>
                ) : null}
              </form>

              {fallback ? (
                <div className="mt-7 rounded-2xl border border-terracotta/20 bg-terracotta/[0.04] p-5">
                  <p className="text-[12px] leading-relaxed text-ink/70">
                    {booking.fallbackNote}
                  </p>
                  <pre className="mt-4 max-h-56 overflow-auto whitespace-pre-wrap rounded-xl bg-sand/70 p-4 font-sans text-[12px] leading-relaxed text-ink/70">
                    {fallback}
                  </pre>
                  <button
                    type="button"
                    onClick={copyMessage}
                    className="mt-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-terracotta transition-opacity duration-300 hover:opacity-70"
                  >
                    {copied ? "Copied" : "Copy message"}
                  </button>
                </div>
              ) : null}
            </div>

            <div className="mt-8 flex flex-col items-center justify-between gap-3 text-center text-[10px] uppercase tracking-[0.16em] text-ink/70 sm:flex-row sm:text-left">
              <p>{contact.availability}</p>
              <p>{contact.hours}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
