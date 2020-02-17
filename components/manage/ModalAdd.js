import { useState } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import { serviceAdminCreateAssistent, serviceAdminCreateUser } from '../../service/admin'
import { serviceSuperCreateAdmin } from '../../service/super'

const ModalAdd = (props) => {
    const { open, close, nowState, token, fetchData, role } = props
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [load, setLoad] = useState(false)
    const [err, setErr] = useState(false)

    const nextAdd = async () => {
        setLoad(true)
        var res
        if (role === 1 || role === 2) {
            if (nowState === 'mn1') {
                res = await serviceAdminCreateAssistent({ token, username, password })
            }
            else if (nowState === 'mn2') {
                res = await serviceAdminCreateUser({ token, username, password })
            }
        }
        else if (role === 0 && nowState === 'mn1') {
            res = await serviceSuperCreateAdmin({ token, username, password })
        }

        if (res !== 'err') {
            if (res && res.message === 'password must be longer than 6') {
                setErr('รหัสผ่านอย่างน้อย 6 ตัว')
                setLoad(false)
            }
            else if (res && res.message === 'already have this username') {
                setErr('มีชื่อผู้ใช้นี้แล้ว')
                setLoad(false)
            }
            else {
                setLoad(false)
                fetchData()
                setUsername('')
                setPassword('')
                close()
            }
        }
        else {
            setErr('มีข้อผิดพลาดโปรดลองใหม่อีกครั้ง')
            setLoad(false)
        }
    }

    const reset = () => {
        setLoad(false)
        setErr(false)
    }

    return (
        <>
            <Modal open={open} closeOnEscape={true} onClose={() => close()} size="tiny">
                <Modal.Header><div>เพิ่มสมาชิก</div> </Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <main>
                            <div className="field">
                                <label>ชื่อผู้ใช้</label>
                                <div className="ui input">
                                    <input
                                        type="text"
                                        placeholder="username"
                                        value={username}
                                        onClick={reset}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label>รหัสผ่าน</label>
                                <div className="ui input">
                                    <input
                                        type="text"
                                        placeholder="password"
                                        value={password}
                                        onClick={reset}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                        </main>
                        {err ? <div className="ui negative message">
                            <i className="close icon"></i>
                            <div>
                                <h3>มีข้อผิดพลาด</h3>
                            </div>
                            <p>{err}
                            </p>
                        </div> : ''}
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='green' inverted onClick={nextAdd} loading={load}>
                        <div><Icon name='checkmark' />เพิ่มผู้ใช้</div>
                    </Button>
                    <Button color='red' inverted onClick={close}>
                        <div><Icon name='remove' />ปิด</div>
                    </Button>
                </Modal.Actions>
            </Modal>
            <style jsx>{`
                main {
                    display: flex;
                    justify-content: center;
                }
                .field {
                    display: flex;
                    flex-direction: column;
                    margin: 5px;
                }
                @media(max-width: 376px) {
                    main {
                        flex-direction: column;
                    }
                }
            `}</style>
        </>
    )
}

export default ModalAdd