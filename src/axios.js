import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-challenge-51a15.cloudfunctions.net/api'
    // 'http://localhost:5001/clone-challenge-51a15/us-central1/api'
    
    // API the (cloud function) URL
});

export default instance;