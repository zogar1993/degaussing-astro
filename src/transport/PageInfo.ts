import type { RelatedPages } from "@server/Utils"
import type { RichTextDocument } from "@server/contentful/types/RichTextDocument"
import type { Strip } from "@transport/Chapter"

//TODO refactor types
export type PageInfo = RelatedPages & {
	image: string,
	characters: Strip["characters"],
	description: Strip["description"],
	author_comment?: RichTextDocument
	createdAt: Date
}