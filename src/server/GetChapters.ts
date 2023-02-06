import type { Chapter } from "@transport/Chapter"
import { getEntries } from "@server/GetEntries"

export async function getChapters({
	language
}: {
	language: string
}): Promise<ReadonlyArray<Chapter>> {
	const chapters = (await getEntries<any>("list", language)).find(
		(links) => links.name === "chapters"
	).items as Array<Chapter>
	return chapters.map((chapter, i) => ({...chapter, number: i + 1}))
}
