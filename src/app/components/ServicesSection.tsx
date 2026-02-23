"use client";

import { useState } from "react";

const categories = [
  {
    name: "Hair",
    description: "From blowouts to full transformations",
    services: [
      { name: "Blowout & Style", duration: "45 min", price: "£45" },
      { name: "Cut & Style", duration: "60 min", price: "£65" },
      { name: "Brazilian Blowout", duration: "2 hr 30 min", price: "£180" },
      { name: "Full Colour", duration: "3 hr", price: "£220" },
      { name: "Highlights & Balayage", duration: "2 hr 30 min", price: "£150" },
      { name: "Keratin Treatment", duration: "3 hr", price: "£200" },
      { name: "Deep Conditioning Treatment", duration: "60 min", price: "£55" },
    ],
  },
  {
    name: "Nails",
    description: "Manicures, pedicures and nail art",
    services: [
      { name: "Classic Manicure", duration: "30 min", price: "£25" },
      { name: "Gel Manicure", duration: "45 min", price: "£38" },
      { name: "Acrylic Full Set", duration: "75 min", price: "£55" },
      { name: "Acrylic Infill", duration: "45 min", price: "£35" },
      { name: "Classic Pedicure", duration: "45 min", price: "£35" },
      { name: "Gel Pedicure", duration: "60 min", price: "£48" },
      { name: "Nail Art (per nail)", duration: "10 min", price: "£3" },
    ],
  },
  {
    name: "Lashes",
    description: "Classic, volume and hybrid lash sets",
    services: [
      { name: "Classic Lash Set", duration: "90 min", price: "£70" },
      { name: "Hybrid Lash Set", duration: "105 min", price: "£80" },
      { name: "Volume Lash Set", duration: "2 hr", price: "£90" },
      { name: "Mega Volume Set", duration: "2 hr 30 min", price: "£110" },
      { name: "Lash Infill", duration: "60 min", price: "£50" },
      { name: "Lash Removal", duration: "30 min", price: "£20" },
    ],
  },
  {
    name: "Brows",
    description: "Shaping, tinting and lamination",
    services: [
      { name: "Brow Wax & Thread", duration: "30 min", price: "£22" },
      { name: "Brow Tint", duration: "20 min", price: "£16" },
      { name: "Brow Wax & Tint", duration: "40 min", price: "£30" },
      { name: "Brow Lamination", duration: "45 min", price: "£55" },
      { name: "Henna Brows", duration: "60 min", price: "£48" },
      { name: "Full Brow Transformation", duration: "75 min", price: "£85" },
    ],
  },
  {
    name: "Makeup",
    description: "Everyday glam to bridal artistry",
    services: [
      { name: "Everyday Glam", duration: "60 min", price: "£80" },
      { name: "Special Occasion", duration: "75 min", price: "£100" },
      { name: "Bridal Makeup", duration: "90 min", price: "£150" },
      { name: "Bridal Trial", duration: "90 min", price: "£120" },
      { name: "Makeup Masterclass", duration: "90 min", price: "£130" },
    ],
  },
];

const addOns = [
  { name: "Scalp Massage", duration: "15 min", price: "£15" },
  { name: "Lash Curling", duration: "15 min", price: "£12" },
  { name: "Brow Shaping Add-on", duration: "20 min", price: "£18" },
  { name: "Gel Polish Upgrade", duration: "—", price: "£10" },
  { name: "Bombshell Curls", duration: "30 min", price: "£25" },
  { name: "Out-of-Hours Appointment (after 6pm)", duration: "—", price: "+£20" },
];

