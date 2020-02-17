import {
    calTDR,
    calTNDNRN,
    calDNRN,
    calDR,
    calT,
    calTNDN,
    calTNRN,
    calTR,
    calD,
    calTD
} from './topDawnReturn'
import {
    patternOneNum,
    patternMainXSec,
    patternWinSec,
} from './threeOreating'


export const deleteSpaceFirst = (v) => {
    if (v.charAt(0) === ' ' && v.charAt(1) === ' ') {
        v = v.replace(/ /, '')
        v = v.replace(/ /, '')
    }
    else if (v.charAt(0) === ' ') {
        v = v.replace(/ /, '')
    }
    return v
}

export const deleteNewLineFirst = (v) => {
    if (v.charAt(0) === '\n') {
        v = v.replace(/\n/, '')
    }
    return v
}

export const replaceTo = (v) => {
    var res = v.replace(/([/,])/g, '-')
    return res
}

export const checkRootPattern = (v) => {
    var not_root_pt1 = /([รูดตอง]){6}/
    var root_pt1 = /([รูด]){3}([\d]){1}/
    var root_pt2 = /([/]){1}([\d]){1}/
    var root_pt3 = /([รูดหลัง]){7}([\d]){1}/
    var root_pt4 = /([รูดหน้า]){7}([\d]){1}/
    var root_pt5 = /([รูดพี่น้อง]){10}/
    var root_pt6 = /([รูดเบิ้ล]){8}/

    if (not_root_pt1.test(v)) {
        return false
    }
    if (root_pt1.test(v) && root_pt2.test(v)) {
        return true
    }
    else if (root_pt1.test(v)) {
        return true
    }
    else if (root_pt3.test(v) && root_pt2.test(v)) {
        return true
    }
    else if (root_pt3.test(v)) {
        return true
    }
    else if (root_pt4.test(v) && root_pt2.test(v)) {
        return true
    }
    else if (root_pt4.test(v)) {
        return true
    }
    else if (root_pt5.test(v)) {
        return true
    }
    else if (root_pt6.test(v)) {
        return true
    }
    else {
        false
    }
}

export const checkWinPattern = (v) => {
    var win_pt1 = /([วิน]){3}([\d])/

    if (win_pt1.test(v)) {
        return true
    }
    else {
        return false
    }
}

export const checkTwoNum = (v) => {
    var not_two_pt1 = /([\d]){3}/
    var two_pt1 = /([\d]){2}([-])/
    var two_pt2 = /([\d]){2}([/])/
    var two_pt3 = /([\d]){2}([,])/
    var two_pt4 = /([\d]){2}/

    if (not_two_pt1.test(v)) {
        return false
    }
    else if (two_pt1.test(v)) {
        return true
    }
    else if (two_pt2.test(v)) {
        return true
    }
    else if (two_pt3.test(v)) {
        return true
    }
    else if (two_pt4.test(v) && !not_two_pt1.test(v)) {
        return true
    }
}

export const checkThreeNum = (v) => {
    var three_pt1 = /([\d]){3}([,])/
    var three_pt2 = /([\d]){3}([-])/
    var three_pt3 = /([\d]){3}([/])/
    var three_pt4 = /([\d]){3}/

    if (three_pt1.test(v) || three_pt2.test(v) || three_pt3.test(v) || three_pt4.test(v)) {
        return true
    }
    else {
        return false
    }
}

export const checkRootThree = (v) => {
    var root_three_pt = /([รูดตอง]{6})/
    if (root_three_pt.test(v)) {
        return true
    }
    else {
        return false
    }
}

export const findPatternPriceTwo = (pt) => {
    //console.log('PATTERN', pt);

    //Split Set
    let a = /([บ]{1}[ล]{1}[ก]{1}[\d]+)/
    let a1 = /([\d])+([บ]{1}[ล]{1}[ก]{1})/
    let b = /([บ]{1}[ล]{1}[\d]+)/
    let b1 = /[\d]+([บ]{1}[ล]{1})/
    let c = /([ล]{1}[ก]{1}[\d]+)/
    let c1 = /([\d]+[ล]{1}[ก]{1})/
    let d = /([บ]{1}[ก]{1}[\d]+)/
    let d1 = /([\d]+[บ]{1}[ก]{1})/
    let e = /([บ]{1}[\d]+[ล]{1}[\d]+[ก]{1}[\d]+)/
    let f = /([บ]{1}[\d]+[ล]{1}[\d]+)/
    let f1 = /([\d]+[บ]{1}[\d]+[ล]{1})/
    let g = /([บ]{1}[\d]+[ก]{1}[\d]+)/
    let g1 = /([\d]+[บ]{1}[\d]+[ก]{1})/
    let h = /([ล]{1}[\d]+[ก]{1}[\d]+)/
    let h1 = /([\d]+[ล]{1}[\d]+[ก]{1})/
    let i = /([ล]{1}[\d]+)/
    let i1 = /([\d]+[ล]{1})/
    let j = /([บ]{1}[\d]+)/
    let j1 = /([\d]+[บ]{1})/

    //Check Pattern
    let pattern
    if (a.test(pt) || a1.test(pt)) {
        //console.log('> บลกX || Xบลก <')
        pattern = '01'
    }
    else if (b.test(pt) || b1.test(pt)) {
        //console.log('> บลX || Xบล<')
        pattern = '02'
    }
    else if (c.test(pt) || c1.test(pt)) {
        //console.log('> ลกX || Xลก <')
        pattern = '03'
    }
    else if (d.test(pt) || d1.test(pt)) {
        //console.log('> บกX || Xบก <')
        pattern = '04'
    }
    else if (e.test(pt)) {
        //console.log('> บXลXกX || XบXลXก<')
        pattern = '05'
    }
    else if (f.test(pt) || f1.test(pt)) {
        //console.log('> บXลX || XบXล <')
        pattern = '06'
    }
    else if (g.test(pt) || g1.test(pt)) {
        //console.log('> บXกX || XบXก <')
        pattern = '07'
    }
    else if (h.test(pt) || h1.test(pt)) {
        //console.log('> ลXกX || XลXก <')
        pattern = '08'
    }
    else if (i.test(pt) || i1.test(pt)) {
        //console.log('> ลX || Xล <')
        pattern = '09'
    }
    else if (j.test(pt) || j1.test(pt)) {
        //console.log('> บX || Xบ< ')
        pattern = '10'
    }
    else {
        //console.log('> Err <')
        pattern = false
    }
    return pattern
}

