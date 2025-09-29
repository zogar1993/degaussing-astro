const DAYS_AHEAD = import.meta.env.DAYS_AHEAD
const now = new Date()
const HOUR = 60 * 60 * 1000
// 16hs at -3GMT
const hoursToSubtract = 19 * HOUR
const DAY = HOUR * 24
// This is for debug purposes
const daysAhead = (DAYS_AHEAD ? Number(DAYS_AHEAD) : 0)
console.log(daysAhead)
now.setTime(now.getTime() - hoursToSubtract + daysAhead * DAY)
export const NOW_WITH_DEPLOYMENT_OFFSET = Object.freeze(now)
