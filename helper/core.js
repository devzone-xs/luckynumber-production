import { PassOne, PassTwo, PassThree, PassFour, PassOneNum, PassTwoNum, PassTwoNumLimit } from './supportCore'
import { calTotalPrice } from './sum.js'

export const numToArr = async (v) => {
    //console.log('X------------------------------------------------------------------------------------------------------------------X')
    // console.log('TEXT----', v.input)
    // console.log('NOWSTATE----', v.lottery)
    // console.log('USERNAME----', v.name)
    // console.log('ROLE----', v.now)
    var payload

    var one = await PassOne(v)
    if (!one) {
        return false
    }
    else if (one) {
        payload = v
    }
    // console.log('PAYLOAD ONE', payload);

    var two = await PassTwo(payload)
    if (!two) {
        return false
    }
    else if (two) {
        payload = two
    }
    // console.log('PAYLOAD TWO', payload)
    var three = await PassThree(payload)
    if (!three) {
        return false
    }
    else if (three) {
        payload = three
    }

    var four = await PassFour(payload)
    if (!four) {
        return false
    }
    else if (four) {
        payload = three
    }
    // console.log('PAYLOAD FINAL', payload)
    payload.total = await calTotalPrice(payload.nums, payload.now, payload.lottery)
    return payload
}

export const OperatorNum = async (n, m, f, p) => {
    var payload = {
        input: n,
        now: m,
    }
    var one = await PassOneNum(payload)
    if (!one) {
        return false
    }

    if (f === 'off') {
        var two = await PassTwoNum(payload)
        if (!two) {
            return false
        }
        else {
            payload.nums = two
        }
        return payload
    }

    else if (f === 'limit') {
        payload.price = p
        var two_limit = await PassTwoNumLimit(payload)
        if (!two_limit) {
            return false
        }
        else {
            payload.nums = two_limit
        }
        return payload
    }
}


export const textAoArrNumOff = (n, pt) => {
    // 10-20 | บลก
    let pass_split = n.split('=')

    // [10,20,30]
    var numTwo = /([\d]{2})/g
    var num = pass_split[0].match(numTwo)

    // Array { category: '01', numoff: '20' }
    let arr = topDawnReturnNumOff(num, pt)

    return arr
}

export const textAoArrNumLimit = (n, pt, m) => {
    // 10-20 | บลก
    let pass_split = n.split('=')

    // [10,20,30]
    var numTwo = /([\d]{2})/g
    var num = pass_split[0].match(numTwo)

    // Array { category: '01', numoff: '20' }
    let arr = topDawnReturnNumLimit(num, pt, m)

    return arr
}