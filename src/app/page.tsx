import Image from "next/image";
import Nav from "./components/Nav";
import ServicesSection from "./components/ServicesSection";
import BookingForm from "./components/BookingForm";
import PoliciesSection from "./components/PoliciesSection";
import StatsBar from "./components/StatsBar";
import Reveal from "./components/Reveal";

// Real brand photos downloaded from @foreverpeng.hair Instagram
const IMGS = {
  heroPortrait: "/gallery/post-1.jpg",   // 1080×1916 — tall editorial portrait
  aboutSalon:   "/gallery/post-0.jpg",   // 1080×1350 — brand result shot
  gallery: [
    "/gallery/post-3.jpg",  // 1080×1350
    "/gallery/post-7.jpg",  // 720×960
    "/gallery/post-2.jpg",  // 720×1280
    "/gallery/post-5.jpg",  // 640×1136
    "/gallery/post-0.jpg",  // 1080×1350
    "/gallery/post-1.jpg",  // 1080×1916
  ],
};

const WaSvg = ({ size = "md" }: { size?: "sm" | "md" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={size === "sm" ? "w-3.5 h-3.5 shrink-0" : "w-4 h-4 shrink-0"}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const featuredServices = [
  {
    label: "Most Popular",
    name: "Full Lace Wig Install",
    price: "from £150",
    duration: "2.5–3h",
    dark: true,
    orange: false,
  },
  {
    label: "Trending",
    name: "Frontal Ponytail",
    price: "from £120",
    duration: "1.5h",
    dark: false,
    orange: true,
  },
  {
    label: "Wig Making",
    name: "180 Frontal Wig",
    price: "from £120",
    duration: "7 days",
    dark: true,
    orange: false,
  },
  {
    label: "Sew-In",
    name: "Lace Frontal Sew-In",
    price: "from £150",
    duration: "2.5–3h",
    dark: true,
    orange: false,
  },
  {
    label: "Colour",
    name: "Colour Service",
    price: "from £200",
    duration: "Varies",
    dark: false,
    orange: true,
  },
];

export default function Home() {
  return (
    <div className="bg-[#f9f9f7] text-[#0a0a0a] overflow-x-hidden">
      <Nav />

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen">
        {/* Portrait image — right 45%, desktop only */}
        <div className="hidden md:block absolute top-0 right-0 w-[45%] h-full">
          <Image
            src={IMGS.heroPortrait}
            alt="Forever Peng Hair — Glasgow's Wig Specialists"
            fill
            priority
            className="object-cover object-top"
          />
          {/* Fade left into page background */}
          <div className="absolute inset-0 bg-linear-to-r from-[#f9f9f7] via-[#f9f9f7]/30 to-transparent" />
          {/* Fade bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-[#f9f9f7] to-transparent" />
        </div>

        <div className="relative flex flex-col min-h-screen">
          <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 md:px-12 pt-28 pb-16">

            {/* Glasgow pill badge */}
            <div className="hero-eyebrow flex items-center gap-3 mb-8 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff5a1f] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff5a1f]" />
              </span>
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#787872]">
                Glasgow · Now Booking
              </p>
            </div>

            <div className="mb-10 md:max-w-[58%]">
              <h1 className="hero-line-1 font-display text-[clamp(4.5rem,13vw,13rem)] font-black leading-[0.88] tracking-tight text-[#0a0a0a]">
                Forever
              </h1>
              <h1
                className="hero-line-2 font-display text-[clamp(4.5rem,13vw,13rem)] font-black leading-[0.88] tracking-tight"
                style={{ WebkitTextStroke: "2px #0a0a0a", color: "transparent" }}
              >
                Peng
                <span style={{ WebkitTextStroke: "2px #ff5a1f", color: "transparent" }}>
                  .
                </span>
              </h1>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:max-w-[58%]">
              <p className="hero-sub max-w-[30ch] text-[#787872] leading-relaxed text-sm md:text-base">
                Glasgow&apos;s wig specialists. HD lace installs, custom units,
                sew-ins &amp; colour. 5+ years. Always premium. Always peng.
              </p>
              <div className="hero-cta flex gap-3 shrink-0">
                <a
                  href="#booking"
                  className="text-[11px] tracking-[0.22em] uppercase bg-[#0a0a0a] text-[#f9f9f7] px-8 py-4 hover:bg-[#ff5a1f] transition-colors duration-300"
                >
                  Book Now
                </a>
                <a
                  href="#services"
                  className="text-[11px] tracking-[0.22em] uppercase border border-[#0a0a0a] text-[#0a0a0a] px-8 py-4 hover:bg-[#0a0a0a] hover:text-[#f9f9f7] transition-colors duration-300"
                >
                  Services
                </a>
              </div>
            </div>
          </div>

          <div className="hero-bar border-t border-[#e8e8e3] max-w-7xl mx-auto w-full px-6 md:px-12 py-4 flex justify-between items-center text-[10px] tracking-[0.25em] uppercase text-[#787872]">
            <span>5+ Years Experience</span>
            <span className="hidden md:block">WhatsApp: 07707228205</span>
            <span>Scroll to explore ↓</span>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ────────────────────────────────────────────── */}
      <StatsBar />

      {/* ─── MARQUEE ─────────────────────────────────────────────── */}
      <div className="border-y border-[#e8e8e3] py-4 overflow-hidden bg-[#f9f9f7]">
        <div className="marquee-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="text-[10px] tracking-[0.4em] uppercase text-[#787872] mx-10 shrink-0"
            >
              Wig Installs &nbsp;·&nbsp; Frontal Ponytails &nbsp;·&nbsp;
              Sew-Ins &nbsp;·&nbsp; Wig Making &nbsp;·&nbsp; Colour Services
              &nbsp;·&nbsp; Add-Ons
            </span>
          ))}
        </div>
      </div>

      {/* ─── FEATURED SERVICES ───────────────────────────────────── */}
      <section className="py-16 md:py-20 border-b border-[#e8e8e3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
          <Reveal>
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#ff5a1f] mb-3">
              Featured
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0a0a0a]">
              Most Booked Services
            </h2>
          </Reveal>
        </div>
        <div className="overflow-x-auto no-scrollbar px-6 md:px-12">
          <div className="flex gap-4 w-max snap-x snap-mandatory pb-2">
            {featuredServices.map((card) => {
              const bg = card.orange ? "#ff5a1f" : card.dark ? "#0a0a0a" : "#141414";
              const priceColor = card.orange ? "#fff" : "#ff5a1f";
              const labelColor = card.orange ? "rgba(0,0,0,0.5)" : "rgba(255,90,31,0.7)";
              return (
                <a
                  key={card.name}
                  href="#booking"
                  className="snap-start shrink-0 w-60 md:w-70 p-8 flex flex-col justify-between gap-10 group transition-transform duration-300 hover:-translate-y-1"
                  style={{ background: bg, minHeight: "320px" }}
                >
                  <div>
                    <p
                      className="text-[10px] tracking-[0.3em] uppercase mb-6"
                      style={{ color: labelColor }}
                    >
                      {card.label}
                    </p>
                    <h3 className="font-display text-2xl font-bold leading-tight text-white">
                      {card.name}
                    </h3>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <p
                        className="font-display text-3xl font-black"
                        style={{ color: priceColor }}
                      >
                        {card.price}
                      </p>
                      <p className="text-[10px] tracking-widest uppercase mt-1 text-white/40">
                        {card.duration}
                      </p>
                    </div>
                    <span
                      className="text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white"
                    >
                      →
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ────────────────────────────────────────────── */}
      <ServicesSection />

      {/* ─── ABOUT ───────────────────────────────────────────────── */}
      <section id="about" className="py-24 md:py-32 border-t border-[#e8e8e3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 md:gap-28 items-center">
            <Reveal>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#ff5a1f] mb-7">
                Our Story
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.1] mb-8 text-[#0a0a0a]">
                Premium results.
                <br />
                <span className="italic">Every time.</span>
              </h2>
              <p className="text-[#787872] leading-relaxed mb-5 text-sm md:text-base">
                Forever Peng Hair is Glasgow&apos;s go-to wig specialist. We do
                HD lace installs, custom wig units, sew-ins, colour services,
                and 1:1 professional training — with 5+ years of delivering
                premium results, no compromise.
              </p>
              <p className="text-[#787872] leading-relaxed mb-10 text-sm md:text-base">
                We work exclusively with HD thin lace and top-tier materials so
                your install looks natural, lasts longer, and leaves you feeling
                forever peng.
              </p>
              <a
                href="#booking"
                className="text-[11px] tracking-[0.22em] uppercase text-[#0a0a0a] border-b border-[#0a0a0a] pb-1 hover:text-[#ff5a1f] hover:border-[#ff5a1f] transition-colors duration-200"
              >
                Book a consultation →
              </a>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative">
                <div className="aspect-3/4 relative overflow-hidden">
                  <Image
                    src={IMGS.aboutSalon}
                    alt="Forever Peng Hair stylist at work"
                    fill
                    className="object-cover object-center"
                  />
                  {/* Dark gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a]/75 via-transparent to-transparent" />
                  <div className="absolute top-6 right-6 w-8 h-8 border border-[#ff5a1f] opacity-70" />
                  <div className="absolute top-6 left-6 w-8 h-8 border border-[#ff5a1f] opacity-40" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[#ff5a1f] mb-2">
                      Glasgow&apos;s Wig Specialists
                    </p>
                    <p className="font-display text-xl font-bold text-white">
                      HD Lace Only.
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-5 -left-5 w-28 h-28 border border-[#e8e8e3] z-0" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#ff5a1f] mb-16 md:mb-20">
              How It Works
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {[
              {
                num: "01",
                title: "Choose Your Look",
                desc: "Browse our full service menu — wig installs, sew-ins, wig making, colour and more. Not sure? Book a £30 consultation first.",
              },
              {
                num: "02",
                title: "Lock In Your Slot",
                desc: "Secure your appointment with a £30 non-refundable deposit. Confirm via WhatsApp 24 hours before you arrive.",
              },
              {
                num: "03",
                title: "Show Up & Slay",
                desc: "Arrive on time with clean hair — no oils or products. We handle everything else. Leave looking and feeling forever peng.",
              },
            ].map((step, i) => (
              <Reveal key={step.num} delay={i * 100}>
                <div className="border-t border-[#2a2a2a] pt-8 md:pt-10">
                  <p className="font-display text-6xl font-black text-[#1f1f1f] mb-8 leading-none">
                    {step.num}
                  </p>
                  <h3 className="font-display text-xl font-semibold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[#5a5552] leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY ─────────────────────────────────────────────── */}
      <section id="gallery" className="py-24 md:py-32 border-t border-[#e8e8e3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
          <Reveal>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[10px] tracking-[0.35em] uppercase text-[#ff5a1f] mb-5">
                  Our Work
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0a0a0a]">
                  Gallery
                </h2>
              </div>
              <a
                href="https://www.instagram.com/foreverpeng.hair"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block text-[11px] tracking-[0.22em] uppercase text-[#787872] border-b border-[#e8e8e3] pb-1 hover:text-[#0a0a0a] hover:border-[#0a0a0a] transition-colors duration-200"
              >
                @foreverpeng.hair →
              </a>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-0.5">
          {IMGS.gallery.map((src, i) => (
            <a
              key={i}
              href="https://www.instagram.com/foreverpeng.hair"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square relative overflow-hidden group"
            >
              <Image
                src={src}
                alt={`Forever Peng Hair — post ${i + 1}`}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#0a0a0a] opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              {/* Instagram icon on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ─── BOOKING ─────────────────────────────────────────────── */}
      <section id="booking" className="py-24 md:py-32 border-t border-[#e8e8e3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 md:gap-28">
            {/* Left */}
            <Reveal>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#ff5a1f] mb-7">
                Reserve Your Visit
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.1] mb-7 text-[#0a0a0a]">
                Book Your
                <br />
                <span className="italic">Appointment</span>
              </h2>
              <p className="text-[#787872] leading-relaxed mb-10 text-sm md:text-base">
                Fill in the form and we&apos;ll be in touch to confirm your
                slot. A £30 deposit secures your booking. For same-day or
                urgent enquiries, reach us directly on WhatsApp.
              </p>

              <a
                href="https://wa.me/447707228205"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#0a0a0a] text-[#f9f9f7] px-7 py-4 hover:bg-[#ff5a1f] transition-colors duration-300 w-fit mb-10"
              >
                <WaSvg />
                <span className="text-[11px] tracking-[0.22em] uppercase">
                  WhatsApp Us
                </span>
              </a>

              <div className="flex flex-col gap-5">
                {[
                  { label: "WhatsApp", value: "07707228205" },
                  { label: "Email", value: "foreverpenghair@gmail.com" },
                  { label: "Parking", value: "Free parking on King Street, Glasgow" },
                  { label: "1:1 Training", value: "Email: foreverpenghair@gmail.com" },
                ].map((item) => (
                  <div key={item.label} className="border-t border-[#e8e8e3] pt-5">
                    <p className="text-[10px] tracking-[0.25em] uppercase text-[#787872] mb-2">
                      {item.label}
                    </p>
                    <p className="text-[#0a0a0a] text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Right: form */}
            <div>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* ─── POLICIES ────────────────────────────────────────────── */}
      <PoliciesSection />

      {/* ─── FOOTER ──────────────────────────────────────────────── */}
      <footer
        id="contact"
        className="bg-[#050505] text-white py-16 md:py-20 border-t border-[#111]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-14 pb-14 border-b border-[#1a1a1a]">
            <div className="md:col-span-2">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-5 tracking-wide">
                FOREVER PENG HAIR
              </h3>
              <p className="text-[#4a4a4a] text-sm leading-relaxed max-w-xs mb-6">
                Glasgow&apos;s wig specialists. HD lace installs, custom wig
                units, sew-ins, colour services, and 1:1 training.
              </p>
              <a
                href="https://wa.me/447707228205"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#ff5a1f] border border-[#2a2a2a] px-5 py-3 hover:border-[#ff5a1f] transition-colors duration-300"
              >
                <WaSvg size="sm" />
                WhatsApp Us
              </a>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#3a3a3a] mb-6">
                Navigate
              </p>
              <div className="flex flex-col gap-3">
                {[
                  ["Services", "#services"],
                  ["About", "#about"],
                  ["Gallery", "#gallery"],
                  ["Book Now", "#booking"],
                  ["Policies", "#policies"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="text-[#6a6460] hover:text-white transition-colors text-sm"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#3a3a3a] mb-6">
                Connect
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {[
                  ["Instagram", "https://www.instagram.com/foreverpeng.hair"],
                  ["WhatsApp", "https://wa.me/447707228205"],
                ].map(([s, href]) => (
                  <a
                    key={s}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6a6460] hover:text-white transition-colors text-sm"
                  >
                    {s}
                  </a>
                ))}
              </div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#3a3a3a] mb-3">
                Contact
              </p>
              <p className="text-[#4a4a4a] text-sm leading-relaxed">
                07707228205
                <br />
                foreverpenghair@gmail.com
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
            <p className="text-[10px] text-[#2a2a2a] tracking-widest uppercase">
              © 2025 Forever Peng Hair. All rights reserved.
            </p>
            <p className="text-[10px] text-[#2a2a2a] tracking-widest uppercase">
              Booking an appointment confirms agreement to all policies.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
