import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '../../lib/utils';

const ThemeToggle = ({ className }) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <div className={cn("relative inline-block", className)}>
      <label 
        className="group relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-secondary shadow-sm transition-all duration-300 border border-border hover:border-accent hover:bg-accent/5"
        htmlFor="theme-switch"
      >
        <input 
          type="checkbox" 
          id="theme-switch"
          className="sr-only"
          checked={isDark}
          onChange={toggleTheme}
        />
        
        {/* Icons overlap in a grid */}
        <div className="relative grid place-items-center h-full w-full">
          {/* Moon Icon */}
          <div className={cn(
            "col-start-1 row-start-1 text-ink transition-all duration-500",
            isDark ? "rotate-[360deg] scale-0 opacity-0" : "rotate-0 scale-100 opacity-100 delay-200"
          )}>
            <Moon className="w-5 h-5" fill="currentColor" />
          </div>
          
          {/* Sun Icon */}
          <div className={cn(
            "col-start-1 row-start-1 text-accent transition-all duration-500",
            isDark ? "rotate-[360deg] scale-100 opacity-100 delay-200" : "rotate-0 scale-0 opacity-0"
          )}>
            <Sun className="w-5 h-5" fill="currentColor" />
          </div>
        </div>

        {/* Outer Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-accent/0 group-hover:bg-accent/5 transition-colors duration-300 -z-10" />
      </label>
    </div>
  );
};

export default ThemeToggle;
