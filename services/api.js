import {create} from 'axios'

const api = create({
    baseURL: 'http://192.168.1.100:3000/',
});

export default api;