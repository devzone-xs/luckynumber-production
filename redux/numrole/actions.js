export const setNumoff = (payload) => dispatch => {
    dispatch({ type: 'SET_NUMOFF', payload })
}

export const setNumlimit = (payload) => dispatch => {
    dispatch({ type: 'SET_NUMLIMIT', payload })
}

export const setNumlimitUser = (payload) => dispatch => {
    dispatch({ type: 'SET_NUMLIMIT_USER', payload })
}