import { createClient } from "contentful"

const client = createClient({
	space: import.meta.env.CONTENTFUL_SPACE_ID!,
	accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN_DELIVERY!,
	host: "cdn.contentful.com"
})

export async function fetchEntries<T>(
	type: string,
	language?: string
): Promise<ReadonlyArray<T>> {
	const locale = language === "en" ? "en-US" : language

	//These are the max values for both limit and include at the time
	const response = await client.getEntries({
		content_type: type,
		limit: 1000,
		include: 10,
		locale: locale
	})
	return contentfulToArrayOfPlainObjects(response.items)
}

function contentfulToPlainObject(obj: any) {
	const result = { ...obj.fields }
	for (const [key, value] of Object.entries(result)) {
		const x = Array.isArray(value)
			? contentfulToArrayOfPlainObjects(value)
			: unwrap(value)

		if (x !== null) // We exclude draft status entries
			result[key] = x
	}
	return result
}

function contentfulToArrayOfPlainObjects(arr: ReadonlyArray<any>) {
	return arr.map(x => unwrap(x)).filter(x => x !== null) // We exclude draft status entries
}

function unwrap(value: any) {
	if (!value.hasOwnProperty("sys")) return value
	if (value.sys.type === "Asset") return value.fields.file.url
	if (value.sys.type === "Entry") return contentfulToPlainObject(value)
	if (value.sys.type === "Link") return null //these need to be weeded out by callers, since they are draft entries
	throw new Error(`Cannot handle type '${value.sys.type}'`)
}
