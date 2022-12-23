export type Chapter = {
	name: string
	cover: Page
	pages: Array<Page>
	number: number
}

type Page = { name: string; image: string; createdAt: string }
