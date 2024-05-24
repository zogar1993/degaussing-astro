import pathnameWithoutLocale from "@server/GetPathnameWithoutLocale"
import { useTranslations, useLocalizePath, LanguageCode } from "@server/i18n/utils"

export default function getMenuItems({ path, language }: { path: string, language: LanguageCode }): Array<MenuItem> {
	const t = useTranslations(language)
	const localizePath = useLocalizePath(language)
	const pathname = pathnameWithoutLocale({ path, language })

	return [
		{
			href: localizePath("/"),
			selected: pathname === "/",
			text: t("menu.home"),
			icon: "/icons/home.svg"
		},
		{
			href: localizePath("/chapters"),
			selected: pathname.startsWith("/chapters"),
			text: t("menu.chapters"),
			icon: "/icons/chapters.svg"
		},
		{
			href: localizePath("/characters"),
			selected: pathname === "/characters",
			text: t("menu.characters"),
			icon: "/icons/characters.svg"
		},
		{
			href: localizePath("/about"),
			selected: pathname === "/about",
			text: t("menu.about"),
			icon: "/icons/about.svg"
		},
		{
			href: localizePath(pathname, language === "es" ? "en" : "es"),
			selected: false,
			text: t("menu.language"),
			icon: "/icons/language.svg"
		}
	]
}

type MenuItem = {
	href: string
	selected: boolean
	text: string
	icon: string
}
