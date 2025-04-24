import { getList } from "@server/contentful/GetEntries"
import { imageToUrl } from "@server/Utils"
import type { Person } from "@server/actions/types/Person"

export default async function getAuthorsInfo({ language }: { language: string }) {
	const authors = await getList<Person>("authors", language)

	return authors.map(author => ({ ...author, portrait: imageToUrl(author.portrait) }))
}
