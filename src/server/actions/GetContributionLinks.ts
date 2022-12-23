import { getEntries } from "@server/GetEntries"
import type { Link } from "@transport/Link"

export async function getContributionLinks(): Promise<ReadonlyArray<Link>> {
	return (await getEntries<any>("list")).find(
		(links) => links.name === "contribution"
	).items
}
