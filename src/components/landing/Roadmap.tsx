"use client";

import { motion } from "motion/react";

const phases = [
  {
    quarter: "Q1 2025",
    title: "Foundation",
    description: "Platform architecture. Smart contract audits. Security partnerships established.",
    status: "done",
    highlights: ["Seed round closed", "Chainlink integration", "Legal framework"],
  },
  {
    quarter: "Q2 2025",
    title: "Launch",
    description: "Mainnet deployment. First 10 projects launch. Community reaches 10,000 holders.",
    status: "done",
    highlights: ["Mainnet live", "10 projects", "10K holders"],
  },
  {
    quarter: "Q3 2025",
    title: "Expansion",
    description: "Multi-chain support. DEX integration. Cross-chain bridging for token sales.",
    status: "active",
    highlights: ["5 chains", "DEX listings", "Cross-chain bridge"],
  },
  {
    quarter: "Q4 2025",
    title: "Scale",
    description: "Institutional features. Compliance tools. White-label launchpad solution.",
    status: "upcoming",
    highlights: ["KYC/AML suite", "White-label", "Institutional API"],
  },
  {
    quarter: "2026+",
    title: "Ecosystem",
    description: "DAO governance. Staking. Incubator program for early-stage projects.",
    status: "upcoming",
    highlights: ["DAO launch", "Staking live", "Incubator"],
  },
];

export function Roadmap() {
  return (
    <section className="relative py-16 md:py-24 px-5 overflow-hidden" id="roadmap">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[var(--color-accent)]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--color-accent)]">
              Roadmap
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] max-w-lg">
            Building in
            <br />
            <span className="text-[var(--color-accent)]">public view</span>
          </h2>
        </div>

        {/* Roadmap - editorial style with alternating layouts */}
        <div className="space-y-0">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.quarter}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-12 border-t border-[var(--color-border)] hover:border-[var(--color-accent)]/20 transition-colors">
                {/* Quarter label */}
                <div className={`md:col-span-2 flex items-center gap-3 ${i % 2 === 0 ? '' : 'md:order-last'}`}>
                  <span className={`text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-full ${
                    phase.status === 'done' 
                      ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]' 
                      : phase.status === 'active'
                      ? 'bg-[var(--color-accent)]/20 text-[var(--color-accent)] ring-1 ring-[var(--color-accent)]/30'
                      : 'bg-white/5 text-[var(--color-text-muted)]'
                  }`}>
                    {phase.quarter}
                  </span>
                </div>

                {/* Title */}
                <div className={`md:col-span-3 ${i % 2 === 0 ? '' : 'md:order-3'}`}>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl md:text-2xl font-bold">{phase.title}</h3>
                    {phase.status === 'active' && (
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-accent)]" />
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[var(--color-text-muted)] mt-2 leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className={`md:col-span-7 ${i % 2 === 0 ? '' : 'md:order-2'}`}>
                  <div className="flex flex-wrap gap-2">
                    {phase.highlights.map((h) => (
                      <span 
                        key={h}
                        className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${
                          phase.status === 'done'
                            ? 'border-[var(--color-accent)]/20 text-[var(--color-accent)] bg-[var(--color-accent)]/5'
                            : phase.status === 'active'
                            ? 'border-[var(--color-accent)]/30 text-[var(--color-accent)] bg-[var(--color-accent)]/10'
                            : 'border-[var(--color-border)] text-[var(--color-text-muted)] bg-white/2'
                        }`}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Progress indicator */}
                {phase.status === 'done' && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[var(--color-accent)]">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
