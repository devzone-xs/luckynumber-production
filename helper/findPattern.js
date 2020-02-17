import _ from 'lodash'

const findPattern = (pt) => {
    //Split Set
    let a = /([บ]{1}[ล]{1}[ก]{1}[\d]+)/
    let a1 = /([\d]+[บ]{1}[ล]{1}[ก]{1})/
    let b = /([บ]{1}[ล]{1}[\d]+)/
    let b1 = /[\d]+([บ]{1}[ล]{1})/
    let c = /([ล]{1}[ก]{1}[\d]+)/
    let c1 = /([\d]+[ล]{1}[ก]{1})/
    let d = /([บ]{1}[ก]{1}[\d]+)/
    let d1 = /([\d]+[บ]{1}[ก]{1})/
    let e = /([บ]{1}[\d]+[ล]{1}[\d]+[ก]{1}[\d]+)/
    let f = /([บ]{1}[\d]+[ล]{1}[\d]+)/
    let g = /([บ]{1}[\d]+[ก]{1}[\d]+)/
    let h = /([ล]{1}[\d]+[ก]{1}[\d]+)/
    let i = /([ล]{1}[\d]+)/
    let i1 = /([\d]+[ล]{1})/
    let j = /([บ]{1}[\d]+)/
    let j1 = /([\d]+[บ]{1})/

    //Check Pattern
    let pattern
    if (a.test(pt) || a1.test(pt)) {
        console.log('บลก')
        pattern = '01'
    }
    else if (b.test(pt) || b1.test(pt)) {
        console.log('บล')
        pattern = '02'
    }
    else if (c.test(pt) || c1.test(pt)) {
        console.log('ลก')
        pattern = '03'
    }
    else if (d.test(pt) || d1.test(pt)) {
        console.log('บก')
        pattern = '04'
    }
    else if (e.test(pt)) {
        console.log('บ1ล2ก3')
        pattern = '05'
    }
    else if (f.test(pt)) {
        console.log('บ1ล1')
        pattern = '06'
    }
    else if (g.test(pt)) {
        console.log('บ1ก2')
        pattern = '07'
    }
    else if (h.test(pt)) {
        console.log('ล1ก2')
        pattern = '08'
    }
    else if (i.test(pt) || i1.test(pt)) {
        console.log('ล')
        pattern = '09'
    }
    else if (j.test(pt) || j1.test(pt)) {
        console.log('บ')
        pattern = '10'
    }
    return pattern
}

export default findPattern


export const topDawnReturnNumOff = (n, pt) => {

    // Pattern บลก
    if (pt === 'pt1') {
        var sum = []
        for (let i = 0; i < n.length; i++) {
            let item = {
                category: '01',
                numoff: n[i],
            }
            sum.push(item)
        }
        for (let i = 0; i < n.length; i++) {
            let item = {
                category: '01',
                numoff: n[i].charAt(1) + n[i].charAt(0),
            }
            sum.push(item)
        }
        for (let i = 0; i < n.length; i++) {
            let item = {
                category: '02',
                numoff: n[i],
            }
            sum.push(item)
        }
        for (let i = 0; i < n.length; i++) {
            let item = {
                category: '02',
                numoff: n[i].charAt(1) + n[i].charAt(0),
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
                numoff: n[i],
            }
            sum.push(item)
        }
        for (let i = 0; i < n.length; i++) {
            let item = {
                category: '02',
                numoff: n[i],
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
                numoff: n[i],
            }
            sum.push(item)
        }
        for (let i = 0; i < n.length; i++) {
            let item = {
                category: '01',
                numoff: n[i].charAt(1) + n[i].charAt(0),
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
                numoff: n[i],
            }
            sum.push(item)
        }
        for (let i = 0; i < n.length; i++) {
            let item = {
                category: '02',
                numoff: n[i].charAt(1) + n[i].charAt(0),
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
                numoff: n[i],
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
                numoff: n[i],
            }
            sum.push(item)
        }
        return sum
    }

    // Pattern *6ปต
    else if (pt === 'pt7') {
        var sum = []
        for (let i = 0; i < n.length; i++) {
            let item = {
                category: '03',
                numoff: n[i],
            }
            sum.push(item)
            item = {
                category: '03',
                numoff: n[i].charAt(0) + n[i].charAt(2) + n[i].charAt(1),
            }
            sum.push(item)
            item = {
                category: '03',
                numoff: n[i].charAt(1) + n[i].charAt(0) + n[i].charAt(2),
            }
            sum.push(item)
            item = {
                category: '03',
                numoff: n[i].charAt(1) + n[i].charAt(2) + n[i].charAt(0),
            }
            sum.push(item)
            item = {
                category: '03',
                numoff: n[i].charAt(2) + n[i].charAt(0) + n[i].charAt(1),
            }
            sum.push(item)
            item = {
                category: '03',
                numoff: n[i].charAt(2) + n[i].charAt(1) + n[i].charAt(0),
            }
            sum.push(item)
        }
        sum = _.unionBy(sum, sum, 'numoff');
        return sum
    }
}


