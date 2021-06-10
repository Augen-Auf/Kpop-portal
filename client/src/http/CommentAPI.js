import {$authHost, $host} from './index'

export const createComment = async (publication_id, user_id, text, parentId) => {
    try {
        const { data } = await $host.post('api/comments/', {publication_id, user_id, text, parentId});
        return data
    } catch (e) {
        throw Error(e);
    }
};
