import sharp from "sharp"
import path from "path"
import fs from "fs/promises"

export default async function blurImage({url, fileName, width, height}: {
	url: string,
	fileName: string,
	width: number,
	height: number
}): Promise<string> {
	try {
		const outDir = path.join(process.cwd(), "public", "blurred")
		const outPath = path.join(outDir, fileName)
		await fs.access(outPath)
		return `/_astro/${fileName}`
	} catch {
		// if file doesn't exist we continue and generate it
	}

	const blurAmount = 4
	const res = await fetch(url)
	if (!res.ok) throw new Error("Image fetch failed")
	const buf = Buffer.from(await res.arrayBuffer())

	const blurred = await sharp(buf)
		.blur(blurAmount)
		.resize(width, height)
		.webp()
		.toBuffer()

	const outPath = path.join(process.cwd(), "public", "_astro", fileName)

	await fs.mkdir(path.dirname(outPath), { recursive: true })
	await fs.writeFile(outPath, blurred)

	return `/_astro/${fileName}`
}