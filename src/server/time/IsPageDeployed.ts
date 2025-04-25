import { NOW_WITH_DEPLOYMENT_OFFSET } from "@server/time/NOW_WITH_DEPLOYMENT_OFFSET"
import type { Strip } from "@server/actions/types/Chapter"

export default function isPageDeployed(page: Strip) {
	return page.created_at < NOW_WITH_DEPLOYMENT_OFFSET
}
