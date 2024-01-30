import {imageToUrl} from "@server/Utils"
import type {Chapter} from "@transport/Chapter"
import {getList} from "@server/GetEntries"

export async function getChapters({language}: { language: string }): Promise<ReadonlyArray<Chapter>> {
	const chapters = await getList<Chapter>("chapters", language)
	return chapters.map((chapter, i) => ({
		...chapter,
		number: i + 1,
		pages: chapter.pages.map(page =>
			({...page, characters: page.characters.map(character => ({...character, image: imageToUrl(character.image)}))})
		)
	}))
}
