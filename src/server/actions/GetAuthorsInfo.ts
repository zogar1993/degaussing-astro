import { getList } from "@server/GetEntries"

export default async function getAuthorsInfo({ language }: { language: string }) {
	return await getList<any>("authors", language)
}
