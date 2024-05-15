import { getList } from "@server/GetEntries"
import type { Link } from "@transport/Link"

export async function getContributionLinks(): Promise<ReadonlyArray<Link>> {
	return await getList<Link>("contribution")
}
