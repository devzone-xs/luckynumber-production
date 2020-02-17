const setting = {
    th_mon_market: false,
    th_mon: false,
    th_non: false,
    th_afn_market: false,
    th_afn: false,
    th_evn: false,

    fr_dj: false,
    fr_nk_mon: false,
    fr_ch_mon: false,
    fr_hs_mon: false,
    fr_tw: false,
    fr_nk_afn: false,
    fr_kr: false,
    fr_ch_afn: false,
    fr_hs_afn: false,
    fr_sp: false,
    fr_id: false,
    fr_ey: false,

    ts_rs: false,
    ts_ge: false,
    ts_en: false,

    hn: false,
    hn_vip: false,
    lo: false,
    ms: false,
    gm: false,
    per_unit: {
        per_th_mon_market: false,
        per_th_mon: false,
        per_th_non: false,
        per_th_afn_market: false,
        per_th_afn: false,
        per_th_evn: false,

        per_fr_dj: false,
        per_fr_nk_mon: false,
        per_fr_ch_mon: false,
        per_fr_hs_mon: false,
        per_fr_tw: false,
        per_fr_nk_afn: false,
        per_fr_kr: false,
        per_fr_ch_afn: false,
        per_fr_hs_afn: false,
        per_fr_sp: false,
        per_fr_id: false,
        per_fr_ey: false,

        per_ts_rs: false,
        per_ts_ge: false,
        per_ts_en: false,

        per_hn: false,
        per_hn_vip: false,
        per_lo: false,
        per_ms: false,
        per_gm: false,
    },

    percent: {
        th_mon_market: false,
        th_mon: false,
        th_non: false,
        th_afn_market: false,
        th_afn: false,
        th_evn: false,

        fr_dj: false,
        fr_nk_mon: false,
        fr_ch_mon: false,
        fr_hs_mon: false,
        fr_tw: false,
        fr_nk_afn: false,
        fr_kr: false,
        fr_ch_afn: false,
        fr_hs_afn: false,
        fr_sp: false,
        fr_id: false,
        fr_ey: false,

        ts_rs: false,
        ts_ge: false,
        ts_en: false,

        hn: false,
        hn_vip: false,
        lo: false,
        ms: false,
        gm: false,
    }
}

