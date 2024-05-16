import pathnameWithoutLocale from "@server/GetPathnameWithoutLocale"
import i18next, { t } from "i18next"
import { localizePath } from "astro-i18next"

export default function getMenuItems({ path }: { path: string }): Array<MenuItem> {
	const pathname = pathnameWithoutLocale({ path, language: i18next.language })

	return [
		{
			href: localizePath("/"),
			selected: pathname === "/",
			text: t("menu.home"),
			icon: "/icons/home.svg",
		},
		{
			href: localizePath("/chapters"),
			selected: pathname.startsWith("/chapters"),
			text: t("menu.chapters"),
			icon: "/icons/chapters.svg",
			isSubPage: pathname.startsWith("/chapters") && pathname !== "/chapters"
		},
		{
			href: localizePath("/characters"),
			selected: pathname === "/characters",
			text: t("menu.characters"),
			icon: "/icons/characters.svg",
		},
		{
			href: localizePath("/about"),
			selected: pathname === "/about",
			text: t("menu.about"),
			icon: "/icons/about.svg",
		},
		{
			href: localizePath(pathname, i18next.language === "es" ? "en" : "es"),
			selected: false,
			text: t("menu.language"),
			icon: "/icons/language.svg",
		}
	]
}

type MenuItem = {
	href: string
	selected: boolean
	text: string
	icon: string
	isSubPage?: boolean
}
