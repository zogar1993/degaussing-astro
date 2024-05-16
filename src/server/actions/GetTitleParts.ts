import getMenuItems from "@server/actions/GetMenuItems"

export default function getTitleParts({ path }: { path: string }) {
	const items = getMenuItems({ path })
	const item = items.find(item => item.selected)

	if (item && !item.isSubPage) return [item.text]
	//throw Error(`No title for page ${path}`)
	return ["Untitled"]//TODO Make title system better
}
