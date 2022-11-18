import type {Chapter} from "@transport/Chapter"
import {getEntries} from "@server/GetEntries"

export async function getChapters({language}: {language: string}): Promise<ReadonlyArray<Chapter>> {
		const chapters = await getEntries<Chapter>("chapter", language)
		return Array.from(Array(chapters.length), (_, i) => chapters.find(x => x.number === i + 1)!)
}