import type { Strip } from "@transport/Strip"

export type ContentfulChapter = {
	name: string
	cover: Strip
	pages: Array<Strip>
	number: number
}
