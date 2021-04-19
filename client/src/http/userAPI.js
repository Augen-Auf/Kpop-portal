import {$authHost, $host} from './index'
import jwt_decode from 'jwt-decode'

export const registration = async  (email, password, name) => {
    try {
        const {data} = await $host.post('api/user/registration', {email, password, name, role: null})
        console.log(data)
        localStorage.setItem('token', data.token)
        return jwt_decode(data.token)
    }
    catch (e) {
       throw new Error(e.response.data.message)
    }
}

export const login = async  (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    console.log(data)
    return jwt_decode(data.token)
}

export const check = async  () => {
    try {
        const {data} = await $authHost.get('api/user/auth')
        localStorage.setItem('token', data.token)
        return jwt_decode(data.token)
    }
    catch (e) {
        return null
    }
}