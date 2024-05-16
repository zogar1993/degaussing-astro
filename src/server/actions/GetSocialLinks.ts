import { getList } from "@server/GetEntries"
import type { Link } from "@transport/Link"

export default async function getSocialLinks(): Promise<ReadonlyArray<Link>> {
	return await getList<any>("social")
}
