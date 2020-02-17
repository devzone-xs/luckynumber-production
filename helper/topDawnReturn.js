// Pattern 1
export const calTDR = (num, price) => {
    // Pattern บลก
    var sum = []
    for (let i = 0; i < num.length; i++) {
        let item = {
            category: '01',
            num: num[i],
            price: price[0]
        }
        sum.push(item)
    }
    for (let i = 0; i < num.length; i++) {
        if (num[i].charAt(1) !== num[i].charAt(0)) {
            let item = {
                category: '01',
                num: num[i].charAt(1) + num[i].charAt(0),
                price: price[0]
            }
            sum.push(item)
        }
    }
    for (let i = 0; i < num.length; i++) {
        let item = {
            category: '02',
            num: num[i],
            price: price[0]
        }
        sum.push(item)
    }
    for (let i = 0; i < num.length; i++) {
        if (num[i].charAt(1) !== num[i].charAt(0)) {
            let item = {
                category: '02',
                num: num[i].charAt(1) + num[i].charAt(0),
                price: price[0]
            }
            sum.push(item)
        }
    }
    return sum
}

// Pattern 2
export const calTD = (num, price) => {
    // Pattern บล
    var sum = []
    for (let i = 0; i < num.length; i++) {
        let item = {
            category: '01',
            num: num[i],
            price: price[0]
        }
        sum.push(item)
    }
    for (let i = 0; i < num.length; i++) {
        let item = {
            category: '02',
            num: num[i],
            price: price[0]
        }
        sum.push(item)
    }
    return sum
}

// Pattern 3
export const calDR = (num, price) => {
    // Pattern ลก
    var sum = []
    for (let i = 0; i < num.length; i++) {
        let item = {
            category: '02',
            num: num[i],
            price: price[0]
        }
        sum.push(item)
    }
    for (let i = 0; i < num.length; i++) {
        if (num[i].charAt(1) !== num[i].charAt(0)) {
            let item = {
                category: '02',
                num: num[i].charAt(1) + num[i].charAt(0),
                price: price[0]
            }
            sum.push(item)
        }
    }
    return sum
}

// Pattern 4
export const calTR = (num, price) => {
    // Pattern บก
    var sum = []
    for (let i = 0; i < num.length; i++) {
        let item = {
            category: '01',
            num: num[i],
            price: price[0]
        }
        sum.push(item)
    }
    for (let i = 0; i < num.length; i++) {
        if (num[i].charAt(1) !== num[i].charAt(0)) {
            let item = {
                category: '01',
                num: num[i].charAt(1) + num[i].charAt(0),
                price: price[0]
            }
            sum.push(item)
        }
    }
    return sum
}

// Pattern 5
export const calTNDNRN = (num, price) => {
    // Pattern บ1ล1ก1
    var sum = []
    for (let i = 0; i < num.length; i++) {
        let item = {
            category: '01',
            num: num[i],
            price: price[0]
        }
        sum.push(item)
    }
    for (let i = 0; i < num.length; i++) {
        if (num[i].charAt(1) !== num[i].charAt(0)) {
            let item = {
                category: '01',
                num: num[i].charAt(1) + num[i].charAt(0),
                price: price[2]
            }
            sum.push(item)
        }
    }
    for (let i = 0; i < num.length; i++) {
        let item = {
            category: '02',
            num: num[i],
            price: price[1]
        }
        sum.push(item)
    }
    for (let i = 0; i < num.length; i++) {
        if (num[i].charAt(1) !== num[i].charAt(0)) {
            let item = {
                category: '02',
                num: num[i].charAt(1) + num[i].charAt(0),
                price: price[2]
            }
            sum.push(item)
        }
    }
    return sum
}

// Pattern 6
export const calTNDN = (num, price) => {
    // Pattern บ1ล2
    var sum = []
    for (let i = 0; i < num.length; i++) {
        let item = {
            category: '01',
            num: num[i],
            price: price[0]
        }
        sum.push(item)
    }
    for (let i = 0; i < num.length; i++) {
        let item = {
            category: '02',
            num: num[i],
            price: price[1]
        }
        sum.push(item)
    }
    return sum
}

