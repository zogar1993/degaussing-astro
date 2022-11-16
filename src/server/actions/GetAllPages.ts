import {getChapters} from "@server/GetChapters"
import {getImage, getNextAndLast, getPreviousAndFirst} from "@server/Utils"

export default async function getAllPages() {
	const locale = "en-US"

	const chapters = await getChapters({locale})

	//const locales = ["en-US", "es"]
	const chapterNumbers = chapters.flatMap((chapter, i) => [
		{chapter: i + 1, page: 0},
		...chapter.pages.map((_, j) => ({chapter: i + 1, page: j + 1}))
	])
	const paths = chapterNumbers.map(params => {
		const {chapter, page} = params
		const image = getImage({chapters, chapter, page})
		const props = {
			image,
			backward: getPreviousAndFirst({chapters, chapter, page}),
			current: {chapter: chapter, page: page},
			forward: getNextAndLast({chapters, chapter, page})
		}
		return {params: {chapter: `${chapter}`, page: `${page}`}, props}
	})
	//const localized = paths.flatMap(path => locales.map(locale => ({...path, locale})))
	return paths
}