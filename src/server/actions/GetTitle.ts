import getTitleParts from "@server/actions/GetTitleParts"
import type { RelatedPages } from "@server/Utils"

export default function getTitle({ path, info }: { path: string, info?: RelatedPages }) {
	return getTitleParts({ path, info }).reverse().join(" | ")
}
