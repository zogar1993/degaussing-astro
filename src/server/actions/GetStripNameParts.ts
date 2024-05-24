import { LanguageCode, useTranslations } from "@server/i18n/utils"
import type { PageCoordinates } from "@server/Utils"

export default function getStripNameParts({ chapter, page, language }: PageCoordinates & { language: LanguageCode }) {
	const t = useTranslations(language)
	return [
		`${t("strip.chapter")} ${chapter}`,
		`${page === 0 ? t("strip.cover") : `${t("strip.page")} ${page}`}`
	]
}
