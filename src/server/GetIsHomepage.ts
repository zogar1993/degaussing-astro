import pathnameWithoutLocale from "@server/GetPathnameWithoutLocale.ts"

export default function getIsHomepage({ path, language }: { path: string, language: string }) {
	return pathnameWithoutLocale({ path, language }) === "/"
}