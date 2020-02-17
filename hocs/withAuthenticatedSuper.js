import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Router from 'next/router'
import { getToken, removeToken } from '../helper/token'
import { serviceLoinToekn } from '../service/auth'
import { passLogin } from '../redux/user/actions'

export default WrapComponent => {
    const withAuthenticatedSuper = (props) => {
        const [render, setRender] = useState(false)
        const { payload, isAuthen } = props.userStore

        useEffect(() => {
            checkAuth()
        }, [])

        const checkAuth = async () => {
            if (isAuthen && payload.role === 0) {
                setRender(true)
            }
            else if (isAuthen && payload.role !== 0) {
                //Redirect Unauthorized
            }
            else if (!isAuthen) {
                //Login with token in LocalStorage
                let jwt = await getToken()
                if (jwt !== null) {
                    let result = await serviceLoinToekn(jwt.access_token)
                    if (result !== 'err' && result.role === 0) {
                        let payload = await {
                            access_token: jwt.access_token,
                            payload: result
                        }
                        props.passLogin(payload)
                        setRender(true)
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
                {render ? <WrapComponent userStore={props.userStore} /> : <LoadUI />}
            </>
        )
    }

    const mapStateToProps = state => {
        return {
            userStore: state.userStore
        }
    }

    return compose(
        connect(mapStateToProps, { passLogin })
    )(withAuthenticatedSuper)
}