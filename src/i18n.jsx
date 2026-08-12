import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import es from "./locales/es/translation.json";
import fr from "./locales/fr/translation.json";
import zh from "./locales/zh/translation.json";
import am from "./locales/am/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
    fr: { translation: fr },
    am: { translation: am },
    zh: { translation: zh },
  },
  lng: "en", // idioma inicial
  fallbackLng: "es", // idioma de respaldo
  interpolation: { escapeValue: false },
});

export default i18n;
