import { addZero } from '../../helper/condition'

const date = {
    now: {
        day: '',
        mon: '',
        year: '',
    },
}

export const dateReducer = (state = date, action) => {
    switch (action.type) {
        case 'SET_NOWDATE':
            return state = {
                now: {
                    day: addZero(action.payload.day),
                    mon: addZero(action.payload.mon),
                    year: action.payload.year,
                }
            }
        case 'SET_INITIALDATE':
            return state = {
                now: {
                    day: addZero(action.payload.day),
                    mon: addZero(action.payload.mon),
                    year: action.payload.year,
                }
            }
        default:
            return state
    }
}