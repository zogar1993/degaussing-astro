import type { RichTextDocument } from "@server/contentful/types/RichTextDocument"

export type FAQ = {
	questions_and_answers: Array<QuestionAndAnswer>
}

type QuestionAndAnswer = {
	question: string
	answer: RichTextDocument
}
