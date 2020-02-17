export const setBill = (payload) => async dispatch => {
    dispatch({ type: 'SET_BILL', payload: payload.reverse() })
}

export const setBillFilter = (payload) => async dispatch => {
    dispatch({ type: 'SET_BILL_FILTER', payload })
}
