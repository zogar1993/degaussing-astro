import { getEntries } from "@server/contentful/GetEntries"
import { imageToUrl } from "@server/Utils"

export default async function getHeader({ language }: { language: string }) {
	const entries = await getEntries<{ logo: string }>("header", language)
	return { logo: imageToUrl(entries[0].logo) }
}
