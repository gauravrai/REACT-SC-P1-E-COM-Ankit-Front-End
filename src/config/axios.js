import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Authorization'] = 'Bearer ' + localStorage.token;

const instance = axios.create({
    baseURL: "http://164.52.200.120:3001/api/v1/"
})

export default instance