export const patternErr = (v) => {
    if (tearErrBasic.test(v) || tearErr.test(v) || tearErrSlase.test(v)) {
        return true
    }

    else if (winErrNine.test(v) || winErrOne.test(v) || winErrTwo.test(v)) {
        return true
    }
}

const tearErrBasic = /([รูด]{3})=/g
const tearErr = /([รูด\d]{3})(\d){2}/g
const tearErrSlase = /([รูด\d]{3})([/]){1}=/g
const winErrNine = /([วิน]{3})(\d){9}/
const winErrOne = /([วิน]{3})(\d){1}=/g
const winErrTwo = /([วิน]{3})(\d){2}=/g

export const patternErrTh = (v) => {
    if (numErrThree.test(v) || namenumErrNonSpace.test(v)) {
        return true
    }
    else if (endSpace.test(v)) {
        return true
    }
}

const numErrThree = /([\d]{3})/g
const namenumErrNonSpace = /([ก-๑]+)[/]([ก-๑a-zA-Z]+)(\d){2}/
const endSpace = / $/

export const patternNumErr = (v) => {
    if (err_basic1.test(v.input) || err_basic2.test(v.input) || !err_basic3.test(v.input)) {
        return true //Err

    }
    else if (v.now === 'th' && pt_top_down_return.test(v.input)) {
        if (not_pt_two_basic.test(v.input)) {
            return true //Err
        }
        else {
            return false
        }
    }
    else {
        if (not_pt2_root.test(v.input)) {
            return true //Err
        }
        else if (not_pt_root_front.test(v.input)) {
            return true //Err
        }
        else if (not_pt_root_back.test(v.input)) {
            return true //Err
        }
        else if (pt_root_double.test(v.input) && not_pt_root_double.test(v.input)) {
            return true //Err
        }
        else if (not_pt_win1.test(v.input) || not_pt_win2.test(v.input) || not_pt_win3.test(v.input)) {
            return true //Err
        }
        else if (not_pt_win1.test(v.input) || not_pt_win2.test(v.input) || not_pt_win3.test(v.input)) {
            return true //Err
        }
        else if (not_root_trible.test(v.input) || not_pt_three.test(v.input)) {
            return true //Err
        }
        else if (not_root_trible.test(v.input) || not_pt_three.test(v.input)) {
            return true //Err
        }
        else if (not_vpt_value.test(v.input)) {
            return true //Err
        }
        else {
            return false
        }
    }
}

const err_basic1 = /([\d]{2}$)/
const err_basic2 = /([\d]{3}$)/
const err_basic3 = /([=]{1})/
const pt_top_down_return = /([=]{1})([บลก]+)/
const not_pt_two_basic = /([\d]{3})/g
const not_pt2_root = /([รูด]{3})([\d]{2})/
const not_pt_root_front = /([รูดหน้า]{7})([\d]{2})/
const not_pt_root_back = /([รูดหลัง]{7})([\d]{2})/
const pt_root_double = /([\d]{2})/
const not_pt_root_double = /([รูดเบิ้ล]{8})([\d])+/
const not_pt_win1 = /([วิน]{3})([\d]{2})/
const not_pt_win2 = /([วิน]{3})([\d]{9})/
const not_pt_win3 = /([วิน]{3})([=]{1})/

const not_root_trible = /([รูดตอง]{6})([\d]+)/
const not_pt_three = /([\d]{4})/g
const not_vpt_value = /([=*]{2})([12457890]+)([ปต]{2})/g