import { compose } from 'redux'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import withAdmin from '../../hocs/withAuthenticatedAdmin'
import withSummary from '../../hocs/withSummary'
import withSetting from '../../hocs/withSetting'
import withBill from '../../hocs/withBill'
import Layout from '../../layout/layout'
import TimeOff from '../../components/numstate/timeoff'
// import TotalLottoNum from '../../components/numstate/totallottonum'
import dynamic from 'next/dynamic'
import TableSummary from '../../components/summary/TableSummary'
import { sortNumSum } from '../../redux/numsummary/actions'
const TotalLottoNum = dynamic(() => import('../../components/numstate/totallottonum'), { ssr: false })

const Summary = (props) => {
    const { userStore } = props

    return (
        <>
            <Layout
                userStore={userStore}
                lotto="th"
                page="summary"
            >
                <main className="main-content">
                    <section className="left-tab">
                        <TableSummary />
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
        numSummaryStore: state.numSummaryStore,
        settingStore: state.settingStore,
    }
}

export default compose(
    withAdmin,
    withBill,
    withSummary,
    withSetting,
    connect(mapStateToProps, {
        sortNumSum,
    })
)(Summary)

