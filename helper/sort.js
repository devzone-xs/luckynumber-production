import _ from 'lodash'

export const SortList = (d, o) => {
    if (o === 0) {
        return d
    }
    else if (o === 1) {
        return _.sortBy(d, [(o) => {
            return parseInt(o.total)
        }]).reverse()
    }
    else if (o === 2) {
        return _.sortBy(d, [(o) => {
            return parseInt(o.total)
        }])
    }
    else if (o === 3) {
        return _.sortBy(d, [(o) => {
            return parseInt(o.id_order)
        }])
    }
    else if (o === 4) {
        return _.sortBy(d, [(o) => {
            return parseInt(o.id_order)
        }]).reverse()
    }
    else if (o === 5) {
        return _.sortBy(d, [(o) => {
            return o.name
        }])
    }
    else if (o === 6) {
        return _.sortBy(d, [(o) => {
            return parseInt(o.buy_lottery_id.reward_price)
        }]).reverse()
    }
}

export const SortByPrice = (d) => {
    return _.sortBy(d, [(o) => {
        return o.price
    }]).reverse()
}

export const SortByNum = (d) => {
    return _.sortBy(d, [(o) => {
        return parseInt(o.num)
    }])
}

export const NunOffSortByNum = (d) => {
    return _.sortBy(d, [(o) => {
        return parseInt(o.numoff)
    }])
}