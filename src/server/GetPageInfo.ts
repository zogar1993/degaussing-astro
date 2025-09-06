import { getImage } from "astro:assets"
import { getNextAndLast, getPage, getPreviousAndFirst, getRemainingPagesAmount } from "@server/Utils"
import type { Chapter, Strip } from "@server/actions/types/Chapter"
import type { RelatedPages } from "@server/Utils"
import type { RichTextDocument } from "@server/contentful/types/RichTextDocument"
import type { Person } from "@server/actions/types/Person"

export default async function getPageInfo({
																						chapter,
																						page,
																						chapters,
																						authors
																					}: {
	chapter: number
	page: number
	chapters: ReadonlyArray<Chapter>,
	authors: Array<Person>
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
		}).map(p => ({ panel: p.panel && p.panel.trim(), description: p.description.trim() })),
		author_comments: getAuthorComments({ authors, strip: current }),
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
	author_comments: Array<{ author: Person, comment: RichTextDocument }>
	remaining_pages_amount: number
	created_at: Date
}

const getAuthorComments = ({ authors, strip }: { authors: Array<Person>, strip: Strip }) => {
	const author_comments: Array<{ author: Person, comment: RichTextDocument }> = []

	if (strip.author_comment_lucia) {
		author_comments.push({
			author: authors.find(author => author.slug === "lucy")!,
			comment: strip.author_comment_lucia
		})
	}

	if (strip.author_comment_facundo) {
		author_comments.push({
			author: authors.find(author => author.slug === "facu")!,
			comment: strip.author_comment_facundo
		})
	}

	return author_comments
}