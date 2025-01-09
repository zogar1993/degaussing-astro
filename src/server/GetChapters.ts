import { imageToUrl } from "@server/Utils"
import type { ContentfulChapter } from "@transport/ContentfulChapter"
import type { Chapter } from "@transport/Chapter"
import { getList } from "@server/GetEntries"

export async function getChapters({ language }: { language: string }): Promise<ReadonlyArray<Chapter>> {
	const chapters = (await getList<ContentfulChapter>("chapters", language))
	return chapters.map((chapter, i) => ({
		name: chapter.name,
		number: i + 1,
		pages: [chapter.cover, ...chapter.pages].map((page, i) => ({
				...page,
				createdAt: new Date(page.createdAt),
				characters: (page.characters || []).map(fixCharacterImageUrl),
				number: i
			})
		).filter(page => page.createdAt < Date.now())
	})).filter(chapter => chapter.pages.length > 0)
}

const fixCharacterImageUrl = (character: { name: string, image: string }) =>
	({ ...character, image: imageToUrl(character.image) })
