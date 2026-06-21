"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Menu, X, Sparkle } from "@phosphor-icons/react";
import { useState } from "react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#tokenomics", label: "Tokenomics" },
  { href: "#team", label: "Team" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="glass-header fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="IGNITE Home">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center text-xl font-bold" style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-strong))", color: "#0a0a0f" }}>
            <Sparkle size={22} />
          </div>
          <span className="text-xl font-bold tracking-tight">IGNITE</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="#faq" className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
            Documentation
          </Link>
          <Button size="sm" asChild>
            <Link href="/dashboard">Launch App</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-border)] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        id="mobile-menu"
        className="md:hidden px-5 pb-6 border-t"
        style={{ borderColor: "var(--color-border)" }}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ overflow: "hidden" }}
      >
        <nav className="flex flex-col gap-2 pt-4" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 text-base font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-4 border-t" style={{ borderColor: "var(--color-border)" }}>
            <Link href="#faq" className="py-2 text-base font-medium text-center text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
              Documentation
            </Link>
            <Button size="md" className="w-full" asChild>
              <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>Launch App</Link>
            </Button>
          </div>
        </nav>
      </motion.div>
    </header>
  );
}