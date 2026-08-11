import i18n from "@/i18n";
import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState({
    value: i18n.language || "en",
    locale: "en-US",
  });

  useEffect(() => {
    document.documentElement.setAttribute("language", language);
    sessionStorage.setItem("language", language);
  }, [language]);

  const handleChangeLanguage = ({ value, locale }) => {
    setLanguage(value);
    i18n.changeLanguage(value);
    sessionStorage.setItem("language", value, locale);
    setIsOpen(false); // cerrar dropdown al seleccionar
  };

  return (
    <LanguageContext.Provider value={{ language, handleChangeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
export default LanguageProvider;

export const useLanguage = () => useContext(LanguageContext);
