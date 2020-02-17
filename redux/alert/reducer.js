const alert = {
    message: '',
    state: false,
    color: '',

}

export const alertReducer = (state = alert, action) => {
    switch (action.type) {
        case 'SET_ALERT':
            return state = {
                message: action.payload.message,
                state: true,
                color: action.payload.color,
            }
        case 'RESET_ALERT':
            return state = {
                message: '',
                state: false,
                color: '',
            }
        default:
            return state
    }
}