import {getImage, getNextAndLast, getPreviousAndFirst, RelatedPages} from "@server/Utils"
import type { Chapter } from "@transport/Chapter"

export default function getPageInfo({
	chapter,
	page,
	chapters
}: {
	chapter: number
	page: number
	chapters: ReadonlyArray<Chapter>
}): RelatedPages & {image: string} {
	const image = getImage({ chapters, chapter, page })
	return {
		image,
		backward: getPreviousAndFirst({ chapters, chapter, page }),
		current: { chapter: chapter, page: page },
		forward: getNextAndLast({ chapters, chapter, page })
	}
}
