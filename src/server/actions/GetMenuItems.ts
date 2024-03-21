import pathnameWithoutLocale from "@server/GetPathnameWithoutLocale"
import i18next, {t} from "i18next"
import {localizePath} from "astro-i18next"

export default function getMenuItems({path}: { path: string }): Array<MenuItem> {
	const pathname = pathnameWithoutLocale({path, language: i18next.language})

	return [
		{
			href: localizePath("/"),
			selected: pathname === "/",
			text: t("menu.home"),
			icon: "/icons/home.svg",
			desktop: "text"
		},
		{
			href: localizePath("/chapters"),
			selected: pathname.startsWith("/chapters"),
			text: t("menu.chapters"),
			icon: "/icons/chapters.svg",
			desktop: "text",
			isSubPage: pathname.startsWith("/chapters") && pathname !== "/chapters"
		},
		{
			href: localizePath("/characters"),
			selected: pathname === "/characters",
			text: t("menu.characters"),
			icon: "/icons/characters.svg",
			desktop: "text"
		},
		{
			href: localizePath("/about"),
			selected: pathname === "/about",
			text: t("menu.about"),
			icon: "/icons/about.svg",
			desktop: "text"
		},
		{
			href: localizePath(pathname, i18next.language === "es" ? "en" : "es"),
			selected: false,
			text: t("menu.language"),
			icon: "/icons/language.svg",
			desktop: "text"
		}
	]
}

type MenuItem = {
	href: string
	selected: boolean
	text: string
	icon: string
	desktop: "text" | "icon"//TODO icon seems to not be used anymore
	isSubPage?: boolean
}
