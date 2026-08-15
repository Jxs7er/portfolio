import i18n from "@/i18n";
import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(null);

  useEffect(() => {
    let language;

    try {
      const languageStr = sessionStorage.getItem("language");
      const parsedLanguage = languageStr ? JSON.parse(languageStr) : null;

      language = parsedLanguage || {
        value: i18n.language || "en",
        locale: "en-US",
      };
    } catch (error) {
      language = {
        value: i18n.language || "en",
        locale: "en-US",
      };
    }

    setLanguage(language);
    i18n.changeLanguage(language.value);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("language", JSON.stringify(language));
    document.documentElement.setAttribute("language", language);
  }, [language]);

  const handleChangeLanguage = ({ value, locale }) => {
    setLanguage({ value, locale });
    i18n.changeLanguage(value);
    sessionStorage.setItem("language", JSON.stringify({ value, locale }));
  };

  return (
    <LanguageContext.Provider value={{ language, handleChangeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
export default LanguageProvider;

export const useLanguage = () => useContext(LanguageContext);
