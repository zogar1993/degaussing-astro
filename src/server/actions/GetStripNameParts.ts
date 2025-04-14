import { useTranslations } from "@server/i18n/utils"
import type { LanguageCode } from "@server/i18n/utils"
import type { PageCoordinates } from "@server/Utils"

export default function getStripNameParts({ chapter, page, language }: PageCoordinates & { language: LanguageCode }) {
	const t = useTranslations(language)
	return [
		`${t("comic.chapter.singular")} ${chapter}`,
		`${page === 0 ? t("comic.cover.singular") : `${t("comic.page.singular")} ${page}`}`
	]
}
