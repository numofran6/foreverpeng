"use client";

import { useState } from "react";

type Service = {
  name: string;
  duration: string;
  price: string;
  sub?: string;
};

type Category = {
  name: string;
  description: string;
  categoryNote?: string;
  services: Service[];
};

const categories: Category[] = [
  {
    name: "Wig Installs",
    description: "Full lace, frontal & closure installs",
    categoryNote:
      "All installs include: cornrow foundation · hairline placement & customisation · secure adhesive or glueless install · melt & finish · basic styling (straightening). Natural hair must be clean & braid-ready.",
    services: [
      {
        name: "Full Lace Wig Install",
        duration: "4 hr",
        price: "£150",
        sub: "Best for: Short hair or full styling versatility",
      },
      {
        name: "360 / Double Frontal Wig Install",
        duration: "4 hr",
        price: "£120",
      },
      {
        name: "180 Lace Frontal Wig Install",
        duration: "3 hr",
        price: "£95",
      },
      {
        name: "Mini Frontal Wig Install",
        duration: "2.5 hr",
        price: "£80",
        sub: "6x6 / 7x7 / 8x8 / 9x6",
      },
      {
        name: "Lace Closure Wig Install",
        duration: "2 hr",
        price: "£70",
        sub: "2x6 / 4x4 / 5x5",
      },
      {
        name: "Full Fringe Wig Install",
        duration: "2.5 hr",
        price: "£60",
        sub: "Requires 5x5–7x7 closure",
      },
    ],
  },
  {
    name: "Frontal Ponytails",
    description: "HD lace frontal ponytail installs",
    categoryNote:
      "HD lace only · Extreme height ponytails may require assessment · Styles available: Straight, Curly, Messy Bun, Side Swoop, Braided Ponytail, Knot Bun",
    services: [
      {
        name: "Frontal Ponytail",
        duration: "3 hr",
        price: "£120",
        sub: "High / Mid / Low placement",
      },
      {
        name: "Double Frontal Ponytail",
        duration: "3 hr",
        price: "£180",
        sub: "Added coverage & height",
      },
    ],
  },
  {
    name: "Sew-Ins",
    description: "All styles include braid foundation & basic styling",
    services: [
      {
        name: "Traditional / Leave-Out / Versatile / Full Fringe",
        duration: "3 hr",
        price: "£100",
      },
      { name: "Lace Frontal Sew-In", duration: "4 hr", price: "£150" },
      { name: "Mini Frontal Sew-In", duration: "4 hr", price: "£125" },
      {
        name: "Half Up Half Down Sew-In",
        duration: "4 hr",
        price: "£165",
      },
      { name: "Flip Over Sew-In", duration: "4 hr", price: "£120" },
      { name: "2-Part Leave-Out Sew-In", duration: "4 hr", price: "£140" },
    ],
  },
  {
    name: "Wig Making",
    description: "Custom units built to your measurements",
    categoryNote:
      "Frontal & bundles not included · Accurate head measurements required · Price varies by frontal size & bundle count · Wig making takes 7 days",
    services: [
      {
        name: "180 Frontal Wig Making",
        duration: "3 hr",
        price: "£120",
        sub:
          "Wig construction · knot bleaching & plucking · cap fitting & reinforcement",
      },
      {
        name: "Mini Frontal Wig Making",
        duration: "3 hr",
        price: "£100",
        sub: "6x6–9x6 · Closure placement & stitching",
      },
      {
        name: "Lace Closure Wig Making",
        duration: "3 hr",
        price: "£80",
        sub: "2x6 / 4x4 / 5x5 · Min. 3 bundles (4+ for 26–32\")",
      },
    ],
  },
  {
    name: "Replacements & Reconstruction",
    description: "Lace replacements and full unit rebuilds",
    services: [
      {
        name: "Mini Closure Replacement",
        duration: "3 hr",
        price: "£80",
        sub: "FPH wigs only",
      },
      {
        name: "Mini Frontal Replacement",
        duration: "3 hr",
        price: "£90",
        sub: "FPH wigs only",
      },
      {
        name: "Full Frontal Replacement",
        duration: "3 hr",
        price: "£100",
        sub: "FPH wigs only · Includes new lace install & customisation",
      },
      {
        name: "Standard Closure Reconstruction",
        duration: "3 hr",
        price: "£150",
        sub: "Any wig · Assessment required · Severely damaged lace not accepted",
      },
      {
        name: "Standard Frontal Reconstruction",
        duration: "3 hr",
        price: "£200",
        sub:
          "Any wig · Re-ventilating hairline · density rebuilding · hairline redesign",
      },
    ],
  },
  {
    name: "Colour Services",
    description: "Contact-free · Hair must arrive 5 days before appointment",
    categoryNote:
      "Late submissions incur a £30 fee · Strand testing is mandatory · We are not liable for damage if hair fails strand testing",
    services: [
      { name: "Jet Black", duration: "2 hr", price: "£200" },
      { name: "1B → Natural Brown", duration: "5 hr", price: "£300" },
      { name: "613 → Pastel", duration: "2 hr", price: "£200" },
      {
        name: "Highlights",
        duration: "Varies",
        price: "Consultation",
      },
      {
        name: "Colour Correction",
        duration: "—",
        price: "Consultation",
        sub: "Wig only",
      },
      {
        name: "Root Melt / Toning / Grey Coverage",
        duration: "—",
        price: "After assessment",
      },
    ],
  },
  {
    name: "Consultations & Fittings",
    description: "In-person assessments and wig fittings",
    services: [
      {
        name: "Consultation",
        duration: "—",
        price: "£30",
        sub: "Non-refundable",
      },
      {
        name: "In-Person Wig Fitting",
        duration: "—",
        price: "£30",
      },
    ],
  },
];

