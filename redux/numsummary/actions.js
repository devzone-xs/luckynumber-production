import { serviceAdminGetSummary, serviceAdminGetPercent } from '../../service/admin'
import { serviceUserGetSummary } from '../../service/user'
import { CodeToLotteryName, ObjectToTextDate } from '../../helper/convert'
import { SortByPrice, SortByNum } from '../../helper/sort'

export const fetchNumSummary = (payload) => async dispatch => {
    if (payload.role === 1 || payload.role === 2) {
        var res = await serviceAdminGetSummary({
            token: payload.token,
            date: ObjectToTextDate(payload.date),
            lottery_name: payload.lottery_name,
            category: payload.category
        })
    }
    else if (payload.role === 3) {
        var res = await serviceUserGetSummary({
            token: payload.token,
            date: ObjectToTextDate(payload.date),
            lottery_name: payload.lottery_name,
            category: payload.category
        })
    }
    if (res !== 'err') {
        if (payload.sort === 'price') {
            if (payload.category === '01') {
                dispatch({ type: 'SET_TOTAL_UP', payload: res.total })
                dispatch({ type: 'SET_NUM_UP', payload: SortByPrice(res.allnum) })
            }
            else if (payload.category === '02') {
                dispatch({ type: 'SET_TOTAL_DOWN', payload: res.total })
                dispatch({ type: 'SET_NUM_DOWN', payload: SortByPrice(res.allnum) })
            }
            else if (payload.category === '03') {
                dispatch({ type: 'SET_TOTAL_MAIN', payload: res.total })
                dispatch({ type: 'SET_NUM_MAIN', payload: SortByPrice(res.allnum) })
            }
            else if (payload.category === '04') {
                dispatch({ type: 'SET_TOTAL_SEC', payload: res.total })
                dispatch({ type: 'SET_NUM_SEC', payload: SortByPrice(res.allnum) })
            }
        }
        else if (payload.sort === 'num') {
            if (payload.category === '01') {
                dispatch({ type: 'SET_TOTAL_UP', payload: res.total })
                dispatch({ type: 'SET_NUM_UP', payload: SortByNum(res.allnum) })

            }
            else if (payload.category === '02') {
                dispatch({ type: 'SET_TOTAL_DOWN', payload: res.total })
                dispatch({ type: 'SET_NUM_DOWN', payload: SortByNum(res.allnum) })
            }
            else if (payload.category === '03') {
                dispatch({ type: 'SET_TOTAL_MAIN', payload: res.total })
                dispatch({ type: 'SET_NUM_MAIN', payload: SortByNum(res.allnum) })
            }
            else if (payload.category === '04') {
                dispatch({ type: 'SET_TOTAL_SEC', payload: res.total })
                dispatch({ type: 'SET_NUM_SEC', payload: SortByNum(res.allnum) })
            }
        }
    }
}

export const sortNumSum = (payload) => dispatch => {
    if (payload.sort === 'price') {
        dispatch({ type: 'SET_NUM_UP', payload: SortByPrice(payload.num_up) })
        dispatch({ type: 'SET_NUM_DOWN', payload: SortByPrice(payload.num_down) })
        dispatch({ type: 'SET_NUM_MAIN', payload: SortByPrice(payload.num_main) })
        dispatch({ type: 'SET_NUM_SEC', payload: SortByPrice(payload.num_sec) })
    }
    else if (payload.sort === 'num') {
        dispatch({ type: 'SET_NUM_UP', payload: SortByNum(payload.num_up) })
        dispatch({ type: 'SET_NUM_DOWN', payload: SortByNum(payload.num_down) })
        dispatch({ type: 'SET_NUM_MAIN', payload: SortByNum(payload.num_main) })
        dispatch({ type: 'SET_NUM_SEC', payload: SortByNum(payload.num_sec) })
    }
    dispatch({ type: 'SET_STATE_SORT', payload: payload.sort })
}

export const fetchPercent = (payload) => async dispatch => {
    var res = await serviceAdminGetPercent({
        token: payload.token
    })
    if (res !== 'err') {
        dispatch({ type: 'SET_PERCENT_MON_M', payload: res[0] })
        dispatch({ type: 'SET_PERCENT_MON', payload: res[1] })
        dispatch({ type: 'SET_PERCENT_NON', payload: res[2] })
        dispatch({ type: 'SET_PERCENT_AFN_M', payload: res[3] })
        dispatch({ type: 'SET_PERCENT_AFN', payload: res[4] })
        dispatch({ type: 'SET_PERCENT_EVN', payload: res[5] })
    }

}