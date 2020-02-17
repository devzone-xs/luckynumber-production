export const onePerOne = (k) => {
    return true
}

export const onePerThree = (k) => {
    if ((k + 1) % 3 === 1)
        return true
    else
        return false
}

export const twoPerThree = (k) => {
    if ((k + 1) % 3 === 2)
        return true
    else
        return false
}

export const threePerThree = (k) => {
    if ((k + 1) % 3 === 0)
        return true
    else
        return false
}

export const addZero = (d) => {
    var x = d.toString()
    if (x.length === 1) {
        return 0 + x
    }
    else if (d.length === 2) {
        return d
    }
}

// export const menuSelete = (m, tab, c) => {
//     if (tab === 'th') {
//         if (c === 'c1') {
//             return m.th_mon_market
//         }
//         else if (c === 'c2') {
//             return m.th_mon
//         }
//         else if (c === 'c3') {
//             return m.th_non
//         }
//         else if (c === 'c4') {
//             return m.th_afn_market
//         }
//         else if (c === 'c5') {
//             return m.th_afn
//         }
//         else if (c === 'c6') {
//             return m.th_evn
//         }
//     }
//     else if (tab === 'fr') {
//         if (c === 'c1') {
//             return m.fr_dj
//         }
//         else if (c === 'c2') {
//             return m.fr_nk_mon
//         }
//         else if (c === 'c3') {
//             return m.fr_hs_mon
//         }
//         else if (c === 'c4') {
//             return m.fr_tw
//         }
//         else if (c === 'c5') {
//             return m.fr_nk_afn
//         }
//         else if (c === 'c6') {
//             return m.fr_kr
//         }
//         else if (c === 'c7') {
//             return m.fr_ch_afn
//         }
//         else if (c === 'c8') {
//             return m.fr_hs_afn
//         }
//         else if (c === 'c9') {
//             return m.fr_sp
//         }
//         else if (c === 'c10') {
//             return m.fr_id
//         }
//         else if (c === 'c11') {
//             return m.fr_ey
//         }
//     }
//     else if (tab === 'ts') {
//         if (c === 'c1') {
//             return m.ts_rs
//         }
//         else if (c === 'c2') {
//             return m.ts_ge
//         }
//         else if (c === 'c3') {
//             return m.ts_en
//         }
//     }
//     else if (tab === 'lo') {
//         if (c === 'lo') {
//             return m.lo
//         }
//     }
//     else if (tab === 'ms') {
//         if (c === 'ms') {
//             return m.ms
//         }
//     }
//     else if (tab === 'gm') {
//         if (c === 'gm') {
//             return m.gm
//         }
//     }
// }

export const selectLotto = (o, n) => {
    if (n === 'th_mon_market') { return o.th_mon_market }
    else if (n === 'th_mon') { return o.th_mon }
    else if (n === 'th_non') { return o.th_non }
    else if (n === 'th_afn_market') { return o.th_afn_market }
    else if (n === 'th_afn') { return o.th_afn }
    else if (n === 'th_evn') { return o.th_evn }

    else if (n === 'fr_dj') { return o.fr_dj }
    else if (n === 'fr_nk_mon') { return o.fr_nk_mon }
    else if (n === 'fr_ch_mon') { return o.fr_ch_mon }
    else if (n === 'fr_hs_mon') { return o.fr_hs_mon }
    else if (n === 'fr_tw') { return o.fr_tw }
    else if (n === 'fr_nk_afn') { return o.fr_nk_afn }
    else if (n === 'fr_kr') { return o.fr_kr }
    else if (n === 'fr_ch_afn') { return o.fr_ch_afn }
    else if (n === 'fr_hs_afn') { return o.fr_hs_afn }
    else if (n === 'fr_sp') { return o.fr_sp }
    else if (n === 'fr_id') { return o.fr_id }
    else if (n === 'fr_ey') { return o.fr_ey }

    else if (n === 'ts_rs') { return o.ts_rs }
    else if (n === 'ts_ge') { return o.ts_ge }
    else if (n === 'ts_en') { return o.ts_en }

    else if (n === 'hn') { return o.hn }
    else if (n === 'hn_vip') { return o.hn_vip }
    else if (n === 'lo') { return o.lo }
    else if (n === 'ms') { return o.ms }
    else if (n === 'gm') { return o.gm }
}

export const perUnitfilter = (o, n) => {
    if (n === 'th_mon_market') { return o.per_th_mon_market }
    else if (n === 'th_mon') { return o.per_th_mon }
    else if (n === 'th_non') { return o.per_th_non }
    else if (n === 'th_afn_market') { return o.per_th_afn_market }
    else if (n === 'th_afn') { return o.per_th_afn }
    else if (n === 'th_evn') { return o.per_th_evn }

    else if (n === 'fr_dj') { return o.per_fr_dj }
    else if (n === 'fr_nk_mon') { return o.per_fr_nk_mon }
    else if (n === 'fr_ch_mon') { return o.per_fr_ch_mon }
    else if (n === 'fr_hs_mon') { return o.per_fr_hs_mon }
    else if (n === 'fr_tw') { return o.per_fr_tw }
    else if (n === 'fr_nk_afn') { return o.per_fr_nk_afn }
    else if (n === 'fr_kr') { return o.per_fr_kr }
    else if (n === 'fr_ch_afn') { return o.per_fr_ch_afn }
    else if (n === 'fr_hs_afn') { return o.per_fr_hs_afn }
    else if (n === 'fr_sp') { return o.per_fr_sp }
    else if (n === 'fr_id') { return o.per_fr_id }
    else if (n === 'fr_ey') { return o.per_fr_ey }

    else if (n === 'ts_rs') { return o.per_ts_rs }
    else if (n === 'ts_ge') { return o.per_ts_ge }
    else if (n === 'ts_en') { return o.per_ts_en }

    else if (n === 'hn') { return o.per_hn }
    else if (n === 'hn_vip') { return o.per_hn_vip }
    else if (n === 'lo') { return o.per_lo }
    else if (n === 'ms') { return o.per_ms }
    else if (n === 'gm') { return o.per_gm }
}

export const limitOperation = (m, p) => {
    if (p === m)
        return 'full'
    else if (p > (+m * 0.8) && m !== false) {
        return 'next'
    }
    else
        return ''
}
