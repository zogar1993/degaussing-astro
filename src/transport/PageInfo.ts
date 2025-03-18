import type { RelatedPages } from "@server/Utils"
import type { RichTextDocument } from "@transport/About"
import type { ContentfulStrip } from "./ContentfulStrip"

//TODO refactor types
export type PageInfo = RelatedPages & {
	image: string,
	characters: ContentfulStrip["characters"],
	description: ContentfulStrip["description"],
	author_comment?: RichTextDocument
	createdAt: Date
}