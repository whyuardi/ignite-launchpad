"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CaretDown } from "@phosphor-icons/react";

const faqs = [
  {
    q: "What is Ignite Launchpad?",
    a: "Ignite is a Web3 launchpad infrastructure for secure, transparent, and compliant token sales. We provide the tools for projects to raise capital while protecting investors through audited smart contracts and tiered allocation systems.",
  },
  {
    q: "How do I participate in a sale?",
    a: "Connect your wallet, complete KYC verification, and stake IGT tokens to access your allocation tier. Higher stakes unlock larger allocation slots. Sales open at announced times with first-come-first-served or lottery mechanisms.",
  },
  {
    q: "What chains are supported?",
    a: "Ethereum, Polygon, BNB Chain, Arbitrum, and Base at launch. More chains coming in Q3 2025. Each chain has native contract deployment with cross-chain bridge support.",
  },
  {
    q: "What are the fees?",
    a: "5% of funds raised, paid by the project. No fees to participants. IGT stakers receive up to 50% fee discount based on their tier. Additional services (audit, marketing, liquidity provisioning) have separate pricing.",
  },
  {
    q: "How is this different from other launchpads?",
    a: "Multi-chain by default, not as an afterthought. Enterprise-grade security with TimeLockController and Multi-sig built into every deployment. Transparent on-chain vesting. No hidden fees or rug-pull vectors.",
  },
  {
    q: "What is the IGT token?",
    a: "The native utility token powering Ignite. Used for governance voting, staking for tier access, fee discounts, and ecosystem incentives. 1 billion total supply with structured vesting across team, ecosystem, and public allocation.",
  },
  {
    q: "How are projects vetted?",
    a: "Every project undergoes technical audit (smart contract review), team verification (doxxed founders required), market analysis, and legal compliance check. Failed audits result in rejection. Community voting on final approvals.",
  },
  {
    q: "Can I list my project?",
    a: "Yes. Apply through the Launchpad Portal with your whitepaper, team info, and technical specs. Approval typically takes 2-4 weeks. Accepted projects receive full support: audit, launch infrastructure, marketing, and post-launch support.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-16 md:py-24 px-5 overflow-hidden" id="faq">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[var(--color-accent)]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--color-accent)]">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1]">
            Common
            <br />
            <span className="text-[var(--color-accent)]">questions</span>
          </h2>
        </div>

        {/* FAQ items */}
        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="border-t border-[var(--color-border)]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="text-sm md:text-base font-medium pr-4 group-hover:text-[var(--color-accent)] transition-colors">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <CaretDown size={16} className="text-[var(--color-text-muted)]" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed pb-5 max-w-2xl">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[var(--color-text-muted)]">
            Still have questions?{" "}
            <a href="mailto:support@ignitelaunchpad.io" className="text-[var(--color-accent)] hover:underline">
              Contact support
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
