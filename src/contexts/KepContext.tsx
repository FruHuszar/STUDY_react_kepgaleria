/* ide helyezzük át a program állapotának kezelését, ide kerül a provder */

import { createContext, useContext, useState, type ReactNode } from "react";
import { KEPLISTA } from "../adatok";

interface KepContextValue {
  aktualisIndex: number;
  elozo: () => void;
  kovetkezo: () => void;
  kivalaszt: (index: number) => void;
}

export const KepContext = createContext<KepContextValue | undefined>(undefined);

type KepProviderProps = {
  children: ReactNode;
};

export function KepProvider({ children }: KepProviderProps) {
  const [aktualisIndex, setAktualisIndex] = useState(0);

  const elozo = () => {
    setAktualisIndex((i) => (i === 0 ? KEPLISTA.length - 1 : i - 1));
  };

  const kovetkezo = () => {
    setAktualisIndex((i) => (i === KEPLISTA.length - 1 ? 0 : i + 1));
  };

  const kivalaszt = (index: number) => {
    setAktualisIndex(index);
  };

  return (
    <KepContext.Provider value={{ aktualisIndex, elozo, kovetkezo, kivalaszt }}>
      {children}
    </KepContext.Provider>
  );
}

export function useKepContext() {
  const context = useContext(KepContext);

  if (context === undefined) {
    throw new Error("Hiba.");
  }

  return context;
}
