"use client";

import { motion, useReducedMotion } from "motion/react";
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
  { icon: Lock, title: "Launchpad Access", desc: "Stake IGNITE for guaranteed allocation in all sales. Tiered by amount and duration." },
  { icon: ChartLineUp, title: "Fee Discounts", desc: "Up to 50% off platform fees. Proportional to stake weight and lock duration." },
  { icon: Gift, title: "Revenue Share", desc: "10% of platform fees distributed to stakers quarterly. Auto-compounding." },
  { icon: Users, title: "Governance Rights", desc: "Vote on protocol upgrades, fee parameters, grant approvals, and new chain deployments." },
  { icon: Building, title: "Incubator Priority", desc: "Stakers get early access to incubator deal flow and co-investment opportunities." },
  { icon: Wallet, title: "Cross-Chain Utility", desc: "Single staking position, rewards across all supported chains. No bridging needed." },
];

// Isometric 3D block component
function IsometricBlock({ 
  allocation, 
  index, 
  total 
}: { 
  allocation: typeof allocations[0]; 
  index: number;
  total: number;
}) {
  const reduce = useReducedMotion();
  const height = allocation.percent * 2.5; // Scale height by percentage
  const delay = index * 0.12;
  
  // Calculate position along a curved path
  const angle = (index / total) * Math.PI * 0.8 - Math.PI * 0.4; // Spread across 144 degrees
  const radius = 120;
  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius * 0.3; // Compress z for isometric feel
  
  return (
    <motion.div
      className="absolute"
      style={{
        left: `calc(50% + ${x}px)`,
        bottom: `${50 + z}px`,
        transform: `translateX(-50%)`,
      }}
      initial={reduce ? false : { opacity: 0, y: 40, rotateX: -20 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="relative group cursor-pointer">
        {/* 3D Block */}
        <div
          className="relative"
          style={{
            width: `${Math.max(40, allocation.percent * 2.8)}px`,
            height: `${height}px`,
            transformStyle: "preserve-3d",
            transform: "rotateX(-15deg) rotateY(25deg)",
          }}
        >
          {/* Top face */}
          <div
            className="absolute inset-0 rounded-sm"
            style={{
              background: `linear-gradient(135deg, ${allocation.color}, ${allocation.color}dd)`,
              transform: `translateZ(${height / 2}px)`,
              boxShadow: `0 0 20px ${allocation.color}40`,
            }}
          />
          
          {/* Front face */}
          <div
            className="absolute bottom-0 left-0 right-0 rounded-sm"
            style={{
              height: `${height}px`,
              background: `linear-gradient(180deg, ${allocation.color}cc, ${allocation.color}88)`,
              transform: "rotateX(-90deg)",
              transformOrigin: "bottom",
            }}
          />
          
          {/* Right face */}
          <div
            className="absolute bottom-0 right-0 rounded-sm"
            style={{
              width: "20px",
              height: `${height}px`,
              background: `linear-gradient(180deg, ${allocation.color}99, ${allocation.color}55)`,
              transform: "rotateY(90deg) rotateX(-90deg)",
              transformOrigin: "bottom right",
            }}
          />
        </div>
        
        {/* Label */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
          <div className="text-xs font-bold" style={{ color: allocation.color }}>
            {allocation.percent}%
          </div>
          <div className="text-[10px] text-[var(--color-text-muted)] max-w-[80px] truncate">
            {allocation.label}
          </div>
        </div>
        
        {/* Hover tooltip */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg px-3 py-2 shadow-xl whitespace-nowrap">
            <div className="text-sm font-bold" style={{ color: allocation.color }}>
              {allocation.label}
            </div>
            <div className="text-xs text-[var(--color-text-muted)]">
              {allocation.desc}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Animated path line connecting blocks
function AllocationPath() {
  const points = allocations.map((_, i) => {
    const angle = (i / allocations.length) * Math.PI * 0.8 - Math.PI * 0.4;
    const radius = 120;
    const x = 50 + (Math.sin(angle) * radius / 3.5);
    const y = 80 - (Math.cos(angle) * radius * 0.15);
    return `${x},${y}`;
  }).join(" ");
  
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
      <motion.path
        d={`M ${points}`}
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="0.3"
        strokeDasharray="2 2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
    </svg>
  );
}

export function Tokenomics() {
  const reduce = useReducedMotion();
  
  return (
    <section className="relative py-24 md:py-32 px-5 overflow-hidden" aria-labelledby="tokenomics-heading">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header - Left aligned, not centered */}
        <motion.div
          className="mb-16 max-w-2xl"
          initial={reduce ? false : { opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4">
            Tokenomics
          </div>
          <h2 id="tokenomics-heading" className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-gradient">$IGNITE</span> Allocation
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
            Designed for long-term alignment. No team tokens at launch. Community owns the majority.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-20">
          {/* 3D Isometric Blocks - Takes 3 columns */}
          <motion.div
            className="lg:col-span-3 relative"
            initial={reduce ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[400px] md:h-[450px]">
              <AllocationPath />
              
              {allocations.map((alloc, i) => (
                <IsometricBlock
                  key={alloc.label}
                  allocation={alloc}
                  index={i}
                  total={allocations.length}
                />
              ))}
              
              {/* Center label */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
                <div className="text-3xl font-bold text-gradient">$IGNITE</div>
                <div className="text-sm text-[var(--color-text-muted)]">100M Supply</div>
              </div>
            </div>
          </motion.div>

          {/* Distribution bars - Takes 2 columns */}
          <motion.div
            className="lg:col-span-2"
            initial={reduce ? false : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-3">
              {allocations.map((alloc, index) => (
                <motion.div
                  key={alloc.label}
                  className="group relative p-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-border-hover)] transition-all duration-200"
                  initial={reduce ? false : { opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 + 0.3 }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${alloc.color}20` }}
                    >
                      <alloc.icon size={16} style={{ color: alloc.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm truncate">{alloc.label}</span>
                        <span className="font-bold font-mono text-sm ml-2" style={{ color: alloc.color }}>
                          {alloc.percent}%
                        </span>
                      </div>
                      <div className="h-1 rounded-full overflow-hidden" style={{ background: "var(--color-border)" }}>
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: `linear-gradient(90deg, ${alloc.color}, ${alloc.color}aa)` }}
                          initial={{ width: 0 }}
                          animate={{ width: `${alloc.percent * 4}%` }}
                          transition={{ duration: 1, delay: index * 0.08 + 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        />
                      </div>
                      <p className="text-xs text-[var(--color-text-muted)] mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        {alloc.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Utilities - Bento grid, not 3 identical cards */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4">
            Utility
          </div>
          <h3 className="text-2xl font-bold mb-8">Token Use Cases</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {utilities.map((util, index) => (
              <motion.div
                key={util.title}
                className="group relative p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-accent)] transition-all duration-300"
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 + 0.6 }}
              >
                {/* Accent line on hover */}
                <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "var(--color-accent-glow)" }}
                  >
                    <util.icon size={20} style={{ color: "var(--color-accent)" }} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{util.title}</h4>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{util.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
