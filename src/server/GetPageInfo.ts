import {getImage, getNextAndLast, getPage, getPreviousAndFirst, imageToUrl, RelatedPages} from "@server/Utils"
import type {Chapter, Page} from "@transport/Chapter"

export default function getPageInfo({
	chapter,
	page,
	chapters
}: {
	chapter: number
	page: number
	chapters: ReadonlyArray<Chapter>
}): RelatedPages & {image: string, characters: Page["characters"]} {
	const current = getPage({ chapters, chapter, page })
	return {
		image: imageToUrl(current.image),
		backward: getPreviousAndFirst({ chapters, chapter, page }),
		current: { chapter: chapter, page: page },
		forward: getNextAndLast({ chapters, chapter, page }),
		characters: current.characters || []
	}
}
