import type { PageCoordinates } from "@server/Utils"
import { t } from "i18next"

export default function getStripNameParts({ chapter, page }: PageCoordinates) {
	return [
		`${t("strip.chapter")} ${chapter}`,
		`${page === 0 ? t("strip.cover") : `${t("strip.page")} ${page}`}`
	]
}
