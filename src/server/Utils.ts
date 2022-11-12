import type {Chapter} from "../types/Chapter"

export function getNextAndLast({chapters, chapter, page}: PageFunctionProps) {
	const lastChapter = last(chapters)
	const isLast = chapter === chapters.length && page === lastChapter.pages.length
	if (isLast) return null
	return {
		one: page === currentChapter({chapters, chapter}).pages.length ? {chapter: chapter + 1, page: 0} : {chapter, page: page + 1},
		all: {chapter: chapters.length, page: lastChapter.pages.length}
	}
}

export function getPreviousAndFirst({chapters, chapter, page}: PageFunctionProps) {
	const isFirst = chapter === 1 && page === 0
	if (isFirst) return null
	return {
		one: page === 0 ? {chapter: chapter - 1, page: previousChapter({chapters, chapter}).pages.length} : {chapter, page: page - 1},
		all: {chapter: 1, page: 0}
	}
}

export function getImage({chapters, chapter, page}: PageFunctionProps) {
	const current = chapters[chapter - 1]
	const path = page === 0 ? current.cover : current.pages[page - 1]
	return `https:${path}`
}

function last<T>(list: ReadonlyArray<T>): T {
	return list[list.length - 1]
}

function previousChapter({chapters, chapter}: {chapters: ReadonlyArray<Chapter>, chapter: number}) {
	return chapters[chapter - 2]
}

function currentChapter({chapters, chapter}: {chapters: ReadonlyArray<Chapter>, chapter: number}) {
	return chapters[chapter - 1]
}

type PageFunctionProps = { chapters: ReadonlyArray<Chapter>, chapter: number, page: number }
export type PageCoordinates = { chapter: number, page: number }