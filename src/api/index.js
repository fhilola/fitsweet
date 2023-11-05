import axios from "axios";

const apiInstance = axios.create({
    baseURL: 'https://ap-blog-backend.up.railway.app/api/v1/auth/register',
    headers: {
        'Content-Type' : 'application/json'
    },
    timeout: 10000
})
export {apiInstance}