const user = {
    payload: {},
    access_token: '',
    isAuthen: false,
    change: false,
    changeDate: false,
    changeLotto: false,
    changeSubLotto: false,
    changeDeleteBill: false,
    changeCreateBill: false,
    loadFetchBill: true,
    loadSummary: true,
    limit: false,
}

export const userReducer = (state = user, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return state = {
                ...state,
                access_token: action.payload.access_token,
                payload: action.payload.payload,
                isAuthen: true
            }
        case 'USER_LOGOUT':
            return state = user
        case 'CHANGE_STATE':
            return state = { ...state, change: action.payload }
        case 'CHANGE_STATE_DATE':
            return state = { ...state, changeDate: action.payload }
        case 'CHANGE_STATE_LOTTO':
            return state = { ...state, changeLotto: action.payload }
        case 'CHANGE_STATE_SUB_LOTTO':
            return state = { ...state, changeSubLotto: action.payload }
        case 'CHANGE_STATE_DELETE_BILL':
            return state = { ...state, changeDeleteBill: action.payload }
        case 'CHANGE_STATE_CREATE_BILL':
            return state = { ...state, changeCreateBill: action.payload }
        case 'SET_LOADFETCH':
            return state = { ...state, loadFetchBill: action.payload }
        case 'SET_LOAD_SUMMARY':
            return state = { ...state, loadSummary: action.payload }
        case 'SET_LIMIT':
            return state = { ...state, limit: action.payload }
        default:
            return state
    }
}