import {getChapters} from "@server/GetChapters"
import {getImage} from "@server/Utils"

export default async function getLastUpdate({language}: {language: string}) {
	const chapters = await getChapters({language})

	const chapter = chapters.length
	const page = chapters[chapters.length - 1].pages.length

	const image = getImage({chapters, chapter, page: 0})
	return {chapter, page, image}
}