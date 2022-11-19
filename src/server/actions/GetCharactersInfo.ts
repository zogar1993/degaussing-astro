import {getEntries} from "@server/GetEntries"
import type {Character} from "@transport/Character"

export default async function getCharactersInfo() {
	const locale = "en-US"
	return  getEntries<Character>("biography", locale)
}