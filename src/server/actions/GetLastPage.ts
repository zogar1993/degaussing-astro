import { getChapters } from "@server/GetChapters"
import getPageInfo from "@server/GetPageInfo"

export default async function getLastPage({ language }: { language: string }) {
	const chapters = await getChapters({ language })

	const chapter = chapters.length
	const page = chapters[chapters.length - 1].pages.length

	return getPageInfo({ chapters, chapter, page })
}
