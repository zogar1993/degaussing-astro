import getMenuItems from "@server/actions/GetMenuItems"
import type { LanguageCode } from "@server/i18n/utils"

export default function getSelectedMenu({ path, language }: { path: string, language: LanguageCode }) {
	const items = getMenuItems({ path, language })
	const item = items.find(item => item.selected)
	if (item) return item.text
	throw ("Page is not accessible through the menu")
}
