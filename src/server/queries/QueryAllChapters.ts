import { imageToUrl } from "@server/Utils"
import type { Chapter } from "@transport/Chapter"
import { getList } from "@server/contentful/GetEntries"
import type { RichTextDocument } from "@server/contentful/types/RichTextDocument"

export default async function queryAllChapters({ language }: { language: string }): Promise<ReadonlyArray<Chapter>> {
	const chapters = (await getList<ContentfulChapter>("chapters", language))

	return chapters.map((chapter, i) => ({
		name: chapter.name,
		number: i + 1,
		pages: [chapter.cover, ...chapter.pages]
			.map((page, i) => ({
					...page,
					image: imageToUrl(page.image),
					created_at: new Date(page.createdAt),
					characters: (page.characters || []).map(character => ({ ...character, image: imageToUrl(character.image) })),
					number: i
				})
			)
	}))
}

type ContentfulChapter = {
	name: string
	cover: ContentfulStrip
	pages: Array<ContentfulStrip>
	number: number
}

type ContentfulStrip = {
	image: string;
	createdAt: string
	characters?: Array<{ name: string, image: string }>
	description: string
	author_comment_lucia?: RichTextDocument
}
