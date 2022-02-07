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
  //   react: {
  //   // ...
  //   hashTransKey: function(defaultValue) {
  //     // return a key based on defaultValue or if you prefer to just remind you should set a key return false and throw an error
  //   },
  //   defaultTransParent: 'div', // a valid react element - required before react 16
  //   transEmptyNodeValue: '', // what to return for empty Trans
  //   transSupportBasicHtmlNodes: true, // allow <br/> and simple html elements in translations
  //   transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'], // don't convert to <1></1> if simple react elements
  //   transWrapTextNodes: '', // Wrap text nodes in a user-specified element.
  //                           // i.e. set it to 'span'. By default, text nodes are not wrapped.
  //                           // Can be used to work around a well-known Google Translate issue with React apps. See: https://github.com/facebook/react/issues/11538
  //                           // (v11.10.0)
  // },

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
