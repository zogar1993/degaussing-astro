import i18next, {t} from "i18next"
import {localizePath} from "astro-i18next"

export default function getMenuItems({path}: { path: string }): Array<MenuItem> {
	const pathname = pathnameWithoutLocale({path, language: i18next.language})

	return [
		{
			href: localizePath("/"),
			selected: pathname === "/",
			text: t("menu.home"),
			desktop: "text"
		},
		{
			href: localizePath("/chapters"),
			selected: pathname === "/chapters",
			text: t("menu.chapters"),
			desktop: "text"
		},
		{
			href: localizePath("/characters"),
			selected: pathname === "/characters",
			text: t("menu.characters"),
			desktop: "text"
		},
		{
			href: localizePath("/about"),
			selected: pathname === "/about",
			text: t("menu.about"),
			desktop: "text"
		},
		{
			href: localizePath(pathname, i18next.language === "es" ? "en" : "es"),
			selected: false,
			text: t("menu.language"),
			icon: "/world.svg",
			desktop: "icon"
		}
	]
}

export function pathnameWithoutLocale({path, language}: { path: string, language: string }) {
	return path
		.split("/")
		.filter((part, i) => !(i === 1 && part === language))
		.join("/") || "/"
}

type MenuItem = {
	href: string
	selected: boolean
	text: string
	icon?: string
	desktop: "text" | "icon"
}
