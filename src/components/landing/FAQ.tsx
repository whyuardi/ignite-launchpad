"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import { CaretDown } from "@phosphor-icons/react";

const faqs = [
  {
    q: "What is Ignite Launchpad?",
    a: "Ignite is a multi-chain token launch platform that provides secure, transparent, and compliant infrastructure for Web3 projects to conduct token sales. We handle the technical complexity so founders can focus on building.",
  },
  {
    q: "How do I participate in a token sale?",
    a: "Connect your wallet, complete KYC if required, and stake IGNITE tokens for allocation rights. Tier levels determine your maximum allocation. Sales are first-come-first-served within each tier.",
  },
  {
    q: "Which chains are supported?",
    a: "We currently support Ethereum, Polygon, BSC, Arbitrum, and Base. New chains are added quarterly based on community governance votes and ecosystem demand.",
  },
  {
    q: "What are the fees?",
    a: "Platform fee is 2% of funds raised, paid by the project. Participants pay no fees. IGNITE stakers receive up to 50% fee discounts based on their stake weight and lock duration.",
  },
  {
    q: "How is security ensured?",
    a: "All smart contracts undergo multiple audits from top firms. We implement reentrancy guards, pausability, timelock controls, and multi-sig administration. Bug bounty program runs continuously.",
  },
  {
    q: "Can I list my project on Ignite?",
    a: "Projects can apply through our incubator program or direct listing. Requirements include smart contract audit, team verification, legal entity, and minimum viable product. Selection is competitive.",
  },
  {
    q: "What is the IGNITE token?",
    a: "IGNITE is the native utility token used for staking, governance, fee discounts, and revenue sharing. Total supply is 100M with no team tokens at launch. Community owns 60% of allocation.",
  },
  {
    q: "How do staking rewards work?",
    a: "Stake IGNITE to earn a share of 10% of all platform fees, distributed quarterly. APY is dynamic based on total staked amount. Auto-compounding available. Minimum lock period is 30 days.",
  },
];

function FaqItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const reduce = useReducedMotion();
  
  return (
    <motion.div
      className="border-b border-[var(--color-border)] last:border-0"
      initial={reduce ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <button
        className="w-full py-5 flex items-center justify-between text-left group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-medium pr-4 group-hover:text-[var(--color-accent)] transition-colors">
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <CaretDown size={18} className="text-[var(--color-text-muted)]" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-[var(--color-text-muted)] leading-relaxed max-w-3xl">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const reduce = useReducedMotion();
  
  return (
    <section className="relative py-24 md:py-32 px-5" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Header - Left column */}
          <motion.div
            className="lg:col-span-2"
            initial={reduce ? false : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4">
              FAQ
            </div>
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Questions?
            </h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed">
              Everything you need to know about Ignite Launchpad. Can't find what you're looking for? 
              <a href="#" className="text-[var(--color-accent)] hover:underline ml-1">Contact us</a>
            </p>
          </motion.div>
          
          {/* FAQ items - Right column */}
          <div className="lg:col-span-3">
            <div className="divide-y divide-[var(--color-border)]">
              {faqs.map((faq, index) => (
                <FaqItem key={index} faq={faq} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
