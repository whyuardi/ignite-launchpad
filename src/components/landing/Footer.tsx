"use client";

import Link from "next/link";
import { TwitterLogo, GithubLogo, DiscordLogo, TelegramLogo, LinkedinLogo, Envelope, ArrowRight } from "@phosphor-icons/react";

const footerLinks = {
  Product: [
    { label: "Launchpad", href: "#features" },
    { label: "Tokenomics", href: "#tokenomics" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Security", href: "/security" },
    { label: "Audit Reports", href: "/audits" },
  ],
  Developers: [
    { label: "Documentation", href: "#faq" },
    { label: "SDK & API", href: "/developers" },
    { label: "GitHub", href: "https://github.com/ignite-launchpad", external: true },
    { label: "Smart Contracts", href: "/contracts" },
    { label: "Bug Bounty", href: "/bug-bounty" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Team", href: "#team" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Press Kit", href: "/press" },
  ],
  Legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};

const socialLinks = [
  { icon: TwitterLogo, href: "https://twitter.com/ignite_launchpad", label: "Twitter", external: true },
  { icon: GithubLogo, href: "https://github.com/ignite-launchpad", label: "GitHub", external: true },
  { icon: DiscordLogo, href: "https://discord.gg/ignite", label: "Discord", external: true },
  { icon: TelegramLogo, href: "https://t.me/ignite_launchpad", label: "Telegram", external: true },
  { icon: LinkedinLogo, href: "https://linkedin.com/company/ignite-launchpad", label: "LinkedIn", external: true },
  { icon: Envelope, href: "mailto:hello@ignite-launchpad.com", label: "Email", external: true },
];

export function Footer() {
  return (
    <footer className="relative border-t py-16 px-5" style={{ borderColor: "var(--color-border)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4" aria-label="IGNITE Home">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl font-bold" style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-strong))", color: "#0a0a0f" }}>
                <span>I</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">IGNITE</span>
            </Link>
            <p className="text-[var(--color-text-muted)] leading-relaxed max-w-xs mb-6">
              The launchpad for Web3's next unicorns. Secure, transparent, and built by protocol engineers.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                  style={{ background: "var(--color-border)", border: "1px solid var(--color-border)" }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <nav aria-label="Product links">
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.Product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Developers */}
          <nav aria-label="Developer links">
            <h4 className="font-semibold mb-4">Developers</h4>
            <ul className="space-y-3">
              {footerLinks.Developers.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    {link.external && <ArrowRight size={12} />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company links">
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.Company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal links">
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.Legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: "var(--color-border)" }}>
          <p className="text-sm text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} IGNITE. All rights reserved.
          </p>
          <p className="text-sm text-[var(--color-text-muted)]">
            Not financial advice. Do your own research.
          </p>
        </div>
      </div>
    </footer>
  );
}