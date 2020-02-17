const billState = {
    data: [],
    filter: [],
}

export const billReducer = (state = billState, action) => {
    switch (action.type) {
        case 'SET_BILL':
            return state = { ...state, data: action.payload }
        case 'SET_BILL_FILTER':
            return state = { ...state, filter: action.payload }
        default:
            return state
    }
}