import Layout from '../layout/layout'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import { compose } from 'redux'
import withAuthen from '../hocs/withAuthenticatedAdmin'
import { serviceAdminGetSummaryAll } from '../service/admin'
import { ObjectDateToBasicDate } from '../helper/convert'
import { LotteryToName } from '../helper/convert'

function Summary(props) {

    const [value, setValue] = useState(false)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        let res = await serviceAdminGetSummaryAll({
            token: props.userStore.access_token,
            date: ObjectDateToBasicDate(props.dateStore.now)
        })
        if (res !== 'err') {
            console.log('RES -> ', res)
            setValue(res)
        }
    }

    return (
        <div>
            <Layout page="summary_all">
                <div className="container pa-10">
                    <div>
                        <table className="ui celled table very compact">
                            <thead>
                                <tr><th>รายการ</th>
                                    <th>ยอดแทง</th>
                                    <th>เปอร์เซ็นต์</th>
                                    <th>ยอดแทงคงเหลือ</th>
                                    <th>ยอดจ่าย</th>
                                    <th>คงเหลือ</th>
                                </tr></thead>
                            <tbody>
                                {value ?
                                    <>
                                        {value.market.map((item) => (
                                            <tr>
                                                <td>{LotteryToName(item.name)}</td>
                                                <td>{item.total_price.toLocaleString()}</td>
                                                <td className="c-yellow">
                                                    {item.percent !== 0 ? <span>-{item.percent.toLocaleString()}</span> : '0'}
                                                </td>
                                                <td>{item.balance.toLocaleString()}</td>
                                                <td className="c-red">{item.reward_price !== 0 ?
                                                    <span>{item.reward_price.toLocaleString()}</span> : 0}
                                                </td>
                                                <td>
                                                    {item.summary >= 0 ?
                                                        <span className="c-blue">{item.summary.toLocaleString()}</span> :
                                                        <span className="c-red">{item.summary.toLocaleString()}</span>
                                                    }
                                                </td>
                                            </tr>

                                        ))}
                                        <tr>
                                            <td className="f-bold">สุทธิ</td>
                                            <td className="f-bold">{value.summary.total_price.toLocaleString()}</td>
                                            <td className="c-yellow f-bold">{value.summary.percent.toLocaleString()}</td>
                                            <td className="f-bold">{value.summary.balance.toLocaleString()}</td>
                                            <td className="c-red f-bold">{value.summary.reward_price !== 0 ?
                                                <span>-{value.summary.reward_price.toLocaleString()}</span> : 0}
                                            </td>
                                            <td className="f-bold">
                                                {value.summary.summary > 0 ?
                                                    <span className="c-blue">{value.summary.summary.toLocaleString()}</span> :
                                                    <span className="c-red">{value.summary.summary.toLocaleString()}</span>
                                                }
                                            </td>
                                        </tr>

                                    </>
                                    : <><LoadLoop /></>}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        dateStore: state.dateStore,
        userStore: state.userStore,
    }
}

export default compose(
    withAuthen,
    connect(mapStateToProps, {
    })
)(Summary)

function LoadLoop() {
    return (
        <>
            <tr>
                <td><Load /></td>
                <td><Load /></td>
                <td><Load /></td>
                <td><Load /></td>
                <td><Load /></td>
                <td><Load /></td>
            </tr>
            <tr>
                <td><Load /></td>
                <td><Load /></td>
                <td><Load /></td>
                <td><Load /></td>
                <td><Load /></td>
                <td><Load /></td>
            </tr>
            <tr>
                <td><Load /></td>
                <td><Load /></td>
                <td><Load /></td>
                <td><Load /></td>
                <td><Load /></td>
                <td><Load /></td>
            </tr>
            <tr>
                <td><Load /></td>
                <td><Load /></td>
                <td><Load /></td>
                <td><Load /></td>
                <td><Load /></td>
                <td><Load /></td>
            </tr>
            <tr>
                <td><Load /></td>
                <td><Load /></td>
                <td><Load /></td>
                <td><Load /></td>
                <td><Load /></td>
                <td><Load /></td>
            </tr>
            <tr>
                <td><Load /></td>
                <td><Load /></td>
                <td><Load /></td>
                <td><Load /></td>
                <td><Load /></td>
                <td><Load /></td>
            </tr>
            <tr>
                <td><Load /></td>
                <td><Load /></td>
                <td><Load /></td>
                <td><Load /></td>
                <td><Load /></td>
                <td><Load /></td>
            </tr>
            <tr>
                <td><Load /></td>
                <td><Load /></td>
                <td><Load /></td>
                <td><Load /></td>
                <td><Load /></td>
                <td><Load /></td>
            </tr>
        </>

    )
}

function Load() {
    return (
        <div className="ui placeholder">
            <div className="line"></div>
        </div>
    )
}