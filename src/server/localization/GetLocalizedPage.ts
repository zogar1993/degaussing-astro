import { t } from "i18next"

export default function getLocalizedPage(page: number) {
	return `${page === 0 ? t("strip.cover") : `${t("strip.page")} ${page}`}`
}