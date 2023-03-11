import type {RelatedPages} from "@server/Utils"
import {t} from "i18next"

export default function getStripNameParts({info}: { info: RelatedPages }) {
		const {chapter, page} = info.current
		return [
			`${t("strip.chapter")} ${chapter}`,
			`${page === 0 ? t("strip.cover") : `${t("strip.page")} ${page}`}`
		]
}
