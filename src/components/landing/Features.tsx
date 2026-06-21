"use client";

import { Globe, Shield, Lightning, Users, LinkSimple, ChartLineUp, ArrowRight } from "@phosphor-icons/react";

export function Features() {
  return (
    <section className="relative py-16 md:py-24 px-5 overflow-hidden" id="features">
      <div className="max-w-7xl mx-auto">
        {/* Section header - left aligned, tight */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[var(--color-accent)]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--color-accent)]">
              Features
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] max-w-lg">
            Ship faster.
            <br />
            <span className="text-[var(--color-accent)]">Raise smarter.</span>
          </h2>
        </div>

        {/* Bento grid - asymmetric, mixed sizes */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Large feature - spans 8 cols */}
          <div className="md:col-span-8 relative group">
            <div className="h-full p-6 md:p-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-accent)]/30 transition-all duration-500">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--color-accent)]/10">
                  <Globe size={24} className="text-[var(--color-accent)]" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                  5+ Chains
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">Multi-Chain Deployment</h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed max-w-md">
                Deploy once, launch everywhere. Ethereum, Polygon, BSC, Arbitrum, Base — unified contract interface across all EVM chains.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] group-hover:gap-3 transition-all">
                Learn more <ArrowRight size={14} />
              </div>
            </div>
          </div>

          {/* Tall feature - spans 4 cols, spans 2 rows */}
          <div className="md:col-span-4 md:row-span-2 relative group">
            <div className="h-full p-6 rounded-2xl border border-[var(--color-border)] bg-gradient-to-b from-[var(--color-card)] to-[var(--color-bg)] hover:border-[var(--color-accent)]/30 transition-all duration-500">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--color-accent)]/10 mb-6">
                <Shield size={24} className="text-[var(--color-accent)]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Enterprise Security</h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6">
                ReentrancyGuard, Pausable, TimelockController built-in. Multi-sig admin. Emergency circuits.
              </p>
              <div className="space-y-2">
                {["ReentrancyGuard", "Pausable", "Timelock 48hr", "Multi-sig 3/5", "Bug bounty $500K"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                    <div className="w-1 h-1 rounded-full bg-[var(--color-accent)]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Medium feature - spans 4 cols */}
          <div className="md:col-span-4 relative group">
            <div className="h-full p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-accent)]/30 transition-all duration-500">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-accent)]/10 mb-4">
                <Lightning size={20} className="text-[var(--color-accent)]" />
              </div>
              <h3 className="text-lg font-bold mb-2">Automated Liquidity</h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                Uniswap V3 positions auto-created at launch. Dynamic fee tiers. LP locked.
              </p>
            </div>
          </div>

          {/* Medium feature - spans 4 cols */}
          <div className="md:col-span-4 relative group">
            <div className="h-full p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-accent)]/30 transition-all duration-500">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-accent)]/10 mb-4">
                <Users size={20} className="text-[var(--color-accent)]" />
              </div>
              <h3 className="text-lg font-bold mb-2">Tiered Allocation</h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                KYC-integrated whitelist. Dynamic tiers. Anti-sybil protection.
              </p>
            </div>
          </div>

          {/* Wide feature - spans 7 cols */}
          <div className="md:col-span-7 relative group">
            <div className="h-full p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-accent)]/30 transition-all duration-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-accent)]/10">
                  <ChartLineUp size={20} className="text-[var(--color-accent)]" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                  Flexible
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">Token Vesting</h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed max-w-md">
                Custom vesting schedules per allocation. Cliff, linear, or milestone-based. On-chain enforcement with transparent unlock timelines.
              </p>
            </div>
          </div>

          {/* Small feature - spans 5 cols */}
          <div className="md:col-span-5 relative group">
            <div className="h-full p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-accent)]/30 transition-all duration-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-accent)]/10">
                  <LinkSimple size={20} className="text-[var(--color-accent)]" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                  Anti-Whale
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">Fair Launch Protocol</h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                Dutch auction prevents frontrunning. Anti-whale caps. Equal opportunity distribution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