export const settingReducer = (state = setting, action) => {
    switch (action.type) {
        case 'SET_TH_MON_MT':
            return state = { ...state, th_mon_market: action.payload }
        case 'SET_TH_MON':
            return state = { ...state, th_mon: action.payload }
        case 'SET_NON':
            return state = { ...state, th_non: action.payload }
        case 'SET_AF_NON_MT':
            return state = { ...state, th_afn_market: action.payload }
        case 'SET_AF_NON':
            return state = { ...state, th_afn: action.payload }
        case 'SET_EVN':
            return state = { ...state, th_evn: action.payload }

        case 'SET_FR_DJ':
            return state = { ...state, fr_dj: action.payload }
        case 'SET_FR_NK_MON':
            return state = { ...state, fr_nk_mon: action.payload }
        case 'SET_FR_CH_MON':
            return state = { ...state, fr_ch_mon: action.payload }
        case 'SET_FR_HS_MON':
            return state = { ...state, fr_hs_mon: action.payload }
        case 'SET_FR_TW':
            return state = { ...state, fr_tw: action.payload }
        case 'SET_FR_NK_AFN':
            return state = { ...state, fr_nk_afn: action.payload }
        case 'SET_FR_KR':
            return state = { ...state, fr_kr: action.payload }
        case 'SET_FR_CH_AFN':
            return state = { ...state, fr_ch_afn: action.payload }
        case 'SET_FR_HS_AFN':
            return state = { ...state, fr_hs_afn: action.payload }
        case 'SET_FR_SP':
            return state = { ...state, fr_sp: action.payload }
        case 'SET_FR_ID':
            return state = { ...state, fr_id: action.payload }
        case 'SET_FR_EY':
            return state = { ...state, fr_ey: action.payload }

        case 'SET_TS_RS':
            return state = { ...state, ts_rs: action.payload }
        case 'SET_TS_GE':
            return state = { ...state, ts_ge: action.payload }
        case 'SET_TS_EN':
            return state = { ...state, ts_en: action.payload }

        case 'SET_HN':
            return state = { ...state, hn: action.payload }
        case 'SET_HN_VIP':
            return state = { ...state, hn_vip: action.payload }
        case 'SET_LO':
            return state = { ...state, lo: action.payload }
        case 'SET_MS':
            return state = { ...state, ms: action.payload }
        case 'SET_GM':
            return state = { ...state, gm: action.payload }


        //Per Th
        case 'SET_PER_TH_MON_MT':
            return state = {
                ...state, per_unit: {
                    ...state.per_unit,
                    per_th_mon_market: action.payload
                }
            }
        case 'SET_PER_TH_MON':
            return state = {
                ...state, per_unit: {
                    ...state.per_unit,
                    per_th_mon: action.payload
                }
            }
        case 'SET_PER_NON':
            return state = {
                ...state, per_unit: {
                    ...state.per_unit,
                    per_th_non: action.payload
                }
            }
        case 'SET_PER_AF_NON_MT':
            return state = {
                ...state, per_unit: {
                    ...state.per_unit,
                    per_th_afn_market: action.payload
                }
            }
        case 'SET_PER_AF_NON':
            return state = {
                ...state, per_unit: {
                    ...state.per_unit,
                    per_th_afn: action.payload
                }
            }
        case 'SET_PER_EVN':
            return state = {
                ...state, per_unit: {
                    ...state.per_unit,
                    per_th_evn: action.payload
                }
            }

        //Per Fr
        case 'SET_PER_FR_DJ':
            return state = {
                ...state, per_unit: {
                    ...state.per_unit,
                    per_fr_dj: action.payload
                }
            }
        case 'SET_PER_FR_NK_MON':
            return state = {
                ...state, per_unit: {
                    ...state.per_unit,
                    per_fr_nk_mon: action.payload
                }
            }
        case 'SET_PER_FR_CH_MON':
            return state = {
                ...state, per_unit: {
                    ...state.per_unit,
                    per_fr_ch_mon: action.payload
                }
            }
        case 'SET_PER_FR_HS_MON':
            return state = {
                ...state, per_unit: {
                    ...state.per_unit,
                    per_fr_hs_mon: action.payload
                }
            }
        case 'SET_PER_FR_TW':
            return state = {
                ...state, per_unit: {
                    ...state.per_unit,
                    per_fr_tw: action.payload
                }
            }
        case 'SET_PER_FR_NK_AFN':
            return state = {
                ...state, per_unit: {
                    ...state.per_unit,
                    per_fr_nk_afn: action.payload
                }
            }
        case 'SET_PER_FR_KR':
            return state = {
                ...state, per_unit: {
                    ...state.per_unit,
                    per_fr_kr: action.payload
                }
            }
        case 'SET_PER_FR_CH_AFN':
            return state = {
                ...state, per_unit: {
                    ...state.per_unit,
                    per_fr_ch_afn: action.payload
                }
            }
        case 'SET_PER_FR_HS_AFN':
            return state = {
                ...state, per_unit: {
                    ...state.per_unit,
                    per_fr_hs_afn: action.payload
                }
            }
        case 'SET_PER_FR_SP':
            return state = {
                ...state, per_unit: {
                    ...state.per_unit,
                    per_fr_sp: action.payload
                }
            }
        case 'SET_PER_FR_ID':
            return state = {
                ...state, per_unit: {
                    ...state.per_unit,
                    per_fr_id: action.payload
                }
            }
        case 'SET_PER_FR_EY':
            return state = {
                ...state, per_unit: {
                    ...state.per_unit,
                    per_fr_ey: action.payload
                }
            }

        //Per Ts
        case 'SET_PER_TS_RS':
            return state = {
                ...state, per_unit: {
                    ...state.per_unit,
                    per_ts_rs: action.payload
                }
            }
        case 'SET_PER_TS_GE':
            return state = {
                ...state, per_unit: {
                    ...state.per_unit,
                    per_ts_ge: action.payload
                }
            }
        case 'SET_PER_TS_EN':
            return state = {
                ...state, per_unit: {
                    ...state.per_unit,
                    per_ts_en: action.payload
                }
            }

        //Per Oh
        case 'SET_PER_HN':
            return state = {
                ...state, per_unit: {
                    ...state.per_unit,
                    per_hn: action.payload
                }
            }
        case 'SET_PER_HN_VIP':
            return state = {
                ...state, per_unit: {
                    ...state.per_unit,
                    per_hn_vip: action.payload
                }
            }
        case 'SET_PER_LO':
            return state = {
                ...state, per_unit: {
                    ...state.per_unit,
                    per_lo: action.payload
                }
            }
        case 'SET_PER_MS':
            return state = {
                ...state, per_unit: {
                    ...state.per_unit,
                    per_ms: action.payload
                }
            }
        case 'SET_PER_GM':
            return state = {
                ...state, per_unit: {
                    ...state.per_unit,
                    per_gm: action.payload
                }
            }

        //Percent Th
        case 'SET_PERCENT_TH_MON_MT':
            return state = {
                ...state, percent: {
                    ...state.percent,
                    th_mon_market: action.payload
                }
            }
        case 'SET_PERCENT_TH_MON':
            return state = {
                ...state, percent: {
                    ...state.percent,
                    th_mon: action.payload
                }
            }
        case 'SET_PERCENT_NON':
            return state = {
                ...state, percent: {
                    ...state.percent,
                    th_non: action.payload
                }
            }
        case 'SET_PERCENT_AF_NON_MT':
            return state = {
                ...state, percent: {
                    ...state.percent,
                    th_afn_market: action.payload
                }
            }
        case 'SET_PERCENT_AF_NON':
            return state = {
                ...state, percent: {
                    ...state.percent,
                    th_afn: action.payload
                }
            }
        case 'SET_PERCENT_EVN':
            return state = {
                ...state, percent: {
                    ...state.percent,
                    th_evn: action.payload
                }
            }

        //Percent Fr
        case 'SET_PERCENT_FR_DJ':
            return state = {
                ...state, percent: {
                    ...state.percent,
                    fr_dj: action.payload
                }
            }
        case 'SET_PERCENT_FR_NK_MON':
            return state = {
                ...state, percent: {
                    ...state.percent,
                    fr_nk_mon: action.payload
                }
            }
        case 'SET_PERCENT_FR_CH_MON':
            return state = {
                ...state, percent: {
                    ...state.percent,
                    fr_ch_mon: action.payload
                }
            }
        case 'SET_PERCENT_FR_HS_MON':
            return state = {
                ...state, percent: {
                    ...state.percent,
                    fr_hs_mon: action.payload
                }
            }
        case 'SET_PERCENT_FR_TW':
            return state = {
                ...state, percent: {
                    ...state.percent,
                    fr_tw: action.payload
                }
            }
        case 'SET_PERCENT_FR_NK_AFN':
            return state = {
                ...state, percent: {
                    ...state.percent,
                    fr_nk_afn: action.payload
                }
            }
        case 'SET_PERCENT_FR_KR':
            return state = {
                ...state, percent: {
                    ...state.percent,
                    fr_kr: action.payload
                }
            }
        case 'SET_PERCENT_FR_CH_AFN':
            return state = {
                ...state, percent: {
                    ...state.percent,
                    fr_ch_afn: action.payload
                }
            }
        case 'SET_PERCENT_FR_HS_AFN':
            return state = {
                ...state, percent: {
                    ...state.percent,
                    fr_hs_afn: action.payload
                }
            }
        case 'SET_PERCENT_FR_SP':
            return state = {
                ...state, percent: {
                    ...state.percent,
                    fr_sp: action.payload
                }
            }
        case 'SET_PERCENT_FR_ID':
            return state = {
                ...state, percent: {
                    ...state.percent,
                    fr_id: action.payload
                }
            }
        case 'SET_PERCENT_FR_EY':
            return state = {
                ...state, percent: {
                    ...state.percent,
                    fr_ey: action.payload
                }
            }

        //Percent Ts
        case 'SET_PERCENT_TS_RS':
            return state = {
                ...state, percent: {
                    ...state.percent,
                    ts_rs: action.payload
                }
            }
        case 'SET_PERCENT_TS_GE':
            return state = {
                ...state, percent: {
                    ...state.percent,
                    ts_ge: action.payload
                }
            }
        case 'SET_PERCENT_TS_EN':
            return state = {
                ...state, percent: {
                    ...state.percent,
                    ts_en: action.payload
                }
            }

        //Percent Oh
        case 'SET_PERCENT_HN':
            return state = {
                ...state, percent: {
                    ...state.percent,
                    hn: action.payload
                }
            }
        case 'SET_PERCENT_HN_VIP':
            return state = {
                ...state, percent: {
                    ...state.percent,
                    hn_vip: action.payload
                }
            }
        case 'SET_PERCENT_LO':
            return state = {
                ...state, percent: {
                    ...state.percent,
                    lo: action.payload
                }
            }
        case 'SET_PERCENT_MS':
            return state = {
                ...state, percent: {
                    ...state.percent,
                    ms: action.payload
                }
            }
        case 'SET_PERCENT_GM':
            return state = {
                ...state, percent: {
                    ...state.percent,
                    gm: action.payload
                }
            }

        default:
            return state
    }
}