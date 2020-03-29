import axios from 'axios';

axios.defaults.headers.common['Authorization'] = localStorage.getItem('ongId') || null

const api = axios.create({
    baseURL: 'http://localhost:3333'
})

export default api;