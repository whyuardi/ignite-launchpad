"use client";

import { motion } from "motion/react";
import { Lightning, Target, ChartLineUp, Percent, Bank, Gift } from "@phosphor-icons/react";

const allocations = [
  { label: "Public Sale", percent: 40, color: "#FFB800", amount: "400M IGT" },
  { label: "Team", percent: 15, color: "#FF6B00", amount: "150M IGT" },
  { label: "Ecosystem", percent: 20, color: "#00C896", amount: "200M IGT" },
  { label: "Advisors", percent: 5, color: "#6366F1", amount: "50M IGT" },
  { label: "Liquidity", percent: 10, color: "#EC4899", amount: "100M IGT" },
  { label: "Treasury", percent: 10, color: "#8B5CF6", amount: "100M IGT" },
];

const utilities = [
  { icon: "governance", title: "Governance", desc: "Vote on proposals, platform upgrades, fee structures" },
  { icon: "stake", title: "Staking Rewards", desc: "Earn yield by staking IGT in validator pools" },
  { icon: "tier", title: "Tier Access", desc: "Higher allocation tiers for active stakers" },
  { icon: "discount", title: "Fee Discounts", desc: "Up to 50% discount on launchpad fees" },
  { icon: "treasury", title: "Treasury Access", desc: "Community-driven fund allocation" },
  { icon: "referral", title: "Referral Bonus", desc: "Earn IGT for bringing new participants" },
];

export function Tokenomics() {
  return (
    <section className="relative py-16 md:py-24 px-5 overflow-hidden" id="tokenomics">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[var(--color-accent)]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--color-accent)]">
              Tokenomics
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] max-w-lg">
            Token
            <br />
            <span className="text-[var(--color-accent)]">economics</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left - Visual donut representation */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square max-w-xs mx-auto"
            >
              {/* SVG Donut */}
              <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
                {(() => {
                  let cumulativePercent = 0;
                  const radius = 70;
                  const circumference = 2 * Math.PI * radius;
                  
                  return allocations.map((a) => {
                    const dashArray = (a.percent / 100) * circumference;
                    const dashOffset = -(cumulativePercent / 100) * circumference;
                    cumulativePercent += a.percent;
                    
                    return (
                      <circle
                        key={a.label}
                        cx="100"
                        cy="100"
                        r={radius}
                        fill="none"
                        stroke={a.color}
                        strokeWidth="20"
                        strokeDasharray={`${dashArray} ${circumference - dashArray}`}
                        strokeDashoffset={dashOffset}
                        className="transition-all duration-500"
                        style={{ filter: `drop-shadow(0 0 6px ${a.color}40)` }}
                      />
                    );
                  });
                })()}
              </svg>
              
              {/* Center text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold">1B</span>
                <span className="text-xs text-[var(--color-text-muted)]">Total Supply</span>
              </div>
            </motion.div>
            
            {/* Legend */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-6 max-w-xs mx-auto lg:mx-0">
              {allocations.map((a) => (
                <div key={a.label} className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ background: a.color }} />
                  <span className="text-xs text-[var(--color-text-muted)] truncate">{a.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Allocation breakdown + utilities */}
          <div className="lg:col-span-7">
            {/* Allocation bars */}
            <div className="space-y-3 mb-10">
              {allocations.map((a, i) => (
                <motion.div
                  key={a.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium">{a.label}</span>
                      <span className="text-xs text-[var(--color-text-muted)]">{a.amount}</span>
                    </div>
                    <span className="text-sm font-bold" style={{ color: a.color }}>{a.percent}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${a.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 + i * 0.05, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: a.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Utilities */}
            <div>
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-4">Token Utility</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {utilities.map((u, i) => (
                  <motion.div
                    key={u.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-accent)]/20 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--color-accent)]/10 mb-2">
                      {u.icon === "governance" && <Lightning size={16} className="text-[var(--color-accent)]" />}
                      {u.icon === "stake" && <Target size={16} className="text-[var(--color-accent)]" />}
                      {u.icon === "tier" && <ChartLineUp size={16} className="text-[var(--color-accent)]" />}
                      {u.icon === "discount" && <Percent size={16} className="text-[var(--color-accent)]" />}
                      {u.icon === "treasury" && <Bank size={16} className="text-[var(--color-accent)]" />}
                      {u.icon === "referral" && <Gift size={16} className="text-[var(--color-accent)]" />}
                    </div>
                    <div className="text-sm font-semibold mb-1">{u.title}</div>
                    <div className="text-xs text-[var(--color-text-muted)] leading-relaxed">{u.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