export default function ServicesSection() {
  const [openCategory, setOpenCategory] = useState<string | null>("Hair");
  const [addOnsOpen, setAddOnsOpen] = useState(false);

  return (
    <section id="services" className="py-24 md:py-32 border-t border-[#e2dbd0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#b8975a] mb-5">
            What We Offer
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-[#0a0a0a] leading-tight">
              Our Services
            </h2>
            <p className="max-w-xs text-[#8a8178] text-sm leading-relaxed">
              Every service is tailored to you. Our expert team uses only premium products, crafted for your unique beauty.
            </p>
          </div>
        </div>

        {/* Category accordion */}
        <div className="divide-y divide-[#e2dbd0] border-t border-[#e2dbd0]">
          {categories.map((cat) => {
            const isOpen = openCategory === cat.name;
            return (
              <div key={cat.name}>
                <button
                  onClick={() =>
                    setOpenCategory(isOpen ? null : cat.name)
                  }
                  className="w-full flex items-center justify-between py-6 md:py-8 group text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6">
                    <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#0a0a0a] group-hover:text-[#b8975a] transition-colors duration-200">
                      {cat.name}
                    </h3>
                    <span className="text-[11px] tracking-widest text-[#8a8178] uppercase">
                      {cat.description}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 shrink-0 ml-4">
                    <span className="hidden md:block text-[11px] tracking-widest text-[#8a8178]">
                      {cat.services.length} services
                    </span>
                    <span
                      className={`text-[#0a0a0a] text-2xl font-light leading-none transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </div>
                </button>

                <div
                  className={`transition-all duration-400 ${
                    isOpen ? "pb-8" : "hidden"
                  }`}
                >
                  <div className="divide-y divide-[#e2dbd0]">
                    {cat.services.map((service) => (
                      <div
                        key={service.name}
                        className="flex items-center justify-between py-4 md:py-5 pl-0 md:pl-6 group/item hover:bg-[#f0ebe3] -mx-6 px-6 transition-colors duration-150"
                      >
                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-8">
                          <p className="text-[#0a0a0a] font-medium text-sm md:text-base">
                            {service.name}
                          </p>
                          <p className="text-[11px] tracking-widest text-[#8a8178] uppercase">
                            {service.duration}
                          </p>
                        </div>
                        <div className="flex items-center gap-4 md:gap-6 shrink-0 ml-4">
                          <p className="font-display text-base md:text-lg font-medium text-[#0a0a0a]">
                            {service.price}
                          </p>
                          <a
                            href="#booking"
                            className="hidden md:flex text-[10px] tracking-[0.2em] uppercase text-[#8a8178] border border-[#e2dbd0] px-4 py-2 group-hover/item:border-[#0a0a0a] group-hover/item:text-[#0a0a0a] transition-all duration-200 items-center gap-1"
                          >
                            Book
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Add-ons */}
          <div>
            <button
              onClick={() => setAddOnsOpen(!addOnsOpen)}
              className="w-full flex items-center justify-between py-6 md:py-8 group text-left"
              aria-expanded={addOnsOpen}
            >
              <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6">
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#0a0a0a] group-hover:text-[#b8975a] transition-colors duration-200">
                  Add-Ons
                </h3>
                <span className="text-[11px] tracking-widest text-[#8a8178] uppercase">
                  Enhance your appointment
                </span>
              </div>
              <div className="flex items-center gap-4 shrink-0 ml-4">
                <span className="hidden md:block text-[11px] tracking-widest text-[#8a8178]">
                  {addOns.length} options
                </span>
                <span
                  className={`text-[#0a0a0a] text-2xl font-light leading-none transition-transform duration-300 ${
                    addOnsOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </div>
            </button>

            {addOnsOpen && (
              <div className="pb-8">
                <div className="divide-y divide-[#e2dbd0]">
                  {addOns.map((addon) => (
                    <div
                      key={addon.name}
                      className="flex items-center justify-between py-4 md:py-5 hover:bg-[#f0ebe3] -mx-6 px-6 transition-colors duration-150"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-8">
                        <p className="text-[#0a0a0a] font-medium text-sm md:text-base">
                          {addon.name}
                        </p>
                        <p className="text-[11px] tracking-widest text-[#8a8178] uppercase">
                          {addon.duration}
                        </p>
                      </div>
                      <p className="font-display text-base md:text-lg font-medium text-[#0a0a0a] shrink-0 ml-4">
                        {addon.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
