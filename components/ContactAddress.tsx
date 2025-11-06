"use client";

import { useState } from "react";

export default function ContactAddress() {
  const [copied, setCopied] = useState(false);
  // Placeholder address - replace with actual contract address when available
  const contractAddress = "0x0000000000000000000000000000000000000000";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const formatAddress = (address: string) => {
    if (address.length <= 16) return address;
    return `${address.slice(0, 10)}...${address.slice(-10)}`;
  };

  return (
    <div className="relative group">
      {/* Premium glass card */}
      <button
        onClick={handleCopy}
        className="relative flex flex-col gap-2 px-8 py-5 bg-gradient-to-br from-yellow-900/20 via-black/60 to-black/80 border-2 border-yellow-600/40 rounded-2xl backdrop-blur-xl transition-all duration-500 hover:border-yellow-500/80 hover:shadow-2xl hover:shadow-yellow-500/30 focus:outline-none focus:ring-4 focus:ring-yellow-500/50 hover:scale-105 active:scale-95"
        aria-label="Copy contract address"
      >
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-yellow-400/60 rounded-tl-2xl" />
        <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-yellow-400/60 rounded-tr-2xl" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-yellow-400/60 rounded-bl-2xl" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-yellow-400/60 rounded-br-2xl" />

        {/* Label */}
        <div className="flex items-center justify-between">
          <span className="text-yellow-400/70 text-xs md:text-sm font-bold uppercase tracking-widest">
            Contract Address
          </span>

          {/* Copy icon */}
          <div className="relative w-6 h-6">
            {copied ? (
              <svg
                className="w-6 h-6 text-green-400 transition-all duration-200 drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-yellow-400 transition-all duration-200 group-hover:text-yellow-300 group-hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            )}
          </div>
        </div>

        {/* Address */}
        <div className="font-mono text-yellow-300 text-base md:text-lg font-bold tracking-wider drop-shadow-[0_0_10px_rgba(253,224,71,0.5)]">
          {formatAddress(contractAddress)}
        </div>

        {/* Click to copy hint */}
        <div className="text-yellow-500/50 text-xs font-medium">
          Click to copy
        </div>

        {/* Inner glow border */}
        <div className="absolute inset-0 rounded-2xl border border-yellow-300/20 pointer-events-none" />
      </button>

      {/* Copied notification */}
      {copied && (
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-900/95 to-emerald-900/95 text-green-100 px-6 py-3 rounded-xl text-base font-bold whitespace-nowrap backdrop-blur-md border-2 border-green-500/50 shadow-2xl shadow-green-500/50 animate-fade-in">
          ✓ Copied to clipboard!
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-green-900/95 rotate-45 border-r-2 border-b-2 border-green-500/50" />
        </div>
      )}

      {/* Ambient glow - stronger */}
      <div className="absolute inset-0 bg-yellow-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Outer glow ring */}
      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600/0 via-yellow-500/20 to-yellow-600/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />
    </div>
  );
}
