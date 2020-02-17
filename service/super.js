import axios from 'axios'
import {
    apiSuperCreateAdmin,
    apiSuperGetAdmin,
    apiSuperDeleteAdmin,
    apiSuperLockAdmin,
    apiSuperUnlockAdmin,
    apiSuperEditPassAdmin
} from './index'

export const serviceSuperCreateAdmin = async (payload) => {
    const result = await axios.request({
        url: apiSuperCreateAdmin,
        method: 'post',
        headers: {
            Authorization: `Bearer ${payload.token}`
        },
        data: {
            username: payload.username,
            password: payload.password
        }
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}

export const serviceSuperGetAdmin = async (token) => {
    const result = await axios.request({
        url: apiSuperGetAdmin,
        method: 'get',
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}

export const serviceSuperDeleteAdmin = async (payload) => {
    const result = await axios.request({
        url: apiSuperDeleteAdmin,
        method: 'delete',
        headers: {
            Authorization: `Bearer ${payload.token}`
        },
        data: {
            username: payload.username,
        }
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}

export const serviceLockAdmin = async (payload) => {
    const result = await axios.request({
        url: apiSuperLockAdmin,
        method: 'patch',
        headers: {
            Authorization: `Bearer ${payload.token}`
        },
        data: {
            username: payload.username,
        }
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}

export const serviceUnlockAdmin = async (payload) => {
    const result = await axios.request({
        url: apiSuperUnlockAdmin,
        method: 'patch',
        headers: {
            Authorization: `Bearer ${payload.token}`
        },
        data: {
            username: payload.username,
        }
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}

export const serviceEditAdmin = async (payload) => {
    const result = await axios.request({
        url: apiSuperEditPassAdmin,
        method: 'patch',
        headers: {
            Authorization: `Bearer ${payload.token}`
        },
        data: {
            username: payload.username,
            password: payload.password
        }
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}

