"use client";

import { useState } from "react";

const allServices = [
  "Blowout & Style",
  "Cut & Style",
  "Brazilian Blowout",
  "Full Colour",
  "Highlights & Balayage",
  "Keratin Treatment",
  "Classic Manicure",
  "Gel Manicure",
  "Acrylic Full Set",
  "Classic Pedicure",
  "Gel Pedicure",
  "Classic Lash Set",
  "Hybrid Lash Set",
  "Volume Lash Set",
  "Mega Volume Set",
  "Lash Infill",
  "Brow Wax & Thread",
  "Brow Lamination",
  "Henna Brows",
  "Full Brow Transformation",
  "Everyday Glam Makeup",
  "Special Occasion Makeup",
  "Bridal Makeup",
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

  const set = (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
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
        <p className="text-[#8a8178] leading-relaxed mt-2">
          Your booking request has been received. We'll confirm your appointment
          within 24 hours via email.
        </p>
        <a
          href="#services"
          className="mt-4 text-[11px] tracking-[0.2em] uppercase text-[#8a8178] border-b border-[#e2dbd0] pb-1 w-fit hover:text-[#0a0a0a] hover:border-[#0a0a0a] transition-colors"
        >
          Browse more services
        </a>
      </div>
    );
  }

  const inputClass =
    "w-full bg-transparent border-b border-[#e2dbd0] focus:border-[#0a0a0a] outline-none py-3 text-[#0a0a0a] text-sm transition-colors duration-200 placeholder:text-[#c5bfb6]";
  const labelClass = "text-[10px] tracking-[0.25em] uppercase text-[#8a8178] mb-2 block";

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
          <label className={labelClass}>Phone</label>
          <input
            type="tel"
            value={form.phone}
            onChange={set("phone")}
            className={inputClass}
            placeholder="+44 7700 900000"
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
        <label className={labelClass}>Special Requests or Notes</label>
        <textarea
          rows={4}
          value={form.message}
          onChange={set("message")}
          className={`${inputClass} resize-none`}
          placeholder="Allergies, occasion details, style preferences..."
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="w-full md:w-auto bg-[#0a0a0a] text-[#f8f4ee] text-[11px] tracking-[0.25em] uppercase px-12 py-4 hover:bg-[#b8975a] transition-colors duration-300"
        >
          Request Appointment
        </button>
        <p className="mt-4 text-[11px] text-[#8a8178]">
          We'll confirm within 24 hours. Payment is taken at the studio.
        </p>
      </div>
    </form>
  );
}
