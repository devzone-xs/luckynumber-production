const num = {
    num_up: [],
    total_up: 0,
    num_down: [],
    total_down: 0,
    num_main: [],
    total_main: 0,
    num_sec: [],
    total_sec: 0,
    total: 0,
    state: 'num',
    state_th: 'num',
    percent: {
        th_mon_market: {},
        th_mon: {},
        th_non: {},
        th_afn_market: {},
        th_afn: {},
        th_evn: {},
    }
}

export const numSummaryReducer = (state = num, action) => {
    switch (action.type) {
        case 'SET_NUM_UP':
            return state = { ...state, num_up: action.payload }
        case 'SET_NUM_DOWN':
            return state = { ...state, num_down: action.payload }
        case 'SET_TOTAL_UP':
            return state = { ...state, total_up: action.payload }
        case 'SET_TOTAL_DOWN':
            return state = { ...state, total_down: action.payload }
        case 'SET_NUM_MAIN':
            return state = { ...state, num_main: action.payload }
        case 'SET_NUM_SEC':
            return state = { ...state, num_sec: action.payload }
        case 'SET_TOTAL_MAIN':
            return state = { ...state, total_main: action.payload }
        case 'SET_TOTAL_SEC':
            return state = { ...state, total_sec: action.payload }
        case 'SET_STATE_SORT':
            return state = { ...state, state: action.payload }

        case 'SET_PERCENT_MON_M':
            return state = {
                ...state, percent: {
                    ...state.percent,
                    th_mon_market: action.payload
                }
            }
        case 'SET_PERCENT_MON':
            return state = {
                ...state, percent: {
                    ...state.percent,
                    th_mon: action.payload
                }
            }
        case 'SET_PERCENT_NON':
            return state = {
                ...state, percent: {
                    ...state.percent,
                    th_non: action.payload
                }
            }
        case 'SET_PERCENT_AFN_M':
            return state = {
                ...state, percent: {
                    ...state.percent,
                    th_afn_market: action.payload
                }
            }
        case 'SET_PERCENT_AFN':
            return state = {
                ...state, percent: {
                    ...state.percent,
                    th_afn: action.payload
                }
            }
        case 'SET_PERCENT_EVN':
            return state = {
                ...state, percent: {
                    ...state.percent,
                    th_evn: action.payload
                }
            }
        default:
            return state
    }
}