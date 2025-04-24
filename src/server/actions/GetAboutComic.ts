import { getEntries } from "@server/contentful/GetEntries"
import type { RichTextDocument } from "@server/contentful/types/RichTextDocument"

export default async function getAboutComic({ language }: { language: string }) {
	const entries = await getEntries<About>("about", language)
	return entries[0]!
}
export type About = {
	title: string
	banner: string
	synopsis: RichTextDocument
}
