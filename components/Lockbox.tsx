"use client";

import { useState } from "react";
import Padlock from "./Padlock";

export default function Lockbox() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full aspect-square max-w-2xl mx-auto">
      {/* Lockbox Frame */}
      <div className="absolute inset-0 border-4 border-yellow-700/40 rounded-lg shadow-2xl backdrop-blur-sm bg-gradient-to-br from-black/60 via-gray-900/40 to-black/60">
        {/* Inner glow */}
        <div className="absolute inset-0 border border-yellow-600/20 rounded-lg m-4" />
      </div>

      {/* Chain from top-left to center */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="chainGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#c0c0c0', stopOpacity: 0.8 }} />
            <stop offset="50%" style={{ stopColor: '#a0a0a0', stopOpacity: 0.9 }} />
            <stop offset="100%" style={{ stopColor: '#808080', stopOpacity: 0.8 }} />
          </linearGradient>
          <filter id="chainShadow">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.6"/>
          </filter>
        </defs>
        <path
          d="M 0 0 Q 25 25 50 50"
          stroke="url(#chainGradient1)"
          strokeWidth={isHovered ? "1.2" : "0.8"}
          fill="none"
          strokeLinecap="round"
          filter="url(#chainShadow)"
          className="transition-all duration-300"
        />
        {/* Chain links decoration */}
        {[0, 20, 40].map((offset) => (
          <circle
            key={`tl-${offset}`}
            cx={offset * 0.5}
            cy={offset * 0.5}
            r="1.5"
            fill="#a0a0a0"
            opacity="0.6"
          />
        ))}
      </svg>

      {/* Chain from top-right to center */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M 100 0 Q 75 25 50 50"
          stroke="url(#chainGradient1)"
          strokeWidth={isHovered ? "1.2" : "0.8"}
          fill="none"
          strokeLinecap="round"
          filter="url(#chainShadow)"
          className="transition-all duration-300"
        />
        {[0, 20, 40].map((offset) => (
          <circle
            key={`tr-${offset}`}
            cx={100 - offset * 0.5}
            cy={offset * 0.5}
            r="1.5"
            fill="#a0a0a0"
            opacity="0.6"
          />
        ))}
      </svg>

      {/* Chain from bottom-left to center */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 100 Q 25 75 50 50"
          stroke="url(#chainGradient1)"
          strokeWidth={isHovered ? "1.2" : "0.8"}
          fill="none"
          strokeLinecap="round"
          filter="url(#chainShadow)"
          className="transition-all duration-300"
        />
        {[0, 20, 40].map((offset) => (
          <circle
            key={`bl-${offset}`}
            cx={offset * 0.5}
            cy={100 - offset * 0.5}
            r="1.5"
            fill="#a0a0a0"
            opacity="0.6"
          />
        ))}
      </svg>

      {/* Chain from bottom-right to center */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M 100 100 Q 75 75 50 50"
          stroke="url(#chainGradient1)"
          strokeWidth={isHovered ? "1.2" : "0.8"}
          fill="none"
          strokeLinecap="round"
          filter="url(#chainShadow)"
          className="transition-all duration-300"
        />
        {[0, 20, 40].map((offset) => (
          <circle
            key={`br-${offset}`}
            cx={100 - offset * 0.5}
            cy={100 - offset * 0.5}
            r="1.5"
            fill="#a0a0a0"
            opacity="0.6"
          />
        ))}
      </svg>

      {/* Central Padlock */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Padlock isHovered={isHovered} />
      </div>

      {/* Corner anchor points */}
      <div className="absolute top-0 left-0 w-8 h-8 md:w-12 md:h-12">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-600 to-gray-800 border-2 border-gray-500 shadow-lg" />
      </div>
      <div className="absolute top-0 right-0 w-8 h-8 md:w-12 md:h-12">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-600 to-gray-800 border-2 border-gray-500 shadow-lg" />
      </div>
      <div className="absolute bottom-0 left-0 w-8 h-8 md:w-12 md:h-12">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-600 to-gray-800 border-2 border-gray-500 shadow-lg" />
      </div>
      <div className="absolute bottom-0 right-0 w-8 h-8 md:w-12 md:h-12">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-600 to-gray-800 border-2 border-gray-500 shadow-lg" />
      </div>
    </div>
  );
}
