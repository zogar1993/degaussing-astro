import pathnameWithoutLocale from "@server/GetPathnameWithoutLocale"
import { useTranslations, useLocalizePath, translatePath } from "@server/i18n/utils"
import type { LanguageCode } from "@server/i18n/utils"

export default function getMenuItems({ path, language }: { path: string, language: LanguageCode }): Array<MenuItem> {
	const t = useTranslations(language)
	const localizePath = useLocalizePath(language)
	const pathname = pathnameWithoutLocale({ path, language })

	return [
		{
			type: "link",
			href: localizePath(`/${t("url.chapters")}`),
			selected: pathname === `/${t("url.chapters")}`,
			text: t("menu.chapters"),
			icon: "/icons/chapters.svg",
		},
		{
			type: "link",
			href: localizePath(`/${t("url.characters")}`),
			selected: pathname === `/${t("url.characters")}`,
			text: t("menu.characters"),
			icon: "/icons/characters.svg",
		},
		{
			type: "dropdown",
			text: t("menu.about"),
			icon: "/icons/about.svg",
			items: [
				{
					text: t("menu.about.authors"),
					href: localizePath(`/${t("url.about")}/${t("url.authors")}`),
					selected: pathname === `/${t("url.about")}/${t("url.authors")}`,
				},
				{
					text: t("menu.about.story"),
					href: localizePath(`/${t("url.about")}/${t("url.story")}`),
					selected: pathname === `/${t("url.about")}/${t("url.story")}`,
				},
				{
					text: t("menu.about.faq"),
					href: localizePath(`/${t("url.about")}/${t("url.faq")}`),
					selected: pathname === `/${t("url.about")}/${t("url.faq")}`,
				},
			]
		},
		{
			type: "dropdown",
			text: t("menu.language"),
			icon: "/icons/language.svg",
			items: [
				{
					text: "English",
					href: translatePath({ path: pathname, from: language, to: "en" }),
					selected: language === "en",
					language: "en"
				},
				{
					text: "Español",
					href: translatePath({ path: pathname, from: language, to: "es" }),
					selected: language === "es",
					language: "es"
				}
			],
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
	items: Array<MenuDropdownItem>
	type: "dropdown"
}

export type MenuDropdownItem = {
	text: string
	href: string
	selected: boolean
	language?: string
}

export function isMenuLink(item: MenuItem): item is MenuLink {
	return item.type === "link"
}
