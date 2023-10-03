import data from '../data/data.json';
import axios from 'axios';

const USE_MOCK_DATA = true;

const API_BASE_URL = `http://localhost:3000/user/`;

const API_ENDPOINTS = {
    USER_MAIN_DATA: '/user_data',
    USER_ACTIVITY: '/user_activity_data',
    USER_AVERAGE_SESSIONS: '/user_average_sessions_data',
    USER_PERFORMANCE: '/user_performance_data',
};

// Fetch data from the API or use mock data
export async function fetchData(endpoint, userId) {
    if (USE_MOCK_DATA) {
        switch (endpoint) {
            case API_ENDPOINTS.USER_MAIN_DATA:
                return data.USER_MAIN_DATA;
            case API_ENDPOINTS.USER_ACTIVITY:
                return data.USER_ACTIVITY;
            case API_ENDPOINTS.USER_AVERAGE_SESSIONS:
                return data.USER_AVERAGE_SESSIONS;
            case API_ENDPOINTS.USER_PERFORMANCE:
                return data.USER_PERFORMANCE;
            default:
                throw new Error(`Invalid endpoint: ${endpoint}`);
        }
    } else {
        try {
            const response = await axios.get(`${API_BASE_URL}${userId}${endpoint}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching data from API:', error);
            throw error;
        }
    }
}
