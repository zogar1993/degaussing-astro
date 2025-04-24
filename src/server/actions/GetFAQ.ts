import { getEntries } from "@server/contentful/GetEntries"
import type { RichTextDocument } from "@server/contentful/types/RichTextDocument"

export default async function getFAQ({ language }: { language: string }) {
	const entries = await getEntries<FAQ>("faq", language)
	return entries[0]!
}

export type FAQ = {
	questions_and_answers: Array<QuestionAndAnswer>
}

type QuestionAndAnswer = {
	question: string
	answer: RichTextDocument
}