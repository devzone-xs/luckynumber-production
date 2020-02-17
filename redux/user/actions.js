//Login
export const passLogin = (payload) => async dispatch => {
    dispatch({ type: 'SET_DATA', payload })
}

//Logout
export const passLogout = () => dispatch => {
    dispatch({ type: 'USER_LOGOUT' })
}

//Login Token
export const passLoginToken = (payload) => dispatch => {
    dispatch({ type: 'USER_LOGIN_TOKEN', payload })
}

export const changeState = (payload) => dispatch => {
    dispatch({ type: 'CHANGE_STATE', payload })
}

export const changeStateDate = (payload) => dispatch => {
    dispatch({ type: 'CHANGE_STATE_DATE', payload })
}

export const changeStateLotto = (payload) => dispatch => {
    dispatch({ type: 'CHANGE_STATE_LOTTO', payload })
}

export const changeStateSubLotto = (payload) => dispatch => {
    dispatch({ type: 'CHANGE_STATE_SUB_LOTTO', payload })
}

export const changeStateDeleteBill = (payload) => dispatch => {
    dispatch({ type: 'CHANGE_STATE_DELETE_BILL', payload })
}

export const changeStateCreateBill = (payload) => dispatch => {
    dispatch({ type: 'CHANGE_STATE_CREATE_BILL', payload })
}

export const setLoadFetch = (payload) => dispatch => {
    dispatch({ type: 'SET_LOADFETCH', payload })
}

export const setLoadFetchSummary = (payload) => dispatch => {
    dispatch({ type: 'SET_LOAD_SUMMARY', payload })
}

export const setLimitAll = (payload) => dispatch => {
    dispatch({ type: 'SET_LIMIT', payload })
}


