import axios from 'axios';

const instance = axios.create({
    baseURL: ''
    // API the (cloud function) URL
});

export default instance;