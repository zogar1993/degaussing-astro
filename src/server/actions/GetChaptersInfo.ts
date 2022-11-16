import {getChapters} from "@server/GetChapters"

export default async function getChaptersInfo() {
	const locale = "en-US"

	const chapters = await getChapters({locale})

	return chapters.map((chapter) => ({
		name: chapter.name,
		cover: chapter.cover,
		pagesAmount: chapter.pages.length
	}))
}