import data from '../data/data.json'; 
import axios from 'axios';

const USE_MOCK_DATA = true; 

const API_BASE_URL = `http://localhost:3000/user/`;

export const API_ENDPOINTS = {
    USER_MAIN_DATA: API_BASE_URL,
    USER_ACTIVITY: 'user_activity_data',
    USER_AVERAGE_SESSIONS: 'user_average_sessions_data',
    USER_PERFORMANCE: 'user_performance_data',
};

export async function fetchData(endpoint, userId) {
    if (USE_MOCK_DATA) {
        switch (endpoint) {
            case API_ENDPOINTS.USER_MAIN_DATA:
                return { data: data.user_data }; // Access the correct data structure
            case API_ENDPOINTS.USER_ACTIVITY:
                return { data: data.user_activity_data }; // Access user_activity_data
            case API_ENDPOINTS.USER_AVERAGE_SESSIONS:
                return { data: data.user_average_sessions_data }; // Access user_average_sessions_data
            case API_ENDPOINTS.USER_PERFORMANCE:
                return { data: data.user_performance_data }; // Access user_performance_data
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

