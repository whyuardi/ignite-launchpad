"use client";

import Link from "next/link";
import { Lightning } from "@phosphor-icons/react";

const footerLinks = {
  Platform: [
    { href: "#features", label: "Features" },
    { href: "#tokenomics", label: "Tokenomics" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "/dashboard", label: "Dashboard" },
  ],
  Resources: [
    { href: "#", label: "Documentation" },
    { href: "#", label: "Whitepaper" },
    { href: "#", label: "Audits" },
    { href: "#", label: "Bug Bounty" },
  ],
  Community: [
    { href: "#", label: "Discord" },
    { href: "#", label: "Twitter" },
    { href: "#", label: "Telegram" },
    { href: "#", label: "Blog" },
  ],
  Legal: [
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Cookie Policy" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-card)]/30">
      <div className="max-w-7xl mx-auto px-5 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--color-accent)" }}>
                <Lightning size={16} className="text-[#0a0a0f]" />
              </div>
              <span className="text-base font-bold tracking-tight">Ignite</span>
            </Link>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed max-w-xs mb-6">
              The launchpad infrastructure for Web3&apos;s next unicorns. Secure, transparent, and compliant.
            </p>
            <div className="flex gap-3">
              {["Twitter", "Discord", "Telegram", "GitHub"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-lg border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/30 transition-colors text-[10px] font-medium"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="md:col-span-2">
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            © 2025 Ignite Launchpad. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-[10px] text-[var(--color-text-muted)]">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
