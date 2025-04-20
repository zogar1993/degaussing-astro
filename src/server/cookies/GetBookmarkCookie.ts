import type { LanguageCode } from "@server/i18n/utils"
import { HEADERS } from "@server/headers/HEADERS"
import { COOKIES } from "@server/cookies/COOKIES"

type Bookmark = {
	chapter: number,
	page: number,
	language: LanguageCode,
	is_last_page: boolean
}

export default function getBookmarkCookie({ headers }: { headers: Headers }): Bookmark | null {
	const bookmark_cookie = (headers.get(HEADERS.COOKIE) ?? "")
		.split(";")
		.map(x => x.trim())
		.map(x => x.split("="))
		.find(x => x[0] == COOKIES.BOOKMARK)

	if (!bookmark_cookie) return null

	return JSON.parse(decodeURIComponent(bookmark_cookie[1]))
}
