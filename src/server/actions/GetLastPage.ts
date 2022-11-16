import {getChapters} from "@server/GetChapters"
import getPageInfo from "@server/GetPageInfo"

export default async function getLastPage() {
	const locale = "en-US"
	const chapters = await getChapters({locale})

	const chapter = chapters.length
	const page = chapters[chapters.length - 1].pages.length

	return getPageInfo({chapters, chapter, page})
}