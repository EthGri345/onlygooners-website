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
    const telegramLink = "https://t.me/your_channel_placeholder";

    setTimeout(() => {
      window.open(telegramLink, "_blank", "noopener,noreferrer");
      setIsClicked(false);
    }, 200);
  };

  return (
    <div className="relative">
      {showTooltip && (
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 px-5 py-2.5 bg-black/90 backdrop-blur-sm text-yellow-400 text-sm font-semibold rounded-lg border border-yellow-600/40 shadow-xl">
          Click to Enter
        </div>
      )}

      <button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`relative cursor-pointer transition-all duration-700 ease-out transform ${
          isHovered ? "scale-110" : "scale-100"
        } ${
          isClicked ? "scale-95" : ""
        } hover:drop-shadow-[0_0_30px_rgba(212,175,55,0.6)] focus:outline-none`}
        aria-label="Enter OnlyGoon"
      >
        <svg
          width="120"
          height="150"
          viewBox="0 0 120 150"
          className="transition-all duration-700 ease-out"
        >
          <defs>
            <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffd700" />
              <stop offset="50%" stopColor="#ffed4e" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>

            <linearGradient id="metal" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e0e0e0" />
              <stop offset="50%" stopColor="#b0b0b0" />
              <stop offset="100%" stopColor="#909090" />
            </linearGradient>

            <filter id="shadow">
              <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#000000" floodOpacity="0.7"/>
            </filter>
          </defs>

          {/* Shackle */}
          <g filter="url(#shadow)">
            <path
              d="M 40 65 L 40 35 Q 40 20 60 20 Q 80 20 80 35 L 80 65"
              stroke="url(#metal)"
              strokeWidth="14"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M 44 65 L 44 37 Q 44 24 60 24 Q 76 24 76 37 L 76 65"
              stroke="#606060"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />
          </g>

          {/* Body */}
          <g filter="url(#shadow)">
            <rect
              x="28"
              y="65"
              width="64"
              height="75"
              rx="10"
              fill="url(#gold)"
              stroke="#b8860b"
              strokeWidth="2"
            />

            {/* Highlight */}
            <rect
              x="32"
              y="69"
              width="18"
              height="50"
              rx="5"
              fill="white"
              opacity="0.25"
            />

            {/* Keyhole */}
            <circle cx="60" cy="95" r="8" fill="#000000" opacity="0.9" />
            <rect x="56" y="95" width="8" height="22" rx="2" fill="#000000" opacity="0.9" />

            {/* Keyhole shine */}
            <circle cx="58" cy="93" r="2" fill="white" opacity="0.4" />
          </g>
        </svg>

        {isHovered && (
          <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-2xl animate-pulse-slow -z-10" />
        )}
      </button>
    </div>
  );
}
