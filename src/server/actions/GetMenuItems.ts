import pathnameWithoutLocale from "@server/GetPathnameWithoutLocale"
import { useTranslations, useLocalizePath, LanguageCode, translatePath } from "@server/i18n/utils"

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
			href: localizePath(`/${t("url.chapters")}`),
			selected: pathname.startsWith(`/${t("url.chapters")}`),
			text: t("menu.chapters"),
			icon: "/icons/chapters.svg"
		},
		{
			href: localizePath(`/${t("url.characters")}`),
			selected: pathname.startsWith(`/${t("url.characters")}`),
			text: t("menu.characters"),
			icon: "/icons/characters.svg"
		},
		{
			href: localizePath(`/${t("url.about")}`),
			selected: pathname.startsWith(`/${t("url.about")}`),
			text: t("menu.about"),
			icon: "/icons/about.svg"
		},
		{
			href: translatePath({ path: pathname, from: language, to: language === "es" ? "en" : "es" }),
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

const generateMenuItem = (code: string) => ({

})