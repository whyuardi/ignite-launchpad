"use client";

import { motion } from "motion/react";
import { Card } from "@/components/ui/Card";
import { Globe, Shield, Lightning, Users, Lock, ChartBar, Target, ArrowRight } from "@phosphor-icons/react";

const features = [
  {
    icon: Globe,
    title: "Multi-Chain Deployment",
    desc: "Deploy once, launch everywhere. Native support for Ethereum, Polygon, BSC, Arbitrum, Base, and more. Unified contract interface across all EVM chains.",
    metric: "5+ Chains",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    desc: "ReentrancyGuard, Pausable, Ownable, and TimelockController built-in. Multi-sig admin controls. Emergency withdrawal circuits. Formal verification ready.",
    metric: "Audited",
  },
  {
    icon: Lightning,
    title: "Automated Liquidity",
    desc: "Uniswap V3 concentrated liquidity positions auto-created at launch. Dynamic fee tiers. LP tokens locked in timelock. Impermanent loss protection.",
    metric: "Instant LP",
  },
  {
    icon: Users,
    title: "Tiered Allocation System",
    desc: "KYC-integrated whitelist. Dynamic tiers based on holdings, referrals, and engagement. Guaranteed allocation per tier. Anti-sybil protection.",
    metric: "4 Tiers",
  },
  {
    icon: Lock,
    title: "Vesting & Cliff Engine",
    desc: "Linear, cliff, and custom vesting schedules. Team, advisor, and investor tokens auto-vested. Claim portal with gasless transactions via meta-transactions.",
    metric: "Flexible",
  },
  {
    icon: ChartBar,
    title: "Real-Time Analytics",
    desc: "Live raise progress, participant demographics, chain distribution, and geographic heatmaps. Export data via API. Webhook notifications for milestones.",
    metric: "Live Data",
  },
  {
    icon: Target,
    title: "Fair Launch Mechanics",
    desc: "Fixed price, Dutch auction, or dynamic pricing models. Bot protection via commit-reveal. Whale caps per wallet. Refund mechanism for failed raises.",
    metric: "3 Models",
  },
  {
    icon: ArrowRight,
    title: "Post-Launch Support",
    desc: "Market making partnerships, exchange listing advisory, grant program access, and ongoing technical support. 6-month incubation program included.",
    metric: "6 Months",
  },
];

export function Features() {
  return (
    <section className="relative py-24 md:py-32 px-5" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 id="features-heading" className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Built for <span className="text-gradient">Founders Who Ship</span>
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
            Every feature designed from real launch experience. No bloat, no compromise — just the tools you need to raise and scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Card variant="accent" padding="lg" hover className="h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                    style={{
                      background: `linear-gradient(135deg, var(--color-accent), var(--color-accent-strong))`,
                      color: "#0a0a0f",
                    }}
                  >
                    <feature.icon size={24} />
                  </div>
                  <span
                    className="text-xs font-mono font-medium px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(240, 192, 64, 0.15)",
                      color: "var(--color-accent)",
                      border: "1px solid rgba(240, 192, 64, 0.25)",
                    }}
                  >
                    {feature.metric}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed flex-1">{feature.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}