import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { fetchNumSummary, fetchPercent } from '../redux/numsummary/actions'
import { changeState, setLoadFetchSummary } from '../redux/user/actions'
import { serviceGetNumLimitAll } from '../service/admin'
import { setLimitAll } from '../redux/user/actions'
import { ObjectToTextDate } from '../helper/convert'

export default WrapComponent => {
    const withSummary = (props) => {
        const { access_token, change, changeCreateBill, changeDate, changeLotto, changeSubLotto, changeDeleteBill } = props.userStore
        const { role } = props.userStore.payload

        useEffect(() => {
            fetchNumSum()
            fetchNumLimitAll()
        }, [change, changeCreateBill, changeDate, changeLotto, changeSubLotto, changeDeleteBill])

        const fetchNumSum = async (date = props.dateStore.now) => {
            await props.setLoadFetchSummary(true)
            if (props.menuStore.now_lotto !== 'th') {

                props.fetchNumSummary({
                    role: props.userStore.payload.role,
                    token: props.userStore.access_token,
                    date,
                    lottery_name: props.menuStore.lottery_name,
                    category: '03',
                    sort: props.numSummaryStore.state,
                })
                props.fetchNumSummary({
                    role: props.userStore.payload.role,
                    token: props.userStore.access_token,
                    date,
                    lottery_name: props.menuStore.lottery_name,
                    category: '04',
                    sort: props.numSummaryStore.state,
                })
            }

            await props.fetchNumSummary({
                role: props.userStore.payload.role,
                token: props.userStore.access_token,
                date,
                lottery_name: props.menuStore.lottery_name,
                category: '01',
                sort: props.numSummaryStore.state,
            })
            await props.fetchNumSummary({
                role: props.userStore.payload.role,
                token: props.userStore.access_token,
                date,
                lottery_name: props.menuStore.lottery_name,
                category: '02',
                sort: props.numSummaryStore.state,
            })
            await props.fetchPercent({
                token: props.userStore.access_token,
            })
            props.setLoadFetchSummary(false)
        }

        const fetchNumLimitAll = async () => {
            var res
            if (role === 1 || role === 2) {
                res = await serviceGetNumLimitAll({
                    lottery_name: props.menuStore.lottery_name,
                    date: ObjectToTextDate(props.dateStore.now),
                    token: access_token,
                })
            }

            if (res && res !== 'err') {
                if (res.length > 0) {
                    props.setLimitAll(res[0].limit)
                }
                else {
                    props.setLimitAll(false)
                }
            }
        }

        return (
            <>
                <WrapComponent {...props} />
            </>
        )
    }

    const mapStateToProps = state => {
        return {
            numSummaryStore: state.numSummaryStore,
            menuStore: state.menuStore,
            dateStore: state.dateStore,
        }
    }

    return compose(
        connect(mapStateToProps, {
            fetchNumSummary,
            changeState,
            fetchPercent,
            setLoadFetchSummary,
            setLimitAll,
        })
    )(withSummary)
}