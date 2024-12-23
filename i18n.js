import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const isServer = typeof window === "undefined";

if (!isServer) {
  i18n.use(HttpBackend); // Usa HttpBackend solo en cliente
  i18n.use(LanguageDetector); // Usa el detector solo en cliente
}

i18n
  .use(initReactI18next) // Integración con React
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "es"],
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Ruta de traducciones
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator"],
      caches: ["cookie", "localStorage"],
    },
  });

export default i18n;
