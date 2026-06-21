"use client";

import { motion, useReducedMotion } from "motion/react";
import { Globe, Shield, Lightning, Users, LinkSimple, ChartLineUp } from "@phosphor-icons/react";

const features = [
  {
    icon: Globe,
    title: "Multi-Chain Native",
    desc: "Launch on Ethereum, Polygon, BSC, Arbitrum, and Base simultaneously. One deployment, five chains.",
    color: "var(--color-chain-eth)",
    span: "md:col-span-2 md:row-span-2", // Large cell
    highlight: true,
  },
  {
    icon: Shield,
    title: "Battle-Tested Security",
    desc: "Smart contracts audited by top firms. ReentrancyGuard, Pausable, and timelock controls built-in.",
    color: "var(--color-success)",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    icon: Lightning,
    title: "Instant Liquidity",
    desc: "Automated liquidity bootstrapping via Uniswap V3 concentrated positions. LP locked from day one.",
    color: "var(--color-accent)",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    icon: Users,
    title: "Community First",
    desc: "Whitelist management, referral rewards, and tiered allocation. Fair launch mechanics guaranteed.",
    color: "var(--color-chain-polygon)",
    span: "md:col-span-1 md:row-span-2", // Tall cell
  },
  {
    icon: LinkSimple,
    title: "Cross-Chain Bridge",
    desc: "Native asset bridging between all supported chains. No wrapped tokens, no third-party risk.",
    color: "var(--color-chain-arb)",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    icon: ChartLineUp,
    title: "Real-Time Analytics",
    desc: "Live sale metrics, participant insights, and on-chain verification dashboards.",
    color: "var(--color-danger)",
    span: "md:col-span-1 md:row-span-1",
  },
];

export function Features() {
  const reduce = useReducedMotion();
  
  return (
    <section className="relative py-24 md:py-32 px-5" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header - Left aligned */}
        <motion.div
          className="mb-12 max-w-2xl"
          initial={reduce ? false : { opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4">
            Platform
          </div>
          <h2 id="features-heading" className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Built for <span className="text-gradient">Scale</span>
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
            Infrastructure that doesn't break when your sale goes viral.
          </p>
        </motion.div>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`group relative p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] overflow-hidden transition-all duration-300 hover:border-[var(--color-border-hover)] ${feature.span}`}
              initial={reduce ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Gradient accent on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${feature.color}15, transparent 60%)`,
                }}
              />
              
              {/* Content */}
              <div className="relative h-full flex flex-col">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${feature.color}15` }}
                >
                  <feature.icon size={22} style={{ color: feature.color }} />
                </div>
                
                <h3 className={`font-semibold mb-2 ${feature.highlight ? "text-xl" : "text-lg"}`}>
                  {feature.title}
                </h3>
                
                <p className={`text-[var(--color-text-muted)] leading-relaxed ${feature.highlight ? "text-sm" : "text-xs"}`}>
                  {feature.desc}
                </p>
                
                {/* Decorative line */}
                <div className="mt-auto pt-4">
                  <div
                    className="h-px w-12 opacity-40"
                    style={{ background: feature.color }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
