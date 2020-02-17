export const findRootNumber = (n) => {
    let pattern_01 = /([รูด]{3})[\d/]+[*][19]{2}[ปต]{2}/ //รูด3*19ปต
    let pattern_01s = /([รูด]{3})(\d)[*][19]{2}/ //รูด3*19
    let pattern_01x = /([รูด]{3})[\d/]+[*][20]{2}[ปต]{2}/ //รูด3*20ปต
    let pattern_01r = /([รูด]{3}[\d]{1})/ //รูด3
    let pattern_02 = /([รูดหน้า]{7}[/][\d]{1})/ //รูดหน้า/4
    let pattern_02s = /([รูดหน้า]{7}[\d]{1})/ //รูดหน้า4
    let pattern_03 = /([รูดหลัง]{7}[/][\d]{1})/ //รูดหลัง/4
    let pattern_03s = /([รูดหลัง]{7}[\d]{1})/ //รูดหลัง4
    let pattern_04 = /([รูดเบิ้ล]{8})/ //รูดเบิ้ล
    let pattern_05 = /([รูดพี่น้อง]{10})/ //รูดพี่น้อง

    if (pattern_01.test(n) || pattern_01s.test(n)) {
        // console.log('รูดX*19ปต')
        var value = []
        var new_n = n.replace('19', '')
        var num = new_n.match(/\d+/g)
        for (var k = 0; k < num.length; k++) {
            for (let i = 0; i < 10; i++) {
                let num_1 = num[k] + i
                value.push(num_1)
                if (n.charAt(3) != i) {
                    let num_2 = i + num[k]
                    value.push(num_2)
                }
            }
        }
        return value
    }

    else if (pattern_01x.test(n) || pattern_01r.test(n)) {
        // console.log('รูด3*20ปต')
        var value = []
        var new_n = n.replace('20', '')
        var num = new_n.match(/\d+/g)
        for (var k = 0; k < num.length; k++) {
            for (let i = 0; i < 10; i++) {
                let num_1 = num[k] + i
                value.push(num_1)
                let num_2 = i + num[k]
                value.push(num_2)
            }
        }
        return value
    }

    else if (pattern_02.test(n) || pattern_02s.test(n)) {
        // console.log('รูดหน้า/4')
        var value = []
        var num = n.match(/\d+/g)
        console.log('NUM', num);
        for (var k = 0; k < num.length; k++) {
            for (let i = 0; i < 10; i++) {
                let num_1 = num[k] + i
                value.push(num_1)
            }
        }
        return value
    }

    else if (pattern_03.test(n) || pattern_03s.test(n)) {
        // console.log('รูดหลัง/4')
        var value = []
        var num = n.match(/\d+/g)
        for (var k = 0; k < num.length; k++) {
            for (let i = 0; i < 10; i++) {
                let num_1 = i + num[k]
                value.push(num_1)
            }
        }
        return value
    }

    else if (pattern_04.test(n)) {
        // console.log('รูดเบิ้ล')
        var value = []
        var num = n.match(/\d+/g)
        for (let i = 0; i < 10; i++) {
            let num_1 = i + '' + i
            value.push(num_1)
        }
        return value
    }

    else if (pattern_05.test(n)) {
        // console.log('รูดพี่น้อง')
        //01, 12, 23, 34, 45, 56, 67, 78, 89, 90, 09, 98, 87, 76, 65, 54, 43, 32, 21, 10
        var value = ["01", "10", "12", "21", "23", "32", "34", "43", "45", "54", "56", "65", "67", "76", "78", "87", "89", "98", "90", "09"]
        return value
    }
}

export const findWinNumber = (n) => {
    var num = n.replace('วิน', '')
    var set = num.split('')
    var result = []
    var loop
    if (set.length === 3) { loop = 3 }
    else if (set.length === 3) { loop = 3 }
    else if (set.length === 4) { loop = 6 }
    else if (set.length === 5) { loop = 10 }
    else if (set.length === 6) { loop = 15 }
    else if (set.length === 7) { loop = 21 }
    else if (set.length === 8) { loop = 28 }
    else if (set.length < 3) {
        loop = 'error'
    }
    if (loop !== 'error') {
        for (let i = 0; i < loop; i++) {
            for (let k = 0; k <= loop - i; k++) {
                if (set[i] !== set[k]) {
                    if (k > i) {
                        if (set[k] !== undefined) {
                            var a = set[i] + set[k]
                            result.push(a)
                        }
                    }
                }
            }
        }
        // console.log('RESULT WIN', result)
        return result.sort()
    }
    else {
        return 'error'
    }
}

export const findRootThreeNum = () => {
    let value = ["000", "111", "222", "333", "444", "555", "666", "777", "888", "999"]
    return value
}