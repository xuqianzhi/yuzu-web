import { FC, createContext, useState, useContext, ReactNode } from "react";
import { Language as LanguageEnum } from "src/common/constants";

// Define available languages
type Language = LanguageEnum.ENGLISH | LanguageEnum.CHINESE;

interface LanguageContextProps {
  language: Language;
  switchLanguage: (lang: Language) => void;
}

// Create Language Context with a default value
const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined,
);

// Create a Provider component
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const storedLanguage = localStorage.getItem("language") as Language | null;
  const [language, setLanguage] = useState<Language>(
    storedLanguage || LanguageEnum.ENGLISH,
  );

  const switchLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang); // Persist the language choice
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the LanguageContext
export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
