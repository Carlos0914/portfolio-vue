import { createI18n } from "vue-i18n";
import { messages as translations } from "../locales/LocalizedStrings";

const i18n = createI18n({ locale: "es", fallbackLocale: "en", messages: translations });

export const t = i18n.global.t;
export const messages = i18n.global.messages[i18n.global.locale]
export default i18n;
