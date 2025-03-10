import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import it from "./locales/it.json";

i18next.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        it: { translation: it },
    },
    lng: "it",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
    });
export default i18next;