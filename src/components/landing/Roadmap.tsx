"use client";

import { motion, useReducedMotion } from "motion/react";
import { CheckCircle, Circle, ArrowRight } from "@phosphor-icons/react";

const phases = [
  {
    quarter: "Q1 2025",
    title: "Foundation",
    status: "completed",
    items: [
      "Smart contract development & audit",
      "Core team formation",
      "Seed funding ($2.5M)",
      "Testnet launch on Sepolia",
    ],
  },
  {
    quarter: "Q2 2025",
    title: "Launch",
    status: "active",
    items: [
      "Mainnet deployment",
      "IGNITE token generation event",
      "First 10 project launches",
      "Multi-chain bridge activation",
    ],
  },
  {
    quarter: "Q3 2025",
    title: "Scale",
    status: "upcoming",
    items: [
      "100+ projects launched",
      "Institutional investor portal",
      "Advanced analytics dashboard",
      "Governance module beta",
    ],
  },
  {
    quarter: "Q4 2025",
    title: "Ecosystem",
    status: "upcoming",
    items: [
      "Incubator program launch",
      "Cross-chain yield aggregation",
      "DAO governance activation",
      "1M+ unique participants",
    ],
  },
  {
    quarter: "2026+",
    title: "Evolution",
    status: "upcoming",
    items: [
      "AI-powered project scoring",
      "Real-world asset tokenization",
      "Institutional compliance suite",
      "Global regulatory partnerships",
    ],
  },
];

export function Roadmap() {
  const reduce = useReducedMotion();
  
  return (
    <section className="relative py-24 md:py-32 px-5 overflow-hidden" aria-labelledby="roadmap-heading">
      {/* Subtle diagonal lines */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `repeating-linear-gradient(45deg, var(--color-accent) 0, var(--color-accent) 1px, transparent 0, transparent 50%)`,
        backgroundSize: "40px 40px",
      }} />
      
      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="mb-16 max-w-2xl"
          initial={reduce ? false : { opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4">
            Roadmap
          </div>
          <h2 id="roadmap-heading" className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            The <span className="text-gradient">Path</span> Forward
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
            Milestones that matter. Shipped features, not vaporware.
          </p>
        </motion.div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-border)] to-transparent" />
          
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.quarter}
                className="relative pl-14"
                initial={reduce ? false : { opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1">
                  {phase.status === "completed" ? (
                    <CheckCircle size={40} className="text-[var(--color-success)]" weight="fill" />
                  ) : phase.status === "active" ? (
                    <div className="relative">
                      <Circle size={40} className="text-[var(--color-accent)]" weight="fill" />
                      <div className="absolute inset-0 animate-ping">
                        <Circle size={40} className="text-[var(--color-accent)] opacity-30" weight="fill" />
                      </div>
                    </div>
                  ) : (
                    <Circle size={40} className="text-[var(--color-border)]" weight="light" />
                  )}
                </div>
                
                {/* Content card */}
                <div className={`relative p-5 rounded-xl border transition-all duration-300 ${
                  phase.status === "active" 
                    ? "border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5" 
                    : "border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-border-hover)]"
                }`}>
                  {/* Quarter badge */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-mono px-2 py-0.5 rounded ${
                      phase.status === "active" 
                        ? "bg-[var(--color-accent)]/20 text-[var(--color-accent)]" 
                        : phase.status === "completed"
                          ? "bg-[var(--color-success)]/20 text-[var(--color-success)]"
                          : "bg-[var(--color-border)] text-[var(--color-text-muted)]"
                    }`}>
                      {phase.quarter}
                    </span>
                    <h3 className="text-lg font-semibold">{phase.title}</h3>
                    {phase.status === "active" && (
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded-full">
                        In Progress
                      </span>
                    )}
                  </div>
                  
                  {/* Items */}
                  <ul className="space-y-2">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                        <ArrowRight size={14} className={`mt-0.5 shrink-0 ${
                          phase.status === "completed" ? "text-[var(--color-success)]" : "text-[var(--color-border)]"
                        }`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
