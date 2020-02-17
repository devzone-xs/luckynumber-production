import _ from 'lodash'

export const patternOneNum = (n, p) => {
    var sum = []
    for (let i = 0; i < n.length; i++) {
        let item = {
            category: '03',
            num: n[i],
            price: p[0]
        }
        sum.push(item)
    }
    return sum
}

export const patternMainXSec = (n, p) => {
    var sum = []
    for (let i = 0; i < n.length; i++) {
        let item = {
            category: '03',
            num: n[i],
            price: p[0]
        }
        sum.push(item)
    }

    for (let i = 0; i < n.length; i++) {
        let item = {
            category: '04',
            num: n[i],
            price: p[1]
        }
        sum.push(item)
    }
    return sum
}

export const patternWinSec = (n, p) => {
    var sum = []
    // for (let i = 0; i < n.length; i++) {
    //     let item = {
    //         category: '04',
    //         num: n[i],
    //         price: p[0]
    //     }
    //     sum.push(item)
    // }
    for (let i = 0; i < n.length; i++) {
        let item = {
            category: '03',
            num: n[i],
            price: p[0]
        }
        sum.push(item)
        item = {
            category: '03',
            num: n[i].charAt(0) + n[i].charAt(2) + n[i].charAt(1),
            price: p[0]
        }
        sum.push(item)
        item = {
            category: '03',
            num: n[i].charAt(1) + n[i].charAt(0) + n[i].charAt(2),
            price: p[0]
        }
        sum.push(item)
        item = {
            category: '03',
            num: n[i].charAt(1) + n[i].charAt(2) + n[i].charAt(0),
            price: p[0]
        }
        sum.push(item)
        item = {
            category: '03',
            num: n[i].charAt(2) + n[i].charAt(0) + n[i].charAt(1),
            price: p[0]
        }
        sum.push(item)
        item = {
            category: '03',
            num: n[i].charAt(2) + n[i].charAt(1) + n[i].charAt(0),
            price: p[0]
        }
        sum.push(item)
    }
    sum = _.uniqBy(sum, 'num')
    return sum
}