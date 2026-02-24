"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const allServices = [
  // Wig Installs
  "Full Lace Wig Install",
  "360 / Double Frontal Wig Install",
  "180 Lace Frontal Wig Install",
  "Mini Frontal Wig Install",
  "Lace Closure Wig Install",
  "Full Fringe Wig Install",
  // Frontal Ponytails
  "Frontal Ponytail",
  "Double Frontal Ponytail",
  // Sew-Ins
  "Traditional / Leave-Out / Versatile / Full Fringe Sew-In",
  "Lace Frontal Sew-In",
  "Mini Frontal Sew-In",
  "Half Up Half Down Sew-In",
  "Flip Over Sew-In",
  "2-Part Leave-Out Sew-In",
  // Wig Making
  "180 Frontal Wig Making",
  "Mini Frontal Wig Making",
  "Lace Closure Wig Making",
  // Replacements
  "Mini Closure Replacement",
  "Mini Frontal Replacement",
  "Full Frontal Replacement",
  "Standard Closure Reconstruction",
  "Standard Frontal Reconstruction",
  // Colour
  "Colour Service — Jet Black",
  "Colour Service — 1B → Natural Brown",
  "Colour Service — 613 → Pastel",
  "Colour Service — Highlights",
  "Colour Correction (Consultation Required)",
  // Consultations
  "Consultation (£30)",
  "In-Person Wig Fitting (£30)",
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

function BookingFormInner() {
  const searchParams = useSearchParams();
  const paramService = searchParams.get("service") ?? "";

  // Match the param against allServices (exact or prefix match)
  const resolveService = (raw: string) => {
    if (!raw) return "";
    const exact = allServices.find((s) => s === raw);
    if (exact) return exact;
    const prefix = allServices.find((s) =>
      s.toLowerCase().startsWith(raw.toLowerCase())
    );
    return prefix ?? "";
  };

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: resolveService(paramService),
    date: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  // Re-run if the query param changes (e.g. user clicks Book on another service)
  useEffect(() => {
    const resolved = resolveService(paramService);
    if (resolved) setForm((prev) => ({ ...prev, service: resolved }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramService]);

  const set =
    (field: keyof FormData) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col justify-center py-12 gap-4">
        <div className="w-12 h-px bg-[#ff5a1f]" />
        <p className="font-display text-3xl md:text-4xl font-medium text-[#0a0a0a]">
          Thank you,{" "}
          <span className="italic">{form.name.split(" ")[0]}.</span>
        </p>
        <p className="text-[#787872] leading-relaxed text-sm mt-1">
          Your request has been received. We&apos;ll be in touch within 24
          hours to confirm your appointment and next steps.
        </p>
        <p className="text-[11px] tracking-widest uppercase text-[#787872] mt-2">
          WhatsApp us if urgent: 07707228205
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-transparent border-b border-[#e8e8e3] focus:border-[#0a0a0a] outline-none py-3 text-[#0a0a0a] text-sm transition-colors duration-200 placeholder:text-[#c5bfb6]";
  const labelClass =
    "text-[10px] tracking-[0.25em] uppercase text-[#787872] mb-2 block";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-7">
      <div className="grid md:grid-cols-2 gap-7">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input
            required
            type="text"
            value={form.name}
            onChange={set("name")}
            className={inputClass}
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label className={labelClass}>Email *</label>
          <input
            required
            type="email"
            value={form.email}
            onChange={set("email")}
            className={inputClass}
            placeholder="hello@email.com"
          />
        </div>
        <div>
          <label className={labelClass}>Phone / WhatsApp</label>
          <input
            type="tel"
            value={form.phone}
            onChange={set("phone")}
            className={inputClass}
            placeholder="07700 000000"
          />
        </div>
        <div>
          <label className={labelClass}>Preferred Date</label>
          <input
            type="date"
            value={form.date}
            onChange={set("date")}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Service *</label>
        <select
          required
          value={form.service}
          onChange={set("service")}
          className={`${inputClass} ${form.service ? "text-[#0a0a0a]" : "text-[#c5bfb6]"}`}
        >
          <option value="" disabled>
            Select a service
          </option>
          {allServices.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass}>Notes / Special Requests</label>
        <textarea
          rows={4}
          value={form.message}
          onChange={set("message")}
          className={`${inputClass} resize-none`}
          placeholder="Lace size, hair texture, occasion details, any questions..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500">
          Something went wrong. Please try again or{" "}
          <a
            href="https://wa.me/447707228205"
            className="underline hover:text-[#ff5a1f]"
          >
            message us on WhatsApp
          </a>
          .
        </p>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full md:w-auto bg-[#0a0a0a] text-[#f9f9f7] text-[11px] tracking-[0.25em] uppercase px-12 py-4 hover:bg-[#ff5a1f] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Sending…" : "Request Appointment"}
        </button>
        <p className="mt-4 text-[11px] text-[#787872] leading-relaxed">
          A £30 non-refundable deposit is required to confirm your booking.
          We&apos;ll send payment details once we receive your request.
        </p>
      </div>
    </form>
  );
}

export default function BookingForm() {
  return (
    <Suspense fallback={<div className="h-64 animate-pulse bg-[#f2f2ef]" />}>
      <BookingFormInner />
    </Suspense>
  );
}
