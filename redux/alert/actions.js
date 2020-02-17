export const setAlert = (message, color) => dispatch => {
    var payload = {
        message,
        color
    }
    dispatch({ type: 'SET_ALERT', payload })
    setTimeout(() => {
        dispatch({ type: 'RESET_ALERT' })
    }, 1500)
}