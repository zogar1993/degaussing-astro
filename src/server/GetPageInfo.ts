import { getNextAndLast, getPage, getPreviousAndFirst, imageToUrl, RelatedPages } from "@server/Utils"
import type { RichTextDocument } from "@transport/About"
import type { Chapter } from "@transport/Chapter"
import type { Strip } from "@transport/Strip"

export type PageInfo = RelatedPages & {
	image: string,
	characters: Strip["characters"],
	description: Strip["description"],
	author_comment?: RichTextDocument
	createdAt: Date
}

export default function getPageInfo({
																			chapter,
																			page,
																			chapters
																		}: {
	chapter: number
	page: number
	chapters: ReadonlyArray<Chapter>
}): PageInfo {
	const current = getPage({ chapters, chapter, page })
	return {
		image: imageToUrl(current.image),
		backward: getPreviousAndFirst({ chapters, chapter, page }),
		current: { chapter: chapter, page: page },
		forward: getNextAndLast({ chapters, chapter, page }),
		characters: current.characters,
		description: current.description || "", //TODO remove once we have all alt text
		author_comment: current.author_comment_lucia,
		createdAt: new Date(current.createdAt)
	}
}
