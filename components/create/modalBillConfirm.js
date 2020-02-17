import { useState, useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Button, Icon, Modal } from 'semantic-ui-react'
import { LotteryToName, ObjectToDateSlash } from '../../helper/convert'
import { serviceAdminBuyLottery } from '../../service/admin'
import { changeStateCreateBill } from '../../redux/user/actions'
import { TableThree } from './Table'
import { filterNumByCategory } from '../../helper/filter'
import { serviceUserBuyLottery } from '../../service/user'

const ModalBillConfirm = (props) => {
    const { data, confirmData, clearInput } = props
    const [load, setLoad] = useState(false)
    const [err, setErr] = useState(false)
    const [message, setMessage] = useState('')

    const close = () => {
        setErr(false)
        props.close()
    }

    const nextCreate = async () => {
        setErr(false)
        setLoad(true)

        if (props.menuStore.now_lotto === 'ts') {
            if (confirmData.lottery_name === 'ts_rs+ts_ge+ts_en') {
                confirmData.lottery_name = 'ts_rs'
                var res_1 = await serviceAdminBuyLottery(confirmData)
                confirmData.lottery_name = 'ts_ge'
                var res_2 = await serviceAdminBuyLottery(confirmData)
                confirmData.lottery_name = 'ts_en'
                var res_3 = await serviceAdminBuyLottery(confirmData)
                if (res_1 && res_2 && res_3 && (res_1.message === 'close market' && res_2.message === 'close market' && res_3.message === 'close market')) {
                    setMessage('ปิดรับการแทงแล้วทุกรอบ')
                    setErr(true)
                    setLoad(false)
                }
                else if (res_1 && res_2 && res_3 && (res_1.message === 'close market' || res_2.message === 'close market' || res_3.message === 'close market')) {
                    props.close()
                    setLoad(false)
                    props.changeStateCreateBill(!props.userStore.changeCreateBill)
                    clearInput()
                }
                else if (res_1 !== 'err' && res_2 !== 'err' && res_3 !== 'err') {
                    props.close()
                    setLoad(false)
                    props.changeStateCreateBill(!props.userStore.changeCreateBill)
                    clearInput()
                }
            }
            else if (confirmData.lottery_name === 'ts_rs+ts_en' || confirmData.lottery_name === 'ts_rs+ts_ge' || confirmData.lottery_name === 'ts_ge+ts_en') {
                var lotto = confirmData.lottery_name.split('+')
                advancedCreate(lotto[0], lotto[1])
            }
            else {
                basicCreate()
            }
        }
        else {
            basicCreate()
        }
    }

    const basicCreate = async () => {
        if (props.userStore.payload.role === 1 || props.userStore.payload.role === 2) {
            var res = await serviceAdminBuyLottery(confirmData)
        }
        else if (props.userStore.payload.role === 3) {
            var res = await serviceUserBuyLottery(confirmData)
        }

        if (res && res.message === 'close market') {
            setMessage('ปิดรับการแทงแล้วในรอบนี้')
            setErr(true)
            setLoad(false)
        }
        else if (res.message === `can't buy ,limit over`) {
            setMessage(`ยอดแทงเกินค่าอั้น คุณสามารถแทงได้ไม่เกิน ${res.balance_limit}`)
            setErr(true)
            setLoad(false)
        }
        else if (res !== 'err') {
            props.close()
            setLoad(false)
            props.changeStateCreateBill(!props.userStore.changeCreateBill)
            clearInput()
        }
    }

    const advancedCreate = async (a, b) => {
        confirmData.lottery_name = a
        var res_1 = await serviceAdminBuyLottery(confirmData)
        confirmData.lottery_name = b
        var res_2 = await serviceAdminBuyLottery(confirmData)
        if (res_1 && res_2 && res_1.message === 'close market' && res_2.message === 'close market') {
            setMessage('ปิดรับการแทงแล้วทั้งสองรอบ')
            setErr(true)
            setLoad(false)
        }
        else if (res_1 && res_2 && (res_1.message === 'close market' || res_2.message === 'close market')) {
            props.close()
            setLoad(false)
            props.changeStateCreateBill(!props.userStore.changeCreateBill)
            clearInput()
        }
        else if (res_1 !== 'err' && res_2 !== 'err') {
            props.close()
            setLoad(false)
            props.changeStateCreateBill(!props.userStore.changeCreateBill)
            clearInput()
        }
    }

    return (
        <>
            <Modal open={props.open} closeOnEscape={true} onClose={close} >
                <Modal.Header> <h3>{`รอบ${LotteryToName(data.lottery_name)}`}</h3> </Modal.Header>
                <Modal.Content>
                    <section className="modal-bill-confirm">
                        <div className="top">
                            <section className="field">
                                <label>ชื่อลูกค้า</label>
                                <span>{data.name}</span>
                            </section>
                            <section className="field">
                                <label>จำนวนชุด</label>
                                <span>{data ? data.nums.length : ''}</span>
                            </section>
                            <section className="field">
                                <label>ยอดแทงรวม</label>
                                <span>{data.total}</span>
                            </section>
                            <section className="field">
                                <label>วันที่</label>
                                <span>{ObjectToDateSlash(data.date)}</span>
                            </section>
                        </div>
                        {
                            props.menuStore.now_lotto === 'th' ?
                                <div className="down">
                                    <div className="left">
                                        <table className="ui celled very compact table">
                                            <thead>
                                                <tr>
                                                    <th className="A">ลำดับ</th>
                                                    <th className="B">เลข</th>
                                                    <th className="C">บน</th>
                                                    <th className="C">ล่าง</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data ? data.nums.map((i, k) => (
                                                    <>
                                                        {k % 2 === 0 ?
                                                            <>
                                                                <tr key={k}>
                                                                    <td><span className="c-gray"> {k + 1}</span></td>
                                                                    <td>{i.num}</td>
                                                                    <td>{i.up === undefined ? '-' : <span className="c-blue">{i.up}</span>}</td>
                                                                    <td>{i.down === undefined ? '-' : <span className="c-blue">{i.down}</span>}</td>
                                                                </tr>
                                                            </> : ''
                                                        }
                                                    </>
                                                )) : ''}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="right">
                                        <table className="ui celled very compact table">
                                            <thead>
                                                <tr>
                                                    <th className="A">ลำดับ</th>
                                                    <th className="B">เลข</th>
                                                    <th className="C">บน</th>
                                                    <th className="C">ล่าง</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data ? data.nums.map((i, k) => (
                                                    <>
                                                        {k % 2 !== 0 ?
                                                            <>
                                                                <tr key={k}>
                                                                    <td><span className="c-gray"> {k + 1}</span></td>
                                                                    <td>{i.num}</td>
                                                                    <td>{i.up === undefined ? '-' : <span className="c-blue">{i.up}</span>}</td>
                                                                    <td>{i.down === undefined ? '-' : <span className="c-blue">{i.down}</span>}</td>
                                                                </tr>
                                                            </> : ''
                                                        }
                                                    </>
                                                )) : ''}
                                            </tbody>
                                        </table>
                                    </div>
                                </div> : ''}

                        {props.menuStore.now_lotto !== 'th' ?
                            <>
                                <div className="down mb-10">
                                    <div className="left">
                                        <TableThree nums={filterNumByCategory(data.nums, '01')} category="เลขบน" />
                                    </div>
                                    <div className="right">
                                        <TableThree nums={filterNumByCategory(data.nums, '02')} category="เลขล่าง" />
                                    </div>
                                </div>
                                <div className="down">
                                    <div className="left">
                                        <TableThree nums={filterNumByCategory(data.nums, '03')} category="เลข 3 ตัวตรง" />
                                    </div>
                                    <div className="right">
                                        <TableThree nums={filterNumByCategory(data.nums, '04')} category="เลขโต้ด" />
                                    </div>
                                </div>
                            </>
                            : ''}
                        <div className="note mt-10">
                            <span className="c-red">**การชำระเงินต้องดูจากรายละเอียดอีกครั้งก่อนชำระ</span>
                        </div>

                        {err ? <div className="ui negative message">
                            <div>
                                <h4>{message}</h4>
                            </div>
                            <p className="message-err">ไม่สามารถสร้างรายการได้ในขณะนี้
                            </p>
                        </div> : ''}
                    </section>
                </Modal.Content>
                <Modal.Actions>
                    <Button.Group>
                        <Button>
                            <div>รวมยอด {data.total}</div>
                        </Button>
                        <Button color='green' onClick={nextCreate} loading={load ? true : false}>
                            <div><Icon name='checkmark' /> ยืนยันการแทง</div>
                        </Button>
                    </Button.Group>
                    <Button color='red' inverted onClick={close}>
                        <div><Icon name='close' /> ปิด</div>
                    </Button>

                </Modal.Actions>
            </Modal>

            <style jsx>{`
                p {
                    font-size: 16px;
                }
                div {
                    font-size: 14px;
                    font-weight: normal;
                }
                p {
                    padding: 0 5px;
                }
                .message-err {
                    font-size: 14px;
                }
                .note {
                    display: flex;
                    justify-content: flex-end;
                }
            `}</style>
        </>
    )
}

const mapStateToProps = state => {
    return {
        userStore: state.userStore,
        menuStore: state.menuStore,
    }
}

export default compose(
    connect(mapStateToProps, { changeStateCreateBill })
)(ModalBillConfirm)