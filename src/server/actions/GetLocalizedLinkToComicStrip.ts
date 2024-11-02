import { ID } from "@web/ID"
import { LanguageCode, useLocalizePath, useTranslations } from "@server/i18n/utils"
import type { PageCoordinates } from "@server/Utils"

export default function getLocalizedLinkToComicStrip(
	{ page, chapter, language }: PageCoordinates & { language: LanguageCode }
) {
	const localizePath = useLocalizePath(language)
	const t = useTranslations(language)
	return localizePath(`/${t("url.chapters")}/${chapter}/${t("url.pages")}/${page}#${ID.MAIN}`)
}