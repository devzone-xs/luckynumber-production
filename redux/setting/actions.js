import { serviceGetSetting } from '../../service/admin'
import { serviceAdminGetPricePerUnit, serviceAdminGetPercent } from '../../service/admin'
import { serviceUserGetSetting } from '../../service/user'

export const fetchSetting = (payload) => async dispatch => {
    if (payload.role === 3) {
        var res = await serviceUserGetSetting({
            token: payload.token,
            date: payload.date,
        })
    }
    else if (payload.role === 1 || payload.role === 2) {
        var res = await serviceGetSetting({
            token: payload.token,
            date: payload.date,
        })
    }

    if (res !== 'err') {
        if (res.length !== 0) {
            //Th
            dispatch({ type: 'SET_TH_MON_MT', payload: res[0] })
            dispatch({ type: 'SET_TH_MON', payload: res[1] })
            dispatch({ type: 'SET_NON', payload: res[2] })
            dispatch({ type: 'SET_AF_NON_MT', payload: res[3] })
            dispatch({ type: 'SET_AF_NON', payload: res[4] })
            dispatch({ type: 'SET_EVN', payload: res[5] })

            //Fr
            dispatch({ type: 'SET_FR_DJ', payload: res[6] })
            dispatch({ type: 'SET_FR_NK_MON', payload: res[7] })
            dispatch({ type: 'SET_FR_CH_MON', payload: res[8] })
            dispatch({ type: 'SET_FR_HS_MON', payload: res[9] })
            dispatch({ type: 'SET_FR_TW', payload: res[10] })
            dispatch({ type: 'SET_FR_NK_AFN', payload: res[11] })
            dispatch({ type: 'SET_FR_KR', payload: res[12] })
            dispatch({ type: 'SET_FR_CH_AFN', payload: res[13] })
            dispatch({ type: 'SET_FR_HS_AFN', payload: res[14] })
            dispatch({ type: 'SET_FR_SP', payload: res[15] })
            dispatch({ type: 'SET_FR_ID', payload: res[16] })
            dispatch({ type: 'SET_FR_EY', payload: res[17] })

            //Ts
            dispatch({ type: 'SET_TS_RS', payload: res[18] })
            dispatch({ type: 'SET_TS_GE', payload: res[19] })
            dispatch({ type: 'SET_TS_EN', payload: res[20] })

            //Oh
            dispatch({ type: 'SET_HN', payload: res[21] })
            dispatch({ type: 'SET_HN_VIP', payload: res[22] })
            dispatch({ type: 'SET_LO', payload: res[23] })
            dispatch({ type: 'SET_MS', payload: res[24] })
            dispatch({ type: 'SET_GM', payload: res[25] })
        }
    }
}


export const fetchSettingPricePerUnit = (payload) => async dispatch => {
    var res = await serviceAdminGetPricePerUnit({
        token: payload.token,
        lottery_name: payload.lottery_name,
    })
    if (res !== 'err') {
        dispatch({ type: 'SET_PER_TH_MON_MT', payload: res[0] })
        dispatch({ type: 'SET_PER_TH_MON', payload: res[1] })
        dispatch({ type: 'SET_PER_NON', payload: res[2] })
        dispatch({ type: 'SET_PER_AF_NON_MT', payload: res[3] })
        dispatch({ type: 'SET_PER_AF_NON', payload: res[4] })
        dispatch({ type: 'SET_PER_EVN', payload: res[5] })

        dispatch({ type: 'SET_PER_FR_DJ', payload: res[6] })
        dispatch({ type: 'SET_PER_FR_NK_MON', payload: res[7] })
        dispatch({ type: 'SET_PER_FR_CH_MON', payload: res[8] })
        dispatch({ type: 'SET_PER_FR_HS_MON', payload: res[9] })
        dispatch({ type: 'SET_PER_FR_TW', payload: res[10] })
        dispatch({ type: 'SET_PER_FR_NK_AFN', payload: res[11] })
        dispatch({ type: 'SET_PER_FR_KR', payload: res[12] })
        dispatch({ type: 'SET_PER_FR_CH_AFN', payload: res[13] })
        dispatch({ type: 'SET_PER_FR_HS_AFN', payload: res[14] })
        dispatch({ type: 'SET_PER_FR_SP', payload: res[15] })
        dispatch({ type: 'SET_PER_FR_ID', payload: res[16] })
        dispatch({ type: 'SET_PER_FR_EY', payload: res[17] })

        dispatch({ type: 'SET_PER_TS_RS', payload: res[18] })
        dispatch({ type: 'SET_PER_TS_GE', payload: res[19] })
        dispatch({ type: 'SET_PER_TS_EN', payload: res[20] })

        dispatch({ type: 'SET_PER_HN', payload: res[21] })
        dispatch({ type: 'SET_PER_HN_VIP', payload: res[22] })
        dispatch({ type: 'SET_PER_LO', payload: res[23] })
        dispatch({ type: 'SET_PER_MS', payload: res[24] })
        dispatch({ type: 'SET_PER_GM', payload: res[25] })
    }
}

export const fetchPercent = (payload) => async dispatch => {
    var res = await serviceAdminGetPercent({
        token: payload.token
    })

    if (res !== 'err') {
        //Th
        dispatch({ type: 'SET_PERCENT_TH_MON_MT', payload: res[0] })
        dispatch({ type: 'SET_PERCENT_TH_MON', payload: res[1] })
        dispatch({ type: 'SET_PERCENT_NON', payload: res[2] })
        dispatch({ type: 'SET_PERCENT_AF_NON_MT', payload: res[3] })
        dispatch({ type: 'SET_PERCENT_AF_NON', payload: res[4] })
        dispatch({ type: 'SET_PERCENT_EVN', payload: res[5] })

        //Fr
        dispatch({ type: 'SET_PERCENT_FR_DJ', payload: res[6] })
        dispatch({ type: 'SET_PERCENT_FR_NK_MON', payload: res[7] })
        dispatch({ type: 'SET_PERCENT_FR_CH_MON', payload: res[8] })
        dispatch({ type: 'SET_PERCENT_FR_HS_MON', payload: res[9] })
        dispatch({ type: 'SET_PERCENT_FR_TW', payload: res[10] })
        dispatch({ type: 'SET_PERCENT_FR_NK_AFN', payload: res[11] })
        dispatch({ type: 'SET_PERCENT_FR_KR', payload: res[12] })
        dispatch({ type: 'SET_PERCENT_FR_CH_AFN', payload: res[13] })
        dispatch({ type: 'SET_PERCENT_FR_HS_AFN', payload: res[14] })
        dispatch({ type: 'SET_PERCENT_FR_SP', payload: res[15] })
        dispatch({ type: 'SET_PERCENT_FR_ID', payload: res[16] })
        dispatch({ type: 'SET_PERCENT_FR_EY', payload: res[17] })

        //Ts
        dispatch({ type: 'SET_PERCENT_TS_RS', payload: res[18] })
        dispatch({ type: 'SET_PERCENT_TS_GE', payload: res[19] })
        dispatch({ type: 'SET_PERCENT_TS_EN', payload: res[20] })

        //Oh
        dispatch({ type: 'SET_PERCENT_HN', payload: res[21] })
        dispatch({ type: 'SET_PERCENT_HN_VIP', payload: res[22] })
        dispatch({ type: 'SET_PERCENT_LO', payload: res[23] })
        dispatch({ type: 'SET_PERCENT_MS', payload: res[24] })
        dispatch({ type: 'SET_PERCENT_GM', payload: res[25] })
    }

}