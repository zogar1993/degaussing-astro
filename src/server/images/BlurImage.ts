import sharp from "sharp"

export default async function blurImage({url, width, height}: {
	url: string,
	width: number,
	height: number
}): Promise<Buffer> {
	const blurAmount = 4

	const res = await fetch(url)
	if (!res.ok) throw new Error("Image fetch failed")
	const buf = Buffer.from(await res.arrayBuffer())

	return await sharp(buf)
		.blur(blurAmount)
		.resize(width, height)
		.webp()
		.toBuffer()
}