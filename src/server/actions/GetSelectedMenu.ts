import getMenuItems from "@server/actions/GetMenuItems"

export default function getSelectedMenu({ path }: { path: string }) {
	const items = getMenuItems({ path })
	const item = items.find(item => item.selected)
	if (item) return item.text
	throw ("Page is not accessible through the menu")
}
