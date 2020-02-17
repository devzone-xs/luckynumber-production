const menuState = {
    lt1_lotto: 'c1',
    lt2_lotto: 'c1',
    lt3_lotto: 'c1',
    lt4_lotto: 'c1',
    lt5_lotto: 'c1',
    lt6_lotto: 'c1',
    lt7_lotto: 'c1',
    now_lotto: 'fr',
    sub_lotto: 'c1',
    lottery_name: 'fr_dj',
}

export const menuReducer = (state = menuState, action) => {
    switch (action.type) {
        case 'SET_NOW_LOTTO':
            return state = { ...state, now_lotto: action.payload }
        case 'SET_SUB_LOTTO':
            return state = { ...state, sub_lotto: action.payload }
        case 'SET_LOTTORY_NAME':
            return state = { ...state, lottery_name: action.payload }

        case 'SET_LOTTO_TH':
            return state = { ...state, lt1_lotto: action.payload }
        case 'SET_LOTTO_FR':
            return state = { ...state, lt2_lotto: action.payload }
        case 'SET_LOTTO_TS':
            return state = { ...state, lt3_lotto: action.payload }
        case 'SET_LOTTO_HN':
            return state = { ...state, lt4_lotto: action.payload }
        case 'SET_LOTTO_LO':
            return state = { ...state, lt5_lotto: action.payload }
        case 'SET_LOTTO_MS':
            return state = { ...state, lt6_lotto: action.payload }
        case 'SET_LOTTO_GM':
            return state = { ...state, lt7_lotto: action.payload }

        default:
            return state
    }
}