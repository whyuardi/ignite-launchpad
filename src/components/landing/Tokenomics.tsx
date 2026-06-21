"use client";

import { motion } from "motion/react";
import { Card } from "@/components/ui/Card";
import { Users, Building, Gift, Lock, Wallet, ChartLineUp } from "@phosphor-icons/react";

const allocations = [
  { label: "Public Sale", percent: 25, color: "#f0c040", icon: Users, desc: "Fair launch, no VC pre-sale" },
  { label: "Ecosystem Fund", percent: 20, color: "#627eea", icon: Gift, desc: "Grants, liquidity, incentives" },
  { label: "Team & Advisors", percent: 15, color: "#8247e5", icon: Building, desc: "36-month vesting, 12-month cliff" },
  { label: "Treasury", percent: 15, color: "#22c55e", icon: Wallet, desc: "Operations, legal, insurance" },
  { label: "Liquidity & MM", percent: 10, color: "#f04444", icon: ChartLineUp, desc: "CEX/DEX liquidity, market making" },
  { label: "Staking Rewards", percent: 10, color: "#eab308", icon: Lock, desc: "Dynamic APY, auto-compound" },
  { label: "Strategic Reserve", percent: 5, color: "#28a0f0", icon: Building, desc: "Future partnerships, acquisitions" },
];

const utilities = [
  {
    icon: Lock,
    title: "Launchpad Access",
    desc: "Stake IGNITE for guaranteed allocation in all sales. Tiered by amount and duration.",
  },
  {
    icon: ChartLineUp,
    title: "Fee Discounts",
    desc: "Up to 50% off platform fees. Proportional to stake weight and lock duration.",
  },
  {
    icon: Gift,
    title: "Revenue Share",
    desc: "10% of platform fees distributed to stakers quarterly. Auto-compounding.",
  },
  {
    icon: Users,
    title: "Governance Rights",
    desc: "Vote on protocol upgrades, fee parameters, grant approvals, and new chain deployments.",
  },
  {
    icon: Building,
    title: "Incubator Priority",
    desc: "Stakers get early access to incubator deal flow and co-investment opportunities.",
  },
  {
    icon: Wallet,
    title: "Cross-Chain Utility",
    desc: "Single staking position, rewards across all supported chains. No bridging needed.",
  },
];

// SVG arc path helper
function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return [
    "M", cx, cy,
    "L", start.x, start.y,
    "A", r, r, 0, largeArcFlag, 0, end.x, end.y,
    "Z"
  ].join(" ");
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

export function Tokenomics() {
  // Build cumulative angles for donut
  let cumulative = 0;
  const slices = allocations.map((a) => {
    const start = cumulative;
    cumulative += a.percent * 3.6; // 360 * percent / 100
    return { ...a, startAngle: start, endAngle: cumulative };
  });

  return (
    <section className="relative py-24 md:py-32 px-5" aria-labelledby="tokenomics-heading">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 id="tokenomics-heading" className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="text-gradient">$IGNITE</span> Tokenomics
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
            Designed for long-term alignment. No team tokens at launch. Community owns the majority.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Donut Chart */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Card variant="premium" padding="lg" className="h-full">
              <h3 className="text-xl font-semibold mb-8 text-center">Allocation Breakdown</h3>
              <div className="flex flex-col items-center gap-6">
                <div className="relative w-64 h-64">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    {slices.map((slice, i) => (
                      <motion.path
                        key={slice.label}
                        d={describeArc(100, 100, 80, slice.startAngle, slice.endAngle - 0.5)}
                        fill={slice.color}
                        stroke="var(--color-bg)"
                        strokeWidth="2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        style={{ cursor: "pointer" }}
                      />
                    ))}
                    {/* Center hole for donut */}
                    <circle cx="100" cy="100" r="50" fill="var(--color-bg)" />
                    <text x="100" y="95" textAnchor="middle" style={{ fill: "var(--color-text)", fontSize: "18px", fontWeight: 700 }}>
                      $IGNITE
                    </text>
                    <text x="100" y="115" textAnchor="middle" style={{ fill: "var(--color-text-muted)", fontSize: "11px" }}>
                      100M Supply
                    </text>
                  </svg>
                </div>

                {/* Legend under chart */}
                <div className="flex flex-wrap justify-center gap-3">
                  {allocations.map((a) => (
                    <div key={a.label} className="flex items-center gap-1.5 text-xs">
                      <div className="w-2.5 h-2.5 rounded-sm" style={{ background: a.color }} />
                      <span className="text-[var(--color-text-muted)]">{a.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Distribution bars */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Card variant="premium" padding="lg" className="h-full">
              <h3 className="text-xl font-semibold mb-6">Distribution</h3>
              <div className="space-y-4">
                {allocations.map((alloc, index) => (
                  <motion.div
                    key={alloc.label}
                    className="flex items-center gap-4 p-3 rounded-xl"
                    style={{ background: alloc.color + "10", border: `1px solid ${alloc.color}30` }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `linear-gradient(135deg, ${alloc.color}, ${alloc.color}cc)` }}
                    >
                      <alloc.icon size={20} style={{ color: "#0a0a0f" }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm truncate">{alloc.label}</span>
                        <span className="font-bold font-mono text-sm" style={{ color: alloc.color }}>
                          {alloc.percent}%
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--color-border)" }}>
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: alloc.color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${alloc.percent * 4}%` }}
                          transition={{ duration: 0.8, delay: index * 0.08 + 0.3 }}
                        />
                      </div>
                      <p className="text-xs text-[var(--color-text-muted)] mt-1">{alloc.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Utilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Token Utility</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {utilities.map((util, index) => (
              <motion.div key={util.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }}>
                <Card variant="accent" padding="lg" className="h-full">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-strong))", color: "#0a0a0f" }}
                  >
                    <util.icon size={28} />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{util.title}</h4>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">{util.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
