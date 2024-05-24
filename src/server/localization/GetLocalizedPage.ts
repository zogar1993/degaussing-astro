import { LanguageCode, useTranslations } from "@server/i18n/utils"

export default function getLocalizedPage(page: number, language: LanguageCode) {
	const t = useTranslations(language)
	return `${page === 0 ? t("strip.cover") : `${t("strip.page")} ${page}`}`
}