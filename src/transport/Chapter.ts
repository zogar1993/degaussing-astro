import type { RichTextDocument } from "@server/contentful/types/RichTextDocument"

export type Chapter = {
	name: string
	pages: Array<Strip>
	number: number
}

export type Strip = {
	image: string;
	created_at: Date
	characters: Array<{ name: string, image: string }>
	description: string
	author_comment_lucia?: RichTextDocument
	number: number
}
