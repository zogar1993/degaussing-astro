import getLocalizedDate from "@server/localization/GetLocalizedDate"
import { getChapters } from "@server/GetChapters"

export default async function getLastUpdate({
																							language
																						}: {
	language: string
}) {
	const chapters = await getChapters({ language })

	const chapter = chapters.length
	const current = chapters[chapters.length - 1]
	const page = current.pages.length

	const lastUpdate = current.pages[page - 1].createdAt
	const date = getLocalizedDate({ date: lastUpdate, language })

	const image = current.pages[0].image
	return { chapter, page, image, date }
}
