import {getChapters} from "@server/GetChapters"

export default async function getChaptersInfo({
																								language
																							}: {
	language: string
}) {
	const chapters = await getChapters({language})

	return chapters.map((chapter, i) => ({
		cover: chapter.cover.image,
		number: i + 1,
		pagesAmount: chapter.pages.length
	}))
}
