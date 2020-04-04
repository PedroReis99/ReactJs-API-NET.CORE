import axios from 'axios';

const api = axios.create({
     baseURL: 'https://localhost:44399/Api' 
});

export default api;