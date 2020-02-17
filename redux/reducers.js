import { combineReducers } from 'redux';
import { menuReducer } from './menu/reducer'
import { userReducer } from './user/reducer'
import { dateReducer } from './date/reducer'
import { numSummaryReducer } from './numsummary/reducer'
import { settingReducer } from './setting/reducer'
import { alertReducer } from './alert/reducer'
import { billReducer } from './bill/reducer'
import { numRoleReducer } from './numrole/reducer'
import { downloadReducer } from './download/reducer'
import { showslipReducer } from './showslip/reducer'

export default combineReducers({
    menuStore: menuReducer,
    userStore: userReducer,
    dateStore: dateReducer,
    numSummaryStore: numSummaryReducer,
    settingStore: settingReducer,
    alertStore: alertReducer,
    billStore: billReducer,
    numRoleStore: numRoleReducer,
    downloadStore: downloadReducer,
    showslipStore: showslipReducer,
})