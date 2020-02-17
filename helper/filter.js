import _ from 'lodash'

export const filterLock = (user) => {
    let sum = 0
    user.filter((item) => {
        if (item.lock === 0) { sum = sum + 1 }
    })
    return sum
}

export const filterPercentByLotteryName = (p, n) => {
    if (n === 'c1') {
        return p.th_mon_market
    }
    else if (n === 'c2') {
        return p.th_mon
    }
    else if (n === 'c3') {
        return p.th_non
    }
    else if (n === 'c4') {
        return p.th_afn_market
    }
    else if (n === 'c5') {
        return p.th_afn
    }
    else if (n === 'c6') {
        return p.th_evn
    }
}

export const filterPricePerUnitByLotteryName = (p, n) => {
    if (n === 'c1') {
        return p.per_th_mon_market
    }
    else if (n === 'c2') {
        return p.per_th_mon
    }
    else if (n === 'c3') {
        return p.per_th_non
    }
    else if (n === 'c4') {
        return p.per_th_afn_market
    }
    else if (n === 'c5') {
        return p.per_th_afn
    }
    else if (n === 'c6') {
        return p.per_th_evn
    }
}

export const filterPercentId = (p, n) => {
    if (n === 'c1') {
        return p.th_mon_market.percent_id
    }
    else if (n === 'c2') {
        return p.th_mon.percent_id
    }
    else if (n === 'c3') {
        return p.th_non.percent_id
    }
    else if (n === 'c4') {
        return p.th_afn_market.percent_id
    }
    else if (n === 'c5') {
        return p.th_afn.percent_id
    }
    else if (n === 'c6') {
        return p.th_evn.percent_id
    }
}

export const filterRewardPrice = (p, c) => {
    var sum = 0
    p.filter((i) => {
        if (i.category === c) {
            sum = sum + parseInt(i.reward_price)
        }
    })
    if (isNaN(sum)) {
        return '0'
    }
    else {
        return parseInt(sum).toLocaleString()
    }
}

export const countRewardPrice = (a, c) => {

    var sum = 0
    a.map((i, k) => {
        if (i.buy_lottery_id.reward == 1) {
            var sumIn = i.buy_lottery_id.nums.reduce((s, x) => {
                if (x.category == c) {
                    return s + parseInt(x.reward_price)
                }
                else {
                    return s
                }
            }, 0)
            sum = sum + sumIn
        }
    })
    // console.log('SUM', sum)
    if (isNaN(sum)) {
        return 0
    }
    else
        return sum
}

export const filterNumCategory = (n, c) => {
    var result = []
    n.filter((i) => {
        if (i.category == c) {
            result.push(i)
        }
    })
    return result
}

export const filterNumByCategory = (n, c) => {
    return n.filter((i) => {
        if (i.category === c) {
            return i
        }
    })
}

export const filterNumLimitUser = (v, n) => {
    if (v !== false) {
        var result = v.filter((i) => {
            if (i.lottery_name === n) {
                return i
            }
        })
        if (result.length !== 0)
            return result[0].limit
        else {
            return ''
        }
    }
    else
        return ''
}

export const filterBillOwner = (v, u) => {
    return v.filter((i) => {
        if (i.username === u) {
            return i
        }
    })
}

export const filterRewardNum = (v) => {
    var result = v.filter((i) => {
        if (i.reward === 1) {
            return i
        }
    })
    if (result.length !== 0) {
        return result[0]
    }
    else {
        return false
    }
}

export const filterNotRewardNum = (v) => {
    return v.filter((i) => {
        if (i.reward === 0 || i.reward === 2) {
            return i
        }
    })
}