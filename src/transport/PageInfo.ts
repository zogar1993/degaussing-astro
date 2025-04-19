import type { RelatedPages } from "@server/Utils"
import type { RichTextDocument } from "@server/contentful/types/RichTextDocument"
import type { Strip } from "@transport/Chapter"

export type PageInfo = RelatedPages & {
	image: string,
	characters: Strip["characters"],
	description: Strip["description"],
	author_comment?: RichTextDocument
	remaining_pages_amount: number
	createdAt: Date
}