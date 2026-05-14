import React from "react";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppFloat() {
  const whatsappNumber = "9841506600";

  return (
    <div className="fixed bottom-20 sm:bottom-24 z-50 flex flex-col sm:flex-row justify-end w-full pointer-events-none px-6 md:px-10">
      
      {/* WhatsApp - Right Side */}
      <a
        href={`https://wa.me/91${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto absolute bottom-0 right-6 sm:relative sm:bottom-auto sm:right-auto z-[100] group"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative flex items-center justify-center">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-[#25D366] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          
          {/* Pulse ring */}
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
          
          {/* Button */}
          <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg shadow-[#25D366]/30 group-hover:shadow-[#25D366]/50 group-hover:scale-110 transition-all duration-500 ease-out">
            <WhatsAppIcon className="w-7 h-7 md:w-8 md:h-8" />
          </div>

          {/* Online Indicator */}
          <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full animate-pulse" />

          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-4 mx-4 sm:mx-0 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none">
            <div className="bg-card text-ink text-[11px] font-bold px-4 py-2 rounded-xl shadow-xl whitespace-nowrap border border-border">
               Chat with our Experts
            </div>
            <div className="absolute top-full right-8 w-2 h-2 bg-card rotate-45 border-r border-b border-border -translate-y-1" />
          </div>
        </div>
      </a>
      
    </div>
  );
}
