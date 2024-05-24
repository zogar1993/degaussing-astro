import pathnameWithoutLocale from "@server/GetPathnameWithoutLocale"

export default function getIsHomepage({ path, language }: { path: string, language: string }) {
	return pathnameWithoutLocale({ path, language }) === "/"
}