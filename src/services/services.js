import { fetchData } from "../api/api";

async function getActivityData (userId) {
    const result = await fetchData('activity', userId)
    return result.data.sessions
}


export default getActivityData; 