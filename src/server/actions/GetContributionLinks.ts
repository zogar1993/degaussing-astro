import { getList } from "@server/GetEntries"
import { imageToUrl } from "@server/Utils"
import type { Link } from "@transport/Link"

export async function getContributionLinks(): Promise<ReadonlyArray<Link>> {
	const links = await getList<Link>("contribution")

	return links.map(link => ({...link, icon: imageToUrl(link.icon)}))
}
