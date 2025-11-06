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
    return `${address.slice(0, 8)}...${address.slice(-8)}`;
  };

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-900/80 to-black/80 border border-yellow-600/30 rounded-lg backdrop-blur-md transition-all duration-300 hover:border-yellow-500/60 hover:shadow-lg hover:shadow-yellow-500/20 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
        aria-label="Copy contract address"
      >
        {/* Label */}
        <span className="text-gray-400 text-sm font-medium">Contract:</span>

        {/* Address */}
        <span className="font-mono text-yellow-500 text-sm md:text-base font-semibold tracking-wider">
          {formatAddress(contractAddress)}
        </span>

        {/* Copy icon */}
        <div className="relative w-5 h-5">
          {copied ? (
            <svg
              className="w-5 h-5 text-green-500 transition-all duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-yellow-500 transition-all duration-200 group-hover:text-yellow-400"
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
      </button>

      {/* Copied notification */}
      {copied && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-green-900/90 text-green-100 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap backdrop-blur-sm border border-green-600/50 shadow-xl animate-fade-in">
          Copied to clipboard!
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-green-900/90 rotate-45 border-r border-b border-green-600/50" />
        </div>
      )}

      {/* Ambient glow */}
      <div className="absolute inset-0 bg-yellow-500/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}
