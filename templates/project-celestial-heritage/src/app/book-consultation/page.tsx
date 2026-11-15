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
  Flame,
  Droplets,
  Award,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import {
  siteData,
  getEnabledDeityPoojas,
  getEnabledShraadhSanskaars,
  buildWhatsAppUrl,
} from "@/config/siteData";

function BookingWizardContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const serviceParam = searchParams.get("service");

  const deityPoojas = getEnabledDeityPoojas();
  const shraadhSanskaars = getEnabledShraadhSanskaars();

  // Wizard Step (1, 2, or 3)
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form State - Step 1
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [cityLocality, setCityLocality] = useState("");

  // Form State - Step 2
  const [ritualCategory, setRitualCategory] = useState<"pooja" | "shraadh">(
    categoryParam === "shraadh" ? "shraadh" : "pooja"
  );
  const [selectedRitual, setSelectedRitual] = useState<string>("");
  const [samagriChoice, setSamagriChoice] = useState<string>(
    siteData.booking.samagriOptions[0]
  );
  const [venueChoice, setVenueChoice] = useState<string>(
    siteData.booking.venues[0]
  );
  const [preferredDate, setPreferredDate] = useState<string>("");
  const [timeSlot, setTimeSlot] = useState<string>(
    siteData.booking.timeSlots[0]
  );

  // Form State - Step 3
  const [additionalNotes, setAdditionalNotes] = useState("");

  // Validation & Modal State
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [pendingWhatsAppUrl, setPendingWhatsAppUrl] = useState("");
  const [phoneComingSoonNotice, setPhoneComingSoonNotice] = useState(false);

  // Sync category and service selection from URL params
  useEffect(() => {
    if (categoryParam === "shraadh") {
      setRitualCategory("shraadh");
    } else if (categoryParam === "pooja") {
      setRitualCategory("pooja");
    }
  }, [categoryParam]);

  useEffect(() => {
    const list =
      ritualCategory === "pooja" ? deityPoojas : shraadhSanskaars;

    if (serviceParam) {
      const decoded = decodeURIComponent(serviceParam).toLowerCase();
      const matched = list.find(
        (item) =>
          item.title.toLowerCase() === decoded ||
          item.slug.toLowerCase() === decoded
      );
      if (matched) {
        setSelectedRitual(matched.title);
        return;
      }
    }

    if (!selectedRitual || !list.some((item) => item.title === selectedRitual)) {
      setSelectedRitual(list[0]?.title || "");
    }
  }, [ritualCategory, serviceParam, deityPoojas, shraadhSanskaars, selectedRitual]);

  const validateStep1 = () => {
    const nextErrors: { [key: string]: string } = {};
    if (!name.trim()) {
      nextErrors.name = "Please enter your full name.";
    }
    const digitsOnly = mobile.replace(/\D/g, "");
    if (digitsOnly.length !== 10) {
      nextErrors.mobile = "Please enter a valid 10-digit mobile number.";
    }
    if (!cityLocality.trim()) {
      nextErrors.cityLocality = "Please enter your city or locality.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const validateStep2 = () => {
    const nextErrors: { [key: string]: string } = {};
    if (!selectedRitual) {
      nextErrors.selectedRitual = "Please select a specific Pooja / Sanskaar.";
    }
    if (!preferredDate) {
      nextErrors.preferredDate = "Please choose a preferred ritual date or Tithi.";
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

    const categoryTitle =
      ritualCategory === "pooja"
        ? "Deity Pooja & Auspicious Anushthan"
        : "Shraadh & After-Death Sanskaar";

    const payload = [
      `*Sacred Pooja / Sanskaar Booking Request!*`,
      `*Name:* ${name.trim()}`,
      `*Mobile:* ${mobile.trim()}`,
      `*City / Locality:* ${cityLocality.trim()}`,
      `*Category:* ${categoryTitle}`,
      `*Specific Ritual:* ${selectedRitual}`,
      `*Samagri Arrangement:* ${samagriChoice}`,
      `*Venue:* ${venueChoice}`,
      `*Preferred Date / Tithi:* ${preferredDate}`,
      `*Time Slot:* ${timeSlot}`,
      `*Family Gotra / Additional Notes:* ${
        additionalNotes.trim() || "N/A"
      }`,
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

    // Trigger WhatsApp redirect in new tab
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

  const currentRitualList =
    ritualCategory === "pooja" ? deityPoojas : shraadhSanskaars;

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

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* LEFT COLUMN: Interactive 3-Step Wizard */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="luxury-card rounded-3xl p-6 sm:p-10">
              {/* Progress Indicator */}
              <div className="relative z-10 mb-10">
                <div className="relative flex items-center justify-between">
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
                    { num: 1, label: "Yajman Info" },
                    { num: 2, label: "Ritual & Venue" },
                    { num: 3, label: "Notes & Confirm" },
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

              {/* Wizard Form */}
              <form
                onSubmit={handleConfirmBooking}
                className="relative z-10"
                noValidate
              >
                <AnimatePresence mode="wait">
                  {/* STEP 1: Personal Info & Location */}
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
                          Yajman (Client) Information
                        </h2>
                      </div>

                      {/* Your Name * */}
                      <div>
                        <label
                          htmlFor="booking-name"
                          className="block text-sm font-semibold text-[var(--text-primary)] mb-2"
                        >
                          Full Name (Yajman) <span className="text-gold-400">*</span>
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
                          placeholder="e.g. Ramesh Sharma"
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
                          Mobile Number (for WhatsApp / Call){" "}
                          <span className="text-gold-400">*</span>
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

                      {/* City / Locality * */}
                      <div>
                        <label
                          htmlFor="booking-city"
                          className="block text-sm font-semibold text-[var(--text-primary)] mb-2"
                        >
                          City / Locality / Tirth Location{" "}
                          <span className="text-gold-400">*</span>
                        </label>
                        <input
                          id="booking-city"
                          type="text"
                          required
                          value={cityLocality}
                          onChange={(e) => {
                            setCityLocality(e.target.value);
                            if (errors.cityLocality)
                              setErrors({ ...errors, cityLocality: "" });
                          }}
                          placeholder="e.g. South Delhi, Haridwar Ghat, or Jaipur"
                          className="w-full px-4 py-3.5 rounded-xl bg-[var(--bg-primary)]/80 border border-[var(--border-gold)] focus:border-gold-400 focus:outline-none text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition-colors"
                        />
                        {errors.cityLocality && (
                          <p className="text-xs text-red-400 mt-1.5">
                            {errors.cityLocality}
                          </p>
                        )}
                      </div>

                      <div className="pt-4 flex justify-end">
                        <button
                          type="button"
                          onClick={handleNextStep}
                          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl btn-gold-primary text-sm sm:text-base font-semibold"
                        >
                          <span>Next: Ritual Details →</span>
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2: Ritual & Logistics Details */}
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
                          Ritual & Logistics Selection
                        </h2>
                      </div>

                      {/* Select Category *: Deity Poojas vs Shraadh Sanskaar */}
                      <div>
                        <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2.5">
                          Sacred Category <span className="text-gold-400">*</span>
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <button
                            type="button"
                            onClick={() => {
                              setRitualCategory("pooja");
                              setSelectedRitual(deityPoojas[0]?.title || "");
                            }}
                            className={`text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                              ritualCategory === "pooja"
                                ? "border-gold-400 bg-gold-500/15 shadow-gold-glow"
                                : "border-[var(--border-gold)] bg-[var(--bg-primary)]/60 hover:border-gold-400/60"
                            }`}
                          >
                            <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-300 border border-gold-400/40 flex items-center justify-center shrink-0">
                              <Flame className="w-5 h-5 text-gold-400" />
                            </div>
                            <div>
                              <div className="font-serif text-base font-bold text-[var(--text-primary)] flex items-center gap-2">
                                <span>Deity Pooja / Shubh Karya</span>
                                {ritualCategory === "pooja" && (
                                  <CheckCircle2 className="w-4 h-4 text-gold-400" />
                                )}
                              </div>
                              <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                                Ganesh, Lakshmi, Rudrabhishek, Griha Pravesh & Havans
                              </p>
                            </div>
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setRitualCategory("shraadh");
                              setSelectedRitual(shraadhSanskaars[0]?.title || "");
                            }}
                            className={`text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                              ritualCategory === "shraadh"
                                ? "border-amber-300 bg-amber-500/15 shadow-md"
                                : "border-[var(--border-gold)] bg-[var(--bg-primary)]/60 hover:border-amber-300/60"
                            }`}
                          >
                            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-200 border border-amber-400/40 flex items-center justify-center shrink-0">
                              <Droplets className="w-5 h-5 text-amber-200" />
                            </div>
                            <div>
                              <div className="font-serif text-base font-bold text-[var(--text-primary)] flex items-center gap-2">
                                <span>Shraadh / After-Death Rites</span>
                                {ritualCategory === "shraadh" && (
                                  <CheckCircle2 className="w-4 h-4 text-amber-300" />
                                )}
                              </div>
                              <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                                Antim Sanskaar, Terahvin, Pind Daan & Moksha Vidhi
                              </p>
                            </div>
                          </button>
                        </div>
                      </div>

                      {/* Select Specific Ritual * */}
                      <div>
                        <label
                          htmlFor="booking-ritual-select"
                          className="block text-sm font-semibold text-[var(--text-primary)] mb-2"
                        >
                          Select Specific Pooja / Sanskaar{" "}
                          <span className="text-gold-400">*</span>
                        </label>
                        <select
                          id="booking-ritual-select"
                          value={selectedRitual}
                          onChange={(e) => setSelectedRitual(e.target.value)}
                          className="w-full px-4 py-3.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-gold)] focus:border-gold-400 focus:outline-none text-[var(--text-primary)]"
                        >
                          {currentRitualList.map((item) => (
                            <option key={item.id} value={item.title}>
                              {item.title} ({item.duration})
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Samagri Arrangement Choice * */}
                      <div>
                        <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                          Samagri Arrangement <span className="text-gold-400">*</span>
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {siteData.booking.samagriOptions.map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setSamagriChoice(opt)}
                              className={`text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                                samagriChoice === opt
                                  ? "border-gold-400 bg-gold-500/15 text-gold-300 shadow-sm"
                                  : "border-[var(--border-gold)] bg-[var(--bg-primary)]/60 text-[var(--text-secondary)]"
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Ritual Venue & Time Slot */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="booking-venue"
                            className="block text-sm font-semibold text-[var(--text-primary)] mb-2"
                          >
                            Ritual Venue <span className="text-gold-400">*</span>
                          </label>
                          <select
                            id="booking-venue"
                            value={venueChoice}
                            onChange={(e) => setVenueChoice(e.target.value)}
                            className="w-full px-4 py-3.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-gold)] focus:border-gold-400 focus:outline-none text-[var(--text-primary)]"
                          >
                            {siteData.booking.venues.map((venue) => (
                              <option key={venue} value={venue}>
                                {venue}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="booking-timeslot"
                            className="block text-sm font-semibold text-[var(--text-primary)] mb-2"
                          >
                            Preferred Time Slot <span className="text-gold-400">*</span>
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

                      {/* Preferred Date / Tithi * */}
                      <div>
                        <label
                          htmlFor="booking-date"
                          className="block text-sm font-semibold text-[var(--text-primary)] mb-2"
                        >
                          Preferred Date / Tithi / Muhurat{" "}
                          <span className="text-gold-400">*</span>
                        </label>
                        <input
                          id="booking-date"
                          type="date"
                          required
                          value={preferredDate}
                          onChange={(e) => {
                            setPreferredDate(e.target.value);
                            if (errors.preferredDate)
                              setErrors({ ...errors, preferredDate: "" });
                          }}
                          className="w-full px-4 py-3.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-gold)] focus:border-gold-400 focus:outline-none text-[var(--text-primary)]"
                        />
                        {errors.preferredDate && (
                          <p className="text-xs text-red-400 mt-1.5">
                            {errors.preferredDate}
                          </p>
                        )}
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
                          <span>Next: Notes & Confirm →</span>
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3: Additional Notes & WhatsApp Confirmation */}
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
                          Family Gotra & Confirmation
                        </h2>
                      </div>

                      {/* Summary Review Pill Box */}
                      <div className="p-4 rounded-2xl bg-[var(--bg-primary)]/70 border border-[var(--border-gold)] text-xs sm:text-sm grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <span className="text-[var(--text-muted)] block text-xs">
                            Yajman Details
                          </span>
                          <span className="font-semibold text-[var(--text-primary)]">
                            {name} ({mobile}) • {cityLocality}
                          </span>
                        </div>
                        <div>
                          <span className="text-[var(--text-muted)] block text-xs">
                            Selected Ceremony
                          </span>
                          <span className="font-semibold text-gold-400">
                            {selectedRitual}
                          </span>
                        </div>
                        <div>
                          <span className="text-[var(--text-muted)] block text-xs">
                            Venue & Samagri
                          </span>
                          <span className="font-semibold text-[var(--text-primary)]">
                            {venueChoice} • {samagriChoice.includes("Complete") ? "With Samagri" : "List Only"}
                          </span>
                        </div>
                        <div>
                          <span className="text-[var(--text-muted)] block text-xs">
                            Scheduled Timing
                          </span>
                          <span className="font-semibold text-[var(--text-primary)]">
                            {preferredDate} ({timeSlot})
                          </span>
                        </div>
                      </div>

                      {/* Additional Notes / Gotra */}
                      <div>
                        <label
                          htmlFor="booking-notes"
                          className="block text-sm font-semibold text-[var(--text-primary)] mb-2"
                        >
                          Additional Details (Optional)
                        </label>
                        <textarea
                          id="booking-notes"
                          rows={4}
                          value={additionalNotes}
                          onChange={(e) => setAdditionalNotes(e.target.value)}
                          placeholder="Mention your Gotra, Nakshatra, specific deity sankalp, or urgent bereavement details..."
                          className="w-full px-4 py-3.5 rounded-xl bg-[var(--bg-primary)]/80 border border-[var(--border-gold)] focus:border-gold-400 focus:outline-none text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition-colors"
                        />
                      </div>

                      {/* Dakshina & Samagri Assurance Box */}
                      <div className="p-5 rounded-2xl border-2 border-gold-400/60 bg-gradient-to-r from-gold-500/15 via-gold-500/10 to-transparent flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-gold-glow">
                        <div>
                          <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold block">
                            Strict Vedic Purity & Vidhi
                          </span>
                          <span className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                            Pandit Ji & Samagri Coordination
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-950/50 border border-emerald-500/40 px-3.5 py-1.5 rounded-full self-start sm:self-center">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Shastra Vidhi Assured
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

                      {/* Confidentiality Badge */}
                      <div className="pt-2 flex items-center justify-center gap-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                        <Lock className="w-4 h-4 text-gold-400" />
                        <span>100% Confidential & Sacred Sanatan Vidhi</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>

          {/* RIGHT COLUMN: Sticky Sidebar */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6 lg:sticky lg:top-28">
            {/* Quick Booking Card */}
            <div className="luxury-card rounded-3xl p-6 sm:p-7">
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Immediate Assistance</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)]">
                  Connect Directly
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Have urgent questions about Tithi, Muhurat, or bereavement rites?
                  Connect directly with Pandit Ji on WhatsApp or phone.
                </p>

                <div className="pt-2 flex flex-col gap-3">
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-sm shadow-md transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Inquiry</span>
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
                        : "Call Pandit Ji"}
                    </span>
                  </button>

                  {phoneComingSoonNotice && (
                    <p className="text-xs text-center text-gold-400 bg-gold-500/10 border border-gold-400/30 rounded-lg py-2 px-3">
                      Contact number will be available soon. Please use WhatsApp Inquiry above!
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Why Choose Us Card */}
            <div className="luxury-card rounded-3xl p-6 sm:p-7">
              <div className="relative z-10 space-y-4">
                <h3 className="font-serif text-2xl font-bold text-gold-gradient">
                  Vedic Assurance
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

      {/* Confirmation Modal */}
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
                You will be redirected to WhatsApp to confirm ceremony dates and Samagri details with Pandit Ji...
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
            Loading Sacred Booking Portal...
          </div>
        </div>
      }
    >
      <BookingWizardContent />
    </Suspense>
  );
}
