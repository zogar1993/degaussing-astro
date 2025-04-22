import { getEntries } from "@server/contentful/GetEntries"
import type { About } from "@transport/About"

export default async function getAboutComic({ language }: { language: string }) {
	const entries = await getEntries<About>("about", language)
	return entries[0]!
}
