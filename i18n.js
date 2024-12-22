import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const isServer = typeof window === "undefined"; // Detecta si estamos en SSR

if (!isServer) {
  i18n.use(LanguageDetector); // Usa el detector solo en cliente
}

i18n
  .use(HttpBackend) // Carga las traducciones desde archivos JSON
  .use(initReactI18next) // Integra i18n con React
  .init({
    fallbackLng: "en", // Idioma predeterminado
    supportedLngs: ["en", "es"], // Idiomas soportados
    debug: true, // Cambia a true para depuración
    interpolation: {
      escapeValue: false, // React ya maneja la seguridad
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Ruta de los archivos de traducción
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator"], // Detecta el idioma
      caches: ["cookie", "localStorage"], // Almacena el idioma detectado
    },
  });

export default i18n;
