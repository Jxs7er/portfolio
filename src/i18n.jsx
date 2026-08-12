import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import * as trans from "./locales";

i18n.use(initReactI18next).init({
  resources: {
    am: { translation: trans["am"] },
    de: { translation: trans["de"] },
    en: { translation: trans["en"] },
    es: { translation: trans["es"] },
    fr: { translation: trans["fr"] },
    id: { translation: trans["id"] },
    in: { translation: trans["in"] },
    it: { translation: trans["it"] },
    jp: { translation: trans["jp"] },
    kr: { translation: trans["kr"] },
    pt: { translation: trans["pt"] },
    ru: { translation: trans["ru"] },
    sa: { translation: trans["sa"] },
    th: { translation: trans["th"] },
    tr: { translation: trans["tr"] },
    zh: { translation: trans["zh"] },
  },
  lng: "en", // idioma inicial
  fallbackLng: "es", // idioma de respaldo
  interpolation: { escapeValue: false },
});

export default i18n;
