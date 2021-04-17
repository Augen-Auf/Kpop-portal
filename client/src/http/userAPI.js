import {$host} from './index'

export const registration = async  (email, password, name) => {
    return await $host.post('api/user/registration', {email, password, name, role: null})
}

export const login = async  (email, password) => {
    return await $host.post('api/user/login', {email, password})
}

export const check = async  () => {
    return await $host.post('api/auth/registration')
}