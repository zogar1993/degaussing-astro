import type { ContentfulStrip } from "./ContentfulStrip"

export type ContentfulChapter = {
	name: string
	cover: ContentfulStrip
	pages: Array<ContentfulStrip>
	number: number
}
