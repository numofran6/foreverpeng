"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const links = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          mobileOpen
            ? "bg-[#0a0a0a]"
            : scrolled
            ? "bg-[#f9f9f7]/95 backdrop-blur-md border-b border-[#e8e8e3]"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className={`font-display text-lg md:text-xl font-bold tracking-[0.12em] uppercase transition-colors duration-300 ${
              mobileOpen ? "text-white" : "text-[#0a0a0a]"
            }`}
          >
            ForeverPeng
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] tracking-[0.22em] uppercase text-[#787872] hover:text-[#0a0a0a] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              className="text-[11px] tracking-[0.22em] uppercase bg-[#0a0a0a] text-[#f9f9f7] px-7 py-3 hover:bg-[#ff5a1f] transition-colors duration-300"
            >
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col justify-center gap-1.25 w-8 h-8"
          >
            <span
              className={`block h-px transition-all duration-300 origin-center ${
                mobileOpen
                  ? "bg-white rotate-45 translate-y-1.75 w-6"
                  : "bg-[#0a0a0a] w-6"
              }`}
            />
            <span
              className={`block h-px transition-all duration-300 ${
                mobileOpen ? "opacity-0 w-4" : "bg-[#0a0a0a] w-4"
              }`}
            />
            <span
              className={`block h-px transition-all duration-300 origin-center ${
                mobileOpen
                  ? "bg-white -rotate-45 -translate-y-1.75 w-6"
                  : "bg-[#0a0a0a] w-6"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Full-screen mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col transition-opacity duration-400 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Nav links — centred vertically */}
        <div className="flex-1 flex flex-col justify-center px-8 pt-16">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#ff5a1f] mb-10">
            Menu
          </p>
          <div className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-5xl font-bold text-white py-4 border-b border-[#1a1a1a] hover:text-[#ff5a1f] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#booking"
            onClick={() => setMobileOpen(false)}
            className="mt-10 text-[11px] tracking-[0.25em] uppercase bg-[#ff5a1f] text-white py-5 text-center"
          >
            Book Now
          </a>
        </div>

        {/* Contact strip at bottom */}
        <div className="px-8 py-8 border-t border-[#1a1a1a]">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#555] mb-3">
            Get in touch
          </p>
          <p className="text-white text-sm mb-1">07707228205</p>
          <p className="text-[#666] text-sm">foreverpenghair@gmail.com</p>
        </div>
      </div>
    </>
  );
}
