import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationAZ from "./json/translateAz.json";
import translationEN from "./json/translateEN.json";
import translationRU from "./json/translateRU.json";


i18n
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    // we init with resources
    lng: "aze",  // default language
    resources: {
      aze: {
        translations: translationAZ
      },
      en: {
        translations: translationEN
      },
      rus: {
        translations: translationRU
      }
    },
    fallbackLng: false,
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
