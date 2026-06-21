"use client";

import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background - noise texture + gradient */}
      <div className="absolute inset-0 z-0">
        {/* Noise overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-20 blur-[120px]" style={{ background: "var(--color-accent)" }} />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full opacity-10 blur-[100px]" style={{ background: "var(--color-accent)" }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left content - asymmetric */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-8 border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]" />
              </span>
              <span className="text-[var(--color-accent)]">Live Mainnet Sale</span>
            </motion.div>

            {/* Headline - bold, asymmetric */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-6"
            >
              The launchpad
              <br />
              for Web3&apos;s
              <br />
              <span className="text-[var(--color-accent)]">next unicorns</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[var(--color-text-muted)] max-w-md mb-8 leading-relaxed"
            >
              Secure, transparent, and compliant token sales. From seed to Series A — we handle the infrastructure so you can build.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
                style={{ background: "var(--color-accent)", color: "#0a0a0f" }}
              >
                Join Sale
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold border border-[var(--color-border)] hover:border-[var(--color-accent)]/50 transition-all"
              >
                View Projects
              </Link>
            </motion.div>

            {/* Stats - asymmetric row */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-8 md:gap-12"
            >
              {[
                { value: "$240M+", label: "Total Raised" },
                { value: "180+", label: "Projects" },
                { value: "99.2%", label: "Success" },
                { value: "45K+", label: "Participants" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex flex-col">
                  <div className="text-2xl md:text-3xl font-bold tracking-tight">{stat.value}</div>
                  <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - abstract orbital visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Concentric rings */}
              <div className="absolute inset-0 border border-[var(--color-accent)]/20 rounded-full" />
              <div className="absolute inset-8 border border-[var(--color-accent)]/15 rounded-full" />
              <div className="absolute inset-16 border border-[var(--color-accent)]/10 rounded-full" />
              <div className="absolute inset-24 border border-[var(--color-accent)]/5 rounded-full" />
              
              {/* Center glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full" style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)", opacity: 0.15 }} />
              </div>
              
              {/* Orbiting dots */}
              <div className="absolute rounded-full" style={{ left: "20%", top: "30%", width: "8px", height: "8px", background: "var(--color-accent)", boxShadow: "0 0 20px var(--color-accent)" }} />
              <div className="absolute rounded-full" style={{ left: "75%", top: "25%", width: "6px", height: "6px", background: "var(--color-chain-eth)", boxShadow: "0 0 15px var(--color-chain-eth)" }} />
              <div className="absolute rounded-full" style={{ left: "80%", top: "70%", width: "10px", height: "10px", background: "var(--color-accent)", boxShadow: "0 0 25px var(--color-accent)" }} />
              <div className="absolute rounded-full" style={{ left: "15%", top: "75%", width: "5px", height: "5px", background: "var(--color-chain-polygon)", boxShadow: "0 0 12px var(--color-chain-polygon)" }} />
              <div className="absolute rounded-full" style={{ left: "50%", top: "15%", width: "4px", height: "4px", background: "var(--color-accent)", boxShadow: "0 0 10px var(--color-accent)" }} />
              
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 400">
                <line x1="100" y1="140" x2="300" y2="120" stroke="var(--color-accent)" strokeWidth="0.5" />
                <line x1="300" y1="120" x2="320" y2="280" stroke="var(--color-accent)" strokeWidth="0.5" />
                <line x1="320" y1="280" x2="80" y2="300" stroke="var(--color-accent)" strokeWidth="0.5" />
                <line x1="80" y1="300" x2="100" y2="140" stroke="var(--color-accent)" strokeWidth="0.5" />
                <line x1="200" y1="80" x2="300" y2="120" stroke="var(--color-accent)" strokeWidth="0.3" />
                <line x1="200" y1="80" x2="100" y2="140" stroke="var(--color-accent)" strokeWidth="0.3" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-text-muted)] opacity-50">
          <div className="text-[10px] uppercase tracking-[0.2em]">Scroll</div>
          <motion.div 
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
