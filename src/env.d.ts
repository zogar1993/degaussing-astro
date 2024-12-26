/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly CONTENTFUL_SPACE_ID: string
	readonly CONTENTFUL_ACCESS_TOKEN_DELIVERY: string
	readonly CONTENTFUL_ACCESS_TOKEN_PREVIEW: string

	readonly PROTOCOL: string
	readonly DOMAIN: string
}
