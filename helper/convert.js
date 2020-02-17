import _ from 'lodash'

export const ArrToNewArrNum = (n) => {
    var newSet = []
    var newTwo = []
    // console.log('INPUT PASS SHOW', n)
    for (var i = 0; i < n.length; i++) {
        if (n[i].category === '01') {
            var s = {
                num: n[i].num,
                up: n[i].price,
                pass_up: n[i].pass,
                reward_price: n[i].reward_price,
                reward: n[i].reward,
            }
        }
        else if (n[i].category === '02') {
            var s = {
                num: n[i].num,
                down: n[i].price,
                pass_down: n[i].pass,
                reward_price: n[i].reward_price,
                reward: n[i].reward,
            }
        }
        newSet.push(s)
        newTwo.push(s)
    }
    // console.log('PROCESS PASS SHOW', newSet)
    var output = _.map(_.groupBy(newSet.concat(newTwo), 'num'),
        val => ({
            num: val[0].num,
            down: checkUndefined(_.union(this, val.map(v => v.down))[0], _.union(this, val.map(v => v.down))[1]),
            up: checkUndefined(_.union(this, val.map(v => v.up))[0], _.union(this, val.map(v => v.up))[1]),
            pass_up: val[0].pass_up,
            pass_down: val[0].pass_down,
            reward_price: val[0].reward_price,
            reward: checkReward(val[0].reward, val[1].reward),
        })
    )
    // console.log('OUTPUT PASS SHOW', output)

    return _.sortBy(output, [(o) => {
        return parseInt(o.num)
    }])
}

export const checkUndefined = (a, b) => {
    if (a === undefined)
        return b
    else if (b === undefined)
        return a
    else {
        return parseInt(a) + parseInt(b)
    }
}

export const checkReward = (a, b) => {
    if (a == 1 && b == 1) {
        return 1
    }
    else if (a == 1) {
        return 1
    }
    else if (b == 1) {
        return 1
    }
    else if (a == 0 && b == 0) {
        return 0
    }
}

export const LotteryToName = (n) => {
    if (n === 'th_mon_market') {
        return 'ไทยเช้า (ตลาด)'
    }
    else if (n === 'th_mon') {
        return 'ไทยเช้า'
    }
    else if (n === 'th_non') {
        return 'ไทยเที่ยง'
    }
    else if (n === 'th_afn_market') {
        return 'ไทยบ่ายตลาด'
    }
    else if (n === 'th_afn') {
        return 'ไทยบ่าย'
    }
    else if (n === 'th_evn') {
        return 'ไทยเย็น'
    }

    else if (n === 'fr_dj') {
        return 'ดาวโจนส์'
    }
    else if (n === 'fr_nk_mon') {
        return 'นิเคอิเช้า'
    }
    else if (n === 'fr_ch_mon') {
        return 'จีนเช้า'
    }
    else if (n === 'fr_hs_mon') {
        return 'ฮั่งเส็งเช้า'
    }
    else if (n === 'fr_tw') {
        return 'ใต้หวัน'
    }
    else if (n === 'fr_nk_afn') {
        return 'นิเคอิบ่าย'
    }
    else if (n === 'fr_kr') {
        return 'เกาหลี'
    }
    else if (n === 'fr_ch_afn') {
        return 'จีนบ่าย'
    }
    else if (n === 'fr_hs_afn') {
        return 'ฮั่งเส็งบ่าย'
    }
    else if (n === 'fr_sp') {
        return 'สิงคโปร์'
    }
    else if (n === 'fr_id') {
        return 'อินเดีย'
    }
    else if (n === 'fr_ey') {
        return 'อียิปต์'
    }

    else if (n === 'ts_rs') {
        return 'รัสเซีย'
    }
    else if (n === 'ts_ge') {
        return 'เยอรมัน'
    }
    else if (n === 'ts_en') {
        return 'อังกฤษ'
    }
    else if (n === 'ts_rs+ts_ge+ts_en') {
        return '3รัฐ'
    }
    else if (n === 'ts_rs+ts_en') {
        return 'รัสเซียและอังกฤษ'
    }
    else if (n === 'ts_rs+ts_ge') {
        return 'รัสเซียและเยอรมัน'
    }
    else if (n === 'ts_ge+ts_en') {
        return 'อังกฤษและเยอรมัน'
    }

    else if (n === 'hn') {
        return 'ฮานอย'
    }
    else if (n === 'hn_vip') {
        return 'ฮานอย VIP'
    }
    else if (n === 'lo') {
        return 'ลาว'
    }
    else if (n === 'ms') {
        return 'มาเลย์'
    }
    else if (n === 'gm') {
        return 'รัฐบาล'
    }
}

