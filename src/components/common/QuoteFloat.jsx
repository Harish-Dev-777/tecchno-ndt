import React from "react";
import { MessageSquarePlus } from "lucide-react";
import { useModal } from "../../context/ModalContext";

export default function QuoteFloat() {
  const { openQuoteModal } = useModal();

  return (
    <div className="fixed bottom-20 sm:bottom-24 left-6 md:left-10 z-[60] pointer-events-none">
      <button
        onClick={openQuoteModal}
        className="pointer-events-auto group relative flex items-center justify-center"
        aria-label="Get a Quote"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-accent rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
        
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-30" />
        
        {/* Button */}
        <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent flex items-center justify-center text-white shadow-lg shadow-accent/30 group-hover:shadow-accent/50 group-hover:scale-110 transition-all duration-500 ease-out border-2 border-white/20">
          <MessageSquarePlus className="w-7 h-7 md:w-8 md:h-8" />
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full left-0 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none">
          <div className="bg-ink text-white text-[11px] font-bold px-4 py-2 rounded-xl shadow-xl whitespace-nowrap border border-white/10">
             Get a Free Quote
          </div>
          <div className="absolute top-full left-6 w-2 h-2 bg-ink rotate-45 -translate-y-1" />
        </div>
      </button>
    </div>
  );
}
