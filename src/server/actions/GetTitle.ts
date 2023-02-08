import type {RelatedPages} from "@server/Utils"
import {t} from "i18next"
import getMenuItems from "@server/actions/GetMenuItems"

export default function getTitle({path, info}: { path: string, info?: RelatedPages }) {
	const items = getMenuItems({path})
	const item = items.find(item => item.selected)

	if (item) return [item.text]
	if (info) {
		const page = info.current.page
		const chapter = info.current.chapter
		return [
			`${t("strip.chapter")} ${chapter}`,
			`${page === 0 ? t("strip.cover") : `${t("strip.page")} ${page}`}`
		]
	}
	throw Error(`No title for page ${path}`)
}
