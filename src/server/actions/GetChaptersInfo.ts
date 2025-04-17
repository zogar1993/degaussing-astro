import { getChapters } from "@server/GetChapters"

export default async function getChaptersInfo({
																								language
																							}: {
	language: string
}) {
	const chapters = await getChapters({ language })

	return chapters.map(chapter => ({
		cover: chapter.pages[0].image,
		number: chapter.number,
		pagesAmount: chapter.pages.length - 1
	}))
}
