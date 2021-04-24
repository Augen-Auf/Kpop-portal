import {$authHost, $host} from './index'
import jwt_decode from 'jwt-decode'

export const createNews = async  (news) => {
    const {data} = await $authHost.post('api/news', news);
    return data
};

export const fetchNews = async  () => {
    const {data} = await $host.get('api/news');
    return data
};
