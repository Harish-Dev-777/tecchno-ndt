import React, { useState, useRef, useEffect, useMemo } from "react";
import {
  addDays, addMonths, endOfDay, endOfMonth, endOfWeek, format,
  isSameDay, isSameMonth, isToday, isWithinInterval,
  startOfDay, startOfMonth, startOfWeek,
  subDays, subMonths, subWeeks
} from "date-fns";
import clsx from "clsx";

// ── Icons ──
const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="12" height="11" rx="1.5" />
    <line x1="2" y1="7" x2="14" y2="7" />
    <line x1="5.5" y1="1.5" x2="5.5" y2="4.5" />
    <line x1="10.5" y1="1.5" x2="10.5" y2="4.5" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// ── Presets ──
const getPresets = () => {
  const now = new Date();
  return [
    { label: "Today", start: startOfDay(now), end: endOfDay(now) },
    { label: "Yesterday", start: startOfDay(subDays(now, 1)), end: endOfDay(subDays(now, 1)) },
    { label: "Last 7 Days", start: startOfDay(subDays(now, 6)), end: endOfDay(now) },
    { label: "Last 14 Days", start: startOfDay(subDays(now, 13)), end: endOfDay(now) },
    { label: "Last 30 Days", start: startOfDay(subDays(now, 29)), end: endOfDay(now) },
    { label: "This Month", start: startOfMonth(now), end: endOfDay(now) },
    { label: "Last Month", start: startOfMonth(subMonths(now, 1)), end: endOfDay(endOfMonth(subMonths(now, 1))) },
    { label: "Last 3 Months", start: startOfDay(subMonths(now, 3)), end: endOfDay(now) },
  ];
};

// ── Format display range ──
const formatRange = (start, end) => {
  if (!start && !end) return "";
  if (start && !end) return format(start, "dd-MMM-yyyy");
  if (start && end && isSameDay(start, end)) return format(start, "dd-MMM-yyyy");
  return `${format(start, "dd MMM")} – ${format(end, "dd MMM yyyy")}`;
};

