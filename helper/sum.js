export const calTotalPrice = async (n, l, s) => {
    var regex = /([+])/g
    if (l !== 'ts') {
        let sum = await n.reduce((s, i) => {
            return s + parseInt(i.price)
        }, 0)
        //console.log('SUM', sum)
        return sum
    }
    else if (l === 'ts') {
        var num = s.match(regex)
        if (num === null) {
            let sum = await n.reduce((s, i) => {
                return s + parseInt(i.price)
            }, 0)
            //console.log('SUM', sum)
            return sum
        }

        else if (num.length === 1) {
            let sum = await n.reduce((s, i) => {
                return s + (parseInt(i.price) * 2)
            }, 0)
            //console.log('SUM', sum)
            return sum
        }
        else if (num.length === 2) {
            let sum = await n.reduce((s, i) => {
                return s + (parseInt(i.price) * 3)
            }, 0)
            //console.log('SUM', sum)
            return sum
        }
    }
}