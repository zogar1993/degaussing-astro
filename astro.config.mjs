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
  ],
  vite: {
    plugins: [
      {
        name: 'add-cors-headers',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url?.startsWith('/styles/giscus.css') ||
                req.url?.startsWith('/fonts/Inter-Full.woff2')) {
              res.setHeader('Access-Control-Allow-Origin', '*');
            }
            next();
          });
        }
      }
    ]
  }
})
