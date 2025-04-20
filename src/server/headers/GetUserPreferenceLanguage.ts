import type { LanguageCode } from "@server/i18n/utils"
import { HEADERS } from "@server/headers/HEADERS"

export default function getUserPreferenceLanguage({ headers }: { headers: Headers }): LanguageCode {
	return ((headers.get(HEADERS.ACCEPT_LANGUAGE) ?? "")
		.split(",")
		.map(x => x.split(";")[0].split("-")[0])
		.find(x => x === "es" || x === "en") ?? "en") as LanguageCode
}
