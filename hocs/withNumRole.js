import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { fetchSetting } from '../redux/setting/actions'
import { ObjectToTextDate, CodeToLotteryName } from '../helper/convert'
import { changeState } from '../redux/user/actions'
import { serviceGetNumOff, serviceGetNumLimit } from '../service/all'
import { serviceUserGetNumOff, serviceUserGetNumLimit } from '../service/user'
import { serviceAdminGetLimitUser } from '../service/admin'
import { setNumoff, setNumlimit, setNumlimitUser } from '../redux/numrole/actions'

export default WrapComponent => {
    const withNumRole = (props) => {
        const { changeLotto, changeDate, changeSubLotto } = props.userStore
        const { role } = props.userStore.payload
        const { access_token } = props.userStore

        useEffect(() => {
            fetchNumRole()
        }, [changeLotto, changeDate, changeSubLotto])

        const fetchNumRole = async () => {
            if (role === 1 || role === 2) {
                var res = await serviceGetNumOff({
                    lottery_name: props.menuStore.lottery_name,
                    date: ObjectToTextDate(props.dateStore.now),
                    token: props.userStore.access_token,
                })

                var limit = await serviceGetNumLimit({
                    lottery_name: props.menuStore.lottery_name,
                    date: ObjectToTextDate(props.dateStore.now),
                    token: access_token,
                })

                var limit_user = await serviceAdminGetLimitUser({
                    token: access_token,
                    date: ObjectToTextDate(props.dateStore.now),
                })
            }
            else if (role === 3) {
                var res = await serviceUserGetNumOff({
                    lottery_name: props.menuStore.lottery_name,
                    date: ObjectToTextDate(props.dateStore.now),
                    token: access_token,
                })

                var limit = await serviceUserGetNumLimit({
                    lottery_name: props.menuStore.lottery_name,
                    date: ObjectToTextDate(props.dateStore.now),
                    token: access_token,
                })
            }
            if (res !== 'err') {
                props.setNumoff(res)
            }
            if (limit !== 'err') {
                props.setNumlimit(limit)
            }
            if (limit_user !== 'err') {
                props.setNumlimitUser(limit_user)
            }

        }

        return (
            <>
                <WrapComponent
                    {...props}
                    settingStore={props.settingStore}
                />
            </>
        )
    }

    const mapStateToProps = state => {
        return {
            settingStore: state.settingStore,
            dateStore: state.dateStore,
            menuStore: state.menuStore,
            userStore: state.userStore
        }
    }

    return compose(
        connect(mapStateToProps, {
            fetchSetting,
            changeState,
            setNumoff,
            setNumlimit,
            setNumlimitUser
        })
    )(withNumRole)

}