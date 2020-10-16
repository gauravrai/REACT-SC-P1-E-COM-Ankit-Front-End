import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Authorization'] = 'Bearer ' + localStorage.token;

const instance = axios.create({
    baseURL: "https://sc-p1-local-buniya.herokuapp.com/api/v1"
})

export default instance