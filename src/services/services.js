import { fetchData } from "../api/api";

export async function getActivityData (userId) {
    const result = await fetchData('activity', userId)
    return result.data.sessions
}
export async function getSessionData (userId) {
    const result = await fetchData('average-sessions', userId)
    return result.data.sessions
}
export async function getIntensityData (userId) {
    const result = await fetchData('performance', userId)
    return result.data
}
