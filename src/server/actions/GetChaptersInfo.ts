import {getChapters} from "@server/GetChapters"

export default async function getChaptersInfo({language}: {language: string}) {
	const chapters = await getChapters({language})

	return chapters.map((chapter) => ({
		name: chapter.name,
		cover: chapter.cover,
		pagesAmount: chapter.pages.length
	}))
}