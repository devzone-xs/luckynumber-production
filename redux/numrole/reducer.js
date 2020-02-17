const numrole = {
    numoff: [],
    numlimit: [],
    numlimit_user: false
}

export const numRoleReducer = (state = numrole, action) => {
    switch (action.type) {
        case 'SET_NUMOFF':
            return state = { ...state, numoff: action.payload }
        case 'SET_NUMLIMIT':
            return state = { ...state, numlimit: action.payload }
        case 'SET_NUMLIMIT_USER':
            return state = { ...state, numlimit_user: action.payload }
        default:
            return state
    }
}