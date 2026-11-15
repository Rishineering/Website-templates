"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  CheckCircle2,
  Lock,
  MessageCircle,
  Phone,
  Video,
  Users,
  ShieldCheck,
  Award,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import {
  siteData,
  getAllEnabledBookableServices,
  buildWhatsAppUrl,
} from "@/config/siteData";

function BookingWizardContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");

  const availableServices = getAllEnabledBookableServices();
  const astrologyOptions = availableServices.filter(
    (s) => s.category === "Astrology Service"
  );
  const poojaOptions = availableServices.filter(
    (s) => s.category === "Pooja Service"
  );

  // Wizard Step (1, 2, or 3)
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form State
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [consultationType, setConsultationType] = useState<string>("Online");
  const [selectedService, setSelectedService] = useState<string>(
    availableServices[0]?.label || "Kundli Analysis"
  );
  const [consultationMode, setConsultationMode] = useState<string>(
    siteData.booking.consultationModes[0] || "Video Call"
  );
  const [timeSlot, setTimeSlot] = useState<string>(
    siteData.booking.timeSlots[0] || "9:00 AM - 11:00 AM"
  );
  const [message, setMessage] = useState("");

  // Validation & Modal State
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [pendingWhatsAppUrl, setPendingWhatsAppUrl] = useState("");
  const [phoneComingSoonNotice, setPhoneComingSoonNotice] = useState(false);

  // Pre-select service if `?service=<slug>` query param matches an enabled service
  useEffect(() => {
    if (!serviceParam) return;
    const matched = availableServices.find(
      (item) =>
        item.slug.toLowerCase() === serviceParam.toLowerCase() ||
        item.label.toLowerCase() === serviceParam.toLowerCase()
    );
    if (matched) {
      setSelectedService(matched.label);
    }
  }, [serviceParam, availableServices]);

  const validateStep1 = () => {
    const nextErrors: { [key: string]: string } = {};
    if (!name.trim()) {
      nextErrors.name = "Please enter your full name.";
    }
    const digitsOnly = mobile.replace(/\D/g, "");
    if (digitsOnly.length !== 10) {
      nextErrors.mobile = "Please enter a valid 10-digit mobile number.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const validateStep2 = () => {
    const nextErrors: { [key: string]: string } = {};
    if (!consultationType) {
      nextErrors.consultationType = "Please choose a consultation type.";
    }
    if (!selectedService) {
      nextErrors.selectedService = "Please select a service.";
    }
    if (!consultationMode) {
      nextErrors.consultationMode = "Please select a consultation mode.";
    }
    if (!timeSlot) {
      nextErrors.timeSlot = "Please select a preferred time slot.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleNextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const handlePrevStep = () => {
    setErrors({});
    if (step === 2) setStep(1);
    if (step === 3) setStep(2);
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep1() || !validateStep2()) return;

    const fee = siteData.booking.consultationFee;
    const payload = [
      `*Consultation Booking Request!*`,
      `*Name:* ${name.trim()}`,
      `*Mobile:* ${mobile.trim()}`,
      `*Type:* ${consultationType}`,
      `*Service:* ${selectedService}`,
      `*Mode:* ${consultationMode}`,
      `*Time Slot:* ${timeSlot}`,
      `*Message:* ${message.trim() || "N/A"}`,
      `*Consultation Fee:* ${fee}`,
    ].join("\n");

    const encodedText = encodeURIComponent(payload);
    const rawWhatsApp = (siteData.contact.whatsappNumber || "").replace(
      /\D/g,
      ""
    );
    const waUrl = rawWhatsApp
      ? `https://wa.me/${rawWhatsApp}?text=${encodedText}`
      : `https://wa.me/?text=${encodedText}`;

    setPendingWhatsAppUrl(waUrl);
    setShowConfirmModal(true);

    // Trigger WhatsApp redirect in a new tab
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  const hasPhone = Boolean(siteData.contact.phoneNumber?.trim());

  const handleCallClick = () => {
    if (hasPhone) {
      window.location.href = `tel:${siteData.contact.phoneNumber}`;
    } else {
      setPhoneComingSoonNotice(true);
      setTimeout(() => setPhoneComingSoonNotice(false), 4000);
    }
  };

  return (
    <div className="relative py-12 sm:py-16 md:py-20">
      {/* Background Aura */}
      <div className="pointer-events-none absolute top-16 left-1/2 -translate-x-1/2 w-[680px] h-[360px] rounded-full bg-gold-500/8 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 sacred-badge mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>{siteData.booking.badge}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-gold-gradient tracking-tight">
            {siteData.booking.heading}
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-3">
            {siteData.booking.subheading}
          </p>
        </div>

        {/* 2-Column Layout: Left 3-Step Wizard + Right Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* LEFT COLUMN: Interactive 3-Step Wizard */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="luxury-card rounded-3xl p-6 sm:p-10">
              {/* Progress Indicator: Steps 1, 2, 3 with Animated Gold Progress Bar */}
              <div className="relative z-10 mb-10">
                <div className="relative flex items-center justify-between">
                  {/* Track Line */}
                  <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-[var(--border-gold)] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300"
                      initial={{ width: "0%" }}
                      animate={{
                        width:
                          step === 1 ? "0%" : step === 2 ? "50%" : "100%",
                      }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                    />
                  </div>

                  {[
                    { num: 1, label: "Personal Info" },
                    { num: 2, label: "Consultation Details" },
                    { num: 3, label: "Confirm & Book" },
                  ].map((item) => {
                    const isActive = step === item.num;
                    const isCompleted = step > item.num;
                    return (
                      <div
                        key={item.num}
                        className="relative z-10 flex flex-col items-center"
                      >
                        <div
                          className={`w-11 h-11 rounded-full flex items-center justify-center font-serif text-base font-bold border-2 transition-all duration-300 ${
                            isActive
                              ? "btn-gold-primary border-gold-200 scale-110 shadow-gold-glow"
                              : isCompleted
                              ? "bg-gold-500 text-obsidian border-gold-300"
                              : "bg-[var(--bg-card-solid)] text-[var(--text-muted)] border-[var(--border-gold)]"
                          }`}
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="w-5 h-5 text-obsidian" />
                          ) : (
                            item.num
                          )}
                        </div>
                        <span
                          className={`mt-2 text-xs font-semibold tracking-wide ${
                            isActive || isCompleted
                              ? "text-gold-400"
                              : "text-[var(--text-muted)]"
                          }`}
                        >
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Wizard Steps Content */}
              <form
                onSubmit={handleConfirmBooking}
                className="relative z-10"
                noValidate
              >
                <AnimatePresence mode="wait">
                  {/* STEP 1: Personal Information */}
                  {step === 1 && (
                    <motion.div
                      key="step-1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="border-b border-[var(--border-gold)]/60 pb-3">
                        <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold">
                          Step 1 of 3
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mt-0.5">
                          Personal Information
                        </h2>
                      </div>

                      {/* Your Name * */}
                      <div>
                        <label
                          htmlFor="booking-name"
                          className="block text-sm font-semibold text-[var(--text-primary)] mb-2"
                        >
                          Your Name <span className="text-gold-400">*</span>
                        </label>
                        <input
                          id="booking-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            if (errors.name)
                              setErrors({ ...errors, name: "" });
                          }}
                          placeholder="Enter your full name"
                          className="w-full px-4 py-3.5 rounded-xl bg-[var(--bg-primary)]/80 border border-[var(--border-gold)] focus:border-gold-400 focus:outline-none text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition-colors"
                        />
                        {errors.name && (
                          <p className="text-xs text-red-400 mt-1.5">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Mobile Number * */}
                      <div>
                        <label
                          htmlFor="booking-mobile"
                          className="block text-sm font-semibold text-[var(--text-primary)] mb-2"
                        >
                          Mobile Number <span className="text-gold-400">*</span>
                        </label>
                        <input
                          id="booking-mobile"
                          type="tel"
                          required
                          maxLength={10}
                          value={mobile}
                          onChange={(e) => {
                            const digits = e.target.value
                              .replace(/\D/g, "")
                              .slice(0, 10);
                            setMobile(digits);
                            if (errors.mobile)
                              setErrors({ ...errors, mobile: "" });
                          }}
                          placeholder="Enter 10-digit mobile number"
                          className="w-full px-4 py-3.5 rounded-xl bg-[var(--bg-primary)]/80 border border-[var(--border-gold)] focus:border-gold-400 focus:outline-none text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition-colors"
                        />
                        {errors.mobile && (
                          <p className="text-xs text-red-400 mt-1.5">
                            {errors.mobile}
                          </p>
                        )}
                      </div>

                      <div className="pt-4 flex justify-end">
                        <button
                          type="button"
                          onClick={handleNextStep}
                          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl btn-gold-primary text-sm sm:text-base font-semibold"
                        >
                          <span>Next →</span>
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2: Consultation Details */}
                  {step === 2 && (
                    <motion.div
                      key="step-2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="border-b border-[var(--border-gold)]/60 pb-3">
                        <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold">
                          Step 2 of 3
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mt-0.5">
                          Consultation Details
                        </h2>
                      </div>

                      {/* Consultation Type *: Interactive Luxury Cards for "Online" vs "Offline" */}
                      <div>
                        <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2.5">
                          Consultation Type{" "}
                          <span className="text-gold-400">*</span>
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {siteData.booking.consultationTypes.map((typeObj) => {
                            const isSelected =
                              consultationType === typeObj.id;
                            return (
                              <button
                                key={typeObj.id}
                                type="button"
                                onClick={() => setConsultationType(typeObj.id)}
                                className={`text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                                  isSelected
                                    ? "border-gold-400 bg-gold-500/15 shadow-gold-glow"
                                    : "border-[var(--border-gold)] bg-[var(--bg-primary)]/60 hover:border-gold-400/60"
                                }`}
                              >
                                <div
                                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                                    isSelected
                                      ? "bg-gold-500 text-obsidian"
                                      : "bg-gold-500/10 text-gold-400 border border-gold-400/30"
                                  }`}
                                >
                                  {typeObj.id === "Online" ? (
                                    <Video className="w-5 h-5" />
                                  ) : (
                                    <Users className="w-5 h-5" />
                                  )}
                                </div>
                                <div>
                                  <div className="font-serif text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
                                    <span>{typeObj.title}</span>
                                    {isSelected && (
                                      <CheckCircle2 className="w-4 h-4 text-gold-400" />
                                    )}
                                  </div>
                                  <p className="text-xs text-[var(--text-secondary)] mt-0.5 leading-relaxed">
                                    {typeObj.subtitle}
                                  </p>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Select Service * (Dynamically populated from enabled astrologyServices & poojaServices) */}
                      <div>
                        <label
                          htmlFor="booking-service"
                          className="block text-sm font-semibold text-[var(--text-primary)] mb-2"
                        >
                          Select Service{" "}
                          <span className="text-gold-400">*</span>
                        </label>
                        <select
                          id="booking-service"
                          value={selectedService}
                          onChange={(e) => setSelectedService(e.target.value)}
                          className="w-full px-4 py-3.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-gold)] focus:border-gold-400 focus:outline-none text-[var(--text-primary)]"
                        >
                          {astrologyOptions.length > 0 && (
                            <optgroup label="Astrology Services">
                              {astrologyOptions.map((item) => (
                                <option key={item.slug} value={item.label}>
                                  {item.label}
                                </option>
                              ))}
                            </optgroup>
                          )}
                          {poojaOptions.length > 0 && (
                            <optgroup label="Pooja Services">
                              {poojaOptions.map((item) => (
                                <option key={item.slug} value={item.label}>
                                  {item.label}
                                </option>
                              ))}
                            </optgroup>
                          )}
                        </select>
                      </div>

                      {/* Consultation Mode * & Preferred Time Slot * */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="booking-mode"
                            className="block text-sm font-semibold text-[var(--text-primary)] mb-2"
                          >
                            Consultation Mode{" "}
                            <span className="text-gold-400">*</span>
                          </label>
                          <select
                            id="booking-mode"
                            value={consultationMode}
                            onChange={(e) =>
                              setConsultationMode(e.target.value)
                            }
                            className="w-full px-4 py-3.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-gold)] focus:border-gold-400 focus:outline-none text-[var(--text-primary)]"
                          >
                            {siteData.booking.consultationModes.map((mode) => (
                              <option key={mode} value={mode}>
                                {mode}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="booking-timeslot"
                            className="block text-sm font-semibold text-[var(--text-primary)] mb-2"
                          >
                            Preferred Time Slot{" "}
                            <span className="text-gold-400">*</span>
                          </label>
                          <select
                            id="booking-timeslot"
                            value={timeSlot}
                            onChange={(e) => setTimeSlot(e.target.value)}
                            className="w-full px-4 py-3.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-gold)] focus:border-gold-400 focus:outline-none text-[var(--text-primary)]"
                          >
                            {siteData.booking.timeSlots.map((slot) => (
                              <option key={slot} value={slot}>
                                {slot}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="pt-4 flex items-center justify-between gap-4">
                        <button
                          type="button"
                          onClick={handlePrevStep}
                          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl btn-gold-outline text-sm font-semibold"
                        >
                          <span>← Back</span>
                        </button>
                        <button
                          type="button"
                          onClick={handleNextStep}
                          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl btn-gold-primary text-sm sm:text-base font-semibold"
                        >
                          <span>Next →</span>
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3: Additional Information & Confirmation */}
                  {step === 3 && (
                    <motion.div
                      key="step-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="border-b border-[var(--border-gold)]/60 pb-3">
                        <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold">
                          Step 3 of 3
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mt-0.5">
                          Additional Information & Confirmation
                        </h2>
                      </div>

                      {/* Booking Summary Pill Bar */}
                      <div className="p-4 rounded-2xl bg-[var(--bg-primary)]/70 border border-[var(--border-gold)] text-xs sm:text-sm grid grid-cols-2 sm:grid-cols-3 gap-3">
                        <div>
                          <span className="text-[var(--text-muted)] block text-xs">
                            Client
                          </span>
                          <span className="font-semibold text-[var(--text-primary)]">
                            {name} ({mobile})
                          </span>
                        </div>
                        <div>
                          <span className="text-[var(--text-muted)] block text-xs">
                            Service ({consultationType})
                          </span>
                          <span className="font-semibold text-gold-400">
                            {selectedService}
                          </span>
                        </div>
                        <div>
                          <span className="text-[var(--text-muted)] block text-xs">
                            Mode & Slot
                          </span>
                          <span className="font-semibold text-[var(--text-primary)]">
                            {consultationMode} • {timeSlot}
                          </span>
                        </div>
                      </div>

                      {/* Message (Optional) */}
                      <div>
                        <label
                          htmlFor="booking-message"
                          className="block text-sm font-semibold text-[var(--text-primary)] mb-2"
                        >
                          Message (Optional)
                        </label>
                        <textarea
                          id="booking-message"
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Describe your problem or question in brief..."
                          className="w-full px-4 py-3.5 rounded-xl bg-[var(--bg-primary)]/80 border border-[var(--border-gold)] focus:border-gold-400 focus:outline-none text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition-colors"
                        />
                      </div>

                      {/* Consultation Fee Box */}
                      <div className="p-5 rounded-2xl border-2 border-gold-400/60 bg-gradient-to-r from-gold-500/15 via-gold-500/10 to-transparent flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-gold-glow">
                        <div>
                          <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold block">
                            Sacred Appointment Dakshina
                          </span>
                          <span className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                            Consultation Fee: {siteData.booking.consultationFee}
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-950/50 border border-emerald-500/40 px-3 py-1.5 rounded-full self-start sm:self-center">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Instant Slot Priority
                        </span>
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <button
                          type="button"
                          onClick={handlePrevStep}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl btn-gold-outline text-sm font-semibold"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          <span>← Back</span>
                        </button>

                        <button
                          type="submit"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl btn-gold-primary text-sm sm:text-base font-bold shadow-gold-glow-lg"
                        >
                          <MessageCircle className="w-5 h-5" />
                          <span>Confirm & Book via WhatsApp</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>

                      {/* 100% Confidential & Secure Lock Badge */}
                      <div className="pt-2 flex items-center justify-center gap-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                        <Lock className="w-4 h-4 text-gold-400" />
                        <span>100% Confidential & Secure</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>

          {/* RIGHT COLUMN: Sticky Sidebar (3 Luxury Cards) */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6 lg:sticky lg:top-28">
            {/* Card 1: Quick Booking Card */}
            <div className="luxury-card rounded-3xl p-6 sm:p-7">
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Instant Concierge</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)]">
                  Quick Booking
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Prefer direct assistance? Connect with our Vedic desk on
                  WhatsApp or phone for immediate slot confirmation.
                </p>

                <div className="pt-2 flex flex-col gap-3">
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-sm shadow-md transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Booking</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCallClick}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl btn-gold-outline text-sm font-semibold"
                  >
                    <Phone className="w-4 h-4 text-gold-400" />
                    <span>
                      {hasPhone
                        ? `Call ${
                            siteData.contact.displayPhone ||
                            siteData.contact.phoneNumber
                          }`
                        : "Call Now"}
                    </span>
                  </button>

                  {phoneComingSoonNotice && (
                    <p className="text-xs text-center text-gold-400 bg-gold-500/10 border border-gold-400/30 rounded-lg py-2 px-3">
                      Contact Number Coming Soon — Please use WhatsApp Booking
                      above!
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Card 2: Consultation Options Summary Card */}
            <div className="luxury-card rounded-3xl p-6 sm:p-7">
              <div className="relative z-10 space-y-4">
                <h3 className="font-serif text-2xl font-bold text-gold-gradient">
                  Consultation Options
                </h3>
                <ul className="space-y-3.5 text-sm">
                  <li className="flex items-start gap-3">
                    <Video className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-[var(--text-primary)] block">
                        Online Consultation
                      </span>
                      <span className="text-xs text-[var(--text-secondary)]">
                        Video, Phone, or WhatsApp globally
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-[var(--text-primary)] block">
                        Offline Consultation
                      </span>
                      <span className="text-xs text-[var(--text-secondary)]">
                        In-person chart analysis & remedies
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-[var(--text-primary)] block">
                        100% Confidential
                      </span>
                      <span className="text-xs text-[var(--text-secondary)]">
                        Private, ethical & personalized guidance
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3: Why Choose Us Card */}
            <div className="luxury-card rounded-3xl p-6 sm:p-7">
              <div className="relative z-10 space-y-4">
                <h3 className="font-serif text-2xl font-bold text-gold-gradient">
                  Why Choose Us
                </h3>
                <ul className="space-y-3 text-sm">
                  {siteData.booking.whyChooseUs.map((reason) => (
                    <li
                      key={reason}
                      className="flex items-center gap-3 text-[var(--text-primary)] font-medium"
                    >
                      <Award className="w-4 h-4 text-gold-400 shrink-0" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal ("BOOKING CONFIRMED!") */}
      <AnimatePresence>
        {showConfirmModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-md rounded-3xl border-2 border-gold-400 bg-obsidian-surface p-8 text-center shadow-gold-glow-lg"
            >
              <div className="mx-auto w-16 h-16 rounded-full bg-gold-500/20 border border-gold-400 flex items-center justify-center mb-5 shadow-gold-glow">
                <CheckCircle2 className="w-9 h-9 text-gold-400" />
              </div>

              <h3 className="font-serif text-3xl font-bold text-gold-gradient mb-3">
                BOOKING CONFIRMED!
              </h3>

              <p className="text-sm sm:text-base text-gold-100/85 leading-relaxed mb-7">
                You will be redirected to WhatsApp to complete your booking...
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href={pendingWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowConfirmModal(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl btn-gold-primary text-sm font-bold"
                >
                  <span>Got It</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function BookConsultationPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-gold-400 font-serif text-xl animate-pulse">
            Preparing Sacred Consultation Portal...
          </div>
        </div>
      }
    >
      <BookingWizardContent />
    </Suspense>
  );
}
