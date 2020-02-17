import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Router from 'next/router'
import { getToken, removeToken } from '../helper/token'
import { serviceLoinToekn } from '../service/auth'
import { passLogin } from '../redux/user/actions'
import { setStateDate } from '../redux/date/actions'
import { initialDate } from '../redux/date/actions'

export default WrapComponent => {
    const withAuthenticatedAdmin = (props) => {
        const [render, setRender] = useState(false)
        const { payload, isAuthen } = props.userStore

        useEffect(() => {
            props.initialDate()
            checkAuth()
        }, [])

        const checkAuth = async () => {
            if (isAuthen && payload.role === 1) {
                setRender(true)
            }
            else if (isAuthen && payload.role !== 1) {
                //Redirect Unauthorized
            }
            else if (!isAuthen) {
                //Login with token in LocalStorage
                let jwt = await getToken()
                if (jwt !== null) {

                    let result = await serviceLoinToekn(jwt.access_token)
                    if (result !== 'err' && result.role === 1) {
                        let payload = await {
                            access_token: jwt.access_token,
                            payload: result
                        }
                        props.passLogin(payload)
                        setRender(true)
                    }
                    else if (result !== 'err' && result.role !== 1) {
                        removeToken()
                        Router.push('/login')
                    }
                    else if (result === 'err') {
                        removeToken()
                        Router.push('/login')
                    }
                }
                else {
                    Router.push('/login')
                }

            }
        }

        const LoadUI = () => (
            <div className="ui segment">
                <div className="ui active inverted dimmer">
                    <div className="ui text massive loader">กำลังโหลด</div>
                </div>
                <p></p>
                <style jsx>{`
                    div {
                        height: 100vh;
                        width: 100%; 
                    }
                `}</style>
            </div>
        )

        return (
            <>
                {render || isAuthen ? <WrapComponent
                    userStore={props.userStore}
                    dateStore={props.dateStore}
                    menuStore={props.menuStore}
                    setStateDate={props.setStateDate}
                /> : <LoadUI />
                }
            </>
        )
    }

    const mapStateToProps = state => {
        return {
            userStore: state.userStore,
            dateStore: state.dateStore,
            menuStore: state.menuStore,
        }
    }

    return compose(
        connect(mapStateToProps, {
            passLogin,
            setStateDate,
            initialDate
        })
    )(withAuthenticatedAdmin)
}