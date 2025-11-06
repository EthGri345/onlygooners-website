"use client";

export default function Ticker() {
  return (
    <div className="relative group">
      {/* Main ticker display */}
      <div className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-black/60 via-yellow-900/20 to-black/60 border-2 border-yellow-600/40 rounded-full backdrop-blur-md transition-all duration-300 hover:border-yellow-500/70 hover:shadow-2xl hover:shadow-yellow-500/30">
        {/* Dollar sign */}
        <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">
          $
        </span>

        {/* Ticker symbol */}
        <span className="text-4xl md:text-5xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700 drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]">
          OG
        </span>
      </div>

      {/* Animated glow effect */}
      <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none animate-pulse-slow" />

      {/* Sparkle effects */}
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-300 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" style={{ animationDelay: '0.5s' }} />

      {/* Premium border accent */}
      <div className="absolute inset-0 rounded-full border border-yellow-400/0 group-hover:border-yellow-400/30 transition-all duration-300" style={{ padding: '4px' }} />
    </div>
  );
}
