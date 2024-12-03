import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        helloWorld: "Hello World",
        description: `Azerbaijan, officially the Republic of Azerbaijan (Azerbaijani: Azərbaycan
        Republic of Western Asia and Eastern Europe
        It is a country located in the Caucasus, which is the intersection point.`,
      },
    },
    az: {
      translation: {
        helloWorld: "Salam Dünya",
        description: `Azərbaycan, rəsmi adı Azərbaycan Respublikası (azərbaycanca: Azərbaycan
        Qərbi Asiya və Şərqi Avropa Respublikası
        Bu, kəsişmə nöqtəsi olan Qafqazda yerləşən bir ölkədir.`,
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
