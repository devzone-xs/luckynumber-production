import moment from 'moment'

//Set Now Date
export const setStateDate = (payload) => async dispatch => {
    dispatch({ type: 'SET_NOWDATE', payload })
}

export const initialDate = () => async dispatch => {
    let date = moment().format('L')
    let sub = date.split('/')
    let payload = {
        day: sub[1],
        mon: sub[0],
        year: sub[2],
    }
    dispatch({ type: 'SET_INITIALDATE', payload })
}