import { defineConfig } from "astro/config"
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://degaussingcomic.com",
  image: {
    domains: ["images.ctfassets.net"]
  },
  devToolbar: {
    enabled: false
  },
  output: "static",
  adapter: vercel(),
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es",
          en: "en"
        }
      }
    })
  ]
})