/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly CONTENTFUL_SPACE_ID: string
	readonly CONTENTFUL_ACCESS_TOKEN: string

	readonly PROTOCOL: string
	readonly DOMAIN: string
}
