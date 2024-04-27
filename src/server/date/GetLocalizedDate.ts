export default function getLocalizedDate({date, language}: {date: Date, language: string}) {
	const localized = language === "es" ? getSpanishDate(date) : getEnglishDate(date)
	const datetime = getDatetime(date)
	return {localized, datetime}
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
