import { useState, useEffect } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { serviceAuthLogin } from '../service/auth'
import { setToken } from '../helper/token'
import { passLogin } from '../redux/user/actions'

const Login = (props) => {
    const [signinfo, setSigninfo] = useState('')
    const [password, setPassword] = useState('')
    const [load, setLoad] = useState(false)
    const [err, setErr] = useState(false)
    const [message, setMessage] = useState('')

    const next = async () => {
        setLoad(true)
        if (signinfo !== '' && password !== '') {
            let result = await serviceAuthLogin({ signinfo, password })
            if (result !== 'err') {
                if (result.access_token && result.payload.role === 1) {
                    setToken(result)
                    props.passLogin(result)
                    Router.push('/lotto')
                }
                else if (result.access_token && result.payload.role === 2) {
                    setToken(result)
                    props.passLogin(result)
                    Router.push('/lotto')
                }
                else if (result.access_token && result.payload.role === 3) {
                    setToken(result)
                    props.passLogin(result)
                    Router.push('/lotto')
                }
                else if (result.access_token && result.payload.role === 0) {
                    setToken(result)
                    props.passLogin(result)
                    Router.push('/super')
                }
                setLoad(false)

            }
            else if (result === 'err') {
                setErr(true)
                setMessage('มีปัญหาในการเข้าสู่ระบบ')
                setLoad(false)
            }
        }
        else {
            setMessage('กรุณากรอกชื่อผู้ใช้และรหัสผ่าน')
            setLoad(false)
            setErr(true)
        }
    }

    const reset = () => {
        setErr(false)
    }


    return (
        <>
            <section className="screen">
                <main>
                    <img src="/static/logo/main_logo.png" alt="logo" />
                    <div className="block">
                        <div className={`ui input w-100 gap ${err ? 'error' : ''}`}>
                            <input
                                type="text"
                                placeholder="Username"
                                value={signinfo}
                                onChange={(e) => setSigninfo(e.target.value)}
                                onClick={reset}
                            />
                        </div>
                        <div className={`ui input w-100 gap ${err ? 'error' : ''}`}>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onClick={reset}
                            />
                        </div>
                        {err ? <div className="ui error message my-0 mt-5 w-100">
                            <p>{message}</p>
                        </div> : ''}

                        <div className="login-area gap">
                            <button className={`ui button primary login w-100 ${load ? 'loading' : ''}`} onClick={next}>เข้าสู่ระบบ</button>
                        </div>

                    </div>
                    <span className="version">v0.4</span>
                </main>
            </section>
            <style jsx>{`
                .screen {
                    background-color: #E3E3E3;
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                main {
                    background-color: #fff;
                    height: 550px;
                    min-height: 550px;
                    width: 600px;
                    min-width: 600px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }
                .block {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    width: 300px;
                }
                .w-100 {
                    width: 100%;
                }
                img {
                    height: 160px;
                    margin-bottom: 25px;
                }
                .login-area {
                    width: 100%;
                    display:flex;
                    flex-direction: column;
                    margin-top: 25px;
                }
                .login {
                    font-family: 'Prompt', sans-serif !important;
                    font-size: 16px;
                    font-weight: normal;
                }
                span {
                    align-self: flex-end;
                    cursor: pointer;
                }
                span:hover {
                    color: #2185d0;
                }
                .input {
                    margin: 5px 0;
                }
                p{
                    width: 100%;
                    text-align: center;
                    font-family: 'Prompt', sans-serif !important;
                }
                .version {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    margin: 10px;
                }
                @media (max-width: 426px) {
                    main {
                        height: 100vh;
                        width: 100%;
                    } 
                }
            `}</style>
        </>
    )
}

const mapStateToProps = state => {
    return {
        userStore: state.userStore,
    }
}

export default compose(
    connect(mapStateToProps, { passLogin })
)(Login)