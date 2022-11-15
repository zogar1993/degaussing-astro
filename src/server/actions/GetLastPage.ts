import {getChapters} from "@server/GetChapters"
import {getImage, getPreviousAndFirst} from "@server/Utils"

export default async function getLastPage() {
	const locale = "en-US"
	const chapters = await getChapters({locale})

	const chapter = chapters.length
	const page = chapters[chapters.length - 1].pages.length

	const image = getImage({chapters, chapter, page})
	const backward = getPreviousAndFirst({chapters, chapter, page})

	return {image, page, chapter}
}