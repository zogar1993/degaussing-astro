import getTitleParts from "@server/actions/GetTitleParts"
import type {RelatedPages} from "@server/Utils"

export default function getTitle({path, info}: { path: string, info?: RelatedPages }) {
	const parts = ["Degaussing Comic", ...getTitleParts({path, info})]
	return parts.reverse().join(" | ")
}
