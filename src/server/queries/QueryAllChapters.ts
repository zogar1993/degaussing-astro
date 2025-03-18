import { imageToUrl } from "@server/Utils"
import type { ContentfulChapter } from "@transport/ContentfulChapter"
import type { Chapter } from "@transport/Chapter"
import { getList } from "@server/contentful/GetEntries"

export default async function queryAllChapters({ language }: { language: string }): Promise<ReadonlyArray<Chapter>> {
	const chapters = (await getList<ContentfulChapter>("chapters", language))

	return chapters.map((chapter, i) => ({
		name: chapter.name,
		number: i + 1,
		pages: [chapter.cover, ...chapter.pages]
			.map((page, i) => ({
					...page,
					image: imageToUrl(page.image),
					createdAt: new Date(page.createdAt),
					characters: (page.characters || []).map(character => ({ ...character, image: imageToUrl(character.image) })),
					number: i
				})
			)
	}))
}

