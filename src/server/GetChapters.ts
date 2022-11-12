import type {Chapter} from "../types/Chapter"
import {getEntries} from "./GetEntries"

export async function getChapters({locale}: {locale: string}): Promise<ReadonlyArray<Chapter>> {
		const chapters = await getEntries<Chapter>("chapter", locale)
		return Array.from(Array(chapters.length), (_, i) => chapters.find(x => x.number === i + 1)!)
}