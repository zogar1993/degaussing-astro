import { getList } from "@server/GetEntries"
import { imageToUrl } from "@server/Utils"
import type { Person } from "@transport/Person"

export default async function getAuthorsInfo({ language }: { language: string }) {
	const authors = await getList<Person>("authors", language)

	return authors.map(author => ({ ...author, portrait: imageToUrl(author.portrait) }))
}