export const CodeToLotteryName = (n) => {
    if (n === 'c1') {
        return 'th_mon_market'
    }
    else if (n === 'c2') {
        return 'th_mon'
    }
    else if (n === 'c3') {
        return 'th_non'
    }
    else if (n === 'c4') {
        return 'th_afn_market'
    }
    else if (n === 'c5') {
        return 'th_afn'
    }
    else if (n === 'c6') {
        return 'th_evn'
    }
}

export const RoleToText = (role) => {
    if (role === 0) {
        return 'Super'
    }
    else if (role === 1) {
        return 'Admin'
    }
    else if (role === 2) {
        return 'Assistent'
    }
    else if (role === 3) {
        return 'User'
    }
}

export const ObjectDateToBasicDate = (d) => {
    return `${d.day}-${d.mon}-${d.year}`
}

export const RoleToLinkManage = (role) => {
    if (role === 0) {
        return '/super'
    }
    else if (role === 1 || role === 2) {
        return '/manage'
    }
}

export const RoleToLinkLottoThai = (role) => {
    if (role === 1) {
        return '/lotto'
    }
    else if (role === 2) {
        return '/assistent/lotto'
    }
    else if (role === 3) {
        return '/user/lotto'
    }
}

export const RoleToLinkLottoForeign = (role) => {
    if (role === 1) {
        return '/admin/lotto'
    }
    else if (role === 2) {
        return '/assistent/lotto'
    }
    else if (role === 3) {
        return '/user/lotto'
    }
}

export const LottoENtoTH = (n) => {
    if (n === 'th') {
        return 'หุ้นไทย'
    }
    else if (n === 'fr') {
        return 'หุ้นต่างประเทศ'
    }
}

export const ObjectToTextDate = (date) => {
    return `${date.day}-${date.mon}-${date.year}`
}

export const ObjectToDateSlash = (date) => {
    return `${date.day}/${date.mon}/${date.year}`
}

export const ArrToLength = (arr) => {
    return arr.length
}

export const CodePassSetting = (code, sub, setting) => {
    if (code === 'th') {
        if (sub === 'c1') {
            return setting.th_mon_market
        }
        else if (sub === 'c2') {
            return setting.th_mon
        }
        else if (sub === 'c3') {
            return setting.th_non
        }
        else if (sub === 'c4') {
            return setting.th_afn_market
        }
        else if (sub === 'c5') {
            return setting.th_afn
        }
        else if (sub === 'c6') {
            return setting.th_evn
        }
        else if (sub === 'c7') {
            return setting.th_evn
        }
    }
    else if (code === 'fr') {
        if (sub === 'c1') {
            return setting.fr_dj
        }
        else if (sub === 'c2') {
            return setting.fr_nk_mon
        }
        else if (sub === 'c3') {
            return setting.fr_ch_mon
        }
        else if (sub === 'c4') {
            return setting.fr_hs_mon
        }
        else if (sub === 'c5') {
            return setting.fr_tw
        }
        else if (sub === 'c6') {
            return setting.fr_nk_afn
        }
        else if (sub === 'c7') {
            return setting.fr_kr
        }
        else if (sub === 'c8') {
            return setting.fr_ch_afn
        }
        else if (sub === 'c9') {
            return setting.fr_hs_afn
        }
        else if (sub === 'c10') {
            return setting.fr_sp
        }
        else if (sub === 'c11') {
            return setting.fr_id
        }
        else if (sub === 'c12') {
            return setting.fr_ey
        }
    }
    else if (code === 'ts') {
        if (sub === 'c1') {
            return setting.ts_rs
        }
        else if (sub === 'c2') {
            return setting.ts_ge
        }
        else if (sub === 'c3') {
            return setting.ts_en
        }
    }
    else if (code === 'hn') {
        if (sub === 'c1') {
            return setting.hn
        }
        else if (sub === 'c2') {
            return setting.hn_vip
        }
    }
    else if (code === 'lo' && sub === 'c1') {
        return setting.lo
    }
    else if (code === 'ms' && sub === 'c1') {
        return setting.ms
    }
    else if (code === 'gm' && sub === 'c1') {
        return setting.gm
    }
}

export const HourMinuteToTime = (h, m) => {
    return h + ':' + m
}

export const RewardUpThreeToTwo = (n) => {
    if (n.length === 3) {
        return n.charAt(1) + n.charAt(2)
    }
    else {
        return n
    }
}

export const codeCategoryToName = (code) => {
    if (code === '01') {
        return 'บน'
    }
    else if (code === '02') {
        return 'ล่าง'
    }
    else if (code === '03') {
        return '3ตัว'
    }
}

export const percentNum = (n = 0, p = 0) => {
    return n - ((n * p) / 100)
}