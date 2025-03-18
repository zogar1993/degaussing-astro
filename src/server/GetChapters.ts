import type { Chapter } from "@transport/Chapter"
import isPageDeployed from "@server/time/IsPageDeployed"
import queryAllChapters from "@server/queries/QueryAllChapters"

export async function getChapters({ language }: { language: string }): Promise<ReadonlyArray<Chapter>> {
	const chapters = await queryAllChapters({ language })

	return chapters
		.map(chapter => ({ ...chapter, pages: chapter.pages.filter(isPageDeployed) }))
		.filter(chapter => chapter.pages.length > 0)
}

