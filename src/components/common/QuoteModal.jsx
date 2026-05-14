import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useModal } from "../../context/ModalContext";
import QuoteForm from "./QuoteForm";

export default function QuoteModal() {
  const { isQuoteModalOpen, closeQuoteModal } = useModal();

  return (
    <AnimatePresence>
      {isQuoteModalOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeQuoteModal}
            className="fixed inset-0 bg-ink/80 backdrop-blur-md z-[100] cursor-pointer"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-background w-full max-w-xl rounded-[2.5rem] shadow-2xl relative overflow-hidden pointer-events-auto border border-border"
            >
              {/* Decorative side accent */}
              <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>

              {/* Close Button */}
              <button
                onClick={closeQuoteModal}
                className="absolute top-6 right-6 p-2 rounded-full bg-secondary text-ink hover:bg-accent hover:text-white transition-all z-20 group"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
              </button>

              <div className="p-8 sm:p-12">
                <div className="mb-8">
                  <h2 className="font-heading font-black text-2xl sm:text-3xl text-ink leading-[1.1] tracking-tight">
                    Love to hear from you, <br />
                    Get in touch <span className="inline-block hover:animate-bounce cursor-default">👋</span>
                  </h2>
                </div>

                <div className="max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
                  <QuoteForm isSimple={true} formType="quote" />
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
