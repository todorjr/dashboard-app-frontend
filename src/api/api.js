import data from '../data/data.json'; 
import axios from 'axios';

const USE_MOCK_DATA = true; 

export const API_BASE_URL = `http://localhost:3000/user/`;

export const API_ENDPOINTS = {
    USER_ACTIVITY: 'activity',
    USER_AVERAGE_SESSIONS: 'average-sessions',
    USER_PERFORMANCE: 'performance',
};

export async function fetchData(endpoint, userId) {
    if (USE_MOCK_DATA) {
        switch (endpoint) {
            case API_ENDPOINTS.USER_MAIN_DATA:
                return { data: data.user_data };
            case API_ENDPOINTS.USER_ACTIVITY:
                return { data: data.user_activity_data };
            case API_ENDPOINTS.USER_AVERAGE_SESSIONS:
                return { data: data.user_average_sessions_data };
            case API_ENDPOINTS.USER_PERFORMANCE:
                return { data: data.user_performance_data };
            default:
                throw new Error(`Invalid endpoint: ${endpoint}`);
        }
    } else {
        try {
            const response = await axios.get(`${API_BASE_URL}${userId}${API_ENDPOINTS[endpoint]}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching data from API:', error);
            throw error;
        }
    }
}

