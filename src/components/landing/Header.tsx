"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Lightning } from "@phosphor-icons/react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#tokenomics", label: "Tokenomics" },
  { href: "#team", label: "Team" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[var(--color-bg)]/80 backdrop-blur-xl border-b border-[var(--color-border)]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--color-accent)" }}>
            <Lightning size={16} className="text-[#0a0a0f]" />
          </div>
          <span className="text-base font-bold tracking-tight">Ignite</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all hover:opacity-90"
            style={{ background: "var(--color-accent)", color: "#0a0a0f" }}
          >
            Launch App
          </Link>
        </div>
      </div>
    </header>
  );
}
