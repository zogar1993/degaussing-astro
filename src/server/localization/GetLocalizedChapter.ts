import { t } from "i18next"

export default function getLocalizedChapter(chapter: number) {
	return `${t("strip.chapter")} ${chapter}`
}