import { serviceAdminDeleteSlip } from '../../service/admin'
import ModalDelete from '../order/ModalDelete'
import { LotteryToName, ArrToNewArrNum, ArrToLength } from '../../helper/convert'
import PlaceholderFluid from '../PlaceholderFluid'
import { filterRewardPrice, filterNumCategory } from '../../helper/filter'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import { changeStateDeleteBill } from '../../redux/user/actions'
import { setAlert } from '../../redux/alert/actions'
import { serviceUserDeleteSlip } from '../../service/user'
import { setDataSlip } from '../../redux/showslip/actions'
import dynamic from 'next/dynamic'
const ShowBillModal = dynamic(
    () => import('./showBillModal'),
    { ssr: false }
)

const Create = (props) => {
    const { page } = props
    const [selectSlipID, setSelectSlipID] = useState('')
    const [openDelete, setOpenSlip] = useState(false)
    const [openBill, setOpenBill] = useState(false)
    const [dataBill, setDateBill] = useState(false)

    const confirmDeleteBill = async () => {
        if (props.userStore.payload.role === 1 || props.userStore.payload.role === 2) {
            var res = await serviceAdminDeleteSlip({
                slip_id: selectSlipID,
                token: props.userStore.access_token
            })
        }
        else if (props.userStore.payload.role === 3) {
            var res = await serviceUserDeleteSlip({
                slip_id: selectSlipID,
                token: props.userStore.access_token
            })
        }
        if (res !== 'err') {
            if (res.message === 'delete succeed') {
                props.setAlert('ลบรายการแทงสำเร็จ', 'positive')
            }
            props.changeStateDeleteBill(!props.userStore.changeDeleteBill)
        }
        else {
            props.setAlert('มีข้อผิดพลาดในการลบ', 'negative')
        }

    }

    const openDeleteSlip = (id) => () => {
        setSelectSlipID(id)
        setOpenSlip(true)
    }
    const closeDeleteSlip = () => {
        setOpenSlip(false)
    }

    const openBillModal = (data) => () => {
        if (props.menuStore.now_lotto !== 'th') {
            props.setDataSlip({
                id: data.id_order,
                name: data.name,
                username: data.username,
                date: data.buy_lottery_id.date,
                lottery: LotteryToName(data.buy_lottery_id.lottery_name),
                up: filterNumCategory(data.buy_lottery_id.nums, '01'),
                down: filterNumCategory(data.buy_lottery_id.nums, '02'),
                main: filterNumCategory(data.buy_lottery_id.nums, '03'),
                sec: filterNumCategory(data.buy_lottery_id.nums, '04'),
                count: ArrToLength(data.buy_lottery_id.nums),
                total: data.total,
            })
        }
        else if (props.menuStore.now_lotto === 'th') {
            var result = ArrToNewArrNum(data.buy_lottery_id.nums)
            props.setDataSlip({
                id: data.id_order,
                name: data.name,
                username: data.username,
                date: data.buy_lottery_id.date,
                lottery: LotteryToName(data.buy_lottery_id.lottery_name),
                up: result,
                down: [],
                main: [],
                sec: [],
                count: ArrToLength(result),
                total: data.total,
            })
        }
        setDateBill(data)
        setOpenBill(true)
    }
    const closeBill = () => {
        setOpenBill(false)
    }


    return (
        <>
            <div className="card create mx-10">
                <ModalDelete
                    id={selectSlipID}
                    open={openDelete}
                    close={closeDeleteSlip}
                    confirm={confirmDeleteBill}
                />
                <ShowBillModal
                    open={openBill}
                    close={closeBill}
                    dataBill={dataBill}
                />
                <header>บิลรายการ</header>
                <table className="ui single line table very compact table-bill-list">
                    <thead>
                        <tr>
                            {page === 'index' ?
                                <>
                                    <th className="a">ลำดับ</th>
                                    <th className="b">หมายเลข</th>
                                    <th className="c">ชื่อลูกค้า</th>
                                    <th className="d">ดูรายละเอียด</th>
                                    <th className="e">ยอดแทง</th>
                                </> : ''}
                            {page === 'order' ?
                                <>
                                    <th className="a">ลำดับ</th>
                                    <th className="b">หมายเลข</th>
                                    <th className="c">ชื่อลูกค้า</th>
                                    <th className="c">ชื่อผู้ใช้</th>
                                    <th className="d">ดูรายละเอียด</th>
                                    <th className="e">ยอดแทง</th>
                                    <th className="h">สถานะ</th>
                                    {props.menuStore.now_lotto !== 'th' ? <>
                                        <th className="i">จ่ายตรง</th>
                                        <th className="i">จ่ายโต้ด</th>
                                    </> : ''}
                                    <th className="i">จ่ายบน</th>
                                    <th className="i">จ่ายล่าง</th>
                                    <th className="i">จ่ายรวม</th>
                                </> : ''
                            }
                            {page === 'index' ? <th className="f">ลบบิล</th> : ''}
                        </tr>
                    </thead>
                    <tbody>
                        <>
                            {!props.userStore.loadFetchBill ?
                                props.bill ?
                                    <>
                                        {props.bill.map((i, k) => (
                                            <>
                                                <tr key={k}>
                                                    <td>{k + 1}</td>
                                                    <td>{i.id_order}</td>
                                                    <td>{i.name}</td>
                                                    {page === 'order' ? <td>{i.username}</td> : ''}
                                                    <td className="show" onClick={openBillModal(i)}>แสดงรายละเอียด</td>
                                                    <td>{parseInt(i.total).toLocaleString()}</td>

                                                    {page === 'order' ?
                                                        <>
                                                            <td>
                                                                {i.buy_lottery_id.reward === '2' ? <span className="c-orange">รอผล</span> :
                                                                    i.buy_lottery_id.reward === '1' ? <span className="c-blue">ถูกรางวัล</span> :
                                                                        i.buy_lottery_id.reward === '0' ? <span className="c-red">ผิด</span> : ''
                                                                }
                                                            </td>
                                                            {props.menuStore.now_lotto !== 'th' ? <>
                                                                <td>{filterRewardPrice(i.buy_lottery_id.nums, '03')}</td>
                                                                <td>{filterRewardPrice(i.buy_lottery_id.nums, '04')}</td>
                                                            </> : ''}
                                                            <td>{filterRewardPrice(i.buy_lottery_id.nums, '01')}</td>
                                                            <td>{filterRewardPrice(i.buy_lottery_id.nums, '02')}</td>

                                                            <td>{i.buy_lottery_id.reward_price !== null ?

                                                                i.buy_lottery_id.reward_price > 0 ?
                                                                    <span className="c-green">
                                                                        {parseInt(i.buy_lottery_id.reward_price).toLocaleString()}
                                                                    </span> :
                                                                    <span>
                                                                        {i.buy_lottery_id.reward_price}
                                                                    </span>
                                                                : '0'}
                                                            </td>
                                                        </> : <>
                                                            {props.settingStore ?
                                                                props.settingStore.status === 0 ?
                                                                    <td className="delete" onClick={openDeleteSlip(i.slip_id)}>ลบ</td> :
                                                                    <td>ปิดรับ</td> : ''
                                                            }
                                                        </>
                                                    }
                                                </tr>

                                            </>
                                        ))}</> : '' :
                                <>
                                    <Load page={page} now_lotto={props.menuStore.now_lotto} />
                                    <Load page={page} now_lotto={props.menuStore.now_lotto} />
                                    <Load page={page} now_lotto={props.menuStore.now_lotto} />
                                    <Load page={page} now_lotto={props.menuStore.now_lotto} />
                                </>
                            }
                        </>
                    </tbody>
                </table>
            </div>
            <style jsx>{`
                .create {
                    padding: 10px;
                    overflow-x: auto; 
                }
                header {
                    margin: 10px 0;
                    font-size: 16px;
                }
                .field {
                }
                .delete:hover {
                    color: red;
                    cursor: pointer;
                    user-select: none;
                }
                .show:hover {
                    color: #2185d0;
                    cursor: pointer;
                    user-select: none;
                }
                
            `}</style>
        </>
    )
}

const mapStateToProps = state => {
    return {
        billStore: state.billStore,
        userStore: state.userStore,
        menuStore: state.menuStore,
    }
}

export default compose(
    connect(mapStateToProps, { changeStateDeleteBill, setAlert, setDataSlip })
)(Create)

const Load = (props) => (
    <tr>
        <td><PlaceholderFluid /></td>
        <td><PlaceholderFluid /></td>
        <td><PlaceholderFluid /></td>
        <td><PlaceholderFluid /></td>
        <td><PlaceholderFluid /></td>

        {props.page === 'order' ?
            <>
                <td><PlaceholderFluid /></td>
                <td><PlaceholderFluid /></td>
                <td><PlaceholderFluid /></td>
                {props.now_lotto !== 'th' ? <>
                    <td><PlaceholderFluid /></td>
                    <td><PlaceholderFluid /></td>
                </> : ''}
                <td><PlaceholderFluid /></td>
                <td><PlaceholderFluid /></td>
            </> : <td><PlaceholderFluid /></td>
        }
    </tr>
)