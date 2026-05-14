import { createContext, useContext, useState } from "react";

const ModalContext = createContext({
  isQuoteModalOpen: false,
  openQuoteModal: () => {},
  closeQuoteModal: () => {},
});

export function ModalProvider({ children }) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <ModalContext.Provider value={{ isQuoteModalOpen, openQuoteModal, closeQuoteModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
