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

export const updateNews = async (news_id, author_id, title, lid, text, type, tags) => {
    try {
        const { data } = await $authHost.put('api/news/' + news_id, {author_id, title, lid, text, type, tags});
        console.log(data)
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

export const deleteNews = async (id) => {
    try {
        const { data } = await $host.delete('api/news/' + id);
        return data
    } catch (e) {
        throw Error(e);
    }
}

export const fetchNews = async  () => {
    const {data} = await $host.get('api/news');
    return data
};

export const getNewsReactions = async (newsId) => {
    const { data } = await $host.get(`api/news/${newsId}/reactions`)
    return data
}

export const setNewsReaction = async (userId, newsId, choice) => {
    const { data } = await $host.post(`api/news/${newsId}/reactions`, {userId, choice})
    return data
}
