import {getChapters} from "@server/GetChapters"

export default async function getLastUpdate({language}: {language: string}) {
	const chapters = await getChapters({language})

	const chapter = chapters.length
	const current = chapters[chapters.length - 1]
	const page = current.pages.length

	const lastUpdate = new Date(current.pages[page - 1].createdAt)
	const date = language === "es" ? getSpanishDate(lastUpdate) : getEnglishDate(lastUpdate)

	const image = current.cover.image
	return {chapter, page, image, date}
}

function getEnglishDate(date: Date) {
	const year = date.getUTCFullYear()
	const month = date.toLocaleString("en-US", { month: 'long', timeZone: "UTC" })
	const day = date.getUTCDate()
	return `${month} ${day}, ${year}`
}

function getSpanishDate(date: Date) {
	const year = date.getUTCFullYear()
	const month = date.toLocaleString("es", { month: '2-digit', timeZone: "UTC" })
	const day = date.toLocaleString("es", { day: '2-digit', timeZone: "UTC" })
	return `${day}/${month}/${year}`
}