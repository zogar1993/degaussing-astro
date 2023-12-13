import {getChapters} from "@server/GetChapters"
import {imageToUrl} from "@server/Utils"

export default async function getLastUpdate({
																							language
																						}: {
	language: string
}) {
	const chapters = await getChapters({language})

	const chapter = chapters.length
	const current = chapters[chapters.length - 1]
	const page = current.pages.length

	const lastUpdate = new Date(current.pages[page - 1].createdAt)
	const date =
		language === "es" ? getSpanishDate(lastUpdate) : getEnglishDate(lastUpdate)
	const datetime = getDatetime(lastUpdate)

	const image = imageToUrl(current.cover.image)
	return {chapter, page, image, date, datetime}
}

function getEnglishDate(date: Date) {
	const year = date.getUTCFullYear()
	const month = date.toLocaleString("en-US", {
		month: "long",
		timeZone: "UTC"
	})
	const day = date.getUTCDate()
	return `${month} ${day}, ${year}`
}

function getSpanishDate(date: Date) {
	const year = date.getUTCFullYear()
	const month = date.toLocaleString("es", {
		month: "long",
		timeZone: "UTC"
	})
	const day = date.getUTCDate()
	return `${day} de ${month}, ${year}`
}

function getDatetime(date: Date) {
	const year = date.getUTCFullYear()
	const month = (date.getUTCMonth() + 1).toString().padStart(2, "0")
	const day = date.getUTCDate().toString().padStart(2, "0")
	return `${year}-${month}-${day}`
}
