// @ts-ignore
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"

export type RichTextDocument = Parameters<typeof documentToHtmlString>[0]
