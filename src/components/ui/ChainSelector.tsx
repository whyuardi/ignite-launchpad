"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CaretDown, CaretUp, Globe } from "@phosphor-icons/react";

export interface Chain {
  id: string;
  name: string;
  symbol: string;
  color: string;
  rpcUrl: string;
  explorerUrl: string;
  nativeCurrency: { name: string; symbol: string; decimals: number };
  icon?: React.ReactNode;
}

export const CHAINS: Chain[] = [
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    color: "#627eea",
    rpcUrl: "https://eth.llamarpc.com",
    explorerUrl: "https://etherscan.io",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  },
  {
    id: "polygon",
    name: "Polygon",
    symbol: "MATIC",
    color: "#8247e5",
    rpcUrl: "https://polygon-rpc.com",
    explorerUrl: "https://polygonscan.com",
    nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
  },
  {
    id: "bsc",
    name: "BNB Chain",
    symbol: "BNB",
    color: "#f0b90b",
    rpcUrl: "https://bsc-dataseed.bnbchain.org",
    explorerUrl: "https://bscscan.com",
    nativeCurrency: { name: "BNB", symbol: "BNB", decimals: 18 },
  },
  {
    id: "arbitrum",
    name: "Arbitrum",
    symbol: "ETH",
    color: "#28a0f0",
    rpcUrl: "https://arb1.arbitrum.io/rpc",
    explorerUrl: "https://arbiscan.io",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  },
  {
    id: "base",
    name: "Base",
    symbol: "ETH",
    color: "#0052ff",
    rpcUrl: "https://mainnet.base.org",
    explorerUrl: "https://basescan.org",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  },
];

interface ChainSelectorProps {
  value: string;
  onChange: (chainId: string) => void;
  className?: string;
  disabled?: boolean;
  showIcon?: boolean;
}

export function ChainSelector({
  value,
  onChange,
  className = "",
  disabled = false,
  showIcon = true,
}: ChainSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const selectedChain = CHAINS.find((c) => c.id === value) || CHAINS[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
          setIsOpen(false);
          setHighlightedIndex(-1);
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (event: KeyboardEvent) => {
        switch (event.key) {
          case "ArrowDown":
            event.preventDefault();
            setHighlightedIndex((prev) => Math.min(prev + 1, CHAINS.length - 1));
            break;
          case "ArrowUp":
            event.preventDefault();
            setHighlightedIndex((prev) => Math.max(prev - 1, 0));
            break;
          case "Enter":
            event.preventDefault();
            if (highlightedIndex >= 0) {
              onChange(CHAINS[highlightedIndex].id);
              setIsOpen(false);
              setHighlightedIndex(-1);
            }
            break;
          case "Escape":
            setIsOpen(false);
            setHighlightedIndex(-1);
            break;
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, highlightedIndex, onChange]);

  const handleOptionClick = (chainId: string) => {
    onChange(chainId);
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        ref={buttonRef}
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`chain-pill w-full justify-between ${isOpen ? "border-[var(--color-accent)]" : ""} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        style={{
          background: selectedChain.color + "15",
          color: selectedChain.color,
          borderColor: selectedChain.color + "40",
        }}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`Select chain, currently ${selectedChain.name}`}
      >
        <span className="flex items-center gap-2">
          {showIcon && (
            <span
              className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-black"
              style={{ background: selectedChain.color }}
            >
              {selectedChain.symbol}
            </span>
          )}
          <span className="capitalize">{selectedChain.name}</span>
        </span>
        {isOpen ? <CaretUp weight="bold" size={16} /> : <CaretDown weight="bold" size={16} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute top-full left-0 right-0 mt-2 z-50"
            role="listbox"
            aria-label="Select blockchain"
          >
            <div className="card-base overflow-hidden shadow-2xl border-[var(--color-border-hover)]">
              {CHAINS.map((chain, index) => (
                <motion.button
                  key={chain.id}
                  type="button"
                  onClick={() => handleOptionClick(chain.id)}
                  className={`chain-pill w-full justify-start p-3 ${value === chain.id ? "active" : ""} ${highlightedIndex === index ? "bg-[var(--color-border-hover)]" : ""}`}
                  style={{
                    color: chain.color,
                    background: value === chain.id ? chain.color + "15" : "transparent",
                    borderColor: value === chain.id ? chain.color + "40" : "transparent",
                  }}
                  role="option"
                  aria-selected={value === chain.id}
                  aria-label={`${chain.name} ${value === chain.id ? "(selected)" : ""}`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {showIcon && (
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-black"
                      style={{ background: chain.color }}
                    >
                      {chain.symbol}
                    </span>
                  )}
                  <span className="flex-1 text-left capitalize">{chain.name}</span>
                  <span className="text-xs text-[var(--color-text-muted)] font-mono">{chain.symbol}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}