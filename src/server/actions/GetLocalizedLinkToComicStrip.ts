import type {PageCoordinates} from "@server/Utils"
import {localizePath} from "astro-i18next"

export default function getLocalizedLinkToComicStrip({page, chapter}: PageCoordinates) {
	return localizePath(`/chapters/${chapter}/pages/${page}#main`)
}