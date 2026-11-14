import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-cream overflow-hidden px-4">
      {/* Background 404 Text */}
      <div className="relative w-full flex justify-center">
        <h1 
          className="font-heading font-black bg-gradient-to-b from-accent to-accent/20 text-transparent bg-clip-text tracking-tighter"
          style={{ fontSize: "clamp(10rem, 30vw, 24rem)", lineHeight: 0.9 }}
        >
          404
        </h1>
        {/* Cloud / Mist Overlay to fade the bottom of the 404 */}
        <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-cream via-cream/80 to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center -mt-4 md:-mt-12 max-w-2xl mx-auto">
        <h2 className="font-heading font-bold text-2xl md:text-4xl lg:text-5xl text-ink mb-4 md:mb-6 leading-tight">
          Sorry, that page could not be found
        </h2>
        <p className="text-ink/60 font-sans text-sm md:text-base mb-8 md:mb-10 max-w-lg">
          The requested page either doesn't exist or you don't have access to it.
        </p>
        <Link 
          to="/"
          className="bg-accent text-white px-8 py-4 rounded-xl font-bold hover:brightness-110 transition-all duration-300 shadow-[0_10px_30px_-10px_var(--color-accent)] hover:-translate-y-1 active:scale-95"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
