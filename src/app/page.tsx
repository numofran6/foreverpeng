import Nav from "./components/Nav";
import ServicesSection from "./components/ServicesSection";
import BookingForm from "./components/BookingForm";
import PoliciesSection from "./components/PoliciesSection";

export default function Home() {
  return (
    <div className="bg-[#f8f4ee] text-[#0a0a0a] overflow-x-hidden">
      <Nav />

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 md:px-12 pt-28 pb-16">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#b8975a] mb-8">
            Natural Hair Styling · Wig Installs · Custom Units
          </p>

          <div className="mb-10">
            <h1 className="font-display text-[clamp(4.5rem,13vw,13rem)] font-black leading-[0.88] tracking-tight text-[#0a0a0a]">
              Forever
            </h1>
            <h1
              className="font-display text-[clamp(4.5rem,13vw,13rem)] font-black leading-[0.88] tracking-tight italic"
              style={{
                WebkitTextStroke: "2px #0a0a0a",
                color: "transparent",
              }}
            >
              Peng
            </h1>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-5xl">
            <p className="max-w-[30ch] text-[#8a8178] leading-relaxed text-sm md:text-base">
              Specialists in natural hair styling, sleek finishes, custom wig
              units and weave installations. 5+ years of premium results and
              an exceptional client experience.
            </p>
            <div className="flex gap-3 shrink-0">
              <a
                href="#booking"
                className="text-[11px] tracking-[0.22em] uppercase bg-[#0a0a0a] text-[#f8f4ee] px-8 py-4 hover:bg-[#b8975a] transition-colors duration-300"
              >
                Book Now
              </a>
              <a
                href="#services"
                className="text-[11px] tracking-[0.22em] uppercase border border-[#0a0a0a] text-[#0a0a0a] px-8 py-4 hover:bg-[#0a0a0a] hover:text-[#f8f4ee] transition-colors duration-300"
              >
                Services
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#e2dbd0] max-w-7xl mx-auto w-full px-6 md:px-12 py-4 flex justify-between items-center text-[10px] tracking-[0.25em] uppercase text-[#8a8178]">
          <span>5+ Years Experience</span>
          <span className="hidden md:block">WhatsApp: 07707228205</span>
          <span>Scroll to explore ↓</span>
        </div>
      </section>

      {/* ─── MARQUEE ─────────────────────────────────────────────── */}
      <div className="border-y border-[#e2dbd0] py-4 overflow-hidden bg-[#f8f4ee]">
        <div className="marquee-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="text-[10px] tracking-[0.4em] uppercase text-[#8a8178] mx-10 shrink-0"
            >
              Wig Installs &nbsp;·&nbsp; Frontal Ponytails &nbsp;·&nbsp;
              Sew-Ins &nbsp;·&nbsp; Wig Making &nbsp;·&nbsp; Colour Services
              &nbsp;·&nbsp; Add-Ons
            </span>
          ))}
        </div>
      </div>

      {/* ─── SERVICES ────────────────────────────────────────────── */}
      <ServicesSection />

      {/* ─── ABOUT ───────────────────────────────────────────────── */}
      <section id="about" className="py-24 md:py-32 border-t border-[#e2dbd0]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 md:gap-28 items-center">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#b8975a] mb-7">
                Our Story
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.1] mb-8 text-[#0a0a0a]">
                Premium results.
                <br />
                <span className="italic">Every time.</span>
              </h2>
              <p className="text-[#8a8178] leading-relaxed mb-5 text-sm md:text-base">
                Forever Peng Hair specialises in natural hair styling, sleek
                finishes, custom wig units, weave installations, and 1:1
                professional training. With over 5 years of experience, we are
                committed to delivering premium results and an exceptional client
                experience.
              </p>
              <p className="text-[#8a8178] leading-relaxed mb-10 text-sm md:text-base">
                Every service is carried out with precision and care — from your
                first consultation to the final melt. We work exclusively with
                HD thin lace and premium materials, so your install looks
                natural, lasts longer, and leaves you feeling forever peng.
              </p>
              <a
                href="#booking"
                className="text-[11px] tracking-[0.22em] uppercase text-[#0a0a0a] border-b border-[#0a0a0a] pb-1 hover:text-[#b8975a] hover:border-[#b8975a] transition-colors duration-200"
              >
                Book a consultation →
              </a>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-[#e8dfd4] via-[#d4c9b8] to-[#c4b49e] relative overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-20">
                  <p className="font-display text-3xl font-black tracking-wider text-[#6b5d4e]">
                    FOREVER
                  </p>
                  <div className="w-12 h-px bg-[#6b5d4e]" />
                  <p className="font-display text-3xl font-black italic tracking-wider text-[#6b5d4e]">
                    PENG
                  </p>
                </div>
                <div className="absolute top-6 right-6 w-8 h-8 border border-[#b8975a] opacity-60" />
                <div className="absolute bottom-6 left-6 w-8 h-8 border border-[#b8975a] opacity-60" />
              </div>
              <div className="absolute -bottom-5 -left-5 w-28 h-28 border border-[#e2dbd0] -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#b8975a] mb-16 md:mb-20">
            How It Works
          </p>
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {[
              {
                num: "01",
                title: "Browse & Choose",
                desc: "Browse our full service menu — wig installs, sew-ins, wig making, colour and more. Not sure? Book a £30 consultation first.",
              },
              {
                num: "02",
                title: "Deposit & Confirm",
                desc: "Secure your slot with a £30 non-refundable deposit. Confirm your appointment 24 hours before via WhatsApp.",
              },
              {
                num: "03",
                title: "Arrive Ready",
                desc: "Come with clean hair — no oils or products. We do the rest. Leave looking and feeling forever peng.",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="border-t border-[#2a2a2a] pt-8 md:pt-10"
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY ─────────────────────────────────────────────── */}
      <section
        id="gallery"
        className="py-24 md:py-32 border-t border-[#e2dbd0]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#b8975a] mb-5">
                Our Work
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0a0a0a]">
                Gallery
              </h2>
            </div>
            <a
              href="https://instagram.com"
              className="hidden md:block text-[11px] tracking-[0.22em] uppercase text-[#8a8178] border-b border-[#e2dbd0] pb-1 hover:text-[#0a0a0a] hover:border-[#0a0a0a] transition-colors duration-200"
            >
              @foreverpenghair →
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px]">
          {[
            { from: "#e8dfd4", to: "#c9b8a0", label: "Wig Installs" },
            { from: "#d8ccbc", to: "#b8a898", label: "Frontal Ponytails" },
            { from: "#e0d8cc", to: "#c8b8a4", label: "Sew-Ins" },
            { from: "#ddd0c4", to: "#c4b4a0", label: "Colour Services" },
          ].map((item, i) => (
            <div
              key={i}
              className="aspect-3/4 relative overflow-hidden group cursor-pointer"
              style={{
                background: `linear-gradient(135deg, ${item.from}, ${item.to})`,
              }}
            >
              <div className="absolute inset-0 bg-[#0a0a0a] opacity-0 group-hover:opacity-40 transition-opacity duration-400" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <p className="text-white text-[10px] tracking-[0.25em] uppercase">
                  {item.label}
                </p>
              </div>
              <div className="absolute top-4 right-4 w-6 h-6 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* ─── BOOKING ─────────────────────────────────────────────── */}
      <section
        id="booking"
        className="py-24 md:py-32 border-t border-[#e2dbd0]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 md:gap-28">
            {/* Left */}
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#b8975a] mb-7">
                Reserve Your Visit
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.1] mb-7 text-[#0a0a0a]">
                Book Your
                <br />
                <span className="italic">Appointment</span>
              </h2>
              <p className="text-[#8a8178] leading-relaxed mb-10 text-sm md:text-base">
                Fill in the form and we&apos;ll be in touch to confirm your
                slot. A £30 deposit secures your booking. For same-day or
                urgent enquiries, reach us directly on WhatsApp.
              </p>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/447707228205"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#0a0a0a] text-[#f8f4ee] px-7 py-4 hover:bg-[#b8975a] transition-colors duration-300 w-fit mb-10"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 shrink-0"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span className="text-[11px] tracking-[0.22em] uppercase">
                  WhatsApp Us
                </span>
              </a>

              <div className="flex flex-col gap-5">
                <div className="border-t border-[#e2dbd0] pt-5">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#8a8178] mb-2">
                    WhatsApp
                  </p>
                  <p className="text-[#0a0a0a] text-sm">07707228205</p>
                </div>
                <div className="border-t border-[#e2dbd0] pt-5">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#8a8178] mb-2">
                    Email
                  </p>
                  <p className="text-[#0a0a0a] text-sm">
                    foreverpenghair@gmail.com
                  </p>
                </div>
                <div className="border-t border-[#e2dbd0] pt-5">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#8a8178] mb-2">
                    Parking
                  </p>
                  <p className="text-[#0a0a0a] text-sm">
                    Free parking on King Street
                  </p>
                </div>
                <div className="border-t border-[#e2dbd0] pt-5">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#8a8178] mb-2">
                    1:1 Training Enquiries
                  </p>
                  <p className="text-[#0a0a0a] text-sm">
                    Email: foreverpenghair@gmail.com
                  </p>
                </div>
              </div>
            </div>

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
                Specialists in natural hair styling, sleek finishes, custom wig
                units, weave installations, and 1:1 professional training.
              </p>
              <a
                href="https://wa.me/447707228205"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#b8975a] border border-[#2a2a2a] px-5 py-3 hover:border-[#b8975a] transition-colors duration-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-3.5 h-3.5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
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
                  ["Instagram", "https://instagram.com"],
                  ["TikTok", "https://tiktok.com"],
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
