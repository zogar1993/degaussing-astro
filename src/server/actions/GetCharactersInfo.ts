import { getList } from "@server/GetEntries"

export default async function getCharactersInfo({ language }: { language: string }) {
	return await getList<any>("characters", language)
}
