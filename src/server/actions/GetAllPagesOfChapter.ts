import {getChapters} from "@server/GetChapters"

export default async function getAllPages({language}: { language: string }) {
	const chapters = await getChapters({language})

	return chapters.map((chapter, i) => {
		return {
			params: {
				chapter: `${i + 1}`
			},
			props: {
				chapter: i + 1,
				pages: [
					{image: chapter.cover.image, number: 0},
					...chapter.pages.map((page, j) => ({image: page.image, number: j + 1}))
				]
			}
		}
	})
}
