import { getList } from "@server/GetEntries"
import { imageToUrl } from "@server/Utils"
import type { Link } from "@transport/Link"

export default async function getSocialLinks(): Promise<ReadonlyArray<Link>> {
	const links =  await getList<any>("social")

	return links.map(link => ({...link, icon: imageToUrl(link.icon)}))
}
