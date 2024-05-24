import { ui } from './ui';

export const LANGUAGE_CODES = ["es", "en"] as const

const DEFAULT_LANGUAGE = "es"

const SHOW_DEFAULT_LANGUAGE = true;

export type LanguageCode = keyof typeof ui

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return DEFAULT_LANGUAGE;
}

export function useTranslations(lang: LanguageCode) {
  return function t(key: keyof typeof ui[typeof DEFAULT_LANGUAGE]) {
    return ui[lang][key] || ui[DEFAULT_LANGUAGE][key];
  }
}

export function useLocalizePath(lang: LanguageCode) {
  return function localizePath(path: string, l: string = lang) {
    return !SHOW_DEFAULT_LANGUAGE && l === DEFAULT_LANGUAGE ? path : `/${l}${path}`
  }
}
