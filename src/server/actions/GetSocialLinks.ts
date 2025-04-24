import { getList } from "@server/contentful/GetEntries"
import { imageToUrl } from "@server/Utils"
import type { Link } from "@server/actions/types/Link"

export default async function getSocialLinks(): Promise<ReadonlyArray<Link>> {
	const links = await getList<any>("social")

	return links.map(link => ({...link, icon: imageToUrl(link.icon)}))
}
