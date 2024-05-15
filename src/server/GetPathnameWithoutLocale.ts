export default function pathnameWithoutLocale({ path, language }: { path: string, language: string }) {
	return "/" + path.split("/").filter(x => x).filter((part, i) => !(i === 0 && part === language)).join("/")
}