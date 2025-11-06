"use client";

import Lockbox from "@/components/Lockbox";
import ContactAddress from "@/components/ContactAddress";
import Ticker from "@/components/Ticker";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Background ambient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-900/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-800/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Logo positioned at top */}
      <div className="absolute top-8 left-8 z-20">
        <div className="w-24 h-24 md:w-32 md:h-32 relative">
          <img
            src="/logo.png"
            alt="OnlyGooners Logo"
            className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(236,72,153,0.6)] hover:drop-shadow-[0_0_30px_rgba(236,72,153,0.8)] transition-all duration-300 hover:scale-110"
          />
        </div>
      </div>

      {/* Ticker positioned at top right */}
      <div className="absolute top-8 right-8 z-20">
        <Ticker />
      </div>

      {/* Main Lockbox Container */}
      <div className="relative z-10 w-full max-w-6xl">
        <Lockbox />
      </div>

      {/* Contact Address positioned at bottom left */}
      <div className="absolute bottom-8 left-8 z-20">
        <ContactAddress />
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-yellow-600/20" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-yellow-600/20" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-yellow-600/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-yellow-600/20" />
    </main>
  );
}
