"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Sparkle, Wallet, ArrowUpRight, ArrowDown, Check, Clock, LinkSimple } from "@phosphor-icons/react";

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
    color: "#FBBF24",
    minStake: 100,
    allocation: 0.5,
    icon: "seed",
    perks: ["Early access", "1x allocation", "Basic analytics"],
  },
  {
    id: "growth",
    name: "Growth",
    color: "#F59E0B",
    minStake: 1000,
    allocation: 2.0,
    icon: "growth",
    perks: ["Priority access", "2x allocation", "Advanced analytics", "Priority support"],
  },
  {
    id: "scale",
    name: "Scale",
    color: "#D97706",
    minStake: 5000,
    allocation: 5.0,
    icon: "scale",
    perks: ["Guaranteed allocation", "5x allocation", "Real-time data", "Dedicated manager", "Co-investment"],
  },
  {
    id: "summit",
    name: "Summit",
    color: "#B45309",
    minStake: 25000,
    allocation: 15.0,
    icon: "summit",
    perks: ["VIP access", "15x allocation", "Custom vesting", "Board seat", "Token airdrops", "Exclusive events"],
  },
];

const MOCK_TXS: Transaction[] = [
  { id: "1", type: "purchase", amount: 2500, tier: "Growth", date: "Mar 15, 2025", status: "completed", txHash: "0x1a2b...3c4d" },
  { id: "2", type: "stake", amount: 5000, tier: "Scale", date: "Mar 10, 2025", status: "completed", txHash: "0x5e6f...7g8h" },
  { id: "3", type: "claim", amount: 125, tier: "Growth", date: "Mar 8, 2025", status: "completed", txHash: "0x9i0j...1k2l" },
  { id: "4", type: "purchase", amount: 1000, tier: "Seed", date: "Feb 28, 2025", status: "completed", txHash: "0x3m4n...5o6p" },
  { id: "5", type: "stake", amount: 25000, tier: "Summit", date: "Feb 20, 2025", status: "pending", txHash: "0x7q8r...9s0t" },
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
// Design tokens
// ═══════════════════════════════════════════════════════════════════

const CARD = "rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]";
const CARD_ELEVATED = "rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]";
const LABEL = "text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider";
const VALUE = "text-2xl font-bold tracking-tight";
const SUB = "text-xs text-[var(--color-text-muted)]";

// ═══════════════════════════════════════════════════════════════════
// Components
// ═══════════════════════════════════════════════════════════════════

function StatCard({ label, value, sub, accent }: { label: string; value: string; sub: string; accent?: string }) {
  return (
    <div className={`p-5 ${CARD}`}>
      <div className={LABEL}>{label}</div>
      <div className={`${VALUE} mt-2`} style={{ color: accent || "var(--color-text)" }}>{value}</div>
      <div className={`${SUB} mt-1`}>{sub}</div>
    </div>
  );
}

function WalletConnect({ onConnect }: { onConnect: (addr: string) => void }) {
  const [isConnecting, setIsConnecting] = useState(false);

  const connect = async () => {
    setIsConnecting(true);
    await new Promise((r) => setTimeout(r, 1500));
    onConnect("0x05bC...9205");
    setIsConnecting(false);
  };

  return (
    <button
      onClick={connect}
      disabled={isConnecting}
      className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90 disabled:opacity-50"
      style={{ background: "var(--color-accent)", color: "#0a0a0f" }}
    >
      {isConnecting ? (
        <>
          <div className="w-4 h-4 border-2 border-[#0a0a0f] border-t-transparent rounded-full animate-spin" />
          Connecting...
        </>
      ) : (
        <>
          <Wallet size={18} weight="fill" />
          Connect Wallet
        </>
      )}
    </button>
  );
}

function SaleProgress() {
  const percent = (SALE_DATA.sold / SALE_DATA.totalSupply) * 100;

  return (
    <div className="space-y-4">
      {/* Progress bar */}
      <div>
        <div className="flex justify-between items-baseline mb-2">
          <span className="text-sm font-medium">Sale Progress</span>
          <span className="text-sm font-bold" style={{ color: "var(--color-accent)" }}>{percent.toFixed(1)}%</span>
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
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-3 rounded-xl" style={{ background: "var(--color-bg)" }}>
          <div className="text-lg font-bold">${(SALE_DATA.raised / 1000).toFixed(0)}K</div>
          <div className={SUB}>Raised</div>
        </div>
        <div className="text-center p-3 rounded-xl" style={{ background: "var(--color-bg)" }}>
          <div className="text-lg font-bold">${(SALE_DATA.hardCap / 1000).toFixed(0)}K</div>
          <div className={SUB}>Hard Cap</div>
        </div>
        <div className="text-center p-3 rounded-xl" style={{ background: "var(--color-bg)" }}>
          <div className="text-lg font-bold">{SALE_DATA.participants.toLocaleString()}</div>
          <div className={SUB}>Participants</div>
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
      {TIERS.map((tier) => {
        const isSelected = selectedTier === tier.id;
        return (
          <button
            key={tier.id}
            onClick={() => onSelect(tier.id)}
            className={`p-4 rounded-xl text-left transition-all ${isSelected ? "ring-2 ring-[var(--color-accent)]" : "hover:bg-[var(--color-bg-elevated)]"}`}
            style={{
              background: isSelected ? `${tier.color}10` : "var(--color-bg)",
              border: `1px solid ${isSelected ? tier.color : "var(--color-border)"}`,
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{tier.icon}</span>
              <span className="font-semibold text-sm">{tier.name}</span>
            </div>
            <div className={`${VALUE} text-xl`} style={{ color: tier.color }}>
              {tier.allocation}%
            </div>
            <div className={`${SUB} mt-1`}>Min {tier.minStake.toLocaleString()}</div>
          </button>
        );
      })}
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
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Sparkle size={22} weight="fill" style={{ color: "var(--color-accent)" }} />
          Active Sale
        </h2>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
          style={{ background: "#22c55e15", color: "#22c55e", border: "1px solid #22c55e30" }}>
          <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
          Live
        </div>
      </div>

      <SaleProgress />

      {/* Tier Selection */}
      <div>
        <h3 className={`${LABEL} mb-3`}>Select Tier</h3>
        <TierSelector selectedTier={selectedTier} onSelect={setSelectedTier} />
      </div>

      {/* Purchase Form */}
      <div className={`p-5 ${CARD_ELEVATED}`}>
        <h3 className="font-semibold mb-3">Purchase IGNITE</h3>
        <div className="flex gap-3">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount in IGNITE"
            className="flex-1 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
            style={{
              background: "var(--color-bg)",
              border: "1px solid var(--color-border)",
              color: "var(--color-text)",
            }}
          />
          <button
            onClick={handlePurchase}
            disabled={!amount || !walletAddress || isPurchasing}
            className="px-6 py-3 rounded-xl text-sm font-semibold transition-all disabled:opacity-40 hover:opacity-90"
            style={{ background: "var(--color-accent)", color: "#0a0a0f" }}
          >
            {isPurchasing ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-[#0a0a0f] border-t-transparent rounded-full animate-spin" />
                Processing
              </span>
            ) : "Buy"}
          </button>
        </div>
        
        {amount && (
          <div className="mt-3 text-sm">
            <span className={SUB}>Cost: </span>
            <span className="font-medium">{ethCost} ETH</span>
            <span className={SUB}> • Tier: </span>
            <span style={{ color: tier.color }} className="font-medium">{tier.name}</span>
          </div>
        )}
        {!walletAddress && (
          <div className="mt-3 flex items-center gap-2 text-sm text-amber-500">
            <Wallet size={14} />
            Connect wallet to purchase
          </div>
        )}
      </div>

      {/* Success Message */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl flex items-center gap-3"
          style={{ background: "#22c55e10", border: "1px solid #22c55e30" }}
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#22c55e20" }}>
            <Check size={16} color="#22c55e" weight="bold" />
          </div>
          <div>
            <div className="text-sm font-semibold text-[#22c55e]">Purchase Successful!</div>
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
      <h3 className="font-semibold">Recent Transactions</h3>
      <div className="space-y-2">
        {MOCK_TXS.map((tx, i) => (
          <motion.div
            key={tx.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className={`flex items-center gap-4 p-4 ${CARD}`}
          >
            {/* Type icon */}
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{
                background: tx.type === "purchase" ? "#22c55e15" : tx.type === "stake" ? "#60A5FA15" : "#F59E0B15",
              }}
            >
              {tx.type === "purchase" ? (
                <ArrowUpRight size={18} color="#22c55e" weight="bold" />
              ) : tx.type === "stake" ? (
                <LinkSimple size={18} color="#60A5FA" weight="bold" />
              ) : (
                <ArrowDown size={18} color="#F59E0B" weight="bold" />
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold capitalize">{tx.type}</span>
                <span className="text-xs text-[var(--color-text-muted)]">•</span>
                <span className="text-xs text-[var(--color-text-muted)]">{tx.tier}</span>
              </div>
              <div className="text-xs text-[var(--color-text-muted)] mt-0.5">{tx.date}</div>
            </div>

            {/* Amount */}
            <div className="text-right shrink-0">
              <div className="text-sm font-bold">{tx.amount.toLocaleString()}</div>
              <div className="text-xs text-[var(--color-text-muted)]">IGNITE</div>
            </div>

            {/* Hash */}
            <div className="text-xs font-mono text-[var(--color-text-muted)] shrink-0 hidden sm:block">{tx.txHash}</div>

            {/* Status */}
            <div
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold shrink-0"
              style={{
                background: tx.status === "completed" ? "#22c55e15" : tx.status === "pending" ? "#F59E0B15" : "#EF444415",
                color: tx.status === "completed" ? "#22c55e" : tx.status === "pending" ? "#F59E0B" : "#EF4444",
              }}
            >
              {tx.status === "completed" ? <Check size={12} weight="bold" /> : <Clock size={12} weight="bold" />}
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
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Total Supply" value="100M" sub="IGNITE" />
          <StatCard label="Price" value="$0.0024" sub="per token" accent="var(--color-accent)" />
          <StatCard label="Time Left" value={SALE_DATA.timeLeft} sub="until end" />
          <StatCard label="Your Holdings" value={wallet ? "8,500" : "—"} sub="IGNITE" accent={wallet ? "var(--color-accent)" : undefined} />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left: Token Sale */}
          <div className="lg:col-span-2">
            <div className={`p-6 ${CARD_ELEVATED}`}>
              <TokenSale walletAddress={wallet} />
            </div>
          </div>

          {/* Right: Sidebar */}
          <div className="space-y-6">
            {/* Wallet Card */}
            <div className={`p-6 ${CARD_ELEVATED}`}>
              {wallet ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Connected</span>
                    <div className="flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium" style={{ background: "#22c55e15", color: "#22c55e" }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                      Active
                    </div>
                  </div>
                  <div className="p-3 rounded-xl font-mono text-sm" style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
                    {wallet}
                  </div>
                  <button
                    onClick={() => setWallet(null)}
                    className="w-full py-2.5 rounded-xl text-sm font-medium transition-all hover:opacity-80"
                    style={{ background: "var(--color-border)", color: "var(--color-text-muted)" }}
                  >
                    Disconnect
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <h3 className="font-semibold">Connect Wallet</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Connect your wallet to participate in the token sale.
                  </p>
                  <WalletConnect onConnect={setWallet} />
                </div>
              )}
            </div>

            {/* Tier Benefits */}
            <div className={`p-6 ${CARD_ELEVATED}`}>
              <h3 className="font-semibold mb-4">Tier Benefits</h3>
              <div className="space-y-3">
                {TIERS.map((tier) => (
                  <div key={tier.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-[var(--color-bg)] transition-colors">
                    <span className="text-lg">{tier.icon}</span>
                    <div className="flex-1 min-w-0">
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
        <div className={`p-6 ${CARD_ELEVATED}`}>
          <TransactionHistory />
        </div>
      </div>
    </div>
  );
}