// Pattern 7
export const calTNRN = (num, price) => {
    // Pattern บ1ก2
    var sum = []
    for (let i = 0; i < num.length; i++) {
        let item = {
            category: '01',
            num: num[i],
            price: price[0]
        }
        sum.push(item)
    }
    for (let i = 0; i < num.length; i++) {
        if (num[i].charAt(1) !== num[i].charAt(0)) {
            let item = {
                category: '01',
                num: num[i].charAt(1) + num[i].charAt(0),
                price: price[1]
            }
            sum.push(item)
        }
    }
    return sum
}

// Pattern 8
export const calDNRN = (num, price) => {
    // Pattern ล1ก2
    var sum = []
    for (let i = 0; i < num.length; i++) {
        let item = {
            category: '02',
            num: num[i],
            price: price[0]
        }
        sum.push(item)
    }
    for (let i = 0; i < num.length; i++) {
        if (num[i].charAt(1) !== num[i].charAt(0)) {
            let item = {
                category: '02',
                num: num[i].charAt(1) + num[i].charAt(0),
                price: price[1]
            }
            sum.push(item)
        }
    }
    return sum
}

export const calD = (num, price) => {
    // Pattern ล1
    var sum = []
    for (let i = 0; i < num.length; i++) {
        let item = {
            category: '02',
            num: num[i],
            price: price[0]
        }
        sum.push(item)
    }
    return sum
}

export const calT = (num, price) => {
    // Pattern บ1
    var sum = []
    for (let i = 0; i < num.length; i++) {
        let item = {
            category: '01',
            num: num[i],
            price: price[0]
        }
        sum.push(item)
    }
    return sum
}


//Limit
export const topDawnReturnNumLimit = (n, pt, m) => {
    // Pattern บลก
    if (pt === 'pt1') {
        var sum = []
        for (let i = 0; i < n.length; i++) {
            let item = {
                category: '01',
                numlimit: n[i],
                limit: m,
            }
            sum.push(item)
        }
        for (let i = 0; i < n.length; i++) {
            let item = {
                category: '01',
                numlimit: n[i].charAt(1) + n[i].charAt(0),
                limit: m,
            }
            sum.push(item)
        }
        for (let i = 0; i < n.length; i++) {
            let item = {
                category: '02',
                numlimit: n[i],
                limit: m,
            }
            sum.push(item)
        }
        for (let i = 0; i < n.length; i++) {
            let item = {
                category: '02',
                numlimit: n[i].charAt(1) + n[i].charAt(0),
                limit: m,
            }
            sum.push(item)
        }
        return sum
    }

    // Pattern บล
    else if (pt === 'pt2') {
        var sum = []
        for (let i = 0; i < n.length; i++) {
            let item = {
                category: '01',
                numlimit: n[i],
                limit: m,
            }
            sum.push(item)
        }
        for (let i = 0; i < n.length; i++) {
            let item = {
                category: '02',
                numlimit: n[i],
                limit: m,
            }
            sum.push(item)
        }
        return sum
    }

    // Pattern บก
    else if (pt === 'pt3') {
        var sum = []
        for (let i = 0; i < n.length; i++) {
            let item = {
                category: '01',
                numlimit: n[i],
                limit: m,
            }
            sum.push(item)
        }
        for (let i = 0; i < n.length; i++) {
            let item = {
                category: '01',
                numlimit: n[i].charAt(1) + n[i].charAt(0),
                limit: m,
            }
            sum.push(item)
        }
        return sum
    }

    // Pattern ลก
    else if (pt === 'pt4') {
        var sum = []
        for (let i = 0; i < n.length; i++) {
            let item = {
                category: '02',
                numlimit: n[i],
                limit: m,
            }
            sum.push(item)
        }
        for (let i = 0; i < n.length; i++) {
            let item = {
                category: '02',
                numlimit: n[i].charAt(1) + n[i].charAt(0),
                limit: m,
            }
            sum.push(item)
        }
        return sum
    }

    // Pattern บ
    else if (pt === 'pt5') {
        var sum = []
        for (let i = 0; i < n.length; i++) {
            let item = {
                category: '01',
                numlimit: n[i],
                limit: m,
            }
            sum.push(item)
        }
        return sum
    }

    // Pattern ล
    else if (pt === 'pt6') {
        var sum = []
        for (let i = 0; i < n.length; i++) {
            let item = {
                category: '02',
                numlimit: n[i],
                limit: m,
            }
            sum.push(item)
        }
        return sum
    }

}


