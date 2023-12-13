import {getChapters} from "@server/GetChapters"
import {imageToUrl} from "@server/Utils"

export default async function getChaptersInfo({
																								language
																							}: {
	language: string
}) {
	const chapters = await getChapters({language})

	return chapters.map((chapter, i) => ({
		cover: imageToUrl(chapter.cover.image),
		number: i + 1,
		pagesAmount: chapter.pages.length
	}))
}
