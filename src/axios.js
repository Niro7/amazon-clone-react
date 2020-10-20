import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-challenge-51a15/us-central1/api'
    // API the (cloud function) URL
});

export default instance;