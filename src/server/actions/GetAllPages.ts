import {getChapters} from "@server/GetChapters"
import getPageInfo from "@server/GetPageInfo"

export default async function getAllPages({language}: {language: string}) {
	const chapters = await getChapters({language})

	//const locales = ["en-US", "es"]
	const chapterNumbers = chapters.flatMap((chapter, i) => [
		{chapter: i + 1, page: 0},
		...chapter.pages.map((_, j) => ({chapter: i + 1, page: j + 1}))
	])
	const paths = chapterNumbers.map(params => {
		const props = getPageInfo({...params, chapters})
		return {params: {chapter: `${props.current.chapter}`, page: `${props.current.page}`}, props}
	})
	//const localized = paths.flatMap(path => locales.map(locale => ({...path, locale})))
	return paths
}