import axios from 'axios'
import qs from 'qs';
axios.defaults.baseURL = 'http://127.0.0.1:9999';
axios.defaults.timeout = 10000;
// axios.defaults.withCredentials = true; 
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.transformRequest = data => qs.stringify(data);

axios.interceptors.response.use(response => {
    return response.data;
}, error => {
    if(error.response) {
        switch(error.response.status) {
            case 401:
                break;
            case 403:
                break;
            case 404:
                break;
            default: 
                console.log(11)
        }
    } else {
        if(!window.navigator.onLine) {
            return;
        }
        return Promise.reject(error);
    }
})

export default axios;