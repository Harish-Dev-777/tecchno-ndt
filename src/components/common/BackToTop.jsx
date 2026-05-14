import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "../../lib/utils";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed right-6 sm:right-10 z-50 p-3 rounded-full bg-ink text-cream shadow-xl hover:bg-accent transition-all duration-300 group overflow-hidden",
        "bottom-40 sm:bottom-48", // Positioned higher to clear WhatsApp tooltip
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-50 pointer-events-none"
      )}
      aria-label="Back to top"
    >
      <div className="relative z-10">
        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </div>
      
      {/* Background Hover Effect */}
      <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
    </button>
  );
}
