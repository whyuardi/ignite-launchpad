"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Card } from "@/components/ui/Card";
import { CaretDown, CaretUp, Question, ArrowRight } from "@phosphor-icons/react";

const faqs = [
  {
    q: "What makes IGNITE different from other launchpads?",
    a: "We're the only launchpad built by protocol engineers who've secured $5B+ in TVL. No marketing fluff — just battle-tested infrastructure: multi-chain native, automated liquidity, fair launch mechanics, and post-launch support that actually delivers. Our contracts are formally verified, not just audited.",
  },
  {
    q: "How does the tiered allocation system work?",
    a: "Four tiers based on IGNITE staked amount, lock duration, referral activity, and historical participation. Tier 1 (Genesis): guaranteed allocation, lowest price. Tier 2 (Core): guaranteed allocation. Tier 3 (Community): lottery-based. Tier 4 (Public): FCFS. Anti-sybil via Gitcoin Passport + on-chain reputation.",
  },
  {
    q: "What chains does IGNITE support?",
    a: "Currently live on Ethereum, Polygon, BNB Chain, Arbitrum, and Base. Each chain has native contracts — no bridges, no wrapped tokens. Adding Solana and Avalanche in Q3 2025. Single staking position earns rewards across all chains.",
  },
  {
    q: "How is the $IGNITE token used?",
    a: "Stake for launchpad access (tiered allocations), fee discounts (up to 50%), revenue share (10% of platform fees quarterly), governance voting (protocol upgrades, fees, grants), incubator priority access, and cross-chain utility. No token required to participate in public sales.",
  },
  {
    q: "What security measures are in place?",
    a: "Triple-audited by Trail of Bits, OpenZeppelin, and Spearbit. Formal verification on critical paths. ReentrancyGuard, Pausable, TimelockController (48hr), multi-sig admin (3/5). Bug bounty up to $500K via Immunefi. Emergency circuit breakers on all contracts.",
  },
  {
    q: "What happens if a raise doesn't hit soft cap?",
    a: "Automatic refund via smart contract — no manual claims needed. Funds return to participant wallets within 1 block of sale end. Gas costs covered by protocol treasury. Project team can retry with adjusted parameters after 30-day cooldown.",
  },
  {
    q: "How does IGNITE handle regulatory compliance?",
    a: "KYC/AML via integrated providers (Sumsub, Onfido). Geo-blocking for sanctioned jurisdictions. Legal opinions for each major jurisdiction. Token classified as utility, not security. Ongoing counsel from ex-SEC advisors. Terms updated as regulations evolve.",
  },
  {
    q: "Can I integrate IGNITE into my own product?",
    a: "Yes. Launchpad SDK (TypeScript/Rust) for whitelabel integration. REST + GraphQL APIs for sale data, participant info, and analytics. Webhooks for real-time events. White-label frontend components via npm. Revenue share for integrators.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 md:py-32 px-5" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="text-gradient">Questions?</span> We've Got Answers
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
            Straight talk. No marketing speak. If your question isn't here, ping us on Telegram.
          </p>
        </motion.div>

        <div className="space-y-4" role="list">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
            >
              <Card
                variant="accent"
                padding="md"
                className="overflow-hidden"
                style={{
                  background: openIndex === index ? "rgba(240, 192, 64, 0.03)" : "var(--color-card)",
                  borderColor: openIndex === index ? "var(--color-accent)" : "var(--color-border)",
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-start justify-between gap-4 text-left p-2"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <Question
                      size={22}
                      style={{ color: "var(--color-accent)", flexShrink: 0 }}
                      aria-hidden="true"
                    />
                    <span className="font-medium text-[var(--color-text)]">{faq.q}</span>
                  </div>
                  <motion.div
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: "var(--color-border)", color: "var(--color-text-muted)" }}
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    aria-hidden="true"
                  >
                    {openIndex === index ? <CaretUp size={18} weight="bold" /> : <CaretDown size={18} weight="bold" />}
                  </motion.div>
                </button>

                <motion.div
                  id={`faq-answer-${index}`}
                  className="mt-4 pt-4 border-t"
                  style={{ borderColor: "var(--color-border)", overflow: "hidden" }}
                  initial={false}
                  animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0, paddingTop: openIndex === index ? "1rem" : 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <p className="text-[var(--color-text-muted)] leading-relaxed">{faq.a}</p>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-[var(--color-text-muted)] mb-4">Still have questions?</p>
          <a
            href="https://t.me/ignite_launchpad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium hover:underline"
          >
            Join Telegram <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}