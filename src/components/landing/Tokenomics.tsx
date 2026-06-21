"use client";

import { motion } from "motion/react";
import { Card } from "@/components/ui/Card";
import { PieChart, Users, Building, Gift, Lock, Wallet, TrendingUp } from "@phosphor-icons/react";

const allocations = [
  { label: "Public Sale", percent: 25, color: "#f0c040", icon: Users, desc: "Fair launch, no VC pre-sale" },
  { label: "Ecosystem Fund", percent: 20, color: "#627eea", icon: Gift, desc: "Grants, liquidity, incentives" },
  { label: "Team & Advisors", percent: 15, color: "#8247e5", icon: Building, desc: "36-month vesting, 12-month cliff" },
  { label: "Treasury", percent: 15, color: "#22c55e", icon: Wallet, desc: "Operations, legal, insurance" },
  { label: "Liquidity & MM", percent: 10, color: "#f04444", icon: TrendingUp, desc: "CEX/DEX liquidity, market making" },
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
    icon: TrendingUp,
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

export function Tokenomics() {
  return (
    <section className="relative py-24 md:py-32 px-5" aria-labelledby="tokenomics-heading">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 id="tokenomics-heading" className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="text-gradient">$IGNITE</span> Tokenomics
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
            Designed for long-term alignment. No team tokens at launch. Community owns the majority.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Pie Chart Visualization */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card variant="premium" padding="xl" className="h-full">
              <h3 className="text-xl font-semibold mb-8 text-center">Allocation Breakdown</h3>
              <div className="flex flex-col items-center gap-6">
                <div className="relative w-64 h-64">
                  <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
                    <defs>
                      <linearGradient id="pieGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        {allocations.map((a, i) => (
                          <stop key={i} offset={`${(i / allocations.length) * 100}%`} stopColor={a.color} />
                        ))}
                      </linearGradient>
                    </defs>
                    {allocations.map((alloc, index) => {
                      const startAngle = allocations.slice(0, index).reduce((sum, a) => sum + a.percent, 0) * 3.6;
                      const endAngle = startAngle + alloc.percent * 3.6;
                      const startRad = (startAngle * Math.PI) / 180;
                      const endRad = (endAngle * Math.PI) / 180;

                      const x1 = 100 + 80 * Math.cos(startRad);
                      const y1 = 100 + 80 * Math.sin(startRad);
                      const x2 = 100 + 80 * Math.cos(endRad);
                      const y2 = 100 + 80 * Math.sin(endRad);

                      const largeArc = alloc.percent > 50 ? 1 : 0;

                      return (
                        <motion.path
                          key={alloc.label}
                          d={`M100,100 L${x1},${y1} A80,80 0 ${largeArc},1 ${x2},${y2} Z`}
                          fill="url(#pieGradient)"
                          stroke="var(--color-bg)"
                          strokeWidth="2"
                          initial={{ d: "M100,100 L100,20 A80,80 0 0,1 100,20 Z" }}
                          animate={{ d: `M100,100 L${x1},${y1} A80,80 0 ${largeArc},1 ${x2},${y2} Z` }}
                          transition={{ duration: 0.8, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                        />
                      );
                    })}
                    {/* Center hole */}
                    <circle cx="100" cy="100" r="50" fill="var(--color-bg)" />
                    {/* Center text */}
                    <text x="100" y="95" textAnchor="middle" className="text-2xl font-bold" fill="var(--color-text)">
                      $IGNITE
                    </text>
                    <text x="100" y="120" textAnchor="middle" className="text-sm" fill="var(--color-text-muted)">
                      1B Total Supply
                    </text>
                  </svg>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: `linear-gradient(135deg, ${alloc.color}, ${alloc.color}cc)` }}
                    >
                      <alloc.icon size={20} style={{ color: "#0a0a0f" }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-medium truncate">{alloc.label}</span>
                        <span className="font-bold font-mono" style={{ color: alloc.color }}>
                          {alloc.percent}%
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full overflow-hidden mt-1" style={{ background: "var(--color-border)" }}>
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: `linear-gradient(90deg, ${alloc.color}, ${alloc.color}aa)` }}
                          initial={{ width: 0 }}
                          animate={{ width: `${alloc.percent}%` }}
                          transition={{ duration: 0.8, delay: index * 0.08 + 0.3 }}
                        />
                      </div>
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Token Utility</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {utilities.map((util, index) => (
              <motion.div key={util.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
                <Card variant="accent" padding="lg" hover className="h-full">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-strong))", color: "#0a0a0f" }}
                  >
                    <util.icon size={28} />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{util.title}</h4>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">{util.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}