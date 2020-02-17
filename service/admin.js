import axios from 'axios'
import {
    apiAdminCreateAssistent,
    apiAdminGetAssistent,
    apiAdminEditAssistent,
    apiAdminDeleteAssistent,
    apiAdminLockAssistent,
    apiAdminUnlockAssistent,
    apiAdminCreateUser,
    apiAdminGetUser,
    apiAdminEditUser,
    apiAdminDeleteUser,
    apiAdminLockUser,
    apiAdminUnlockUser,
    apiAdminBuyLottery,
    apiAdminGetSlip,
    apiAdminDeleteSlip,
    apiAdminSlipByName,
    apiAdminSummary,
    apiAdminEditSetting,
    apiAdminCreateNumOff,
    apiAdminDeleteNumOff,
    apiAdminPercent,
    apiAdminCreateNumLimit,
    apiAdminCreateNumLimitName,
    apiAdminDeleteNumLimit,
    apiAdminDeleteNumLimitName,
    apiAdminEditPricePerUnit,
    apiAdminGetPricePerUnit,
    apiAdminGetSetting,
    apiSetNumLimitAll,
    apiGetNumLimitUser,
    apiAdminCreateNumLimitUser,
    apiAdminGetSummaryAll
} from './index'

//Admin Create Assistent
export const serviceAdminCreateAssistent = async (payload) => {
    const result = await axios.request({
        url: apiAdminCreateAssistent,
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

//Admin Get Assistent
export const serviceAdminGetAssistent = async (token) => {
    const result = await axios.request({
        url: apiAdminGetAssistent,
        method: 'get',
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}

//Admin Delete Assistent
export const serviceAdminDeleteAssistent = async (payload) => {
    const result = await axios.request({
        url: apiAdminDeleteAssistent,
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

//Admin Lock Assistent
export const serviceAdminLockAssistent = async (payload) => {
    const result = await axios.request({
        url: apiAdminLockAssistent,
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

//Admin Unlock Assistent
export const serviceAdminUnlockAssistent = async (payload) => {
    const result = await axios.request({
        url: apiAdminUnlockAssistent,
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

//Admin Edit Assistent
export const serviceAdminEditAssistent = async (payload) => {
    const result = await axios.request({
        url: apiAdminEditAssistent,
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

//Admin Create User
export const serviceAdminCreateUser = async (payload) => {
    const result = await axios.request({
        url: apiAdminCreateUser,
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

//Admin Get User
export const serviceAdminGetUser = async (token) => {
    const result = await axios.request({
        url: apiAdminGetUser,
        method: 'get',
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}

//Admin Delete User
export const serviceAdminDeleteUser = async (payload) => {
    const result = await axios.request({
        url: apiAdminDeleteUser,
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

//Admin Lock User
export const serviceAdminLockUser = async (payload) => {
    const result = await axios.request({
        url: apiAdminLockUser,
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

//Admin Unlock User
export const serviceAdminUnlockUser = async (payload) => {
    const result = await axios.request({
        url: apiAdminUnlockUser,
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

//Admin Edit User
export const serviceAdminEditUser = async (payload) => {
    const result = await axios.request({
        url: apiAdminEditUser,
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

//Admin Buy Lottery 
export const serviceAdminBuyLottery = async (payload) => {
    const result = await axios.request({
        url: apiAdminBuyLottery,
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

//Admin Get Slip All 
export const serviceAdminGetAllSlip = async (payload) => {
    const result = await axios.request({
        url: apiAdminGetSlip,
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

//Admin Get Slip By Lottery Name
export const serviceAdminGetSlipByName = async (payload) => {
    const result = await axios.request({
        url: `${apiAdminSlipByName}/${payload.lottery_name}`,
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

//Admin Delete Slip 
export const serviceAdminDeleteSlip = async (payload) => {
    const result = await axios.request({
        url: apiAdminDeleteSlip,
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

//Admin Get Summary 
export const serviceAdminGetSummary = async (payload) => {
    const result = await axios.request({
        url: apiAdminSummary,
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

export const editSettingLottoTimeOut = async (payload) => {
    const result = await axios.request({
        url: `${apiAdminEditSetting}/${payload.lottery_name}/${payload.date}`,
        method: 'patch',
        headers: {
            Authorization: `Bearer ${payload.token}`
        },
        data: {
            time_out: payload.time_out,
        }
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}

export const editSettingLottoRewardMain = async (payload) => {
    const result = await axios.request({
        url: `${apiAdminEditSetting}/${payload.lottery_name}/${payload.date}`,
        method: 'patch',
        headers: {
            Authorization: `Bearer ${payload.token}`
        },
        data: {
            reward_three: payload.reward_three,
        }
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}


export const editSettingLottoRewardUp = async (payload) => {
    const result = await axios.request({
        url: `${apiAdminEditSetting}/${payload.lottery_name}/${payload.date}`,
        method: 'patch',
        headers: {
            Authorization: `Bearer ${payload.token}`
        },
        data: {
            reward_up: payload.reward_up,
        }
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}

export const editSettingLottoRewardDown = async (payload) => {
    const result = await axios.request({
        url: `${apiAdminEditSetting}/${payload.lottery_name}/${payload.date}`,
        method: 'patch',
        headers: {
            Authorization: `Bearer ${payload.token}`
        },
        data: {
            reward_down: payload.reward_down,
        }
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}

export const serviceAdminCreateNumOff = async (payload) => {
    const result = await axios.request({
        url: apiAdminCreateNumOff,
        method: 'post',
        headers: {
            Authorization: `Bearer ${payload.token}`
        },
        data: {
            lottery_name: payload.lottery_name,
            date: payload.date,
            nums: payload.nums,
        }
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}

export const serviceAdminDeleteNumOff = async (payload) => {
    const result = await axios.request({
        url: apiAdminDeleteNumOff,
        method: 'delete',
        headers: {
            Authorization: `Bearer ${payload.token}`
        },
        data: {
            numoff_id: payload.numoff_id,
        }
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}

export const serviceAdminGetPercent = async (payload) => {
    const result = await axios.request({
        url: apiAdminPercent,
        method: 'get',
        headers: {
            Authorization: `Bearer ${payload.token}`
        },
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}

export const serviceAdminUpdatePercent = async (payload) => {
    const result = await axios.request({
        url: apiAdminPercent,
        method: 'patch',
        headers: {
            Authorization: `Bearer ${payload.token}`
        },
        data: {
            lottery_name: payload.lottery_name,
            percent_id: payload.percent_id,
            percent: payload.percent,
        }
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}

export const serviceAdminCreateNumLimit = async (payload) => {
    const result = await axios.request({
        url: apiAdminCreateNumLimit,
        method: 'post',
        headers: {
            Authorization: `Bearer ${payload.token}`
        },
        data: {
            lottery_name: payload.lottery_name,
            date: payload.date,
            nums: payload.nums,
        }
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}

export const serviceAdminCreateNumLimitName = async (payload) => {
    const result = await axios.request({
        url: apiAdminCreateNumLimitName,
        method: 'post',
        headers: {
            Authorization: `Bearer ${payload.token}`
        },
        data: {
            name: payload.name,
            lottery_name: payload.lottery_name,
            date: payload.date,
            nums: payload.nums,
        }
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}


export const serviceAdminDeleteNumLimit = async (payload) => {
    const result = await axios.request({
        url: apiAdminDeleteNumLimit,
        method: 'delete',
        headers: {
            Authorization: `Bearer ${payload.token}`
        },
        data: {
            numlimit_id: payload.numlimit_id,
        }
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}

export const serviceAdminDeleteNumLimitName = async (payload) => {
    const result = await axios.request({
        url: apiAdminDeleteNumLimitName,
        method: 'delete',
        headers: {
            Authorization: `Bearer ${payload.token}`
        },
        data: {
            numlimit_user_id: payload.numlimit_user_id,
        }
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}

export const serviceAdminGetPricePerUnit = async (payload) => {
    const result = await axios.request({
        url: apiAdminGetPricePerUnit,
        method: 'get',
        headers: {
            Authorization: `Bearer ${payload.token}`
        },
        data: {
            lottery_name: payload.lottery_name,
        }
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}


export const serviceAdminEditPricePerUnit = async (payload) => {
    const result = await axios.request({
        url: apiAdminEditPricePerUnit,
        method: 'patch',
        headers: {
            Authorization: `Bearer ${payload.token}`
        },
        data: {
            per_id: payload.per_id,
            lottery_name: payload.lottery_name,
            price: payload.price,
            date: payload.date
        }
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}

export const serviceAdminEditPricePerUnitMain = async (payload) => {
    const result = await axios.request({
        url: apiAdminEditPricePerUnit,
        method: 'patch',
        headers: {
            Authorization: `Bearer ${payload.token}`
        },
        data: {
            per_id: payload.per_id,
            lottery_name: payload.lottery_name,
            price_main: payload.price_main,
            date: payload.date
        }
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}

export const serviceAdminEditPricePerUnitSec = async (payload) => {
    const result = await axios.request({
        url: apiAdminEditPricePerUnit,
        method: 'patch',
        headers: {
            Authorization: `Bearer ${payload.token}`
        },
        data: {
            per_id: payload.per_id,
            lottery_name: payload.lottery_name,
            price_sec: payload.price_sec,
            date: payload.date
        }
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}

export const serviceAdminEditPricePerUnitUp = async (payload) => {
    const result = await axios.request({
        url: apiAdminEditPricePerUnit,
        method: 'patch',
        headers: {
            Authorization: `Bearer ${payload.token}`
        },
        data: {
            per_id: payload.per_id,
            lottery_name: payload.lottery_name,
            price_up: payload.price_up,
            date: payload.date
        }
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}

export const serviceAdminEditPricePerUnitDown = async (payload) => {
    const result = await axios.request({
        url: apiAdminEditPricePerUnit,
        method: 'patch',
        headers: {
            Authorization: `Bearer ${payload.token}`
        },
        data: {
            per_id: payload.per_id,
            lottery_name: payload.lottery_name,
            price_down: payload.price_down,
            date: payload.date
        }
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}

export const serviceGetSetting = async (payload) => {
    const result = await axios.request({
        url: apiAdminGetSetting,
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

export const serviceSetNumLimitAll = async (payload) => {
    const result = await axios.request({
        url: apiSetNumLimitAll,
        method: 'post',
        headers: {
            Authorization: `Bearer ${payload.token}`
        },
        data: {
            lottery_name: payload.lottery_name,
            date: payload.date,
            limit: payload.limit,
        }
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}

export const serviceGetNumLimitAll = async (payload) => {
    const result = await axios.request({
        url: `${apiSetNumLimitAll}/${payload.lottery_name}/${payload.date}`,
        method: 'get',
        headers: {
            Authorization: `Bearer ${payload.token}`
        },
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}

export const serviceAdminGetLimitUser = async (payload) => {
    const result = await axios.request({
        url: apiGetNumLimitUser,
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

export const serviceAdmiCreateLimitUser = async (payload) => {
    const result = await axios.request({
        url: apiAdminCreateNumLimitUser,
        method: 'post',
        headers: {
            Authorization: `Bearer ${payload.token}`
        },
        data: {
            date: payload.date,
            lottery_name: payload.lottery_name,
            limit: payload.limit,
        }
    })
        .then(res => { return res.data })
        .catch(error => { return 'err' })
    return result
}

export const serviceAdminGetSummaryAll = async (payload) => {
    const result = await axios.request({
        url: apiAdminGetSummaryAll,
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








