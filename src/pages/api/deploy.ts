export const prerender = false

const VERCEL_ACCESS_TOKEN = import.meta.env.VERCEL_ACCESS_TOKEN!
const API_ACCESS_TOKEN = import.meta.env.API_ACCESS_TOKEN!
const GITHUB_REPO_ID = import.meta.env.GITHUB_REPO_ID!

export async function GET({ request }) {
	if (request.headers.get("Authorization") !== `Bearer ${API_ACCESS_TOKEN}`)
		return new Response(null, { status: 401 })

	const response = await fetch("https://api.vercel.com/v13/deployments", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${VERCEL_ACCESS_TOKEN}`
		},
		body: JSON.stringify({
			name: "degaussing-astro",
			gitSource: {
				repo: "https://github.com/zogar1993/degaussing-astro",
				repoId: GITHUB_REPO_ID,
				type: "github",
				ref: "main"
			}
		})
	})

	if (response.status === 200) {
		return new Response(null, { status: 204 })
	} else {
		return new Response(await response.text(), {
			status: 500,
			headers: {
				"Content-Type": "application/json"
			}
		})
	}
}