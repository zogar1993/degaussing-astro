import isPageDeployed from "@server/time/IsPageDeployed"
import getLocalizedDate from "@server/localization/GetLocalizedDate"
import queryAllChapters from "@server/queries/QueryAllChapters"

export async function getNextUpdate({ language }: { language: string }) {
	const chapters = await queryAllChapters({ language })

	for (let i = 0; i < chapters.length; i++) {
		const next_update_chapter = chapters[i]
		const next_update_page = next_update_chapter.pages.find(page => !isPageDeployed(page))

		if (next_update_page) {
			const chapter = i + 1
			const localized_date = getLocalizedDate({ date: next_update_page.created_at, language })
			return {
				chapter,
				image: "/next-update-cover",//TODO use different urls for different chapters so that cache is not bothersome
				date: localized_date
			}
		}
	}

	return null
}

export const NEXT_UPDATE_IMAGE_MAX_WIDTH = 188
export const NEXT_UPDATE_IMAGE_MAX_HEIGHT = 266