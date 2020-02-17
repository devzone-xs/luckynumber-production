import { patternErr, patternErrTh, patternNumErr } from './pattern'
import {
    deleteSpaceFirst,
    deleteNewLineFirst,
    checkRootPattern,
    checkWinPattern,
    checkTwoNum,
    checkThreeNum,
    checkRootThree,
    findPatternPriceTwo,
    findPatternPriceThree,
    operatingWithValue,
    operatingWithThree,
    replaceTo,
    findPrice,
    findPriceThree,
    checkNumPattern,
} from './supportString'
import { findRootNumber, findWinNumber, findRootThreeNum } from './findNumber'
import { topDawnReturnNumOff, topDawnReturnNumLimit } from './findPattern'

//Check Error Text
export const PassOne = (v) => {
    if (patternErr(v)) {
        return false
    }
    //Lottery Thai
    if (v.now === 'th') {
        if (patternErrTh(v)) {
            return false
        }
        else {
            return true
        }
    }
    else if (v.now === 'fr') {
        return true
    }
    else {
        return true
    }
}

//Push Lottery
export const PassTwo = (v) => {
    console.log('V -INPUT', v);

    const th = {
        tm: /[ไทยเช้า]{7}/, tmz: /[ทช]{2}/,
        tmm: /[ไทยเช้า(ตลาด)]{13}/, tmmz: /[ทชต]{3}/,
        tn: /[ไทยเที่ยง]{9}/, tnz: /[ทท]{2}/,
        tam: /[ไทยบ่าย(ตลาด)]{13}/, tamz: /[ทบต]{3}/,
        ta: /[ไทยบ่าย]{7}/, taz: /[ทบ]{2}/,
        te: /[ไทยเย็น]{7}/, tez: /[ทย]{2}/,
    }
    const fr = {
        dj: /([ดาวโจนส์]){8}/, djz: /([ดาว]){3}/,
        nkm: /([นิเคอิเช้า]){10}/, nkmz: /([นช]){2}/,
        chm: /([จีนเช้า]){7}/, chmz: /([จช]){2}/,
        hsm: /([ฮั่งเส็งเช้า]){12}/, hsmz: /([ฮช]){2}/,
        tw: /([ไต้หวัน]){7}/, twz: /([ตว]){2}/,
        nkf: /([นิเคอิบ่าย]){10}/, nkfz: /([นบ]){2}/,
        kr: /([เกาหลี]){6}/, krz: /([เกา]){3}/,
        chf: /([จี]){2}([น]){1}([บ่]){2}([า]){1}([ย]){1}/, chfz: /([จบ]){2}/,
        hsf: /([ฮั่งเส้งบ่าย]){12}/, hsfz: /([ฮบ]){2}/,
        sp: /([สิงคโปร์]){8}/, spz: /([สิง]){3}/,
        id: /([อินเดีย]){7}/, idz: /([อิน]){3}/,
        ey: /([อียิปต์]){7}/, eyz: /([อี]){2}/,
    }
    const ts = {
        ts: /([3รัฐ]){4}/,
        rs_ge_en: /([รัสเซีย+เยอรมัน+อังกฤษ]){22}/, rsz_gez_enz: /([รัส+เยอ+อัง]){11}/,
        rs_en: /([รัสเซีย+อังกฤษ]){14}/, rsz_enz: /([รัส+อัง]){7}/,
        rs_ge: /([รัสเซีย+เยอรมัน]){15}/, rsz_gez: /([รัส+เยอ]){7}/,
        ge_en: /([เยอรมัน+อังกฤษ]){14}/, gez_enz: /([เยอ+อัง]){7}/,
        rs: /([รัสเซีย]){7}/, rsz: /([รัส]){3}/,
        ge: /([เยอรมัน]){7}/, gez: /([เยอ]){3}/,
        en: /([อังกฤษ]){6}/, enz: /([อัง]){3}/,

    }
    const ot = {
        hn: /([ฮานอย]){5}/, hnz: /([นอย]){3}/,
        hn_vip: /([ฮานอย vip]){9}/, hn_vipz: /([นอยvip]){6}/, hn_vipx: /([นว]){2}/, hn_vipy: /([นอยv]){4}/,
        lo: /([ลาว]){3}/,
        ms: /([มาเลย์]){6}/, msz: /([เลย์]){4}/,
        gm: /([รัฐบาล]){6}/, gmz: /([รัฐ]){3}/,
    }
    console.log('V INPUT', v.input);
    //Lottery Thai
    if (v.now === 'th') {


        if (th.tmm.test(v.input)) {
            var res = v.input.replace('ไทยเช้า(ตลาด)', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'th_mon_market'
        }
        else if (th.tmmz.test(v.input)) {
            var res = v.input.replace('ทชต', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'th_mon_market'
        }
        else if (th.tm.test(v.input)) {
            var res = v.input.replace('ไทยเช้า', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'th_mon'
        }
        else if (th.tmz.test(v.input)) {
            var res = v.input.replace('ทช', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'th_mon'
        }
        else if (th.tn.test(v.input)) {
            var res = v.input.replace('ไทยเที่ยง', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'th_non'
        }
        else if (th.tnz.test(v.input)) {
            var res = v.input.replace('ทท', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'th_non'
        }
        else if (th.tam.test(v.input)) {
            var res = v.input.replace('ไทยบ่าย(ตลาด)', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'th_afn_market'
        }
        else if (th.tamz.test(v.input)) {
            var res = v.input.replace('ทบต', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'th_afn_market'
        }
        else if (th.ta.test(v.input)) {
            var res = v.input.replace('ไทยบ่าย', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'th_afn'
        }
        else if (th.taz.test(v.input)) {
            var res = v.input.replace('ทบ', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'th_afn'
        }
        else if (th.te.test(v.input)) {
            var res = v.input.replace('ไทยเย็น', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'th_evn'
        }
        else if (th.tez.test(v.input)) {
            var res = v.input.replace('ทย', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'th_evn'
        }
    }
    else if (v.now === 'fr') {
        if (fr.dj.test(v.input)) {
            var res = v.input.replace('ดาวโจนส์', '')
            res = deleteSpaceFirst(res)
            v.lottery = 'fr_dj'
        }
        else if (fr.chf.test(v.input)) {
            var res = v.input.replace('จีนบ่าย', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'fr_ch_afn'
        }
        else if (fr.djz.test(v.input)) {
            var res = v.input.replace('ดาว', '')
            res = deleteNewLineFirst(res)
            res = deleteSpaceFirst(res)
            v.lottery = 'fr_dj'
        }
        else if (fr.tw.test(v.input)) {
            var res = v.input.replace('ไต้หวัน', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'fr_tw'
        }
        else if (fr.twz.test(v.input)) {
            var res = v.input.replace('ตว', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'fr_tw'
        }
        else if (fr.nkm.test(v.input)) {
            var res = v.input.replace('นิเคอิเช้า', '')
            res = deleteNewLineFirst(res)
            res = deleteSpaceFirst(res)
            v.lottery = 'fr_nk_mon'
        }
        else if (fr.nkmz.test(v.input)) {
            var res = v.input.replace('นช', '')
            res = deleteNewLineFirst(res)
            res = deleteSpaceFirst(res)
            v.lottery = 'fr_nk_mon'
        }
        else if (fr.chm.test(v.input)) {
            var res = v.input.replace('จีนเช้า', '')
            res = deleteNewLineFirst(res)
            res = deleteSpaceFirst(res)
            v.lottery = 'fr_ch_mon'
        }
        else if (fr.chmz.test(v.input)) {
            var res = v.input.replace('จช', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'fr_ch_mon'
        }
        else if (fr.hsm.test(v.input)) {
            var res = v.input.replace('ฮั่งเส็งเช้า', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'fr_hs_mon'
        }
        else if (fr.hsmz.test(v.input)) {
            var res = v.input.replace('ฮช', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'fr_hs_mon'
        }

        else if (fr.nkf.test(v.input)) {
            var res = v.input.replace('นิเคอิบ่าย', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'fr_nk_afn'
        }
        else if (fr.nkfz.test(v.input)) {
            var res = v.input.replace('นบ', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'fr_nk_afn'
        }
        else if (fr.kr.test(v.input)) {
            var res = v.input.replace('เกาหลี', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'fr_kr'
        }
        else if (fr.krz.test(v.input)) {
            var res = v.input.replace('เกา', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'fr_kr'
        }

        else if (fr.chfz.test(v.input)) {
            var res = v.input.replace('จบ', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'fr_ch_afn'
        }
        else if (fr.hsf.test(v.input)) {
            var res = v.input.replace('ฮั่งเส้งบ่าย', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'fr_hs_afn'
        }
        else if (fr.hsfz.test(v.input)) {
            var res = v.input.replace('ฮบ', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'fr_hs_afn'
        }
        else if (fr.sp.test(v.input)) {
            var res = v.input.replace('สิงคโปร์', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'fr_sp'
        }
        else if (fr.spz.test(v.input)) {
            var res = v.input.replace('สิง', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'fr_sp'
        }
        else if (fr.id.test(v.input)) {
            var res = v.input.replace('อินเดีย', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'fr_id'
        }
        else if (fr.idz.test(v.input)) {
            var res = v.input.replace('อิน', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'fr_id'
        }
        else if (fr.ey.test(v.input)) {
            var res = v.input.replace('อียิปต์', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'fr_ey'
        }
        else if (fr.eyz.test(v.input)) {
            var res = v.input.replace('อี', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'fr_ey'
        }
    }
    else if (v.now === 'ts') {
        if (ts.ts.test(v.input)) {
            var res = v.input.replace('3รัฐ', '')
            res = deleteSpaceFirst(res)
            v.lottery = 'ts_rs+ts_ge+ts_en'
        }
        else if (ts.rs_ge_en.test(v.input)) {
            var res = v.input.replace('รัสเซีย', '')
            var res = res.replace('เยอรมัน', '')
            var res = res.replace('อังกฤษ', '')
            var res = res.replace('+', '')
            var res = res.replace('+', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'ts_rs+ts_ge+ts_en'
        }
        else if (ts.rsz_gez_enz.test(v.input)) {
            var res = v.input.replace('รัส', '')
            var res = res.replace('เยอ', '')
            var res = res.replace('อัง', '')
            var res = res.replace('+', '')
            var res = res.replace('+', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'ts_rs+ts_ge+ts_en'
        }
        else if (ts.rs_en.test(v.input)) {
            var res = v.input.replace('รัสเซีย', '')
            var res = res.replace('อังกฤษ', '')
            var res = res.replace('+', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'ts_rs+ts_en'
        }
        else if (ts.rsz_enz.test(v.input)) {
            var res = v.input.replace('รัส', '')
            var res = res.replace('อัง', '')
            var res = res.replace('+', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'ts_rs+ts_en'
        }
        else if (ts.rs_ge.test(v.input)) {
            var res = v.input.replace('รัสเซีย', '')
            var res = res.replace('เยอรมัน', '')
            var res = res.replace('+', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'ts_rs+ts_ge'
        }
        else if (ts.rsz_gez.test(v.input)) {
            var res = v.input.replace('รัส', '')
            var res = res.replace('เยอ', '')
            var res = res.replace('+', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'ts_rs+ts_ge'
        }
        else if (ts.ge_en.test(v.input)) {
            var res = v.input.replace('อังกฤษ', '')
            var res = res.replace('เยอรมัน', '')
            var res = res.replace('+', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'ts_ge+ts_en'
        }
        else if (ts.gez_enz.test(v.input)) {
            var res = v.input.replace('อัง', '')
            var res = res.replace('เยอ', '')
            var res = res.replace('+', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'ts_ge+ts_en'
        }
        else if (ts.rs.test(v.input)) {
            var res = v.input.replace('รัสเซีย', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'ts_rs'
        }
        else if (ts.rsz.test(v.input)) {
            var res = v.input.replace('รัส', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'ts_rs'
        }
        else if (ts.ge.test(v.input)) {
            var res = v.input.replace('เยอรมัน', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'ts_ge'
        }
        else if (ts.gez.test(v.input)) {
            var res = v.input.replace('เยอ', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'ts_ge'
        }
        else if (ts.en.test(v.input)) {
            var res = v.input.replace('อังกฤษ', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'ts_en'
        }
        else if (ts.enz.test(v.input)) {
            var res = v.input.replace('อัง', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'ts_en'
        }
    }
    else if (v.now === 'hn' || v.now === 'hn_vip' || v.now === 'lo' || v.now === 'ms' || v.now === 'gm') {
        if (ot.hn_vip.test(v.input)) {
            var res = v.input.replace('นอยvip', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'hn_vip'
        }
        else if (ot.hn_vipz.test(v.input)) {
            var res = v.input.replace('นอยvip', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'hn_vip'
        }
        else if (ot.hn_vipx.test(v.input)) {
            var res = v.input.replace('นว', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'hn_vip'
        }
        else if (ot.hn_vipy.test(v.input)) {
            var res = v.input.replace('นอยVIP', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'hn_vip'
        }
        else if (ot.hn.test(v.input)) {
            var res = v.input.replace('ฮานอย', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'hn'
        }
        else if (ot.hnz.test(v.input)) {
            var res = v.input.replace('นอย', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'hn'
        }
        else if (ot.lo.test(v.input)) {
            var res = v.input.replace('ลาว', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'lo'
        }
        else if (ot.ms.test(v.input)) {
            var res = v.input.replace('มาเลย์', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'ms'
        }
        else if (ot.msz.test(v.input)) {
            var res = v.input.replace('เลย์', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'ms'
        }
        else if (ot.gm.test(v.input)) {
            var res = v.input.replace('รัฐบาล', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'gm'
        }
        else if (ot.gmz.test(v.input)) {
            var res = v.input.replace('รัฐ', '')
            res = deleteSpaceFirst(res)
            res = deleteNewLineFirst(res)
            v.lottery = 'gm'
        }
    }
    var not_name_pt1 = 'รูด'
    var not_name_pt2 = 'วิน'
    var normal_name = /([\w\dก-๑])+ /
    var normal_name_n = /([\w\dก-๑])+([\n])/
    var perfect_name = /([/])([\w\dก-๑])+ /
    var perfect_name_n = /([/])([\w\dก-๑])+([\n])/
    var intro_name = '/'
    var name = /([ก-๑a-zA-Z]){1}/
    if (res === undefined) {
        if (v.input.indexOf(not_name_pt1) === 0 || v.input.indexOf(not_name_pt2) === 0) {
            v.input = `/${v.name} ${v.input}`
        }
        else if ((v.input.indexOf(normal_name) === 0 || v.input.indexOf(normal_name_n)) && (v.input.indexOf(not_name_pt1) !== 0 || v.input.indexOf(not_name_pt2) !== 0)) {
            v.input = `/${v.input}`
        }
        else {
            v.input = `/${v.name} ${v.input}`
        }
    }
    else if (res !== undefined) {
        if (res.indexOf(intro_name) === 0) {
            v.input = res
        }
        else if (res.indexOf(not_name_pt1) === 0) {
            v.input = `/${v.name} ${v.input}`
        }
        else if (res.indexOf(not_name_pt2) === 0) {
            v.input = `/${v.name} ${v.input}`
        }
        else if (name.test(v.input.charAt(0)) && name.test(v.input.charAt(1))) {
            v.input = `/${v.name} ${v.input}`
        }

    }
    return v
}

//Push Name
export const PassThree = (v) => {
    var nameRexSpace = /([/]){1}([ก-๑\w\d])+([ ])/
    var nameRexNewLine = /([/]){1}([ก-๑\w\d])+([\n])/
    var res = v.input
    if (nameRexSpace.test(v.input)) {
        res = v.input.replace(nameRexSpace, '')
        var space = v.input.indexOf(' ')
    }
    else if (nameRexNewLine.test(v.input)) {
        res = v.input.replace(nameRexNewLine, '')
        var space = v.input.indexOf('\n')
    }
    var name = v.input.slice(0, space)
    v.name = name.replace('/', '')
    v.input = res
    return v
}

//Loop Value
export const PassFour = async (v) => {
    var spac = /([\n])/g
    var res = v.input.replace(spac, ' ')
    var set = res.split(' ')
    var op
    var error = 0
    var all_nums = []
    for (op of set) {

        // console.log('XXXXXXXXXXX-------------- NEWLOOT ------------XXXXXXXXXXXXXX')
        var new_split = op.split('=')
        var numset = new_split[0]
        var nums = []
        var priceset = new_split[1]
        var err = false
        // console.log('NUMSET ------------', numset)
        // console.log('PRICESET ------------', priceset)

        if (checkRootPattern(numset)) {
            // console.log('-------------- ROOT TWO ------------')
            var pattern = findPatternPriceTwo(priceset)
            var price = findPrice(priceset)
            if (!pattern) { err = true }
            else {
                numset = findRootNumber(numset)
                nums = await operatingWithValue(numset, pattern, price, 'root')
            }

        }
        else if (checkWinPattern(numset)) {
            // console.log('-------------- WIN ------------')
            var pattern = findPatternPriceTwo(priceset)
            var price = findPrice(priceset)
            if (!pattern) { err = true }
            else {
                numset = findWinNumber(numset)
                nums = await operatingWithValue(numset, pattern, price, 'win')
            }

        }
        else if (checkTwoNum(numset)) {
            // console.log('-------------- TWO ------------')
            var pattern = findPatternPriceTwo(priceset)
            var price = findPrice(priceset)
            if (!pattern) { err = true }
            else {
                numset = replaceTo(numset)
                nums = await operatingWithValue(numset, pattern, price, 'two')
            }

        }

        else if (checkRootThree(numset) && v.lottery !== 'th') {
            // console.log('-------------- ROOT THREE ------------')
            var pattern = findPatternPriceThree(priceset)
            var price = findPriceThree(priceset)
            if (!pattern) { err = true }
            else {
                numset = findRootThreeNum()
                nums = await operatingWithThree(numset, pattern, price, 'root_three')
            }

        }

        else if (checkThreeNum(numset) && v.lottery !== 'th') {
            var pattern = findPatternPriceThree(priceset)
            var price = findPriceThree(priceset)
            if (!pattern) { err = true }
            else {
                numset = replaceTo(numset)
                nums = await operatingWithThree(numset, pattern, price, 'three')
            }
        }

        if (err) {
            error++
        }
        all_nums = all_nums.concat(nums)
    }

    if (error > 0) {
        return false
    }
    else {
        v.nums = all_nums
        console.log('FOUR V', v)
        return v
    }
}

//Check Error Text
export const PassOneNum = async (v) => {
    if (patternNumErr(v)) {
        return false
    }
    else {
        return true
    }
}

export const PassTwoNum = async (v) => {
    var result = v.input.split('=')
    var nums = result[0]
    var category = result[1]
    var num_arr = nums.split("-" || "/" || ",")
    var pt = await checkNumPattern(category)
    var res = await topDawnReturnNumOff(num_arr, pt)
    //console.log('RESPONSE ', res)
    return res
}

export const PassTwoNumLimit = async (v) => {
    var result = v.input.split('=')
    var nums = result[0]
    var category = result[1]
    var num_arr = nums.split("-" || "/" || ",")
    var pt = await checkNumPattern(category)
    var res = await topDawnReturnNumLimit(num_arr, pt, v.price)
    console.log('RESPONSE ', res)
    return res
}