const now = new Date()
const HOUR = 60 * 60 * 1000
// 16hs at -3GMT
const hoursToSubtract = 19 * HOUR
now.setTime(now.getTime() - hoursToSubtract)
export const NOW_WITH_DEPLOYMENT_OFFSET = Object.freeze(now)
