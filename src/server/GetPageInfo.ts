import { getImage } from "astro:assets"
import { getNextAndLast, getPage, getPreviousAndFirst, getRemainingPagesAmount } from "@server/Utils"
import type { Chapter, Strip } from "@server/actions/types/Chapter"
import type { RelatedPages } from "@server/Utils"
import type { RichTextDocument } from "@server/contentful/types/RichTextDocument"

export default async function getPageInfo({
																						chapter,
																						page,
																						chapters
																					}: {
	chapter: number
	page: number
	chapters: ReadonlyArray<Chapter>
}): Promise<PageInfo> {
	const current = getPage({ chapters, chapter, page })

	return {
		image: {
			optimized: (await getImage({
				src: current.image,
				width: OPTIMIZED_STRIP.WIDTH,
				height: OPTIMIZED_STRIP.HEIGHT,
				format: "webp",
				quality: "max"
			})).src,
			raw: current.image
		},
		backward: getPreviousAndFirst({ chapters, chapter, page }),
		current: { chapter: chapter, page: page },
		forward: getNextAndLast({ chapters, chapter, page }),
		characters: current.characters,
		description: current.description.trim().split("\n").map(p => {
			const parts = p.split(":")
			if (parts.length === 1) return { panel: null, description: parts[0] }
			if (!parts[0].toLowerCase().includes("panel"))
				return { panel: null, description: parts.join(":") }
			return { panel: parts[0], description: parts.splice(1).join(":") }
		}).map(p => ({panel: p.panel && p.panel.trim(), description: p.description.trim()})),
		author_comment: current.author_comment_lucia,
		remaining_pages_amount: getRemainingPagesAmount({ chapters, chapter, page }),
		created_at: current.created_at
	}
}

export const OPTIMIZED_STRIP = {
	WIDTH: 864,
	HEIGHT: 1223
} as const

export type PageInfo = RelatedPages & {
	image: { optimized: string, raw: string },
	characters: Strip["characters"],
	description: Array<{ panel: string | null, description: string }>,
	author_comment?: RichTextDocument
	remaining_pages_amount: number
	created_at: Date
}
