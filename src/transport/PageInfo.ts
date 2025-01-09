import type { RelatedPages } from "@server/Utils"
import type { RichTextDocument } from "@transport/About"
import type { Strip } from "@transport/Strip"

//TODO refactor types
export type PageInfo = RelatedPages & {
	image: string,
	characters: Strip["characters"],
	description: Strip["description"],
	author_comment?: RichTextDocument
	createdAt: Date
}