type AddOnItem = { name: string; price: string; note?: string };
type AddOnGroup = { groupName: string; items: AddOnItem[] };

const addOnGroups: AddOnGroup[] = [
  {
    groupName: "Styling",
    items: [
      { name: "Styling Only (Curling / Waves)", price: "£50" },
      { name: "Defined Curls / Crimps", price: "£60" },
      { name: "Silk Press Finish", price: "£30" },
      { name: "Cut & Shape (Bob / Layers)", price: "£35" },
      { name: "Fringe / Bang Trim", price: "£20" },
      { name: "Parting Change (Middle ↔ Side)", price: "£15" },
    ],
  },
  {
    groupName: "Ponytail & Upstyle",
    items: [
      { name: "Extra Height / Snatched Ponytail", price: "£25" },
      { name: "Knot Bun / Sculpted Bun Upgrade", price: "£25" },
      { name: "Custom Ponytail Design", price: "£40" },
      {
        name: "Rhinestones / Hair Charms",
        price: "from £15",
        note: "Client supplies accessories unless stated otherwise",
      },
    ],
  },
  {
    groupName: "Maintenance & Refresh",
    items: [
      { name: "Wig Refresh (Wash, Blow-Dry & Style)", price: "£60" },
      { name: "Half Up Half Down Maintenance", price: "£80" },
      { name: "Re-Glue Frontal / Closure / Wig Unit", price: "£80" },
      { name: "Install Removal & Clean-Up", price: "£30" },
      { name: "Adhesive / Glue Removal (Heavy Build-Up)", price: "£15" },
    ],
  },
  {
    groupName: "Colour Add-Ons (Per Bundle)",
    items: [
      { name: "Jet Black", price: "£25" },
      { name: "1B to Natural Colour", price: "£40" },
      { name: "Highlights", price: "£50" },
      { name: "Grey Coverage (Extra Bundle)", price: "£20" },
      { name: "Toner / Colour Refresh", price: "£40" },
    ],
  },
  {
    groupName: "Wig Making & Fit",
    items: [
      { name: "Wig Size Adjustment (Tighten / Loosen)", price: "£25" },
      { name: "Elastic Band Replacement / Upgrade", price: "£20" },
      { name: "Travel-Ready Wig Prep", price: "£30" },
    ],
  },
  {
    groupName: "Express & Priority",
    items: [
      { name: "Express Service (Short Notice / Priority)", price: "£50" },
      { name: "Same-Day Wig Prep", price: "£40" },
      { name: "Out-of-Hours Appointment", price: "£75" },
    ],
  },
];

