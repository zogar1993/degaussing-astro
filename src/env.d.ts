/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly CONTENTFUL_SPACE_ID: string
	readonly CONTENTFUL_ACCESS_TOKEN_DELIVERY: string
	readonly CONTENTFUL_ACCESS_TOKEN_PREVIEW: string

	readonly VERCEL_ACCESS_TOKEN: string
	readonly CRON_SECRET: string
	readonly GITHUB_REPO_ID: string

	readonly FRIENDLY_CAPTCHA_API_KEY: string
	readonly FRIENDLY_CAPTCHA_SITE_KEY: string

	readonly MAILERLITE_SUBSCRIBE_URL_ES: string
	readonly MAILERLITE_SUBSCRIBE_URL_EN: string
}