export const topDawnReturnNumLimit = (n, pt, limit) => {
    console.log('LIMIT', limit);

    // Pattern บลก
    if (pt === 'pt1') {
        var sum = []
        for (let i = 0; i < n.length; i++) {
            let item = {
                category: '01',
                numlimit: n[i],
                limit
            }
            sum.push(item)
        }
        for (let i = 0; i < n.length; i++) {
            let item = {
                category: '01',
                numlimit: n[i].charAt(1) + n[i].charAt(0),
                limit
            }
            sum.push(item)
        }
        for (let i = 0; i < n.length; i++) {
            let item = {
                category: '02',
                numlimit: n[i],
                limit
            }
            sum.push(item)
        }
        for (let i = 0; i < n.length; i++) {
            let item = {
                category: '02',
                numlimit: n[i].charAt(1) + n[i].charAt(0),
                limit
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
                limit
            }
            sum.push(item)
        }
        for (let i = 0; i < n.length; i++) {
            let item = {
                category: '02',
                numlimit: n[i],
                limit
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
                limit
            }
            sum.push(item)
        }
        for (let i = 0; i < n.length; i++) {
            let item = {
                category: '01',
                numlimit: n[i].charAt(1) + n[i].charAt(0),
                limit
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
                limit
            }
            sum.push(item)
        }
        for (let i = 0; i < n.length; i++) {
            let item = {
                category: '02',
                numlimit: n[i].charAt(1) + n[i].charAt(0),
                limit
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
                limit
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
                limit
            }
            sum.push(item)
        }
        return sum
    }

    // Pattern *6ปต
    else if (pt === 'pt7') {
        var sum = []
        for (let i = 0; i < n.length; i++) {
            let item = {
                category: '03',
                numlimit: n[i],
                limit
            }
            sum.push(item)
            item = {
                category: '03',
                numlimit: n[i].charAt(0) + n[i].charAt(2) + n[i].charAt(1),
                limit
            }
            sum.push(item)
            item = {
                category: '03',
                numlimit: n[i].charAt(1) + n[i].charAt(0) + n[i].charAt(2),
                limit
            }
            sum.push(item)
            item = {
                category: '03',
                numlimit: n[i].charAt(1) + n[i].charAt(2) + n[i].charAt(0),
                limit
            }
            sum.push(item)
            item = {
                category: '03',
                numlimit: n[i].charAt(2) + n[i].charAt(0) + n[i].charAt(1),
                limit
            }
            sum.push(item)
            item = {
                category: '03',
                numlimit: n[i].charAt(2) + n[i].charAt(1) + n[i].charAt(0),
                limit
            }
            sum.push(item)
        }
        sum = _.unionBy(sum, sum, 'numlimit')
        return sum
    }
}