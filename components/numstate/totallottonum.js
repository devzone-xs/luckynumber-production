import { useEffect, useState, useCallback } from 'react'
import { connect } from 'react-redux'
import PlaceholderFluid from '../PlaceholderFluid'
import { compose } from 'redux'
import { limitOperation } from '../../helper/condition'
import { downloadSum } from '../../redux/download/actions'
import { LotteryToName, ObjectDateToBasicDate } from '../../helper/convert'
import React from 'react'
import dynamic from 'next/dynamic'
import ReactToPdf from "react-to-pdf"
import { filterRewardNum, filterNotRewardNum } from '../../helper/filter'
import Headers from './Header'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const TotalLottoNum = (props) => {
    const { changeLotto, changeSubLotto, changeDeleteBill, changeCreateBill, changeDate, limit } = props.userStore
    const { num_up, num_down, num_main, num_sec, total_up, total_down, total_main, total_sec } = props.numSummaryStore

    const [summary, setSummary] = useState('2nd')
    const [openSum, setOpenSum] = useState(false)
    const [load, setLoad] = useState(false)
    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)

    const ref = React.createRef()
    // const measuredRef = React.createRef()

    useEffect(() => {
        if (props.menuStore.now_lotto === 'th') {
            setSummary('2nd')
        }
    }, [changeLotto, changeSubLotto, changeDeleteBill, changeCreateBill, changeDate])

    let measuredRef = useCallback((node) => {
        if (node !== null) {
            setHeight(node.getBoundingClientRect().height)
            setWidth(node.getBoundingClientRect().width)
        }
    })

    const sortBy = (sort) => () => {
        props.sortNumSum({
            sort,
            num_up: props.numSummaryStore.num_up,
            num_down: props.numSummaryStore.num_down,
            num_main: props.numSummaryStore.num_main,
            num_sec: props.numSummaryStore.num_sec,
        })
    }


    const options = {
        orientation: 'p',
        unit: 'px',
        format: [(height < width ? height + width : height * 2), width],
        compress: true,
    }

    const TableComponent = (props) => (
        <>
            <section className="fields">
                <div className="mb-10">รวมยอด <span>{props.total}</span> บาท</div>
                <table className="ui celled table very compact table-sum">
                    <thead>
                        <tr><th className="a">ลำดับ</th>
                            <th className="b">{props.head}</th>
                        </tr></thead>
                    <tbody>
                        {props.list ? props.list.map((item, key) => (
                            <tr>
                                <td>{key + 1}</td>
                                <td>{item.num}={item.price}</td>
                            </tr>
                        )) : ''}

                    </tbody>
                </table>
            </section>
            <style jsx>{`
                .table-sum {
                    width: 200px;
                    min-width: 200px;
                    margin: 0;
                }
                .a {
                    width: 30px;
                    min-width: 30px;
                    max-width: 30px;
                }
                .b {
                    width: 50px;
                    max-width: 50px;
                    min-width: 50px;
                }
                .fields {
                    height: 100%;
                }
            `}</style>
        </>
    )

    return (
        <>
            <div className="card" >
                <Modal open={openSum} >
                    <section className="download pa-10" ref={ref}>
                        <h3>{LotteryToName(props.menuStore.lottery_name)} {ObjectDateToBasicDate(props.dateStore.now)} ยอดรวม <span className="c-green">{total_up + total_down + total_main + total_sec}</span> บาท</h3>
                        <main className="table-list" ref={measuredRef}>
                            <TableComponent head="เลขบน" list={num_up} total={total_up} />
                            <TableComponent head="เลขล่าง" list={num_down} total={total_down} />
                            <TableComponent head="3 ตัวตรง" list={num_main} total={total_main} />
                            <TableComponent head="3 ตัวโต๊ด" list={num_sec} total={total_sec} />
                        </main>
                    </section>
                    <Modal.Actions>
                        <ReactToPdf targetRef={ref} filename={`${LotteryToName(props.menuStore.lottery_name)}_${ObjectDateToBasicDate(props.dateStore.now)}`} options={options} onComplete={() => setLoad(false)} x={.5} y={.5}>
                            {({ toPdf }) => (
                                <Button color='green' onClick={() => { toPdf(), setLoad(true) }} loading={load}> <div><Icon name='checkmark' />ดาวน์โหลด</div> </Button>
                            )}
                        </ReactToPdf >
                        <Button color='red' onClick={() => setOpenSum(false)}> <div> <Icon name='remove' />ปิด</div></Button>
                    </Modal.Actions>
                </Modal>
                <Headers>
                    <section className="category">
                        <div className="sub-cate" onClick={() => setSummary('2nd')}>ยอดรวม 2 ตัว</div>
                        {props.menuStore.now_lotto === 'th' ? '' : <div className="sub-cate" onClick={() => setSummary('3rd')}>ยอดรวม 3 ตัว</div>}
                    </section>
                </Headers>
                <div className="ui buttons w-100 tiny">
                    <button className={`ui button ${props.numSummaryStore.state === 'price' ? 'primary' : ''}`} onClick={sortBy('price')}>
                        <div>เรียงยอดแทง</div>
                    </button>
                    <div className="or"></div>
                    <button className={`ui button ${props.numSummaryStore.state === 'num' ? 'primary' : ''}`} onClick={sortBy('num')}>
                        <div>เรียงตัวเลข</div>
                    </button>
                </div>
                {summary === '2nd' ?
                    <section className="aggregate">
                        <div className="left mr-5">
                            <table className="ui celled table very compact">
                                <thead>
                                    <tr>
                                        <th className="a">บน</th>
                                    </tr>
                                </thead>
                                <tbody>


                                    {!props.userStore.loadSummary ? <>
                                        {filterRewardNum(num_up) ?
                                            <tr>
                                                <td><span className="c-green">{filterRewardNum(num_up).num}={filterRewardNum(num_up).price}</span> </td>
                                            </tr> : ''}
                                        {props.numSummaryStore ?
                                            filterNotRewardNum(props.numSummaryStore.num_up).map((i, k) => (
                                                <tr key={k}>
                                                    <td className={`${limitOperation(limit, i.price)}`}>{i.num}={i.price.toLocaleString()}</td>
                                                </tr>
                                            )) : ''
                                        }
                                    </> : <>
                                            < tr >
                                                <td><PlaceholderFluid /></td>
                                            </tr>
                                            < tr >
                                                <td><PlaceholderFluid /></td>
                                            </tr>
                                            < tr >
                                                <td><PlaceholderFluid /></td>
                                            </tr>
                                            < tr >
                                                <td><PlaceholderFluid /></td>
                                            </tr>
                                        </>}
                                </tbody>
                            </table>
                        </div>
                        <div className="right ml-5">
                            <table className="ui celled table very compact">
                                <thead>
                                    <tr>
                                        <th className="a">ล่าง</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {!props.userStore.loadSummary ? <>
                                        {filterRewardNum(num_down) ?
                                            <tr>
                                                <td><span className="c-green">{filterRewardNum(num_down).num}={filterRewardNum(num_down).price}</span> </td>
                                            </tr> : ''}
                                        {props.numSummaryStore ?
                                            filterNotRewardNum(num_down).map((i, k) => (
                                                < tr key={k}>
                                                    <td className={`${limitOperation(limit, i.price)}`}>{i.num}={i.price.toLocaleString()}</td>
                                                </tr>
                                            )) : ''
                                        }
                                    </> : <>
                                            < tr >
                                                <td><PlaceholderFluid /></td>
                                            </tr>
                                            < tr >
                                                <td><PlaceholderFluid /></td>
                                            </tr>
                                            < tr >
                                                <td><PlaceholderFluid /></td>
                                            </tr>
                                            < tr >
                                                <td><PlaceholderFluid /></td>
                                            </tr>
                                        </>}
                                </tbody>
                            </table>
                        </div>
                    </section> : ''}

                {summary === '3rd' ?
                    < section className="aggregate">
                        <div className="left mr-5">
                            <table className="ui celled table very compact">
                                <thead>
                                    <tr>
                                        <th className="a">ตรง</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filterRewardNum(num_main) ?
                                        <tr>
                                            <td><span className="c-green">{filterRewardNum(num_main).num}={filterRewardNum(num_main).price}</span> </td>
                                        </tr> : ''}
                                    {props.numSummaryStore ?
                                        num_main.map((i, k) => (
                                            < tr key={k}>
                                                <td className={`${limitOperation(limit, i.price)}`}>{i.num}={i.price.toLocaleString()}</td>
                                            </tr>
                                        )) : ''
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="right ml-5">
                            <table className="ui celled table very compact">
                                <thead>
                                    <tr>
                                        <th className="a">โต๊ด</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filterRewardNum(num_sec) ?
                                        <tr>
                                            <td><span className="c-green">{filterRewardNum(num_sec).num}={filterRewardNum(num_sec).price}</span> </td>
                                        </tr> : ''}
                                    {props.numSummaryStore ?
                                        num_sec.map((i, k) => (
                                            < tr key={k}>
                                                <td className={`${limitOperation(limit, i.price)}`}>{i.num}={i.price.toLocaleString()}</td>
                                            </tr>
                                        )) : ''
                                    }
                                </tbody>
                            </table>
                        </div>
                    </section> : ''}
                {num_sec.length > 0 ||
                    num_main.length > 0 ||
                    num_up.length > 0 ||
                    num_down.length > 0 ?
                    <div className="print mx-10 mb-5" onClick={() => setOpenSum(true)} > <span>ดาวน์โหลด</span>  </div>
                    : ''}

            </div>
            <style jsx>{`
                .aggregate {
                    display: flex;
                    padding: 10px;
                }
                .table {
                    
                }
                .left {
                    width: 100%;
                }
                .right {
                    width: 100%;
                }
                .a {
                    min-width: 50px;
                    width: 50px;
                    background-color: red;
                }
                td {
                    padding-top: 3px !important;
                    padding-bottom: 3px !important;
                }
                .category {
                    display: flex;
                    width: 100%;
                    justify-content: space-between !important;
                    align-items: space-between;
                }
                .sub-cate:hover {
                    color: #2185d0;
                    cursor: pointer;
                    user-select: none;
                }
                .full { color: #EC1C24; font-weight: bold; }
                .next { color: #FFB400; }
                .print {
                    display: flex;
                    justify-content: flex-end;
                    cursor: pointer;
                }
                .print:hover {
                    color: #2185d0;
                }
                .download {
                    display: flex;
                    flex-direction: column;
                }
                .table-list {
                    display: flex;
                    justify-content: space-between;
                    
                }
            `}</style>
        </>

    )
}

const mapStateToProps = state => {
    return {
        menuStore: state.menuStore,
        userStore: state.userStore,
        numSummaryStore: state.numSummaryStore,
        dateStore: state.dateStore,
    }
}

export default compose(
    connect(mapStateToProps, {
        downloadSum,
    })
)(TotalLottoNum)