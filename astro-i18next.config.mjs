/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "es"],
  //Check on Windows to see if it still breaks: https://github.com/yassinedoghri/astro-i18next/issues/79#issuecomment-1348369866
  i18nextServer: {
    backend: {
      loadPath: "./public/locales/{{lng}}/{{ns}}.json",
    },
  },
};