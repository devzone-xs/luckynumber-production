export const setNowLotto = (payload) => async dispatch => {
    dispatch({ type: 'SET_NOW_LOTTO', payload })
}

export const selectLottoTh = (payload) => async dispatch => {
    dispatch({ type: 'SET_LOTTO_TH', payload })
}

export const selectLottoFr = (payload) => async dispatch => {
    dispatch({ type: 'SET_LOTTO_FR', payload })
}

export const selectLottoThTab = (payload) => async dispatch => {
    dispatch({ type: 'SET_LOTTO_TH_TAB', payload })
}

export const changeLottoTH = (payload) => async dispatch => {
    dispatch({ type: 'SET_LOTTO_TH', payload })
}

export const changeLottoFR = (payload) => async dispatch => {
    dispatch({ type: 'SET_LOTTO_FR', payload })
}

export const changeLottoTS = (payload) => async dispatch => {
    dispatch({ type: 'SET_LOTTO_TS', payload })
}

export const changeLottoHN = (payload) => async dispatch => {
    dispatch({ type: 'SET_LOTTO_HN', payload })
}

export const changeLottoLO = (payload) => async dispatch => {
    dispatch({ type: 'SET_LOTTO_LO', payload })
}

export const changeLottoMS = (payload) => async dispatch => {
    dispatch({ type: 'SET_LOTTO_MS', payload })
}

export const changeLottoGM = (payload) => async dispatch => {
    dispatch({ type: 'SET_LOTTO_GM', payload })
}

export const setSubLotto = (payload) => async dispatch => {
    dispatch({ type: 'SET_SUB_LOTTO', payload })
}

export const resetSubLotto = () => async dispatch => {
    dispatch({ type: 'SET_SUB_LOTTO', payload: 'c1' })
}

export const setLottoryName = (payload) => async dispatch => {
    dispatch({ type: 'SET_LOTTORY_NAME', payload })
}