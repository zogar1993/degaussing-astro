import fs from "fs"
import path from "path"
import { fetchEntries } from "@server/contentful/FetchEntries"

export async function getEntries<T>(type: string, language?: string): Promise<ReadonlyArray<T>> {
	const cachePath = path.resolve(`.cache/${type}_${language}`)
	try {
		return readFile(cachePath)
	} catch (error) {
		console.log(`Could not use cache for ${type}`)
	}

	const entries = await fetchEntries(type, language)

	attemptToWriteFile(cachePath, entries)

	return entries as ReadonlyArray<T>
}

export async function getList<T>(name: string, language?: string): Promise<ReadonlyArray<T>> {
	const cachePath = path.resolve(`.cache/list_${name}` + (language ? `_${language}` : ""))
	try {
		return readFile(cachePath)
	} catch (error) {
		console.log(`Could not use cache for list ${name}`)
	}

	const entries = await fetchEntries("list", language) as any
	const list = entries.find((links: any) => links.name === name).items as Array<T>

	attemptToWriteFile(cachePath, list)

	return list as ReadonlyArray<T>
}

function attemptToWriteFile(path: string, data: any) {
	try {
		writeFile(path, data)
		console.log(`Wrote to ${path} cache`)
	} catch (error) {
		console.log(`ERROR WRITING ${path} CACHE TO FILE`)
		console.log(error)
	}
}

const readFile = (path: string) => JSON.parse(fs.readFileSync(path, "utf8"))
const writeFile = (path: string, data: any) => {
	if (!fs.existsSync(".cache")) fs.mkdirSync(".cache")
	fs.writeFileSync(path, JSON.stringify(data), "utf8")
}
