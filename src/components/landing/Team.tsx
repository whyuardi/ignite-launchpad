"use client";

import { motion } from "motion/react";
import { Card } from "@/components/ui/Card";
import { LinkedinLogo, TwitterLogo, GithubLogo, Envelope } from "@phosphor-icons/react";

const team = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO",
    bio: "Ex-Coinbase, Andreessen Horowitz crypto. 8 years building Web3 infra. MIT CS + MBA.",
    links: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Marcus Webb",
    role: "CTO",
    bio: "Ex-Ethereum Foundation, ConsenSys. Core contributor to EIP-4337. Rust & Solidity expert.",
    links: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Priya Sharma",
    role: "Head of Product",
    bio: "Ex-Uniswap, dYdX. Launched 15+ DeFi products. UX for complex financial primitives.",
    links: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "James Okonkwo",
    role: "Head of Security",
    bio: "Ex-Trail of Bits, OpenZeppelin. 50+ smart contract audits. Formal verification specialist.",
    links: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Lisa Zhang",
    role: "Head of Growth",
    bio: "Ex-Binance, Galaxy Digital. Built communities 100K+. Web3 go-to-market strategist.",
    links: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Alex Rivera",
    role: "Lead Protocol Engineer",
    bio: "Ex-Aave, MakerDAO. Designed lending protocols managing $5B+. MEV & oracle expert.",
    links: { linkedin: "#", twitter: "#", github: "#" },
  },
];

const advisors = [
  {
    name: "Dr. Robert Chen",
    role: "Cryptography Advisor",
    org: "Stanford / a16z crypto",
  },
  {
    name: "Maria Santos",
    role: "Regulatory Advisor",
    org: "Ex-SEC, Paradigm",
  },
  {
    name: "Kevin Park",
    role: "Tokenomics Advisor",
    org: "Delphi Digital",
  },
];

export function Team() {
  return (
    <section className="relative py-24 md:py-32 px-5" aria-labelledby="team-heading">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 id="team-heading" className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            The <span className="text-gradient">Builders</span> Behind IGNITE
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
            Veterans from the protocols you use daily. We've secured billions, launched hundreds, and learned every lesson.
          </p>
        </motion.div>

        {/* Core Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-2xl font-bold mb-8">Core Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }}>
                <Card variant="accent" padding="lg" hover className="h-full">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-2xl overflow-hidden relative">
                    <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, var(--color-accent), var(--color-accent-strong))` }} />
                    <div className="relative flex items-center justify-center h-full text-3xl font-bold" style={{ color: "#0a0a0f" }}>
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-semibold">{member.name}</h4>
                    <p className="text-sm font-medium" style={{ color: "var(--color-accent)" }}>{member.role}</p>
                  </div>
                  <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">{member.bio}</p>
                  <div className="flex items-center justify-center gap-3">
                    {[
                      { icon: LinkedinLogo, href: member.links.linkedin, label: "LinkedinLogo" },
                      { icon: TwitterLogo, href: member.links.twitter, label: "TwitterLogo" },
                      { icon: GithubLogo, href: member.links.github, label: "GitHub" },
                    ].map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                        style={{ background: "var(--color-border)", border: "1px solid var(--color-border)" }}
                        aria-label={label}
                      >
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Advisors */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-2xl font-bold mb-8">Strategic Advisors</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advisors.map((advisor, index) => (
              <motion.div key={advisor.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }}>
                <Card variant="premium" padding="lg" className="text-center border-[var(--color-accent)]/30">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-xl flex items-center justify-center text-2xl font-bold" style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-strong))", color: "#0a0a0f" }}>
                    {advisor.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <h4 className="text-lg font-semibold">{advisor.name}</h4>
                  <p className="text-sm" style={{ color: "var(--color-accent)" }}>{advisor.role}</p>
                  <p className="text-[var(--color-text-muted)] text-xs mt-1">{advisor.org}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}