"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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

function DonutChart() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const size = 320;
  const center = size / 2;
  const outerRadius = 130;
  const innerRadius = 80;
  const strokeGap = 2;

  // Build arc segments
  let startAngle = -90;
  const segments = allocations.map((a, i) => {
    const angle = (a.percent / 100) * 360;
    const gapAngle = a.percent > 0 ? strokeGap : 0;
    const s = startAngle + gapAngle / 2;
    const e = startAngle + angle - gapAngle / 2;
    startAngle += angle;

    const midAngle = (s + e) / 2;
    const rad = (midAngle * Math.PI) / 180;
    const labelRadius = outerRadius + 28;
    const labelX = center + labelRadius * Math.cos(rad);
    const labelY = center + labelRadius * Math.sin(rad);

    // Arc path
    const startRad = (s * Math.PI) / 180;
    const endRad = (e * Math.PI) / 180;
    const largeArc = angle > 180 ? 1 : 0;

    const x1 = center + outerRadius * Math.cos(startRad);
    const y1 = center + outerRadius * Math.sin(startRad);
    const x2 = center + outerRadius * Math.cos(endRad);
    const y2 = center + outerRadius * Math.sin(endRad);
    const x3 = center + innerRadius * Math.cos(endRad);
    const y3 = center + innerRadius * Math.sin(endRad);
    const x4 = center + innerRadius * Math.cos(startRad);
    const y4 = center + innerRadius * Math.sin(startRad);

    const path = `M ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x4} ${y4} Z`;

    return { ...a, path, labelX, labelY, index: i };
  });

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
        {/* Outer glow ring */}
        <circle
          cx={center}
          cy={center}
          r={outerRadius + 4}
          fill="none"
          stroke="rgba(255,184,0,0.05)"
          strokeWidth="1"
        />
        {/* Inner glow ring */}
        <circle
          cx={center}
          cy={center}
          r={innerRadius - 4}
          fill="none"
          stroke="rgba(255,184,0,0.05)"
          strokeWidth="1"
        />

        {/* Arc segments */}
        {segments.map((seg) => (
          <g key={seg.label}>
            <path
              d={seg.path}
              fill={seg.color}
              className="transition-all duration-300 cursor-pointer"
              style={{
                opacity: hoveredIndex === null || hoveredIndex === seg.index ? 1 : 0.3,
                filter:
                  hoveredIndex === seg.index
                    ? `drop-shadow(0 0 12px ${seg.color}80)`
                    : `drop-shadow(0 0 4px ${seg.color}30)`,
              }}
              onMouseEnter={() => setHoveredIndex(seg.index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          </g>
        ))}

        {/* Center text */}
        <text
          x={center}
          y={center - 12}
          textAnchor="middle"
          className="fill-white text-[32px] font-bold"
          style={{ fontFamily: "var(--font-geist-sans)" }}
        >
          1B
        </text>
        <text
          x={center}
          y={center + 12}
          textAnchor="middle"
          className="fill-white/40 text-[11px] uppercase tracking-[0.15em]"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          Total Supply
        </text>

        {/* Hovered label (on donut) */}
        <AnimatePresence>
          {hoveredIndex !== null && (
            <g>
              <text
                x={center}
                y={center + 36}
                textAnchor="middle"
                className="text-[13px] font-semibold"
                fill={allocations[hoveredIndex].color}
                style={{ fontFamily: "var(--font-geist-sans)" }}
              >
                {allocations[hoveredIndex].label}
              </text>
              <text
                x={center}
                y={center + 54}
                textAnchor="middle"
                className="text-[11px]"
                fill="rgba(255,255,255,0.6)"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                {allocations[hoveredIndex].amount} · {allocations[hoveredIndex].percent}%
              </text>
            </g>
          )}
        </AnimatePresence>
      </svg>
    </div>
  );
}

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left - Interactive donut */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <DonutChart />
            </motion.div>

            {/* Legend below donut */}
            <div className="grid grid-cols-3 gap-x-6 gap-y-2 mt-6 w-full max-w-sm">
              {allocations.map((a) => (
                <div key={a.label} className="flex items-center gap-2">
                  <div
                    className="w-2.5 h-2.5 rounded-sm flex-shrink-0"
                    style={{ background: a.color }}
                  />
                  <span className="text-[11px] text-[var(--color-text-muted)] truncate">
                    {a.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Breakdown + utilities */}
          <div className="lg:col-span-7">
            {/* Allocation breakdown */}
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
                      <div
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: a.color }}
                      />
                      <span className="text-sm font-medium">{a.label}</span>
                      <span className="text-xs text-[var(--color-text-muted)] font-mono">
                        {a.amount}
                      </span>
                    </div>
                    <span className="text-sm font-bold tabular-nums" style={{ color: a.color }}>
                      {a.percent}%
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/[0.03] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${a.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${a.color}, ${a.color}CC)` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Vesting summary */}
            <div className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)]/50 mb-8">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-2">
                Vesting Schedule
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-sm font-bold">6 months</div>
                  <div className="text-[11px] text-[var(--color-text-muted)]">Team cliff</div>
                </div>
                <div>
                  <div className="text-sm font-bold">24 months</div>
                  <div className="text-[11px] text-[var(--color-text-muted)]">Team linear</div>
                </div>
                <div>
                  <div className="text-sm font-bold">TGE</div>
                  <div className="text-[11px] text-[var(--color-text-muted)]">Public unlock</div>
                </div>
              </div>
            </div>

            {/* Utilities */}
            <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-3">
              Token Utility
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {utilities.map((u, i) => (
                <motion.div
                  key={u.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="p-3.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-accent)]/20 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-[var(--color-accent)]/10 mb-2.5">
                    {u.icon === "governance" && <Lightning size={14} className="text-[var(--color-accent)]" />}
                    {u.icon === "stake" && <Target size={14} className="text-[var(--color-accent)]" />}
                    {u.icon === "tier" && <ChartLineUp size={14} className="text-[var(--color-accent)]" />}
                    {u.icon === "discount" && <Percent size={14} className="text-[var(--color-accent)]" />}
                    {u.icon === "treasury" && <Bank size={14} className="text-[var(--color-accent)]" />}
                    {u.icon === "referral" && <Gift size={14} className="text-[var(--color-accent)]" />}
                  </div>
                  <div className="text-[13px] font-semibold mb-0.5">{u.title}</div>
                  <div className="text-[11px] text-[var(--color-text-muted)] leading-relaxed">
                    {u.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
