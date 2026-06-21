"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Sparkle } from "@phosphor-icons/react";

// ═══════════════════════════════════════════════════════════════════
// Types
// ═══════════════════════════════════════════════════════════════════

interface Tier {
  id: string;
  name: string;
  color: string;
  minStake: number;
  allocation: number;
  icon: string;
  perks: string[];
}

interface Transaction {
  id: string;
  type: "purchase" | "claim" | "stake";
  amount: number;
  tier: string;
  date: string;
  status: "completed" | "pending" | "failed";
  txHash: string;
}

// ═══════════════════════════════════════════════════════════════════
// Data
// ═══════════════════════════════════════════════════════════════════

const TIERS: Tier[] = [
  {
    id: "seed",
    name: "Seed",
    color: "#fbbf24",
    minStake: 100,
    allocation: 0.5,
    icon: "🌱",
    perks: ["Early access", "1x allocation", "Basic analytics"],
  },
  {
    id: "growth",
    name: "Growth",
    color: "#f59e0b",
    minStake: 1000,
    allocation: 2.0,
    icon: "🌿",
    perks: ["Priority access", "2x allocation", "Advanced analytics", "Priority support"],
  },
  {
    id: "scale",
    name: "Scale",
    color: "#d97706",
    minStake: 5000,
    allocation: 5.0,
    icon: "🌳",
    perks: ["Guaranteed allocation", "5x allocation", "Real-time data", "Dedicated manager", "Co-investment"],
  },
  {
    id: "summit",
    name: "Summit",
    color: "#b45309",
    minStake: 25000,
    allocation: 15.0,
    icon: "⛰️",
    perks: ["VIP access", "15x allocation", "Custom vesting", "Board seat", "Token airdrops", "Exclusive events"],
  },
];

const MOCK_TXS: Transaction[] = [
  { id: "1", type: "purchase", amount: 2500, tier: "Growth", date: "2025-03-15", status: "completed", txHash: "0x1a2b...3c4d" },
  { id: "2", type: "stake", amount: 5000, tier: "Scale", date: "2025-03-10", status: "completed", txHash: "0x5e6f...7g8h" },
  { id: "3", type: "claim", amount: 125, tier: "Growth", date: "2025-03-08", status: "completed", txHash: "0x9i0j...1k2l" },
  { id: "4", type: "purchase", amount: 1000, tier: "Seed", date: "2025-02-28", status: "completed", txHash: "0x3m4n...5o6p" },
  { id: "5", type: "stake", amount: 25000, tier: "Summit", date: "2025-02-20", status: "pending", txHash: "0x7q8r...9s0t" },
];

const SALE_DATA = {
  totalSupply: 100_000_000,
  sold: 67_500_000,
  price: 0.0024,
  hardCap: 240_000,
  raised: 162_000,
  participants: 12_847,
  timeLeft: "2d 14h 32m",
};

// ═══════════════════════════════════════════════════════════════════
// Components
// ═══════════════════════════════════════════════════════════════════

