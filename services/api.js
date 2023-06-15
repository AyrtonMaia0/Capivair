import axios from 'axios';

const api = axios.create({
    baseURL: 'https://back-people.onrender.com'
})

export default api;