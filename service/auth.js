import axios from 'axios'
import { apiAuthLogin, apiAuthLogout, apiLoginToken } from './index'

export const serviceAuthLogin = async (payload) => {
    const result = await axios.request({
        url: apiAuthLogin,
        method: 'post',
        data: {
            username: payload.signinfo,
            password: payload.password
        }
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}

export const serviceAuthLogout = async (token) => {
    const result = await axios.request({
        url: apiAuthLogout,
        method: 'get',
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}


export const serviceLoinToekn = async (token) => {
    const result = await axios.request({
        url: apiLoginToken,
        method: 'get',
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}