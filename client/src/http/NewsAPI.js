import {$authHost, $host} from './index'
import jwt_decode from 'jwt-decode'

export const createNews = async (author_id, title, lid, text, type, views, tags) => {
    try {
        const { data } = await $authHost.post('api/news', {author_id, title, lid, text, type, views, tags});
        return data
    } catch (e) {
        throw Error(e);
    }

};

export const getOneNew = async (id) => {
    try {
        const { data } = await $host.get('api/news/' + id);
        return data
    } catch (e) {
        throw Error(e);
    }

};

export const fetchNews = async  () => {
    const {data} = await $host.get('api/news');
    return data
};
