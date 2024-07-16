import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./en/translation.json";
import fr from "./fr/translation.json";

export const resources = {
  fr: {
    translation: fr,
  },
  en: {
    translation: en,
  },
} as const;

export type ProjectType =
  (typeof resources)["fr"]["translation"]["projects"]["projects"][0];

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "fr",
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
