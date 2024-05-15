import getStripNameParts from "@server/actions/GetStripNameParts"
import type { RelatedPages } from "@server/Utils"
import getMenuItems from "@server/actions/GetMenuItems"

export default function getTitleParts({ path, info }: { path: string, info?: RelatedPages }) {
	const items = getMenuItems({ path })
	const item = items.find(item => item.selected)

	if (item && !item.isSubPage) return [item.text]
	if (info) return getStripNameParts(info.current)
	//throw Error(`No title for page ${path}`)
	return ["Untitled"]//TODO Make title system better
}
