import { getList } from "@server/contentful/GetEntries"

export default async function getCharactersInfo({ language }: { language: string }) {
	return await getList<any>("characters", language)
}
