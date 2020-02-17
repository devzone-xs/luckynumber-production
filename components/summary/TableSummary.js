import { compose } from 'redux'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import { percentNum } from '../../helper/convert'
import { selectLotto } from '../../helper/condition'
import PlaceholderFluid from '../PlaceholderFluid'
import { countRewardPrice } from '../../helper/filter'

const TableSummary = (props) => {
    const { total_up, total_down, total_main, total_sec } = props.numSummaryStore
    const { loadSummary } = props.userStore
    const { lt1_lotto } = props.menuStore
    const [value, setValue] = useState('')

    useEffect(() => {
        setData()
    }, [])

    useEffect(() => {
        setData()
    }, [props.settingStore])

    const setData = () => {
        setValue(selectLotto(props.settingStore.percent, props.menuStore.lottery_name))
    }



    return (
        <>
            <div className="card table-summary ma-10 pa-10">
                <table className="ui celled compact table">
                    <thead>
                        <tr>
                            <th className="a">รายการ</th>
                            {props.menuStore.now_lotto === 'th' ?
                                <>
                                    <th className="b">บน</th>
                                    <th className="b">ล่าง</th>
                                    <th className="b">รวม</th>
                                </> : ''
                            }

                            {props.menuStore.now_lotto !== 'th' ?
                                <>
                                    <th className="c">3 ตัวตรง</th>
                                    <th className="c">โต้ด</th>
                                    <th className="c">บน</th>
                                    <th className="c">ล่าง</th>
                                    <th className="c">รวม</th>
                                </> : ''
                            }

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ยอดแทง</td>
                            {props.menuStore.now_lotto !== 'th' ?
                                <>
                                    <td className="gain">{!loadSummary ? total_main.toLocaleString() : <PlaceholderFluid />}</td>
                                    <td className="gain">{!loadSummary ? total_sec.toLocaleString() : <PlaceholderFluid />}</td>
                                </> : ''
                            }
                            <td className="gain">{!loadSummary ? total_up.toLocaleString() : <PlaceholderFluid />}</td>
                            <td className="gain">{!loadSummary ? total_down.toLocaleString() : <PlaceholderFluid />}</td>
                            {props.menuStore.now_lotto === 'th' ?
                                <td className="gain">{!loadSummary ? (total_up + total_down).toLocaleString() : <PlaceholderFluid />}</td> : ''
                            }
                            {props.menuStore.now_lotto !== 'th' ?
                                <td className="gain">{!loadSummary ? (total_up + total_down + total_main + total_sec).toLocaleString() : <PlaceholderFluid />}</td> : ''
                            }

                        </tr>
                        <tr>
                            <td>ยอดแทงคงเหลือ</td>
                            {props.menuStore.now_lotto !== 'th' ?
                                <>
                                    <td className="waste">{!loadSummary ? percentNum(total_main, value.percent).toLocaleString()  : <PlaceholderFluid />}</td>
                                    <td className="waste">{!loadSummary ? percentNum(total_sec, value.percent).toLocaleString()  : <PlaceholderFluid />}</td>
                                </> : ''
                            }
                            <td className="waste">{!loadSummary ? percentNum(total_up, value.percent).toLocaleString()  : <PlaceholderFluid />}</td>
                            <td className="waste">{!loadSummary ? percentNum(total_down, value.percent).toLocaleString()  : <PlaceholderFluid />}</td>
                            {props.menuStore.now_lotto === 'th' ?
                                <td className="waste">{!loadSummary ? percentNum(total_up + total_down, value.percent).toLocaleString()  : <PlaceholderFluid />}</td> : ''
                            }
                            {props.menuStore.now_lotto !== 'th' ?
                                <td className="waste">{!loadSummary ? percentNum(total_up + total_down + total_main + total_sec, value.percent).toLocaleString() : <PlaceholderFluid />}</td> : ''
                            }
                        </tr>
                        <tr>
                            <td>เปอร์เซ็น</td>
                            {props.menuStore.now_lotto !== 'th' ?
                                <>
                                    <td className="c-green">{!loadSummary ? (total_main - percentNum(total_main, value.percent)).toLocaleString() : <PlaceholderFluid />}</td>
                                    <td className="c-green">{!loadSummary ? (total_sec - percentNum(total_sec, value.percent)).toLocaleString() : <PlaceholderFluid />}</td>
                                </> : ''
                            }
                            <td className="c-green">{!loadSummary ? (total_up - percentNum(total_up, value.percent)).toLocaleString() : <PlaceholderFluid />}</td>
                            <td className="c-green">{!loadSummary ? (total_down - percentNum(total_down, value.percent)).toLocaleString() : <PlaceholderFluid />}</td>
                            {props.menuStore.now_lotto === 'th' ?
                                <td className="c-green">{!loadSummary ? ((total_up + total_down) - percentNum(total_up + total_down, value.percent)).toLocaleString() : <PlaceholderFluid />}</td> : ''
                            }
                            {props.menuStore.now_lotto !== 'th' ?
                                <td className="c-green">{!loadSummary ? ((total_up + total_down + total_main + total_sec) - percentNum(total_up + total_down + total_main + total_sec, value.percent)).toLocaleString() : <PlaceholderFluid />}</td> : ''
                            }

                        </tr>
                        <tr>
                            <td>ยอดจ่าย</td>
                            {props.menuStore.now_lotto !== 'th' ?
                                <>
                                    <td className="waste">{countRewardPrice(props.billStore.data, '03').toLocaleString()}</td>
                                    <td className="waste">{countRewardPrice(props.billStore.data, '04').toLocaleString()}</td>
                                </> : ''
                            }
                            <td className="waste">{countRewardPrice(props.billStore.data, '01').toLocaleString()}</td>
                            <td className="waste">{countRewardPrice(props.billStore.data, '02').toLocaleString()}</td>
                            <td className="waste">
                                {(countRewardPrice(props.billStore.data, '01') + countRewardPrice(props.billStore.data, '02') + countRewardPrice(props.billStore.data, '03') + countRewardPrice(props.billStore.data, '04')).toLocaleString()}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="conclude">
                    <section>ยอดสุทธิ  <span className={`
                            ${(countRewardPrice(props.billStore.data, '01') + countRewardPrice(props.billStore.data, '02') + countRewardPrice(props.billStore.data, '03') + countRewardPrice(props.billStore.data, '04')) - percentNum(total_up + total_down + total_main + total_sec, value.percent) > 0 ? 'c-green' : 'c-red'}
                        `}>
                        {(parseFloat((countRewardPrice(props.billStore.data, '01') + countRewardPrice(props.billStore.data, '02') + countRewardPrice(props.billStore.data, '03') + countRewardPrice(props.billStore.data, '04')) - percentNum(total_up + total_down + total_main + total_sec, value.percent).toString()).toFixed(2))}
                    </span> บาท</section>
                </div>
            </div>
            <style jsx>{`
                .gain { color: #448aff; }
                .waste { color: red; }
                .conclude {
                    display: flex;
                    justify-content: flex-end;
                }
                .conclude section {
                    font-size: 18px;
                }
                .a {
                    width: 40%;
                    min-width: 40%;
                }
                .b {
                    width: 20%;
                    min-width: 20%;
                }
                .c {
                    width: 10%;
                    min-width: 10%;
                }
                @media (max-width: 1025px) {
                    th {
                        padding-top: 5px !important;
                        padding-bottom: 5px !important;
                        font-size: 12px;
                    }
                    td {
                        padding-top: 5px !important;
                        padding-bottom: 5px !important;
                        font-size: 12px; 
                    }
                    .a {
                        width: 25%;
                        min-width: 25%;
                    }
                    .b {
                        width: 30px;
                        min-width: 30px;
                    }
                    .c {
                        width: 25px;
                        min-width: 25px;
                    }
                }
            `}</style>
        </>
    )
}

const mapStateToProps = state => {
    return {
        settingStore: state.settingStore,
        numSummaryStore: state.numSummaryStore,
        menuStore: state.menuStore,
        userStore: state.userStore,
        billStore: state.billStore,
    }
}

export default compose(
    connect(mapStateToProps, {

    })
)(TableSummary)
