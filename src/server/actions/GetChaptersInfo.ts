import {getChapters} from "@server/GetChapters"
import {  } from '@contentful/rich-text-html-renderer';

export default async function getChaptersInfo({language}: {language: string}) {
	const chapters = await getChapters({language})

	return chapters.map((chapter, i) => ({
		name: chapter.name,
		cover: chapter.cover,
		number: i + 1,
		pagesAmount: chapter.pages.length
	}))
}