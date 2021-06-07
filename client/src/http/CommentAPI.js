import {$authHost, $host} from './index'

export const createComment = async (publication_id, user_id, text, parentId) => {
    try {
        const { data } = await $host.post('api/comment/', {publication_id, user_id, text, parentId});
        return data
    } catch (e) {
        throw Error(e);
    }

};
