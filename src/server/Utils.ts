import type { Chapter } from "@transport/Chapter"

export function getNextAndLast({ chapters, chapter, page }: PageFunctionProps) {
	const lastChapter = last(chapters)
	const isLast =
		chapter === chapters.length && page === lastChapter.pages.length - 1
	if (isLast) return null
	return {
		one:
			page === currentChapter({ chapters, chapter }).pages.length - 1
				? { chapter: chapter + 1, page: 0 }
				: { chapter, page: page + 1 },
		all: { chapter: chapters.length, page: lastChapter.pages.length - 1 }
	}
}

export function getPreviousAndFirst({
																			chapters,
																			chapter,
																			page
																		}: PageFunctionProps) {
	const isFirst = chapter === 1 && page === 0
	if (isFirst) return null
	return {
		one:
			page === 0
				? {
					chapter: chapter - 1,
					page: previousChapter({ chapters, chapter }).pages.length - 1
				}
				: {
					chapter,
					page: page - 1
				},
		all: { chapter: 1, page: 0 }
	}
}

export function getPage({ chapters, chapter, page }: PageFunctionProps) {
	return chapters[chapter - 1].pages[page]
}

export function getRemainingPagesAmount({ chapters, chapter, page }: PageFunctionProps) {
	let amount = 0
	for (let i = chapter - 1; i < chapters.length; i++) {
		const chapter_length = chapters[i].pages.length
		const is_current_chapter = i === chapter - 1
		amount += is_current_chapter ? chapter_length - page - 1 : chapter_length
	}
	return amount
}

export function imageToUrl(image: string) {
	return `https:${image}`
}

function last<T>(list: ReadonlyArray<T>): T {
	return list[list.length - 1]
}

function previousChapter({
													 chapters,
													 chapter
												 }: {
	chapters: ReadonlyArray<Chapter>
	chapter: number
}) {
	return chapters[chapter - 2]
}

function currentChapter({
													chapters,
													chapter
												}: {
	chapters: ReadonlyArray<Chapter>
	chapter: number
}) {
	return chapters[chapter - 1]
}

type PageFunctionProps = {
	chapters: ReadonlyArray<Chapter>
	chapter: number
	page: number
}

export type PageCoordinates = { chapter: number; page: number }

export type NavigablePages = { one: PageCoordinates; all: PageCoordinates }

export type RelatedPages = {
	backward: NavigablePages | null
	current: PageCoordinates
	forward: NavigablePages | null
}

