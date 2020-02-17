const slip = {
    id: '',
    name: '',
    username: '',
    date: '',
    count: '',
    lottery: '',
    up: '',
    down: '',
    main: '',
    sec: '',
    total: '',
}

export const showslipReducer = (state = slip, action) => {
    switch (action.type) {
        case 'SET_DATA_SLIP':
            return state = action.payload
        default:
            return state
    }
}