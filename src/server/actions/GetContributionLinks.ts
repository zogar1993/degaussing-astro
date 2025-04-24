import { getList } from "@server/contentful/GetEntries"
import { imageToUrl } from "@server/Utils"
import type { Link } from "@server/actions/types/Link"

export async function getContributionLinks(): Promise<ReadonlyArray<Link>> {
	const links = await getList<Link>("contribution")

	return links.map(link => ({...link, icon: imageToUrl(link.icon)}))
}