import { useTranslations } from "@server/i18n/utils"
import type { LanguageCode } from "@server/i18n/utils"

export default function getLocalizedPage(page: number, language: LanguageCode) {
	const t = useTranslations(language)
	return `${page === 0 ? t("comic.cover.singular") : `${t("comic.page.singular")} ${page}`}`
}