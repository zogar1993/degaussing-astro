// @ts-ignore
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export type About = {
	title: string
	banner: string
	synopsis: RichTextDocument
}

export type RichTextDocument = Parameters<typeof documentToHtmlString>[0]
