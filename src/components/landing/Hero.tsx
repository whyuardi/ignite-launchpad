"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Globe } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { ThreeBackground } from "@/components/three/ThreeBackground";

const stats = [
  { value: "$240M+", label: "Total Raised" },
  { value: "180+", label: "Projects Launched" },
  { value: "99.2%", label: "Success Rate" },
  { value: "45K+", label: "Unique Participants" },
];

export function Hero() {
  const reduce = useReducedMotion();
  
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      <ThreeBackground intensity="medium" />
      
      {/* Asymmetric split layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text content - 7 columns */}
          <motion.div
            className="lg:col-span-7"
            initial={reduce ? false : { opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5"
              initial={reduce ? false : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--color-accent)]" />
              </span>
              <span className="text-[var(--color-accent)]">Live Mainnet Sale</span>
            </motion.div>
            
            {/* Headline - Left aligned */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              The Launchpad for
              <br />
              <span className="text-gradient">Web3's Next Unicorns</span>
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p
              className="text-base md:text-lg text-[var(--color-text-muted)] max-w-xl mb-8 leading-relaxed"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Secure, transparent, and compliant token sales. From seed to Series A, 
              we handle the infrastructure so you can build.
            </motion.p>
            
            {/* CTAs - Left aligned */}
            <motion.div
              className="flex flex-wrap items-center gap-4 mb-12"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Button size="lg" rightIcon={<ArrowRight size={18} />} onClick={() => window.location.href = "/dashboard"}>
                Join Sale
              </Button>
              <Button variant="secondary" size="lg" onClick={() => window.location.href = "/dashboard"}>
                View Projects
              </Button>
            </motion.div>
            
            {/* Stats - Horizontal row */}
            <motion.div
              className="flex flex-wrap gap-8 md:gap-12"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex flex-col">
                  <div className="text-2xl md:text-3xl font-bold text-[var(--color-text)]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right: Visual element - 5 columns */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={reduce ? false : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Abstract 3D visual */}
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Rotating rings */}
              <motion.div
                className="absolute inset-0 border border-[var(--color-accent)]/20 rounded-full"
                animate={reduce ? {} : { rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-8 border border-[var(--color-chain-eth)]/20 rounded-full"
                animate={reduce ? {} : { rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-16 border border-[var(--color-accent)]/10 rounded-full"
                animate={reduce ? {} : { rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Center glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-32 h-32 rounded-full"
                  style={{
                    background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
                    opacity: 0.15,
                  }}
                  animate={reduce ? {} : { scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              
              {/* Floating elements */}
              {[
                { x: "20%", y: "30%", size: 8, color: "var(--color-accent)", delay: 0 },
                { x: "75%", y: "25%", size: 6, color: "var(--color-chain-eth)", delay: 0.5 },
                { x: "80%", y: "70%", size: 10, color: "var(--color-accent)", delay: 1 },
                { x: "15%", y: "75%", size: 5, color: "var(--color-chain-polygon)", delay: 1.5 },
              ].map((dot, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    left: dot.x,
                    top: dot.y,
                    width: dot.size,
                    height: dot.size,
                    background: dot.color,
                    boxShadow: `0 0 20px ${dot.color}`,
                  }}
                  animate={reduce ? {} : { 
                    y: [0, -10, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: dot.delay,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-text-muted)]"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5 }}
      >
        <div className="text-[10px] uppercase tracking-[0.2em]">Scroll</div>
        <motion.div
          animate={reduce ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
