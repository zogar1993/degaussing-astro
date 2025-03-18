import type { RichTextDocument } from "@server/contentful/types/RichTextDocument"

export type About = {
	title: string
	banner: string
	synopsis: RichTextDocument
}
