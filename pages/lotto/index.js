import { compose } from 'redux'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import withAuthen from '../../hocs/withAuthenticatedAdminUser'
import withSummary from '../../hocs/withSummary'
import withSetting from '../../hocs/withSetting'
import withBill from '../../hocs/withBill'
import withNumRole from '../../hocs/withNumRole'
import Layout from '../../layout/layout'
import NumOff from '../../components/numstate/numoff'
import NumLimit from '../../components/numstate/numlimit'
import Create from '../../components/create/Create'
import BillList from '../../components/bill/BillList'
import TimeOff from '../../components/numstate/timeoff'
// import TotalLottoNum from '../../components/numstate/totallottonum'
import { numToArr } from '../../helper/core'
import ModalBillConfirm from '../../components/create/modalBillConfirm'
import ModalPattern from '../../components/create/modalPattern'
import { ArrToNewArrNum, CodePassSetting } from '../../helper/convert'
import { CodeToLotteryName, ObjectDateToBasicDate } from '../../helper/convert'
import { selectLottoTh } from '../../redux/menu/actions'
import { sortNumSum } from '../../redux/numsummary/actions'
import withAlert from '../../hocs/withAlert'
import { filterBillOwner } from '../../helper/filter'
import dynamic from 'next/dynamic'
const TotalLottoNum = dynamic(() => import('../../components/numstate/totallottonum'), { ssr: false })


const App = (props) => {
    const { userStore, dateStore, menuStore } = props
    const [inputText, setInputText] = useState('')
    const [errMessage, setErrMesaage] = useState(false)
    const [confirm, setConfirm] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const [confirmData, setConfirmData] = useState(false)
    const [pattern, setPattern] = useState(false)

    useEffect(() => {
    }, [])

    const handleChangeInputText = (e) => {
        setInputText(e.target.value)
    }

    const checkInputText = async () => {
        if (inputText === '') {
            return false
        }
        var result = await numToArr({
            input: inputText,
            lottery: props.menuStore.lottery_name,
            name: userStore.payload.username,
            now: props.menuStore.now_lotto,
        })
        // console.log('RESULT', result)
        // console.log('RESULT NUMS', result.nums)
        if (!result) {
            setErrMesaage(true)
        }
        else if (result === 'err') {
            setErrMesaage(true)
        }
        else {
            if (props.menuStore.now_lotto === 'th') {
                var showBill = await ArrToNewArrNum(result.nums)
            }
            else if (props.menuStore.now_lotto === 'ts') {
                var showBill = result.nums
            }
            else if (props.menuStore.now_lotto !== 'th') {
                var showBill = result.nums
            }
            setShowConfirm({
                ...showConfirm,
                nums: showBill,
                lottery_name: result.lottery,
                name: result.name,
                total: result.total,
                date: dateStore.now
            })
            setConfirmData({
                lottery_name: result.lottery,
                nums: result.nums,
                name: result.name,
                date: ObjectDateToBasicDate(dateStore.now),
                token: userStore.access_token,
            })
            openConfirm()
        }

    }

    const clearInput = () => {
        setInputText('')
    }

    const resetErrMessage = () => {
        setErrMesaage(false)
    }

    const openConfirm = () => {
        setConfirm(true)
    }
    const closeConfirm = () => {
        setConfirm(false)
    }

    const openPattern = () => {
        setPattern(true)
    }
    const closePattern = () => {
        setPattern(false)
    }

    return (
        <>
            <Layout
                userStore={userStore}
                lotto="th"
                page="index"
                fetchNumSum={props.fetchNumSum}
            >
                {showConfirm ?
                    <ModalBillConfirm
                        open={confirm}
                        close={closeConfirm}
                        data={showConfirm}
                        confirmData={confirmData}
                        fetchNumSum={props.fetchNumSum}
                        clearInput={clearInput}
                    /> : ''}
                <ModalPattern
                    open={pattern}
                    close={closePattern}
                />

                <main className="main-content">
                    <section className="left-tab">
                        <section className="numstate-component">
                            <NumOff
                                token={userStore.access_token}
                                date={ObjectDateToBasicDate(dateStore.now)}
                                lottery_name={CodeToLotteryName(menuStore.lt1_lotto)}
                                change={userStore.change}
                            />
                            <NumLimit
                                token={userStore.access_token}
                                date={ObjectDateToBasicDate(dateStore.now)}
                                lottery_name={CodeToLotteryName(menuStore.lt1_lotto)}
                                change={userStore.change}
                            />
                        </section>
                        <Create
                            inputText={inputText}
                            handleChangeInputText={handleChangeInputText}
                            checkInputText={checkInputText}
                            errMessage={errMessage}
                            resetErrMessage={resetErrMessage}
                            openConfirm={openConfirm}
                            openPattern={openPattern}
                            settingStore={CodePassSetting(props.menuStore.now_lotto, props.menuStore.sub_lotto, props.settingStore)}
                        />
                        <BillList
                            page="index"
                            settingStore={CodePassSetting(props.menuStore.now_lotto, props.menuStore.sub_lotto, props.settingStore)}
                            bill={filterBillOwner(props.billStore.data, props.userStore.payload.username)}
                        />
                    </section>
                    <section className="rigth-tab">
                        <TimeOff
                            lottery_name={props.menuStore.lottery_name}
                            settingStore={props.settingStore}
                        />
                        <TotalLottoNum
                            numSummaryStore={props.numSummaryStore}
                            sortNumSum={props.sortNumSum}
                        />
                    </section>
                </main>
            </Layout>
        </>
    )
}

const mapStateToProps = state => {
    return {
        userStore: state.userStore,
        menuStore: state.menuStore,
        billStore: state.billStore,
        settingStore: state.settingStore,
    }
}

export default compose(
    withAuthen,
    withAlert,
    withBill,
    withSummary,
    withSetting,
    withNumRole,
    connect(mapStateToProps, {
        selectLottoTh,
        sortNumSum,
    })
)(App)