import sharp from "sharp"

export default async function resizeImage({buf, width, height}: {
	buf: Buffer,
	width: number,
	height: number
}): Promise<Buffer> {
	return await sharp(buf)
		.resize(width, height)
		.webp()
		.toBuffer()
}