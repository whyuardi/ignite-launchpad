"use client";

import { motion, useReducedMotion } from "motion/react";
import { GithubLogo, TwitterLogo, LinkedinLogo } from "@phosphor-icons/react";

const coreTeam = [
  {
    name: "Alex Chen",
    role: "CEO & Co-founder",
    bio: "Former Head of Product at Coinbase. 12 years in fintech. Built trading systems processing $1B+ daily.",
    socials: { twitter: "#", github: "#", linkedin: "#" },
    accent: "var(--color-accent)",
  },
  {
    name: "Sarah Kim",
    role: "CTO & Co-founder",
    bio: "Ex-Ethereum core contributor. Led smart contract team at ConsenSys. PhD in Cryptography from MIT.",
    socials: { twitter: "#", github: "#" },
    accent: "var(--color-chain-eth)",
  },
  {
    name: "Marcus Rivera",
    role: "Head of Security",
    bio: "Former lead auditor at Trail of Bits. Discovered 40+ critical vulnerabilities in DeFi protocols.",
    socials: { twitter: "#", linkedin: "#" },
    accent: "var(--color-success)",
  },
  {
    name: "Emma Walsh",
    role: "Head of Growth",
    bio: "Scaled Polygon from 10K to 2M daily users. Previously at Binance Launchpad and Y Combinator.",
    socials: { twitter: "#", linkedin: "#" },
    accent: "var(--color-chain-polygon)",
  },
  {
    name: "James Park",
    role: "Lead Engineer",
    bio: "Full-stack architect. Built infrastructure at Alchemy and Infura. Contributor to OpenZeppelin.",
    socials: { github: "#", twitter: "#" },
    accent: "var(--color-chain-arb)",
  },
  {
    name: "Nina Petrov",
    role: "Head of Design",
    bio: "Former design lead at Stripe. Created design systems used by 10,000+ developers worldwide.",
    socials: { twitter: "#", linkedin: "#" },
    accent: "var(--color-chain-base)",
  },
];

const advisors = [
  {
    name: "Vitalik B.",
    role: "Strategic Advisor",
    bio: "Ethereum co-founder. Advises on protocol design and decentralized governance.",
    accent: "var(--color-chain-eth)",
  },
  {
    name: "Balaji S.",
    role: "Tokenomics Advisor",
    bio: "Former CTO of Coinbase. Expert in crypto-economics and network design.",
    accent: "var(--color-accent)",
  },
  {
    name: "Hayden M.",
    role: "DeFi Advisor",
    bio: "Founder of Uniswap. Advises on AMM design and liquidity mechanisms.",
    accent: "var(--color-danger)",
  },
];

export function Team() {
  const reduce = useReducedMotion();
  
  return (
    <section className="relative py-24 md:py-32 px-5" aria-labelledby="team-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12 max-w-2xl"
          initial={reduce ? false : { opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4">
            Team
          </div>
          <h2 id="team-heading" className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            The <span className="text-gradient">Builders</span>
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
            Crypto-native team with decades of combined experience in finance, security, and protocol design.
          </p>
        </motion.div>
        
        {/* Core Team - Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {coreTeam.map((member, index) => (
            <motion.div
              key={member.name}
              className={`group relative p-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-border-hover)] transition-all duration-300 ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Accent line */}
              <div
                className="absolute top-0 left-6 right-6 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${member.accent}, transparent)` }}
              />
              
              <div className="flex items-start gap-4">
                {/* Avatar placeholder */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 text-lg font-bold"
                  style={{ background: `${member.accent}15`, color: member.accent }}
                >
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold">{member.name}</h3>
                  <div className="text-xs text-[var(--color-text-muted)] mb-2">{member.role}</div>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{member.bio}</p>
                  
                  {/* Socials */}
                  {member.socials && (
                    <div className="flex items-center gap-3 mt-3">
                      {member.socials.twitter && (
                        <a href={member.socials.twitter} className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                          <TwitterLogo size={16} />
                        </a>
                      )}
                      {member.socials.github && (
                        <a href={member.socials.github} className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                          <GithubLogo size={16} />
                        </a>
                      )}
                      {member.socials.linkedin && (
                        <a href={member.socials.linkedin} className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                          <LinkedinLogo size={16} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Advisors - Compact horizontal */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-6">Advisors</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                className="flex items-center gap-4 p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)]"
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.7 }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-sm font-bold"
                  style={{ background: `${advisor.accent}15`, color: advisor.accent }}
                >
                  {advisor.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="font-medium text-sm">{advisor.name}</div>
                  <div className="text-xs text-[var(--color-text-muted)]">{advisor.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
