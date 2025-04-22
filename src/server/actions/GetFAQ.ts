import { getEntries } from "@server/contentful/GetEntries"
import type { FAQ } from "@transport/FAQ"

export default async function getFAQ({ language }: { language: string }) {
	const entries = await getEntries<FAQ>("faq", language)
	return entries[0]!
}
