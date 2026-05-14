import { Send } from "lucide-react";
import QuoteForm from "./QuoteForm";

export default function ContactFormCard({ 
  title = "Love to hear from you,", 
  subtitle = "Get in touch", 
  emoji = "👋",
  highlightWord = ""
}) {
  return (
    <div className="relative z-10 w-full" data-aos="fade-left">
      <div className="bg-white dark:bg-ink/5 p-5 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_48px_80px_-32px_rgba(0,0,0,0.11)] border border-border/50 relative overflow-hidden transition-colors duration-500">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />
        
        <div className="relative z-10">
          <div className="mb-6 sm:mb-10 text-center sm:text-left">
            <h3 className="font-heading font-black text-xl sm:text-3xl md:text-4xl text-ink leading-[1.1] tracking-tight">
              {title} <br />
              {highlightWord ? (
                <>
                  <span className="text-accent underline underline-offset-8 decoration-accent/20">{highlightWord}</span> 
                  {subtitle.replace(highlightWord, "")}
                </>
              ) : (
                subtitle
              )}
              <span className="inline-block animate-pulse text-lg sm:text-2xl ml-2">{emoji}</span>
            </h3>
          </div>
          <QuoteForm isCompact={true} />
        </div>
      </div>
    </div>
  );
}