function WalletConnect({ onConnect }: { onConnect: (addr: string) => void }) {
  const [isConnecting, setIsConnecting] = useState(false);

  const connect = async () => {
    setIsConnecting(true);
    // Simulate wallet connection
    await new Promise((r) => setTimeout(r, 1500));
    const mockAddr = "0x05bC...9205";
    onConnect(mockAddr);
    setIsConnecting(false);
  };

  return (
    <motion.button
      onClick={connect}
      disabled={isConnecting}
      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
      style={{
        background: isConnecting ? "var(--color-border)" : "var(--color-accent)",
        color: "#0a0a0f",
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {isConnecting ? (
        <>
          <div className="w-4 h-4 border-2 border-[#0a0a0f] border-t-transparent rounded-full animate-spin" />
          Connecting...
        </>
      ) : (
        <>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 12V8H6a2 2 0 01-2-2c0-1.1.9-2 2-2h12v4" />
            <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
            <path d="M18 12a2 2 0 000 4h4v-4h-4z" />
          </svg>
          Connect Wallet
        </>
      )}
    </motion.button>
  );
}

function SaleProgress() {
  const percent = (SALE_DATA.sold / SALE_DATA.totalSupply) * 100;

  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm">
        <span className="text-[var(--color-text-muted)]">Sale Progress</span>
        <span className="font-medium">{percent.toFixed(1)}%</span>
      </div>
      <div className="h-3 rounded-full overflow-hidden" style={{ background: "var(--color-border)" }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, var(--color-accent), var(--color-accent-strong))" }}
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-lg font-bold">${(SALE_DATA.raised / 1000).toFixed(0)}K</div>
          <div className="text-xs text-[var(--color-text-muted)]">Raised</div>
        </div>
        <div>
          <div className="text-lg font-bold">${(SALE_DATA.hardCap / 1000).toFixed(0)}K</div>
          <div className="text-xs text-[var(--color-text-muted)]">Hard Cap</div>
        </div>
        <div>
          <div className="text-lg font-bold">{SALE_DATA.participants.toLocaleString()}</div>
          <div className="text-xs text-[var(--color-text-muted)]">Participants</div>
        </div>
      </div>
    </div>
  );
}

function TierSelector({
  selectedTier,
  onSelect,
}: {
  selectedTier: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {TIERS.map((tier) => (
        <motion.button
          key={tier.id}
          onClick={() => onSelect(tier.id)}
          className="p-4 rounded-xl text-left transition-all"
          style={{
            background:
              selectedTier === tier.id
                ? `linear-gradient(135deg, ${tier.color}15, ${tier.color}08)`
                : "var(--color-bg)",
            border: `1px solid ${selectedTier === tier.id ? `${tier.color}50` : "var(--color-border)"}`,
          }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center gap-2 mb-1.5">
            <span style={{ color: tier.color }}>{tier.icon}</span>
            <span className="font-medium text-sm">{tier.name}</span>
          </div>
          <div className="text-xs text-[var(--color-text-muted)] mb-2">
            Min: {tier.minStake.toLocaleString()} IGNITE
          </div>
          <div className="text-lg font-bold" style={{ color: tier.color }}>
            {tier.allocation}%
          </div>
          <div className="text-[10px] text-[var(--color-text-muted)]">allocation</div>
        </motion.button>
      ))}
    </div>
  );
}

function TokenSale({ walletAddress }: { walletAddress: string | null }) {
  const [selectedTier, setSelectedTier] = useState("growth");
  const [amount, setAmount] = useState("");
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePurchase = async () => {
    if (!amount || !walletAddress) return;
    setIsPurchasing(true);
    await new Promise((r) => setTimeout(r, 2000));
    setIsPurchasing(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const tier = TIERS.find((t) => t.id === selectedTier)!;
  const ethCost = amount ? (parseFloat(amount) * SALE_DATA.price).toFixed(4) : "0.0000";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Sparkle size={20} weight="fill" style={{ color: "var(--color-accent)" }} />
          Active Sale
        </h2>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
          style={{ background: "#22c55e20", color: "#22c55e", border: "1px solid #22c55e40" }}>
          <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
          Live
        </div>
      </div>

      <SaleProgress />

      <div>
        <h3 className="text-sm font-medium mb-3 text-[var(--color-text-muted)]">Select Tier</h3>
        <TierSelector selectedTier={selectedTier} onSelect={setSelectedTier} />
      </div>

      <div className="p-4 rounded-xl" style={{ background: "var(--color-bg-elevated)", border: "1px solid var(--color-border)" }}>
        <h3 className="text-sm font-medium mb-3">Purchase IGNITE</h3>
        <div className="flex gap-3">
          <div className="flex-1">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount in IGNITE"
              className="w-full px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2"
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text)",
                
              }}
            />
          </div>
          <motion.button
            onClick={handlePurchase}
            disabled={!amount || !walletAddress || isPurchasing}
            className="px-6 py-3 rounded-lg text-sm font-medium transition-all disabled:opacity-50"
            style={{ background: "var(--color-accent)", color: "#0a0a0f" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isPurchasing ? "Processing..." : "Buy"}
          </motion.button>
        </div>
        {amount && (
          <div className="mt-3 text-sm text-[var(--color-text-muted)]">
            Cost: {ethCost} ETH • Tier: <span style={{ color: tier.color }}>{tier.name}</span>
          </div>
        )}
        {!walletAddress && (
          <div className="mt-3 text-sm text-amber-500">
            Connect wallet to purchase
          </div>
        )}
      </div>

      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="p-4 rounded-xl flex items-center gap-3"
          style={{ background: "#22c55e15", border: "1px solid #22c55e40" }}
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#22c55e20" }}>
            ✓
          </div>
          <div>
            <div className="text-sm font-medium text-[#22c55e]">Purchase Successful!</div>
            <div className="text-xs text-[var(--color-text-muted)]">Your IGNITE tokens are being processed</div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

function TransactionHistory() {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-[var(--color-text-muted)]">Recent Transactions</h3>
      <div className="space-y-2">
        {MOCK_TXS.map((tx, i) => (
          <motion.div
            key={tx.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center justify-between p-3 rounded-lg"
            style={{ background: "var(--color-bg-elevated)", border: "1px solid var(--color-border)" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs"
                style={{
                  background: tx.type === "purchase" ? "#22c55e15" : tx.type === "stake" ? "#3b82f615" : "#f59e0b15",
                  color: tx.type === "purchase" ? "#22c55e" : tx.type === "stake" ? "#3b82f6" : "#f59e0b",
                }}
              >
                {tx.type === "purchase" ? "↑" : tx.type === "stake" ? "◆" : "↓"}
              </div>
              <div>
                <div className="text-sm font-medium capitalize">{tx.type}</div>
                <div className="text-xs text-[var(--color-text-muted)]">{tx.tier} • {tx.date}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">{tx.amount.toLocaleString()} IGNITE</div>
              <div className="text-xs text-[var(--color-text-muted)] font-mono">{tx.txHash}</div>
            </div>
            <div
              className="px-2 py-1 rounded text-[10px] font-medium"
              style={{
                background: tx.status === "completed" ? "#22c55e15" : tx.status === "pending" ? "#f59e0b15" : "#ef444415",
                color: tx.status === "completed" ? "#22c55e" : tx.status === "pending" ? "#f59e0b" : "#ef4444",
              }}
            >
              {tx.status}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// Main Dashboard
// ═══════════════════════════════════════════════════════════════════

export default function DashboardContent() {
  const [wallet, setWallet] = useState<string | null>(null);

  return (
    <div className="min-h-screen p-6 lg:p-8" style={{ background: "var(--color-bg)" }}>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Total Supply", value: "100M", sub: "IGNITE" },
            { label: "Price", value: "$0.0024", sub: "per token" },
            { label: "Time Left", value: SALE_DATA.timeLeft, sub: "until end" },
            { label: "Your Holdings", value: wallet ? "8,500" : "—", sub: "IGNITE" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-4 rounded-xl"
              style={{ background: "var(--color-bg-elevated)", border: "1px solid var(--color-border)" }}
            >
              <div className="text-xs text-[var(--color-text-muted)] mb-1">{stat.label}</div>
              <div className="text-xl font-bold">{stat.value}</div>
              <div className="text-xs text-[var(--color-text-muted)]">{stat.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Token Sale */}
          <div className="lg:col-span-2">
            <div className="p-6 rounded-2xl" style={{ background: "var(--color-bg-elevated)", border: "1px solid var(--color-border)" }}>
              <TokenSale walletAddress={wallet} />
            </div>
          </div>

          {/* Right: Sidebar */}
          <div className="space-y-6">
            {/* Wallet Status */}
            <div className="p-6 rounded-2xl" style={{ background: "var(--color-bg-elevated)", border: "1px solid var(--color-border)" }}>
              {wallet ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--color-text-muted)]">Connected</span>
                    <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  </div>
                  <div className="p-3 rounded-lg font-mono text-sm" style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
                    {wallet}
                  </div>
                  <button
                    onClick={() => setWallet(null)}
                    className="w-full py-2 rounded-lg text-sm font-medium transition-all"
                    style={{ background: "var(--color-border)", color: "var(--color-text-muted)" }}
                  >
                    Disconnect
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Connect Wallet</h3>
                  <p className="text-xs text-[var(--color-text-muted)]">
                    Connect your wallet to participate in the token sale.
                  </p>
                  <WalletConnect onConnect={setWallet} />
                </div>
              )}
            </div>

            {/* Tier Details */}
            <div className="p-6 rounded-2xl" style={{ background: "var(--color-bg-elevated)", border: "1px solid var(--color-border)" }}>
              <h3 className="text-sm font-medium mb-4">Your Tier Benefits</h3>
              <div className="space-y-3">
                {TIERS.slice(0, 3).map((tier) => (
                  <div key={tier.id} className="flex items-center gap-3">
                    <span>{tier.icon}</span>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{tier.name}</div>
                      <div className="text-xs text-[var(--color-text-muted)]">{tier.minStake.toLocaleString()} IGNITE</div>
                    </div>
                    <div className="text-sm font-bold" style={{ color: tier.color }}>
                      {tier.allocation}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Transaction History */}
        <div className="p-6 rounded-2xl" style={{ background: "var(--color-bg-elevated)", border: "1px solid var(--color-border)" }}>
          <TransactionHistory />
        </div>
      </div>
    </div>
  );
}
