import axios from 'axios'
import {
    apiGetNumOff,
    apiGetNumLimit,
    apiGetNumLimitUser,
} from './index'

export const serviceGetNumOff = async (payload) => {
    const result = await axios.request({
        url: `${apiGetNumOff}/${payload.lottery_name}`,
        method: 'post',
        headers: {
            Authorization: `Bearer ${payload.token}`
        },
        data: {
            date: payload.date,
        }
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}

export const serviceGetNumLimit = async (payload) => {
    const result = await axios.request({
        url: `${apiGetNumLimit}/${payload.lottery_name}`,
        method: 'post',
        headers: {
            Authorization: `Bearer ${payload.token}`
        },
        data: {
            date: payload.date,
        }
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}

export const serviceGetNumLimitUser = async (payload) => {
    const result = await axios.request({
        url: `${apiGetNumLimitUser}/${payload.lottery_name}`,
        method: 'post',
        headers: {
            Authorization: `Bearer ${payload.token}`
        },
        data: {
            date: payload.date,
        }
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}