export const findPatternPriceThree = (pt) => {
    var pt1 = /([\d]+)([*])([6]){1}([ปต]){2}/
    var pt2 = /([\d]+)([*])([3]){1}([ปต]){2}/
    var pt3 = /([\d]+)([*])([\d])+/
    var pt4 = /([\d]+)/
    var pattern

    if (pt1.test(pt)) {
        // console.log('> X*6ปต<')
        pattern = '01'
    }
    else if (pt2.test(pt)) {
        // console.log('> X*3ปต <')
        pattern = '02'
    }
    else if (pt3.test(pt)) {
        // console.log('> X*X <')
        pattern = '03'

    }
    else if (pt4.test(pt)) {
        // console.log('> X <')
        pattern = '04'
    }
    else {
        //console.log('> Err <')
        pattern = false
    }
    return pattern
}

export const findPrice = (pt) => {
    return pt.match(/\d+/g)
}

export const findPriceThree = (p) => {
    return p.match(/\d+/g)
}

export const operatingWithValue = async (v, pt, pr, fm) => {
    //console.log('NUM OPERATING', v)
    //console.log('PT OPERATING', pt)
    //console.log('PRICE OPERATING', pr)
    if (fm === 'two') {
        v = v.split('-')
    }

    var result
    if (pt === '01') {
        result = await calTDR(v, pr)
    }
    else if (pt === '02') {
        result = await calTD(v, pr)
    }
    else if (pt === '03') {
        result = await calDR(v, pr)
    }
    else if (pt === '04') {
        result = await calTR(v, pr)
    }
    else if (pt === '05') {
        result = await calTNDNRN(v, pr)
    }
    else if (pt === '06') {
        result = await calTNDN(v, pr)
    }
    else if (pt === '07') {
        result = await calTNRN(v, pr)
    }
    else if (pt === '08') {
        result = await calDNRN(v, pr)
    }
    else if (pt === '09') {
        result = await calD(v, pr)
    }
    else if (pt === '10') {
        result = await calT(v, pr)
    }

    // console.log('RESULE', result)
    return result
}

export const operatingWithThree = async (v, pt, pr, fm) => {
    var result
    if (fm === 'three') {
        v = v.split('-')
    }

    if (pt === '01') {
        result = await patternWinSec(v, pr)
    }
    else if (pt === '02') {
        result = await patternWinSec(v, pr)
    }
    else if (pt === '03') {
        result = await patternMainXSec(v, pr)
    }
    else if (pt === '04') {
        result = await patternOneNum(v, pr)
    }

    // console.log('RESULT OP', result);
    return result
}

export const checkNumPattern = (n) => {
    var regexCPT1 = /([บลก]{3})/
    var regexCPT2 = /([บล]{2})/
    var regexCPT3 = /([บก]{2})/
    var regexCPT4 = /([ลก]{2})/
    var regexCPT5 = /([บ]{1})/
    var regexCPT6 = /([ล]{1})/
    var regexCPT7 = /([*])([36]{1})([ปต]{2})/

    if (regexCPT1.test(n)) {
        return 'pt1'
    }
    else if (regexCPT2.test(n)) {
        return 'pt2'
    }
    else if (regexCPT3.test(n)) {
        return 'pt3'
    }
    else if (regexCPT4.test(n)) {
        return 'pt4'
    }
    else if (regexCPT5.test(n)) {
        return 'pt5'
    }
    else if (regexCPT6.test(n)) {
        return 'pt6'
    }
    else if (regexCPT7.test(n)) {
        return 'pt7'
    }
    else {
        return false
    }
}