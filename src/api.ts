import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api/notes', // Adjust the URL if different
});

export default api;
