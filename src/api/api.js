import data from '../data/data.json';
import axios from 'axios';

const USE_MOCK_DATA = false;

export const API_BASE_URL = `http://localhost:3000/user/`;

export const API_ENDPOINTS = {
    USER_ACTIVITY: 'activity',
    USER_AVERAGE_SESSIONS: 'average-sessions',
    USER_PERFORMANCE: 'performance',
};


export async function fetchData(endpoint, userId) {
    if (USE_MOCK_DATA) {
        switch (endpoint) {
            case API_ENDPOINTS.USER_ACTIVITY:
                return {
                    data: {
                        sessions: data.user_activity_data
                            .filter((user) => user.userId === parseInt(userId))
                            .flatMap((item) => item.sessions),
                    },
                }
            case API_ENDPOINTS.USER_AVERAGE_SESSIONS:
                return {
                    data: {
                        sessions: data.user_average_sessions_data
                            .filter((user) => user.userId === userId)
                            .flatMap((item) => item.sessions),
                    },
                }
            case API_ENDPOINTS.USER_PERFORMANCE:
                return {
                    data: data.user_performance_data
                        .filter((user) => user.userId === userId)
                        .reduce((item) => ({
                            kind: { ...item.kind },
                            data: [...item.data],
                        })),
                }
            default:
                throw new Error(`Invalid endpoint: ${endpoint}`)
        }
    } else {
        try {
            const apiUrl = `${API_BASE_URL}${userId}/${endpoint}`
            const response = await axios.get(apiUrl)
            return response.data
        } catch (error) {
            console.error('Error fetching data from API:', error)
            throw error
        }
    }
}

export async function fetchUserData(userId) {
    if (USE_MOCK_DATA) {
        const userData = data.user_data.filter(user => user.id === userId);

        if (!userData) {
            throw new Error(`No mock data found for user ID: ${userId}`);
        }

        return {
            data: userData.reduce((item) => ({
                score: { ...item.score },
                data: [...item.keyData],
                infos: { ...item.userInfos }
            }))
        }
    } else {
        try {
            const apiUrl = `${API_BASE_URL}${userId}`;
            const response = await axios.get(apiUrl);
            return response.data;
        } catch (error) {
            console.error('Error fetching data from API:', error);
            throw error;
        }
    }
}


