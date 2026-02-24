"use client";

import { useState } from "react";

const allServices = [
  // Wig Installs
  "Full Lace Wig Install",
  "360 / Double Frontal Wig Install",
  "180 Lace Frontal Wig Install",
  "Mini Frontal Wig Install (6x6–9x6)",
  "Lace Closure Wig Install (2x6 / 4x4 / 5x5)",
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
  "Mini Frontal Wig Making (6x6–9x6)",
  "Lace Closure Wig Making (2x6 / 4x4 / 5x5)",
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

export default function BookingForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set =
    (field: keyof FormData) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col justify-center py-12 gap-4">
        <div className="w-12 h-px bg-[#b8975a]" />
        <p className="font-display text-3xl md:text-4xl font-medium text-[#0a0a0a]">
          Thank you,{" "}
          <span className="italic">{form.name.split(" ")[0]}.</span>
        </p>
        <p className="text-[#8a8178] leading-relaxed text-sm mt-1">
          Your request has been received. We&apos;ll be in touch within 24
          hours to confirm your appointment and next steps.
        </p>
        <p className="text-[11px] tracking-widest uppercase text-[#8a8178] mt-2">
          WhatsApp us if urgent: 07707228205
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-transparent border-b border-[#e2dbd0] focus:border-[#0a0a0a] outline-none py-3 text-[#0a0a0a] text-sm transition-colors duration-200 placeholder:text-[#c5bfb6]";
  const labelClass =
    "text-[10px] tracking-[0.25em] uppercase text-[#8a8178] mb-2 block";

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
          className={inputClass}
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

      <div className="pt-2">
        <button
          type="submit"
          className="w-full md:w-auto bg-[#0a0a0a] text-[#f8f4ee] text-[11px] tracking-[0.25em] uppercase px-12 py-4 hover:bg-[#b8975a] transition-colors duration-300"
        >
          Request Appointment
        </button>
        <p className="mt-4 text-[11px] text-[#8a8178] leading-relaxed">
          A £30 non-refundable deposit is required to confirm your booking.
          We&apos;ll send payment details once we receive your request.
        </p>
      </div>
    </form>
  );
}
