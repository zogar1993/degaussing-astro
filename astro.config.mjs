import { defineConfig } from "astro/config"
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
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
  adapter: vercel()
})