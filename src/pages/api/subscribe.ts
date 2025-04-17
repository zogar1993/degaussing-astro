export const prerender = false

const VERCEL_ACCESS_TOKEN = import.meta.env.FRIENDLY_CAPTCHA_API_KEY!
const FRIENDLY_CAPTCHA_SITE_KEY = import.meta.env.FRIENDLY_CAPTCHA_SITE_KEY!
const MAILERLITE_SUBSCRIBE_URL_ES = import.meta.env.MAILERLITE_SUBSCRIBE_URL_ES!
const MAILERLITE_SUBSCRIBE_URL_EN = import.meta.env.MAILERLITE_SUBSCRIBE_URL_EN!
const NEWSLETTER_URL = {
	es: MAILERLITE_SUBSCRIBE_URL_ES,
	en: MAILERLITE_SUBSCRIBE_URL_EN
} as const

export async function POST({ request }) {
	const data = await request.formData()

	const form = new FormData()
	form.append("response", data.get("frc-captcha-response"))
	form.append("sitekey", FRIENDLY_CAPTCHA_SITE_KEY)

	try {
		await throwIfIsError(await fetch("https://global.frcapi.com/api/v2/captcha/siteverify", {
			method: "POST",
			body: form,
			headers: { "X-API-Key": VERCEL_ACCESS_TOKEN }
		}))

		await throwIfIsError(await fetch(NEWSLETTER_URL[data.get("language")], { method: "POST", body: data }))
	} catch (e: Error) {
		return new Response(e.message, {
			status: 500,
			headers: { "Content-Type": "application/json" }
		})
	}

	return new Response(null, { status: 204 })
}

async function throwIfIsError(response: Response): Promise<Response | null> {
	const json = await response.json()
	if (!json.success) throw new Error(JSON.stringify(json))
}