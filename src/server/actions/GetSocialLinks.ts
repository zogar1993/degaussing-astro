import {getEntries} from "@server/GetEntries"
import type {Link} from "@transport/Link"

export async function getSocialLinks(): Promise<ReadonlyArray<Link>> {
		return (await getEntries<any>("list")).find(links => links.name === "social").items
}