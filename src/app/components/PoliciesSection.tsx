"use client";

import { useState } from "react";

type Policy = {
  title: string;
  points: string[];
};

const policies: Policy[] = [
  {
    title: "Deposits & Payments",
    points: [
      "A £30 non-refundable deposit is required at time of booking",
      "Deposits go toward your final appointment total",
      "Deposits are forfeited if you cancel or fail to attend",
      "Refunded only if Forever Peng Hair cancels your appointment",
      "Remaining balance is payable in cash only — please arrive with the exact amount",
    ],
  },
  {
    title: "Arrival & Lateness",
    points: [
      "10-minute grace period is allowed",
      "After 10 minutes, a £10 late fee applies for every additional 10 minutes",
      "Arrivals 20+ minutes late may result in cancellation with loss of deposit",
      "Confirm your appointment 24 hours prior via WhatsApp: 07707228205",
      "Unconfirmed appointments may be cancelled",
    ],
  },
  {
    title: "Rescheduling & No-Shows",
    points: [
      "A £30 rescheduling fee applies",
      "Rescheduling is subject to availability",
      "No-shows will be blocked from future bookings",
      "Outstanding fees will be charged to the card on file",
    ],
  },
  {
    title: "Colour Services",
    points: [
      "Hair must be submitted 10–14 days before appointment or dispatch",
      "Cost is approximately £50 per bundle, frontal, or closure",
      "Strand testing is mandatory before all colour work",
      "We are not liable for damage if hair fails strand testing",
      "Colour may fade over time due to washing and heat — regular maintenance is advised",
      "Late submissions incur a £30 express fee",
    ],
  },
  {
    title: "Wig Making Requirements",
    points: [
      "Minimum of 3 bundles required (4+ recommended for lengths 26–32\")",
      "Head measurements or an in-person fitting is required",
      "Clear, filter-free photo of your skin tone is needed for lace tinting",
      "HD thin lace only — no synthetic, blended, thick plastic, or T-part lace",
      "Bundles must not be cut, tangled, or blunt-layered",
      "Wig making takes 7 days (shipping / collection / appointment)",
    ],
  },
  {
    title: "Wig Drop-Off",
    points: [
      "Ready-to-wear units: drop off at least 5 days before appointment",
      "Bundles for wig making: 7 days before appointment",
      "Late submissions incur an express fee",
      "Label all packages with: full name, active WhatsApp number, and service name",
    ],
  },
  {
    title: "Client Preparation",
    points: [
      "Hair must be washed with clarifying or sulphate shampoo",
      "No oils, serums, or products on hair or scalp",
      "Heat protectants will be applied by us",
      "Failure to comply may affect your results",
    ],
  },
  {
    title: "Studio Rules",
    points: [
      "No plus ones — including children",
      "Please arrive exactly on time",
      "No waiting area available",
      "Free parking is available on King Street",
      "We are not responsible for parking delays",
      "Clients have 48 hours after their appointment to report any concerns",
    ],
  },
];

export default function PoliciesSection() {
  const [openPolicy, setOpenPolicy] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-14 md:mb-20">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#b8975a] mb-5">
            Before You Book
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
              Booking Policies
            </h2>
            <p className="max-w-[32ch] text-[#5a5552] text-sm leading-relaxed">
              Booking an appointment confirms your full agreement to the policies
              below. Please read carefully.
            </p>
          </div>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-[#1f1f1f] border-t border-[#1f1f1f]">
          {policies.map((policy) => {
            const isOpen = openPolicy === policy.title;
            return (
              <div key={policy.title}>
                <button
                  onClick={() =>
                    setOpenPolicy(isOpen ? null : policy.title)
                  }
                  className="w-full flex items-center justify-between py-6 md:py-7 group text-left"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-white group-hover:text-[#b8975a] transition-colors duration-200">
                    {policy.title}
                  </h3>
                  <span
                    className={`text-white text-2xl font-light leading-none transition-transform duration-300 shrink-0 ml-6 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-8">
                    <ul className="flex flex-col gap-4">
                      {policy.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <span className="text-[#b8975a] text-xs mt-[3px] shrink-0">
                            —
                          </span>
                          <span className="text-[#7a7672] text-sm leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 1:1 Training callout */}
        <div className="mt-16 md:mt-20 border border-[#1f1f1f] p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#b8975a] mb-4">
              1:1 Training
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
              Train With a Professional
            </h3>
            <p className="text-[#5a5552] text-sm leading-relaxed max-w-[42ch]">
              Interested in learning? We offer 1:1 professional training sessions.
              Classes are not booked through this system — email us directly to
              enquire. Classes may be rescheduled once. No refunds once booked.
            </p>
          </div>
          <a
            href="mailto:foreverpenghair@gmail.com"
            className="shrink-0 text-[11px] tracking-[0.22em] uppercase border border-[#3a3a3a] text-[#8a8480] px-8 py-4 hover:border-[#b8975a] hover:text-[#b8975a] transition-colors duration-300 text-center"
          >
            Email to Enquire
          </a>
        </div>
      </div>
    </section>
  );
}
