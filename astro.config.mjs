import { defineConfig } from "astro/config"
import vercel from "@astrojs/vercel";

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

  output: "hibrid",
  adapter: vercel()
})