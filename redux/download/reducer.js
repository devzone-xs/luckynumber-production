const download = {
    name: false,
    date: false,
    sum: false,
    bill: {
        main: false,
        sec: false,
        up: false,
        down: false,
    },
}

export const downloadReducer = (state = download, action) => {
    switch (action.type) {
        case 'SET_SUM':
            return state = { ...state, sum: action.payload }
        case 'SET_BILL_CUSTOMER':
            return state = { ...state, bill: action.payload }
        default:
            return state
    }
}