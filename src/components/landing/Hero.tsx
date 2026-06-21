"use client";

import { motion } from "motion/react";
import { ArrowRight, Globe, Shield, Lightning, Users, Check } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { ThreeBackground } from "@/components/three/ThreeBackground";

const features = [
  {
    icon: Globe,
    title: "Multi-Chain Native",
    desc: "Launch on Ethereum, Polygon, BSC, Arbitrum, and Base simultaneously. One deployment, five chains.",
  },
  {
    icon: Shield,
    title: "Battle-Tested Security",
    desc: "Smart contracts audited by top firms. ReentrancyGuard, Pausable, and timelock controls built-in.",
  },
  {
    icon: Lightning,
    title: "Instant Liquidity",
    desc: "Automated liquidity bootstrapping via Uniswap V3 concentrated positions. LP locked from day one.",
  },
  {
    icon: Users,
    title: "Community First",
    desc: "Whitelist management, referral rewards, and tiered allocation. Fair launch mechanics guaranteed.",
  },
];

const stats = [
  { value: "$240M+", label: "Total Raised" },
  { value: "180+", label: "Projects Launched" },
  { value: "99.2%", label: "Success Rate" },
  { value: "45K+", label: "Unique Participants" },
];

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <ThreeBackground intensity="medium" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 py-20">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-8"
            style={{
              background: "rgba(240, 192, 64, 0.12)",
              border: "1px solid rgba(240, 192, 64, 0.25)",
              color: "var(--color-accent)",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]" />
            </span>
            Live Mainnet Sale — Batch 3 Active
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            The Launchpad for
            <br />
            <span className="text-gradient">Web3\'s Next Unicorns</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Secure, transparent, and compliant token sales. From seed to Series A —
            we handle the infrastructure so you can build the future.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Button size="lg" rightIcon={<ArrowRight size={20} />} className="min-w-[200px]">
              Join Active Sale
            </Button>
            <Button variant="secondary" size="lg" leftIcon={<Globe size={20} />}>
              View All Projects
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <div className="text-3xl md:text-4xl font-bold text-[var(--color-text)]">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--color-text-muted)]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-text-muted)] text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
        >
          <span className="uppercase tracking-widest">Explore</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}