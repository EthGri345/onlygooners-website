"use client";

import { useState } from "react";
import Padlock from "./Padlock";
import Chain from "./Chain";

export default function Lockbox() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full aspect-square max-w-2xl mx-auto">
      {/* Lockbox Frame */}
      <div className="absolute inset-0 border-4 border-yellow-700/40 rounded-lg shadow-2xl backdrop-blur-sm bg-gradient-to-br from-black/60 via-gray-900/40 to-black/60">
        {/* Inner glow */}
        <div className="absolute inset-0 border border-yellow-600/20 rounded-lg m-4" />
      </div>

      {/* Chains - from corners to center */}
      <Chain startX={0} startY={0} endX={50} endY={50} isHovered={isHovered} />
      <Chain startX={100} startY={0} endX={50} endY={50} isHovered={isHovered} />
      <Chain startX={0} startY={100} endX={50} endY={50} isHovered={isHovered} />
      <Chain startX={100} startY={100} endX={50} endY={50} isHovered={isHovered} />

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
