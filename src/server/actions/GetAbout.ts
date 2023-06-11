import {getEntries} from "@server/GetEntries"
import type {About} from "@transport/About"

export default async function getAbout({language}: { language: string }) {
	const entries = await getEntries<About>("about", language)
	return entries[0]!
}
