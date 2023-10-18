import { fetchData } from "../api/api";

export async function getActivityData (userId) {
    const result = await fetchData('activity', userId)
    console.log(result,'DATA');
    return result.data.sessions
}
export async function getSessionData (userId) {
    const result = await fetchData('average-sessions', userId)
    console.log(result,'DATA');
    return result.data.sessions
}
