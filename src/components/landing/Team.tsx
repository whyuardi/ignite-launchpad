"use client";

import { motion } from "motion/react";

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    bio: "Ex-Coinbase, Stanford CS. 10+ years in crypto infrastructure. Led engineering at 3 successful protocols.",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO",
    bio: "Former Chainlink core contributor. Built DeFi primitives at Yearn. Smart contract architecture expert.",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Elena Volkov",
    role: "Head of Security",
    bio: "Ex-Trail of Bits. Audited $2B+ TVL protocols. Published research on MEV resistance.",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "David Park",
    role: "Head of Product",
    bio: "Led product at Uniswap Labs. Previously Stripe. Obsessed with clean UX in complex systems.",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Aisha Patel",
    role: "Head of Operations",
    bio: "Ex-Binance Launchpad. Managed 50+ successful IDOs. Legal and compliance expert.",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "James Wilson",
    role: "Head of Marketing",
    bio: "Former Consensys. Built communities from 0 to 100K. DeFi narrative specialist.",
    twitter: "#",
    linkedin: "#",
  },
];

const advisors = [
  {
    name: "Vitalik M.",
    role: "Strategic Advisor",
    bio: "Ethereum Foundation alumni. Protocol design consultant.",
  },
  {
    name: "Lisa T.",
    role: "Security Advisor",
    bio: "Trail of Bits founder. Smart contract security pioneer.",
  },
  {
    name: "Ryan K.",
    role: "Growth Advisor",
    bio: "a16z Crypto partner. Scaling Web3 from 0 to 1.",
  },
];

export function Team() {
  return (
    <section className="relative py-16 md:py-24 px-5 overflow-hidden" id="team">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[var(--color-accent)]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--color-accent)]">
              Team
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] max-w-lg">
            Built by
            <br />
            <span className="text-[var(--color-accent)]">operators</span>
          </h2>
        </div>

        {/* Team grid - asymmetric bento */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* First two members - larger */}
          {team.slice(0, 2).map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="md:col-span-6 group"
            >
              <div className="p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-accent)]/20 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold">{m.name}</h3>
                    <p className="text-sm text-[var(--color-accent)]">{m.role}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] font-bold text-sm">
                    {m.name.split(" ").map(n => n[0]).join("")}
                  </div>
                </div>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">{m.bio}</p>
                <div className="flex gap-3">
                  {m.twitter && (
                    <a href={m.twitter} className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                  )}
                  {m.linkedin && (
                    <a href={m.linkedin} className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Remaining four - smaller */}
          {team.slice(2).map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + 2) * 0.1 }}
              className="md:col-span-3 group"
            >
              <div className="p-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-accent)]/20 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] font-bold text-xs">
                    {m.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">{m.name}</h3>
                    <p className="text-xs text-[var(--color-accent)]">{m.role}</p>
                  </div>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{m.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advisors */}
        <div className="mt-8">
          <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-4">Advisors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {advisors.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)]/50"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] font-bold text-[9px]">
                    {a.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{a.name}</div>
                    <div className="text-[10px] text-[var(--color-accent)]">{a.role}</div>
                  </div>
                </div>
                <p className="text-xs text-[var(--color-text-muted)]">{a.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
