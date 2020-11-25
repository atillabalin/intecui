import axios from 'axios';

const courses = axios.create({
    baseURL: '/courses'
});

const news = axios.create({
    baseURL: '/news'
});

const events = axios.create({
    baseURL: '/event'
});

const settings = axios.create({
    baseURL: '/settings'
});

const api = {
    courses:courses,
    news:news,
    events:events,
    settings:settings
}



export default api;