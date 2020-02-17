export const downloadSum = (payload) => async dispatch => {
    dispatch({ type: 'SET_SUM', payload })
}

export const downloadBill = (payload) => async dispatch => {
    dispatch({ type: 'SET_BILL_CUSTOMER', payload })
}