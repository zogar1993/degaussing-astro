import type { RichTextDocument } from "@transport/About"

export type ContentfulStrip = {
	image: string;
	createdAt: string
	characters?: Array<{ name: string, image: string }>
	description: string
	author_comment_lucia?: RichTextDocument
}
