import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { fetchSetting, fetchSettingPricePerUnit, fetchPercent } from '../redux/setting/actions'
import { ObjectToTextDate } from '../helper/convert'
import { changeState } from '../redux/user/actions'

export default WrapComponent => {
    const withSetting = (props) => {
        const { change, changeLotto, changeDate, changeSubLotto } = props.userStore
        useEffect(() => {
            fetchSet()
        }, [])

        useEffect(() => {
            fetchSet()
        }, [change, changeLotto, changeDate, changeSubLotto])

        const fetchSet = async () => {
            props.fetchSetting({
                role: props.userStore.payload.role,
                token: props.userStore.access_token,
                date: ObjectToTextDate(props.dateStore.now)
            })
            props.fetchSettingPricePerUnit({
                token: props.userStore.access_token,
                lottery_name: props.menuStore.lottery_name,
            })
            if (props.userStore.payload.role === 1) {
                props.fetchPercent({
                    token: props.userStore.access_token,
                })
            }
            
            props.changeState(false)
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
            menuStore: state.menuStore,
        }
    }

    return compose(
        connect(mapStateToProps, {
            fetchSetting,
            fetchSettingPricePerUnit,
            fetchPercent,
            changeState,
        })
    )(withSetting)
}