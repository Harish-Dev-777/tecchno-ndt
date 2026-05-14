import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[60] bg-ink text-cream p-4 border-t border-white/10 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm">We use cookies to enhance your experience and improve our services.</p>
      <button 
        onClick={handleAccept}
        className="bg-accent hover:bg-accent-light text-white font-bold py-2 px-6 rounded-full text-sm transition-colors shrink-0"
      >
        Accept
      </button>
    </div>
  );
}
