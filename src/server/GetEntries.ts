import fs from "fs"
import path from "path"
import { fetchEntries } from "@server/FetchEntries"

export async function getEntries<T>(
	type: string,
	locale?: string
): Promise<ReadonlyArray<T>> {
	const cachePath = path.resolve(`.cache/${type}_${locale}`)
	try {
		return readFile(cachePath)
	} catch (error) {
		console.log(`Could not use cache for ${type}`)
	}

	const entries = await fetchEntries(type, locale)

	try {
		writeFile(cachePath, entries)
		console.log(`Wrote to ${type} cache`)
	} catch (error) {
		console.log(`ERROR WRITING ${type.toUpperCase()} CACHE TO FILE`)
		console.log(error)
	}

	return entries as ReadonlyArray<T>
}

const readFile = (path: string) => JSON.parse(fs.readFileSync(path, "utf8"))
const writeFile = (path: string, data: any) => {
	if (!fs.existsSync(".cache")) fs.mkdirSync(".cache")
	fs.writeFileSync(path, JSON.stringify(data), "utf8")
}
