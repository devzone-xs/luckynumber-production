import { compose } from 'redux'
import { Button, Icon, Modal } from 'semantic-ui-react'
import { LotteryToName, ArrToNewArrNum, ArrToLength } from '../../helper/convert'
// import TableNum from './TableNum'
// import TableNumAll from './TableNumAll'
import { onePerThree, twoPerThree, threePerThree } from '../../helper/condition'
import { downloadBill } from '../../redux/download/actions'
import { connect } from 'react-redux'
import React from "react";
import dynamic from 'next/dynamic'
import Pdf from "react-to-pdf"
import { useState } from 'react'
// const Pdf = dynamic(
//     () => import('react-to-pdf'),
//     { ssr: false }
// )
const TableNum = dynamic(() => import('./TableNum'), { ssr: false })
const TableNumAll = dynamic(() => import('./TableNumAll'), { ssr: false })


const ShowBillModal = (props) => {
    const { open, close, showslipStore } = props
    const { up, down, sec, main } = props.showslipStore
    const ref = React.createRef()

    const [load, setLoad] = useState(false)

    const height = ((up.length > down.length ? up.length : down.length + main.length > sec.length ? main.length : sec.length) < 29 ?
        1 : (up.length > down.length ? up.length : down.length + main.length > sec.length ? main.length : sec.length) > 85 ?
            2 : 3)

    const options = {
        orientation: 'p',
        unit: 'px',
        format: [
            615.8,
            858.8 * (props.menuStore.now_lotto !== 'th' ? height : height / 3)
        ],
        compress: true,
    }

    const nextDownload = () => {
        setLoad(true)
    }

    return (
        <>
            <Modal open={open} closeOnEscape={true} onClose={close} size="small" >
                <main ref={ref}>
                    <h2 className="mb-15"> {showslipStore.lottery}</h2>
                    <Modal.Content className="w-100">
                        <section className="top">
                            <div className="field">
                                <label className="head">หมายเลข</label>
                                <span className="des">{showslipStore.id}</span>
                            </div>
                            <div className="field">
                                <label className="head">ชื่อลูกค้า</label>
                                <span className="des">{showslipStore.name}</span>
                            </div>
                            <div className="field">
                                <label className="head">จำนวนชุด</label>
                                {props.menuStore.now_lotto === 'th' ?
                                    <span className="des">{showslipStore.count}</span> : ''
                                }
                                {
                                    props.menuStore.now_lotto !== 'th' ?
                                        <span className="des">{showslipStore.count}</span> : ''
                                }
                            </div>
                            <div className="field">
                                <label className="head">ยอดแทงรวม</label>
                                <span className="des">{showslipStore.total}</span>
                            </div>
                            <div className="field">
                                <label className="head">วันที่</label>
                                <span className="des">{showslipStore.date}</span>
                            </div>
                        </section>
                        {props.menuStore.now_lotto === 'th' ?
                            < div className="down">
                                <div className="cell">
                                    <TableNum
                                        data={showslipStore.up}
                                        tablePerAll={onePerThree}
                                    />
                                </div>
                                <div className="cell">
                                    <TableNum
                                        data={showslipStore.up}
                                        tablePerAll={twoPerThree}
                                    />
                                </div>
                                <div className="cell ma-0">
                                    <TableNum
                                        data={showslipStore.up}
                                        tablePerAll={threePerThree}
                                    />
                                </div>
                            </div> : ''}

                        {props.menuStore.now_lotto !== 'th' ?
                            < div className="down three-num">
                                <section className="table-num">
                                    <div className="cell">
                                        <TableNumAll
                                            data={showslipStore.up}
                                            category='01'
                                        />
                                    </div>

                                    <div className="cell">
                                        <TableNumAll
                                            data={showslipStore.down}
                                            category='02'
                                        />
                                    </div>
                                </section>
                                <section className="table-num">
                                    <div className="cell">
                                        <TableNumAll
                                            data={showslipStore.main}
                                            category='03'
                                        />
                                    </div>

                                    <div className="cell">
                                        <TableNumAll
                                            data={showslipStore.sec}
                                            category='04'
                                        />
                                    </div>
                                </section>
                            </div> : ''}
                    </Modal.Content>
                </main>
                <Modal.Actions>
                    <Pdf targetRef={ref} filename={`${showslipStore.id}_${showslipStore.name}`} options={options} onComplete={() => setLoad(false)}>
                        {({ toPdf }) => (
                            <Button inverted color='blue' onClick={() => { toPdf(), nextDownload() }} loading={load}><div>ดาวน์โหลด</div></Button>
                        )}
                    </Pdf>
                    <Button color='green' onClick={close} inverted>
                        <div><Icon name='checkmark' /> ดูภายหลัง</div>
                    </Button>
                </Modal.Actions>
            </Modal>

            <style jsx>{`
                main {
                    //display: flex;
                    //align-items: center;
                    //flex-direction: column;
                    //width: 100%;
                    //justify-content: center;
                    padding: 25px;
                }
                .top {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 10px;
                }
                .head {
                    padding-right: 10px;
                }
                .des {
                    color: red;
                }
                .down {
                    display: flex;
                    justify-content: space-between;
                }
                .cell {
                    margin-right: 10px;
                    width: 100%;
                }
                .three-num {
                    display: flex;
                    flex-direction: column;
                }
                .table-num {
                    display: flex;
                    width: 100%;
                }
            `}</style>
        </>
    )
}

const mapStateToProps = state => {
    return {
        menuStore: state.menuStore,
        showslipStore: state.showslipStore,
    }
}

export default compose(
    connect(mapStateToProps, { downloadBill }),
)(ShowBillModal)