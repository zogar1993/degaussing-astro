export type Chapter = {
	name: string
	cover: Page
	pages: Array<Page>
	number: number
}

export type Page = {
	image: string;
	createdAt: string
	characters: Array<{name: string, image: string}>
}
