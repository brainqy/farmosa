"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { defaultLocale, type Locale } from "@/lib/i18n";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const stored = window.localStorage.getItem("locale") as Locale | null;
    if (stored === "en" || stored === "hi") {
      setLocaleState(stored);
    }
  }, []);

  const setLocale = (value: Locale) => {
    setLocaleState(value);
    window.localStorage.setItem("locale", value);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
