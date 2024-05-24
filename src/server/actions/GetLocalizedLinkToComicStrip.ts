import { LanguageCode, useLocalizePath } from "@server/i18n/utils"
import type { PageCoordinates } from "@server/Utils"

export default function getLocalizedLinkToComicStrip({ page, chapter, language }: PageCoordinates & {language: LanguageCode}) {
	const localizePath = useLocalizePath(language)
	return localizePath(`/chapters/${chapter}/pages/${page}#main`)
}