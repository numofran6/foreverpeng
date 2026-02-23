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

  const links = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#f8f4ee]/95 backdrop-blur-md border-b border-[#e2dbd0]"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-lg md:text-xl font-bold tracking-[0.12em] uppercase text-[#0a0a0a]"
        >
          ForeverPeng
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] tracking-[0.22em] uppercase text-[#8a8178] hover:text-[#0a0a0a] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            className="text-[11px] tracking-[0.22em] uppercase bg-[#0a0a0a] text-[#f8f4ee] px-7 py-3 hover:bg-[#b8975a] transition-colors duration-300"
          >
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
        >
          <span
            className={`block h-px bg-[#0a0a0a] transition-all duration-300 origin-center ${
              mobileOpen ? "rotate-45 translate-y-[7px] w-6" : "w-6"
            }`}
          />
          <span
            className={`block h-px bg-[#0a0a0a] transition-all duration-300 ${
              mobileOpen ? "opacity-0 w-4" : "w-4"
            }`}
          />
          <span
            className={`block h-px bg-[#0a0a0a] transition-all duration-300 origin-center ${
              mobileOpen ? "-rotate-45 -translate-y-[7px] w-6" : "w-6"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? "max-h-96 border-b border-[#e2dbd0]" : "max-h-0"
        } bg-[#f8f4ee]`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[11px] tracking-[0.22em] uppercase text-[#8a8178] hover:text-[#0a0a0a] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setMobileOpen(false)}
            className="text-[11px] tracking-[0.22em] uppercase bg-[#0a0a0a] text-[#f8f4ee] px-6 py-4 text-center hover:bg-[#b8975a] transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}
