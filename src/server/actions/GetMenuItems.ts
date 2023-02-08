export default function getMenuItems({
																			 path,
																			 localizePath,
																			 language,
																			 t
																		 }: {
	path: string,
	localizePath: (path: string, locale?: string) => string,
	language: string, t: (value: any) => string
}) {

	const pathname = path.split("/").filter((part, i) => !(i === 1 && part === language)).join("/") || "/"

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
			href: localizePath(pathname, language === "es" ? "en" : "es"),
			selected: false,
			text: t("menu.language"),
			icon: "/world.svg",
			desktop: "icon"
		}
	]
}
