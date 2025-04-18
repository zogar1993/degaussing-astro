import { NOW_WITH_DEPLOYMENT_OFFSET } from "@server/time/NOW_WITH_DEPLOYMENT_OFFSET"
import type { Strip } from "@transport/Chapter"

export default function isPageDeployed(page: Strip) {
	return page.createdAt < NOW_WITH_DEPLOYMENT_OFFSET
}
