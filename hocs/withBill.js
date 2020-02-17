import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { changeState, } from '../redux/user/actions'
import { CodeToLotteryName, ObjectToTextDate } from '../helper/convert'
import { serviceAdminGetSlipByName } from '../service/admin'
import { setBill, setBillFilter } from '../redux/bill/actions'
import { setLoadFetch } from '../redux/user/actions'
import { serviceUserGetSlipByName } from '../service/user'
import { menuSelete } from '../helper/condition'

export default WrapComponent => {
    const withBill = (props) => {
        const { changeDate, changeLotto, changeSubLotto, changeDeleteBill, changeCreateBill } = props.userStore
        useEffect(() => {
            props.setLoadFetch(true)
            fetchBill()
        }, [])

        useEffect(() => {
            props.setLoadFetch(true)
            fetchBill()
        }, [changeDate, changeLotto, changeSubLotto, changeDeleteBill, changeCreateBill])

        const fetchBill = async () => {
            if (props.userStore.payload.role === 1 || props.userStore.payload.role === 2) {
                var res = await serviceAdminGetSlipByName({
                    token: props.userStore.access_token,
                    lottery_name: props.menuStore.lottery_name,
                    date: ObjectToTextDate(props.dateStore.now),
                })
            }
            else if (props.userStore.payload.role === 3) {
                var res = await serviceUserGetSlipByName({
                    token: props.userStore.access_token,
                    lottery_name: props.menuStore.lottery_name,
                    date: ObjectToTextDate(props.dateStore.now),
                })
            }
            if (res !== 'err') {
                props.setBill(res)
                props.setBillFilter(res)
            }
            props.setLoadFetch(false)
        }

        return (
            <>
                <WrapComponent
                    {...props}
                />
            </>
        )
    }

    const mapStateToProps = state => {
        return {
            userStore: state.userStore,
            numSummaryStore: state.numSummaryStore,
            settingStore: state.settingStore,
            menuStore: state.menuStore,
        }
    }

    return compose(
        connect(mapStateToProps, {
            changeState,
            setBill,
            setBillFilter,
            setLoadFetch,
        })
    )(withBill)
}