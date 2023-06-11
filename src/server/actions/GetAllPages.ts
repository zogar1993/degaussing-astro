import {getChapters} from "@server/GetChapters"
import getPageInfo from "@server/GetPageInfo"

export default async function getAllPages({language}: { language: string }) {
	const chapters = await getChapters({language})

	const chapterNumbers = chapters.flatMap((chapter, i) => [
		{chapter: i + 1, page: 0},
		...chapter.pages.map((_, j) => ({chapter: i + 1, page: j + 1}))
	])
	return chapterNumbers.map((params) => {
		const props = getPageInfo({...params, chapters})
		return {
			params: {
				chapter: `${props.current.chapter}`,
				page: `${props.current.page}`
			},
			props
		}
	})
}
