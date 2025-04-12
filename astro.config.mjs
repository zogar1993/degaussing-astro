import { defineConfig } from "astro/config"
import vercel from "@astrojs/vercel";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://degaussingcomic.com",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },

  image: {
      domains: ["images.ctfassets.net"]
    },

  devToolbar: {
      enabled: false
    },

  output: "static",
  adapter: vercel(),
  integrations: [sitemap()]
})