import { translations, URL_PARTS } from "./translations"

export const LANGUAGE_CODES = ["es", "en"] as const

const DEFAULT_LANGUAGE = "es"

const SHOW_DEFAULT_LANGUAGE = true

export type LanguageCode = keyof typeof translations

export function getLangFromUrl(url: URL) {
	const [, lang] = url.pathname.split("/")
	if (lang as string in translations) return lang as keyof typeof translations
	return DEFAULT_LANGUAGE
}

export function useTranslations(lang: LanguageCode) {
	return function t(key: keyof typeof translations[typeof DEFAULT_LANGUAGE]) {
		return translations[lang][key] || translations[DEFAULT_LANGUAGE][key]
	}
}

export function useLocalizePath(lang: LanguageCode) {
	return function localizePath(path: string, l: string = lang) {
		return !SHOW_DEFAULT_LANGUAGE && l === DEFAULT_LANGUAGE ? path : `/${l}${path}`
	}
}

export const localizePath = ({ path, language }: { path: string, language: LanguageCode }) => `/${language}${path}`

export function translatePath({ path, from, to }: { path: string, from: LanguageCode, to: LanguageCode }) {
	let parts = path.split("/")
	parts = parts.map(part => isNaN(+part) ? URL_PARTS.find(pair => pair[from] === part)![to] : part)
	const url = parts.join("/")
	return localizePath({path: url, language: to})
}