// ── Component ──
export const DateRangePicker = ({ value, onChange, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [hoverDate, setHoverDate] = useState(null);
  const [isSelecting, setIsSelecting] = useState(false);
  const ref = useRef(null);
  const presets = useMemo(() => getPresets(), []);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  // Build days grid
  const days = [];
  let day = startOfWeek(startOfMonth(currentMonth), { weekStartsOn: 1 });
  const end = endOfWeek(endOfMonth(currentMonth), { weekStartsOn: 1 });
  while (day <= end) {
    days.push(day);
    day = addDays(day, 1);
  }

  const handleDayClick = (d) => {
    if (!value?.start || (value.start && value.end)) {
      onChange({ start: startOfDay(d), end: null });
      setHoverDate(d);
      setIsSelecting(true);
    } else if (isSelecting) {
      if (d >= value.start) {
        onChange({ start: value.start, end: endOfDay(d) });
      } else {
        onChange({ start: startOfDay(d), end: endOfDay(value.start) });
      }
      setIsSelecting(false);
      setHoverDate(null);
      setIsOpen(false);
    }
  };

  const handlePreset = (preset) => {
    onChange({ start: preset.start, end: preset.end });
    setIsOpen(false);
    setIsSelecting(false);
  };

  const handleClear = (e) => {
    e.stopPropagation();
    onChange({ start: null, end: null });
    setIsSelecting(false);
  };

  const [view, setView] = useState("calendar"); // "calendar", "months", "years"

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 25 }, (_, i) => currentYear - 12 + i);

  const handleMonthChange = (mIndex) => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(mIndex);
    setCurrentMonth(newDate);
    setView("calendar");
  };

  const handleYearChange = (year) => {
    const newDate = new Date(currentMonth);
    newDate.setFullYear(year);
    setCurrentMonth(newDate);
    setView("calendar");
  };

  const displayText = value?.start ? formatRange(value.start, value.end) : "";

  return (
    <div ref={ref} className={clsx("relative inline-block", className)}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => { setIsOpen(!isOpen); setView("calendar"); }}
        className={clsx(
          "flex items-center gap-2 h-11 px-4 text-sm border border-ink/10 bg-white rounded-xl transition-all duration-200 w-full min-w-[220px]",
          "hover:border-accent/50 focus:border-accent/50 focus:outline-none shadow-sm active:scale-95",
          isOpen && "border-accent/50 ring-2 ring-accent/20",
          displayText ? "text-ink font-bold" : "text-ink/40 font-medium"
        )}
      >
        <CalendarIcon />
        <span className="truncate flex-1 text-left">
          {displayText || "Filter by date"}
        </span>
        {displayText && (
          <span onClick={handleClear} className="text-ink/40 hover:text-red-500 transition-colors ml-1 cursor-pointer">
            <XIcon />
          </span>
        )}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className={clsx(
          "absolute top-14 right-0 z-[60] bg-white border border-ink/5 rounded-2xl shadow-2xl flex flex-col md:flex-row animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden",
          "w-[calc(100vw-2rem)] sm:w-auto min-w-[280px]"
        )}>
          {/* Presets */}
          <div className="w-full md:w-40 border-b md:border-b-0 md:border-r border-ink/5 p-2 flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-x-visible no-scrollbar bg-[#F8F9FA]">
            <p className="hidden md:block text-[10px] uppercase tracking-widest text-ink/40 font-bold px-2 py-1.5">Quick Select</p>
            {presets.map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => handlePreset(preset)}
                className={clsx(
                  "whitespace-nowrap text-left text-xs px-3 py-2 rounded-lg transition-all duration-150 font-medium",
                  value?.start && value?.end &&
                  isSameDay(value.start, preset.start) && isSameDay(value.end, preset.end)
                    ? "bg-accent/10 text-accent font-bold"
                    : "text-ink/60 hover:text-ink hover:bg-ink/5"
                )}
              >
                {preset.label}
              </button>
            ))}
          </div>

          {/* Calendar & Actions */}
          <div className="flex flex-col flex-1">
            <div className="p-4 w-full sm:w-[280px]">
              {/* Header with Month & Year Toggles */}
              <div className="flex justify-between items-center mb-4 gap-1">
                <button type="button" onClick={prevMonth} className="p-1 text-ink/40 hover:text-accent transition-colors shrink-0">
                  <ChevronLeftIcon />
                </button>
                
                <div className="flex items-center gap-1 flex-1 justify-center">
                  <button 
                    type="button"
                    onClick={() => setView(view === "months" ? "calendar" : "months")}
                    className={clsx(
                      "text-xs font-bold font-heading uppercase tracking-wider px-2 py-1 rounded-md transition-all",
                      view === "months" ? "bg-accent/10 text-accent" : "text-ink hover:bg-ink/5"
                    )}
                  >
                    {months[currentMonth.getMonth()].slice(0, 3)}
                  </button>
                  <button 
                    type="button"
                    onClick={() => setView(view === "years" ? "calendar" : "years")}
                    className={clsx(
                      "text-xs font-bold font-heading uppercase tracking-wider px-2 py-1 rounded-md transition-all",
                      view === "years" ? "bg-accent/10 text-accent" : "text-ink hover:bg-ink/5"
                    )}
                  >
                    {currentMonth.getFullYear()}
                  </button>
                </div>

                <button type="button" onClick={nextMonth} className="p-1 text-ink/40 hover:text-accent transition-colors shrink-0">
                  <ChevronRightIcon />
                </button>
              </div>

              {/* View Switcher */}
              {view === "months" && (
                <div className="grid grid-cols-4 gap-2 animate-in fade-in zoom-in-95 duration-200">
                  {months.map((m, i) => (
                    <button
                      key={m}
                      onClick={() => handleMonthChange(i)}
                      className={clsx(
                        "text-[10px] uppercase font-bold py-3 rounded-lg transition-all",
                        currentMonth.getMonth() === i ? "bg-accent text-white" : "text-ink/60 hover:bg-ink/5 hover:text-ink"
                      )}
                    >
                      {m.slice(0, 3)}
                    </button>
                  ))}
                </div>
              )}

              {view === "years" && (
                <div className="grid grid-cols-5 gap-1 animate-in fade-in zoom-in-95 duration-200">
                  {years.map((y) => (
                    <button
                      key={y}
                      onClick={() => handleYearChange(y)}
                      className={clsx(
                        "text-[10px] font-bold py-3 rounded-lg transition-all",
                        currentMonth.getFullYear() === y ? "bg-accent text-white" : "text-ink/60 hover:bg-ink/5 hover:text-ink"
                      )}
                    >
                      {y}
                    </button>
                  ))}
                </div>
              )}

              {view === "calendar" && (
                <>
                  {/* Weekday headers */}
                  <div className="grid grid-cols-7 text-center mb-2">
                    {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
                      <div key={d} className="text-[10px] uppercase tracking-widest text-ink/40 font-bold py-1">{d}</div>
                    ))}
                  </div>

                  {/* Days grid */}
                  <div className="grid grid-cols-7 gap-y-1">
                    {days.map((d) => {
                      const isStart = value?.start && isSameDay(d, value.start);
                      const isEnd = value?.end && isSameDay(d, value.end);
                      const isHover = hoverDate && isSelecting && isSameDay(d, hoverDate);
                      const inRange =
                        value?.start &&
                        ((value.end && isWithinInterval(d, { start: value.start, end: value.end })) ||
                          (hoverDate && !value.end && (
                            hoverDate >= value.start
                              ? isWithinInterval(d, { start: value.start, end: hoverDate })
                              : isWithinInterval(d, { start: hoverDate, end: value.start })
                          )));

                      return (
                        <div
                          key={d.toString()}
                          className={clsx(
                            "flex items-center justify-center",
                            inRange && !isStart && !isEnd && !isHover && "bg-accent/10"
                          )}
                          onMouseEnter={() => { if (value?.start && !value.end) setHoverDate(d); }}
                          onClick={() => handleDayClick(d)}
                        >
                          <div className={clsx(
                            "w-8 h-8 flex items-center justify-center text-xs cursor-pointer rounded-lg transition-all duration-100",
                            !isSameMonth(d, currentMonth) && "text-ink/20",
                            isSameMonth(d, currentMonth) && !isStart && !isEnd && !isHover && "text-ink/70 hover:bg-ink/5 hover:text-ink font-medium",
                            (isStart || isEnd) && "bg-accent text-white font-bold shadow-md shadow-accent/20",
                            isHover && !isStart && "ring-2 ring-accent bg-accent/10 text-accent font-bold",
                            isToday(d) && !isStart && !isEnd && "text-accent font-bold border border-accent/20"
                          )}>
                            {format(d, "d")}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="p-3 border-t border-ink/5 flex justify-end gap-2 bg-[#F8F9FA]">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-[10px] uppercase tracking-widest font-bold text-ink/40 hover:text-ink transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 text-[10px] uppercase tracking-widest font-bold bg-accent text-white hover:bg-accent/90 transition-all rounded-lg disabled:opacity-50 shadow-md shadow-accent/20"
                disabled={!value?.start}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
