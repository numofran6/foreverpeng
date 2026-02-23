import Nav from "./components/Nav";
import ServicesSection from "./components/ServicesSection";
import BookingForm from "./components/BookingForm";

export default function Home() {
  return (
    <div className="bg-[#f8f4ee] text-[#0a0a0a] overflow-x-hidden">
      <Nav />

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 md:px-12 pt-28 pb-16">
          {/* Eyebrow */}
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#b8975a] mb-8">
            London&apos;s Premier Beauty Studio
          </p>

          {/* Main headline */}
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

          {/* Tagline + CTAs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-5xl">
            <p className="max-w-[28ch] text-[#8a8178] leading-relaxed text-sm md:text-base">
              Where beauty meets artistry. Expert services crafted for every
              woman — delivered with luxury, care and precision.
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

        {/* Bottom meta bar */}
        <div className="border-t border-[#e2dbd0] max-w-7xl mx-auto w-full px-6 md:px-12 py-4 flex justify-between items-center text-[10px] tracking-[0.25em] uppercase text-[#8a8178]">
          <span>Est. 2020</span>
          <span>London, UK</span>
          <span className="hidden md:block">Scroll to explore ↓</span>
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
              Hair &nbsp;·&nbsp; Nails &nbsp;·&nbsp; Lashes &nbsp;·&nbsp; Brows
              &nbsp;·&nbsp; Makeup &nbsp;·&nbsp; Skincare
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
            {/* Text */}
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#b8975a] mb-7">
                Our Story
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.1] mb-8 text-[#0a0a0a]">
                Beauty is not a
                <br />
                <span className="italic">luxury.</span>
                <br />
                It&apos;s a standard.
              </h2>
              <p className="text-[#8a8178] leading-relaxed mb-5 text-sm md:text-base">
                ForeverPeng was born from one belief: every woman deserves to
                feel extraordinary — not just on special occasions, but every
                single day. Founded in the heart of London, our studio blends
                technical mastery with a genuine passion for beauty.
              </p>
              <p className="text-[#8a8178] leading-relaxed mb-10 text-sm md:text-base">
                Our team of expert stylists and beauty artists bring years of
                experience and an unwavering commitment to premium, curated
                products. From your first consultation to your final look, every
                detail is intentional.
              </p>
              <a
                href="#booking"
                className="text-[11px] tracking-[0.22em] uppercase text-[#0a0a0a] border-b border-[#0a0a0a] pb-1 hover:text-[#b8975a] hover:border-[#b8975a] transition-colors duration-200"
              >
                Book a consultation →
              </a>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-[#e8dfd4] via-[#d4c9b8] to-[#c4b49e] relative overflow-hidden">
                {/* Decorative brand overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-25">
                  <p className="font-display text-3xl font-black tracking-wider text-[#6b5d4e]">
                    FOREVER
                  </p>
                  <div className="w-12 h-px bg-[#6b5d4e]" />
                  <p className="font-display text-3xl font-black italic tracking-wider text-[#6b5d4e]">
                    PENG
                  </p>
                </div>
                {/* Corner accent */}
                <div className="absolute top-6 right-6 w-8 h-8 border border-[#b8975a] opacity-60" />
                <div className="absolute bottom-6 left-6 w-8 h-8 border border-[#b8975a] opacity-60" />
              </div>
              {/* Offset square */}
              <div className="absolute -bottom-5 -left-5 w-28 h-28 border border-[#e2dbd0] -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#0a0a0a] border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#b8975a] mb-16 md:mb-20">
            How It Works
          </p>
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {[
              {
                num: "01",
                title: "Choose Your Service",
                desc: "Browse our full menu — hair, nails, lashes, brows and makeup. Select what speaks to you, or message us for a recommendation.",
              },
              {
                num: "02",
                title: "Request Your Slot",
                desc: "Fill in our booking form with your preferred date and time. We'll confirm your appointment within 24 hours.",
              },
              {
                num: "03",
                title: "Arrive & Transform",
                desc: "Step into our studio and let our experts take care of everything. Leave feeling forever peng.",
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
              href="#"
              className="hidden md:block text-[11px] tracking-[0.22em] uppercase text-[#8a8178] border-b border-[#e2dbd0] pb-1 hover:text-[#0a0a0a] hover:border-[#0a0a0a] transition-colors duration-200"
            >
              @foreverpeng →
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px]">
          {[
            {
              from: "#e8dfd4",
              to: "#c9b8a0",
              label: "Hair Colour",
              tall: true,
            },
            {
              from: "#d8ccbc",
              to: "#b8a898",
              label: "Nail Art",
              tall: false,
            },
            {
              from: "#e0d8cc",
              to: "#c8b8a4",
              label: "Lash Sets",
              tall: false,
            },
            {
              from: "#ddd0c4",
              to: "#c4b4a0",
              label: "Brow Work",
              tall: true,
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group cursor-pointer ${
                item.tall ? "aspect-[3/4]" : "aspect-square md:aspect-[3/4]"
              }`}
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
              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-6 h-6 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* ─── TESTIMONIALS ────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-t border-[#e2dbd0] bg-[#f0ebe3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#b8975a] mb-12 md:mb-16">
            Client Love
          </p>
          <div className="grid md:grid-cols-3 gap-10 md:gap-16">
            {[
              {
                quote:
                  "My lashes have never looked this good. The team at ForeverPeng genuinely care about getting it right — I won't go anywhere else.",
                name: "Amara O.",
                service: "Volume Lash Set",
              },
              {
                quote:
                  "Had my bridal makeup done here and I was absolutely glowing. Every single detail was perfect. My girls were obsessed.",
                name: "Zoe B.",
                service: "Bridal Makeup",
              },
              {
                quote:
                  "The keratin treatment transformed my hair. Sleek, shiny and it lasted months. Worth every penny — book it, you won't regret it.",
                name: "Naomi T.",
                service: "Keratin Treatment",
              },
            ].map((t) => (
              <div key={t.name} className="flex flex-col gap-6">
                <div className="w-8 h-px bg-[#b8975a]" />
                <p className="font-display text-lg md:text-xl italic text-[#0a0a0a] leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-medium text-[#0a0a0a]">{t.name}</p>
                  <p className="text-[11px] tracking-widest uppercase text-[#8a8178]">
                    {t.service}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOOKING ─────────────────────────────────────────────── */}
      <section
        id="booking"
        className="py-24 md:py-32 border-t border-[#e2dbd0]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 md:gap-28">
            {/* Left: info */}
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#b8975a] mb-7">
                Reserve Your Visit
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.1] mb-7 text-[#0a0a0a]">
                Book Your
                <br />
                <span className="italic">Experience</span>
              </h2>
              <p className="text-[#8a8178] leading-relaxed mb-10 text-sm md:text-base">
                Ready to treat yourself? Fill out the form and we&apos;ll be in
                touch to confirm your appointment. For same-day bookings, call
                us directly.
              </p>

              <div className="flex flex-col gap-6">
                <div className="border-t border-[#e2dbd0] pt-5">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#8a8178] mb-2">
                    Phone
                  </p>
                  <p className="text-[#0a0a0a] text-sm">+44 7700 900000</p>
                </div>
                <div className="border-t border-[#e2dbd0] pt-5">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#8a8178] mb-2">
                    Email
                  </p>
                  <p className="text-[#0a0a0a] text-sm">
                    hello@foreverpeng.com
                  </p>
                </div>
                <div className="border-t border-[#e2dbd0] pt-5">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#8a8178] mb-2">
                    Studio Hours
                  </p>
                  <p className="text-[#0a0a0a] text-sm">
                    Mon – Sat: 9am – 8pm
                  </p>
                  <p className="text-[#0a0a0a] text-sm">Sun: 10am – 6pm</p>
                </div>
                <div className="border-t border-[#e2dbd0] pt-5">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#8a8178] mb-2">
                    Location
                  </p>
                  <p className="text-[#0a0a0a] text-sm">
                    123 Beauty Lane, London W1K 4LT
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

      {/* ─── FOOTER ──────────────────────────────────────────────── */}
      <footer
        id="contact"
        className="bg-[#0a0a0a] text-white py-16 md:py-20 border-t border-[#1a1a1a]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-14 pb-14 border-b border-[#1f1f1f]">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-5 tracking-wide">
                FOREVERPENG
              </h3>
              <p className="text-[#5a5552] text-sm leading-relaxed max-w-xs">
                London&apos;s premier beauty studio. Where beauty meets artistry
                and confidence is our craft.
              </p>
            </div>

            {/* Navigate */}
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
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="text-[#8a8480] hover:text-white transition-colors text-sm"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#3a3a3a] mb-6">
                Connect
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {["Instagram", "TikTok", "Facebook"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="text-[#8a8480] hover:text-white transition-colors text-sm"
                  >
                    {s}
                  </a>
                ))}
              </div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#3a3a3a] mb-3">
                Address
              </p>
              <p className="text-[#5a5552] text-sm leading-relaxed">
                123 Beauty Lane
                <br />
                London, W1K 4LT
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
            <p className="text-[10px] text-[#3a3a3a] tracking-widest uppercase">
              © 2025 ForeverPeng. All rights reserved.
            </p>
            <p className="text-[10px] text-[#3a3a3a] tracking-widest uppercase">
              Crafted with love in London.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
