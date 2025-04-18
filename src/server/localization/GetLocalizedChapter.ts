import { useTranslations } from "@server/i18n/utils"
import type { LanguageCode } from "@server/i18n/utils"

export default function getLocalizedChapter(chapter: number, language: LanguageCode) {
	const t = useTranslations(language);
	return `${t("comic.chapter.singular")} ${chapter}`
}