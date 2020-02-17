import axios from 'axios'
import {
    apiUserGetSetting,
    apiUserGetSlipByName,
    apiUserGetNumOff,
    apiGetUserNumLimit,
    apiUserSummary,
    apiUserDeleteSlip,
    apiUserBuyLottery
} from './index'

//User Get Setting
export const serviceUserGetSetting = async (payload) => {
    const result = await axios.request({
        url: apiUserGetSetting,
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

//User Get Slip By Lottery Name
export const serviceUserGetSlipByName = async (payload) => {
    const result = await axios.request({
        url: `${apiUserGetSlipByName}/${payload.lottery_name}`,
        method: 'post',
        headers: {
            Authorization: `Bearer ${payload.token}`
        },
        data: {
            date: payload.date
        }
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}

//User Get Num Off
export const serviceUserGetNumOff = async (payload) => {
    const result = await axios.request({
        url: `${apiUserGetNumOff}/${payload.lottery_name}`,
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

//User Get Limit
export const serviceUserGetNumLimit = async (payload) => {
    const result = await axios.request({
        url: `${apiGetUserNumLimit}/${payload.lottery_name}`,
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

//User Summary
export const serviceUserGetSummary = async (payload) => {
    const result = await axios.request({
        url: apiUserSummary,
        method: 'post',
        headers: {
            Authorization: `Bearer ${payload.token}`
        },
        data: {
            date: payload.date,
            lottery_name: payload.lottery_name,
            category: payload.category,
        }
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}

//User Delete Slip 
export const serviceUserDeleteSlip = async (payload) => {
    const result = await axios.request({
        url: apiUserDeleteSlip,
        method: 'delete',
        headers: {
            Authorization: `Bearer ${payload.token}`
        },
        data: {
            slip_id: payload.slip_id,
        }
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}

//User Buy Lottery 
export const serviceUserBuyLottery = async (payload) => {
    const result = await axios.request({
        url: apiUserBuyLottery,
        method: 'post',
        headers: {
            Authorization: `Bearer ${payload.token}`
        },
        data: {
            lottery_name: payload.lottery_name,
            date: payload.date,
            nums: payload.nums,
            name: payload.name,
        }
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}