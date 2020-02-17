import { compose } from 'redux'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import withAdmin from '../../hocs/withAuthenticatedAdminUser'
import withSummary from '../../hocs/withSummary'
import withSetting from '../../hocs/withSetting'
import withBill from '../../hocs/withBill'
import Layout from '../../layout/layout'
// import BillList from '../../components/bill/BillList'
import TimeOff from '../../components/numstate/timeoff'
// import TotalLottoNum from '../../components/numstate/totallottonum'
import ModalBillConfirm from '../../components/create/modalBillConfirm'
import { serviceAdminGetSlipByName } from '../../service/admin'
import { CodeToLotteryName } from '../../helper/convert'
import OrderShow from '../../components/order/OrderShow'
import { selectLottoTh } from '../../redux/menu/actions'
import Sort from '../../components/order/Sort'
import dynamic from 'next/dynamic'
import _ from 'lodash'
import { SortList } from '../../helper/sort'
import { sortNumSum } from '../../redux/numsummary/actions'
import { changeState } from '../../redux/user/actions'
import { setBillFilter } from '../../redux/bill/actions'
const BillList = dynamic(() => import('../../components/bill/BillList'), { ssr: false })
const TotalLottoNum = dynamic(() => import('../../components/numstate/totallottonum'), { ssr: false })

const Order = (props) => {
    const { userStore } = props
    const [confirm, setConfirm] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const [confirmData, setConfirmData] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [sortOption, setSortOption] = useState(0)
    const [selectList, setSelectList] = useState(false)

    useEffect(() => {

    }, [])

    useEffect(() => {
        nextSearch(searchText)
    }, [searchText])

    const nextSearch = (e) => {
        let filterData = props.billStore.data.filter((i) => {
            if (i.id_order.toLowerCase().includes(e.toLowerCase())) {
                return true
            }
            else if (i.name.toLowerCase().includes(e.toLowerCase())) {
                return true
            }
            else if (i.total.toLowerCase().includes(e.toLowerCase())) {
                return true
            }
        })
        props.setBillFilter(filterData)
    }

    const closeConfirm = () => {
        setConfirm(false)
    }

    return (
        <>
            <Layout
                userStore={userStore}
                lotto="th"
                page="order"
                fetchNumSum={props.fetchNumSum}
            >
                {showConfirm ?
                    <ModalBillConfirm
                        open={confirm}
                        close={closeConfirm}
                        data={showConfirm}
                        confirmData={confirmData}
                    /> : ''}
                <main className="main-content">
                    <section className="left-tab">
                        <Sort
                            searchText={searchText}
                            setSearchText={setSearchText}
                            nextSearch={nextSearch}
                            setSortOption={setSortOption}
                        />
                        {selectList ? <OrderShow selectList={selectList} /> : ''}
                        <BillList
                            bill={SortList(props.billStore.filter, sortOption)}
                            setSelectList={setSelectList}
                            fetchNumSum={props.fetchNumSum}
                            showDetail={true}
                            page="order"
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
        menuStore: state.menuStore,
        billStore: state.billStore,
        settingStore: state.settingStore,
    }
}

export default compose(
    withAdmin,
    withBill,
    withSummary,
    withSetting,
    connect(mapStateToProps, {
        selectLottoTh,
        sortNumSum,
        changeState,
        setBillFilter
    })
)(Order)