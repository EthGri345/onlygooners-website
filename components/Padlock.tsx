"use client";

import { useState } from "react";

interface PadlockProps {
  isHovered: boolean;
}

export default function Padlock({ isHovered }: PadlockProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    // Placeholder Telegram link - replace with actual link when available
    const telegramLink = "https://t.me/your_channel_placeholder";

    // Smooth transition before redirect
    setTimeout(() => {
      window.open(telegramLink, "_blank", "noopener,noreferrer");
      setIsClicked(false);
    }, 300);
  };

  return (
    <div className="relative">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-yellow-900/90 text-yellow-100 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap backdrop-blur-sm border border-yellow-600/50 shadow-xl">
          Click to Enter
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-yellow-900/90 rotate-45 border-r border-b border-yellow-600/50" />
        </div>
      )}

      <button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`relative cursor-pointer transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-yellow-500/50 rounded-full ${
          isClicked ? "scale-95" : ""
        }`}
        aria-label="Enter OnlyGoon"
      >
        {/* Padlock body */}
        <svg
          width="120"
          height="160"
          viewBox="0 0 120 160"
          className={`transition-all duration-300 ${
            isHovered ? "drop-shadow-[0_0_25px_rgba(212,175,55,0.6)]" : "drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
          }`}
        >
          <defs>
            <linearGradient id="padlockGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#DAA520', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#B8860B', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="shackleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#C0C0C0', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#A0A0A0', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#C0C0C0', stopOpacity: 1 }} />
            </linearGradient>
            <filter id="padlockShadow">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.7"/>
            </filter>
          </defs>

          {/* Shackle */}
          <path
            d="M 40 60 L 40 30 Q 40 15 60 15 Q 80 15 80 30 L 80 60"
            stroke="url(#shackleGradient)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            filter="url(#padlockShadow)"
          />

          {/* Inner shackle detail */}
          <path
            d="M 45 60 L 45 32 Q 45 20 60 20 Q 75 20 75 32 L 75 60"
            stroke="#808080"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Main body */}
          <rect
            x="25"
            y="60"
            width="70"
            height="90"
            rx="8"
            fill="url(#padlockGradient)"
            filter="url(#padlockShadow)"
            stroke="#B8860B"
            strokeWidth="2"
          />

          {/* Body highlight */}
          <rect
            x="30"
            y="65"
            width="20"
            height="60"
            rx="4"
            fill="white"
            opacity="0.15"
          />

          {/* Keyhole */}
          <circle
            cx="60"
            cy="95"
            r="8"
            fill="#1a1a1a"
          />
          <rect
            x="56"
            y="95"
            width="8"
            height="25"
            rx="2"
            fill="#1a1a1a"
          />

          {/* Keyhole highlight */}
          <circle
            cx="58"
            cy="93"
            r="2"
            fill="white"
            opacity="0.3"
          />
        </svg>

        {/* Animated glow ring */}
        <div className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}>
          <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-xl animate-pulse-slow" />
        </div>
      </button>
    </div>
  );
}
