"use client";

import { motion } from "motion/react";
import { Card } from "@/components/ui/Card";
import { Check, Clock, Flag, Rocket, Diamond, Shield } from "@phosphor-icons/react";

const phases = [
  {
    phase: "Phase 1",
    title: "Foundation",
    period: "Q1 2025",
    status: "completed",
    icon: Check,
    items: [
      "Core smart contract suite deployed",
      "Multi-chain infrastructure live",
      "Security audits completed (3 firms)",
      "Whitelist & KYC integration",
      "Analytics dashboard v1",
    ],
  },
  {
    phase: "Phase 2",
    title: "Expansion",
    period: "Q2 2025",
    status: "completed",
    icon: Rocket,
    items: [
      "Arbitrum & Base mainnet launch",
      "Dutch auction pricing model",
      "Referral & rewards program",
      "Gasless claiming via meta-tx",
      "Mobile-responsive dashboard",
    ],
  },
  {
    phase: "Phase 3",
    title: "Scale",
    period: "Q3 2025",
    status: "current",
    icon: Flag,
    items: [
      "Institutional onboarding portal",
      "Advanced vesting schedules",
      "Cross-chain token bridging",
      "API for third-party integrations",
      "Launchpad SDK for builders",
    ],
  },
  {
    phase: "Phase 4",
    title: "Ecosystem",
    period: "Q4 2025",
    status: "planned",
    icon: Diamond,
    items: [
      "IGNITE token utility launch",
      "DAO governance activation",
      "Grant program ($5M fund)",
      "Incubator program cohort 1",
      "Exchange listing partnerships",
    ],
  },
  {
    phase: "Phase 5",
    title: "Sovereign",
    period: "2026+",
    status: "planned",
    icon: Shield,
    items: [
      "Fully decentralized protocol",
      "Community-owned infrastructure",
      "Zero-fee launch tier",
      "AI-powered project scoring",
      "Global regulatory framework",
    ],
  },
];

const statusStyles = {
  completed: {
    bg: "rgba(34, 197, 94, 0.15)",
    border: "rgba(34, 197, 94, 0.3)",
    text: "#22c55e",
    iconBg: "rgba(34, 197, 94, 0.2)",
  },
  current: {
    bg: "rgba(240, 192, 64, 0.15)",
    border: "rgba(240, 192, 64, 0.3)",
    text: "var(--color-accent)",
    iconBg: "rgba(240, 192, 64, 0.2)",
  },
  planned: {
    bg: "rgba(107, 107, 128, 0.15)",
    border: "rgba(107, 107, 128, 0.3)",
    text: "var(--color-text-muted)",
    iconBg: "rgba(107, 107, 128, 0.2)",
  },
};

export function Roadmap() {
  return (
    <section className="relative py-24 md:py-32 px-5" aria-labelledby="roadmap-heading">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 id="roadmap-heading" className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Our <span className="text-gradient">Path Forward</span>
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
            Transparent milestones. No vaporware. Every phase ships on mainnet before the next begins.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-8 md:left-[calc(50%-1px)] top-0 bottom-0 w-0.5"
            style={{ background: "linear-gradient(to bottom, var(--color-accent), var(--color-border))" }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          />

          <div className="space-y-12 md:space-y-16">
            {phases.map((phase, index) => {
              const styles = statusStyles[phase.status as keyof typeof statusStyles];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={phase.phase}
                  className={`flex ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-start gap-8`}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {/* Timeline dot + phase info */}
                  <div className="flex flex-col items-center md:w-48 md:flex-shrink-0 relative z-10">
                    <div
                      className="w-4 h-4 rounded-full z-10 border-4"
                      style={{
                        background: phase.status === "completed" ? styles.text : "var(--color-bg)",
                        borderColor: styles.border,
                        boxShadow: `0 0 0 4px var(--color-bg), 0 0 16px ${styles.text}44`,
                      }}
                    />
                    <div className="mt-3 text-center">
                      <div className="text-sm font-bold text-[var(--color-text)]">{phase.phase}</div>
                      <div className="text-xs font-mono" style={{ color: styles.text }}>
                        {phase.period}
                      </div>
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 max-w-xl">
                    <Card
                      variant="premium"
                      padding="lg"
                      className="relative"
                      style={{
                        borderLeft: `3px solid ${styles.text}`,
                        background: `linear-gradient(135deg, var(--color-card) 0%, ${styles.bg} 100%)`,
                      }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ background: styles.iconBg }}
                        >
                          <phase.icon
                            size={20}
                            style={{ color: styles.text }}
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{phase.title}</h3>
                          <span
                            className="text-xs font-medium px-2 py-0.5 rounded-full capitalize"
                            style={{
                              background: styles.bg,
                              color: styles.text,
                              border: `1px solid ${styles.border}`,
                            }}
                          >
                            {phase.status}
                          </span>
                        </div>
                      </div>
                      <ul className="space-y-3" role="list">
                        {phase.items.map((item, i) => (
                          <motion.li
                            key={item}
                            className="flex items-start gap-3 text-[var(--color-text-muted)]"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.12 + i * 0.06 }}
                          >
                            <span
                              className="flex-shrink-0 w-5 h-5 mt-0.5"
                              style={{ color: styles.text }}
                            >
                              {phase.status === "completed" ? (
                                <Check size={16} weight="fill" />
                              ) : phase.status === "current" ? (
                                <Clock size={16} />
                              ) : (
                                <Diamond size={16} />
                              )}
                            </span>
                            <span className="text-sm leading-relaxed">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}