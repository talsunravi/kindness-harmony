
import React, { createContext, useContext, useState, useEffect } from 'react';

type LanguageContextType = {
  preferredLanguage: string | null;
  setPreferredLanguage: (language: string | null) => void;
  availableLanguages: string[];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [preferredLanguage, setPreferredLanguage] = useState<string | null>(null);
  const [availableLanguages] = useState<string[]>(['English', 'Telugu', 'Hindi', 'Kannada']);

  // Load saved language preference on initial render
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
      setPreferredLanguage(savedLanguage);
    }
  }, []);

  // Save language preference when it changes
  useEffect(() => {
    if (preferredLanguage) {
      localStorage.setItem('preferredLanguage', preferredLanguage);
    } else {
      localStorage.removeItem('preferredLanguage');
    }
  }, [preferredLanguage]);

  return (
    <LanguageContext.Provider
      value={{
        preferredLanguage,
        setPreferredLanguage,
        availableLanguages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