export default function ServicesSection() {
  const [openCategory, setOpenCategory] = useState<string | null>("Wig Installs");
  const [addOnsOpen, setAddOnsOpen] = useState(false);

  return (
    <section id="services" className="py-24 md:py-32 border-t border-[#e8e8e3]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#ff5a1f] mb-5">
            What We Offer
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-[#0a0a0a] leading-tight">
              Our Services
            </h2>
            <p className="max-w-[30ch] text-[#787872] text-sm leading-relaxed">
              Natural hair styling, sleek finishes, custom wig units and weave
              installations. 5+ years of premium results.
            </p>
          </div>
        </div>

        {/* Category accordion */}
        <div className="divide-y divide-[#e8e8e3] border-t border-[#e8e8e3]">
          {categories.map((cat) => {
            const isOpen = openCategory === cat.name;
            return (
              <div key={cat.name}>
                <button
                  onClick={() =>
                    setOpenCategory(isOpen ? null : cat.name)
                  }
                  className="w-full flex items-start justify-between py-6 md:py-8 group text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col gap-1">
                    <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#0a0a0a] group-hover:text-[#ff5a1f] transition-colors duration-200">
                      {cat.name}
                    </h3>
                    <span className="text-[11px] tracking-wide text-[#787872]">
                      {cat.description}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 shrink-0 ml-4 pt-1">
                    <span className="hidden md:block text-[11px] tracking-widest text-[#787872]">
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

                {isOpen && (
                  <div className="pb-10">
                    {/* Category-level note */}
                    {cat.categoryNote && (
                      <div className="mb-6 pl-4 border-l-2 border-[#ff5a1f]">
                        <p className="text-[11px] leading-relaxed text-[#787872]">
                          {cat.categoryNote}
                        </p>
                      </div>
                    )}

                    <div className="divide-y divide-[#e8e8e3]">
                      {cat.services.map((service) => (
                        <div
                          key={service.name}
                          className="flex items-start md:items-center justify-between py-4 md:py-5 hover:bg-[#f2f2ef] -mx-6 px-6 transition-colors duration-150 group/item"
                        >
                          <div className="flex flex-col gap-0.5 md:flex-row md:items-baseline md:gap-8">
                            <div>
                              <p className="text-[#0a0a0a] font-medium text-sm md:text-base">
                                {service.name}
                              </p>
                              {service.sub && (
                                <p className="text-[11px] text-[#787872] mt-0.5 leading-relaxed">
                                  {service.sub}
                                </p>
                              )}
                            </div>
                            <p className="text-[11px] tracking-widest text-[#787872] uppercase mt-1 md:mt-0 shrink-0">
                              {service.duration}
                            </p>
                          </div>
                          <div className="flex items-center gap-4 md:gap-6 shrink-0 ml-4">
                            <p className="font-display text-base md:text-lg font-medium text-[#0a0a0a] shrink-0">
                              {service.price}
                            </p>
                            <a
                              href="#booking"
                              className="hidden md:flex text-[10px] tracking-[0.2em] uppercase text-[#787872] border border-[#e8e8e3] px-4 py-2 group-hover/item:border-[#0a0a0a] group-hover/item:text-[#0a0a0a] transition-all duration-200 items-center"
                            >
                              Book
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Add-Ons */}
          <div>
            <button
              onClick={() => setAddOnsOpen(!addOnsOpen)}
              className="w-full flex items-start justify-between py-6 md:py-8 group text-left"
              aria-expanded={addOnsOpen}
            >
              <div className="flex flex-col gap-1">
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#0a0a0a] group-hover:text-[#ff5a1f] transition-colors duration-200">
                  Add-Ons
                </h3>
                <span className="text-[11px] tracking-wide text-[#787872]">
                  Enhance your appointment — must be selected at time of booking
                </span>
              </div>
              <div className="flex items-center gap-4 shrink-0 ml-4 pt-1">
                <span className="hidden md:block text-[11px] tracking-widest text-[#787872]">
                  6 categories
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
              <div className="pb-10">
                {addOnGroups.map((group, gi) => (
                  <div key={group.groupName} className={gi > 0 ? "mt-10" : ""}>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[#ff5a1f] mb-4">
                      {group.groupName}
                    </p>
                    <div className="divide-y divide-[#e8e8e3]">
                      {group.items.map((item) => (
                        <div
                          key={item.name}
                          className="flex items-start md:items-center justify-between py-3 md:py-4 hover:bg-[#f2f2ef] -mx-6 px-6 transition-colors duration-150"
                        >
                          <div>
                            <p className="text-[#0a0a0a] text-sm">
                              {item.name}
                            </p>
                            {item.note && (
                              <p className="text-[11px] text-[#787872] mt-0.5">
                                {item.note}
                              </p>
                            )}
                          </div>
                          <p className="font-display text-base font-medium text-[#0a0a0a] shrink-0 ml-4">
                            {item.price}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
