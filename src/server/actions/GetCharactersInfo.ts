import {getEntries} from "@server/GetEntries"
import type {Character} from "@transport/Character"

export default async function getCharactersInfo({language}: {language: string}) {
	return getEntries<Character>("biography", language)
}