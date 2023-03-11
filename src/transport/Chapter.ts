import type {Strip} from "@transport/Strip"

export type Chapter = {
	name: string
	cover: Strip
	pages: Array<Strip>
	number: number
}
