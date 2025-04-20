import { getNextAndLast, getPage, getPreviousAndFirst, getRemainingPagesAmount } from "@server/Utils"
import type { Chapter } from "@transport/Chapter"
import type { PageInfo } from "@transport/PageInfo"

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
		image: current.image,
		backward: getPreviousAndFirst({ chapters, chapter, page }),
		current: { chapter: chapter, page: page },
		forward: getNextAndLast({ chapters, chapter, page }),
		characters: current.characters,
		description: current.description,
		author_comment: current.author_comment_lucia,
		remaining_pages_amount: getRemainingPagesAmount({ chapters, chapter, page }),
		created_at: current.created_at
	}
}
