import pathnameWithoutLocale from "@server/GetPathnameWithoutLocale"
import { useTranslations, useLocalizePath, translatePath } from "@server/i18n/utils"
import type { LanguageCode } from "@server/i18n/utils"

export default function getMenuItems({ path, language }: { path: string, language: LanguageCode }): Array<MenuItem> {
	const t = useTranslations(language)
	const localizePath = useLocalizePath(language)
	const pathname = pathnameWithoutLocale({ path, language })

	return [
		{
			href: localizePath(`/${t("url.chapters")}`),
			selected: pathname === `/${t("url.chapters")}`,
			text: t("menu.chapters"),
			icon: "/icons/chapters.svg",
			type: "link"
		},
		{
			href: localizePath(`/${t("url.characters")}`),
			selected: pathname === `/${t("url.characters")}`,
			text: t("menu.characters"),
			icon: "/icons/characters.svg",
			type: "link"
		},
		{
			href: localizePath(`/${t("url.about")}`),
			selected: pathname === `/${t("url.about")}`,
			text: t("menu.about"),
			icon: "/icons/about.svg",
			type: "link"
		},
		{
			text: t("menu.language"),
			icon: "/icons/language.svg",
			items: [
				{
					text: "English",
					href: translatePath({ path: pathname, from: language, to: "en" }),
					selected: language === "en",
					value: "en"
				},
				{
					text: "Español",
					href: translatePath({ path: pathname, from: language, to: "es" }),
					selected: language === "es",
					value: "es"
				}
			],
			type: "dropdown"
		}
	]
}

export type MenuItem = MenuLink | MenuDropdown

export type MenuLink = {
	text: string
	href: string
	selected: boolean
	icon: string
	type: "link"
}

export type MenuDropdown = {
	text: string
	icon: string
	items: Array<MenuDropdownItems>
	type: "dropdown"
}

export type MenuDropdownItems = {
	text: string
	href: string
	value: string
	selected: boolean
}

export function isMenuLink(item: MenuItem): item is MenuLink {
	return item.type === "link"
}
