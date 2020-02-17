import { useState } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import { serviceAdminEditUser, serviceAdminEditAssistent } from '../../service/admin'
import { serviceEditAdmin } from '../../service/super'

const ModalEdit = (props) => {
    const { open, close, nowState, token, fetchData, role, username } = props
    const [password, setPassword] = useState('')
    const [load, setLoad] = useState(false)
    const [err, setErr] = useState(false)

    const nextAdd = async () => {
        setLoad(true)
        var res
        if (role === 1) {
            if (nowState === 'mn1') {
                res = await serviceAdminEditAssistent({ token, username, password })
            }
            else if (nowState === 'mn2') {
                res = await serviceAdminEditUser({ token, username, password })
            }
        }
        else if (role === 0 && nowState === 'mn1') {
            res = await serviceEditAdmin({ token, username, password })
        }

        if (res !== 'err') {
            if (res && res.message === 'password must be longer than 6') {
                setErr('รหัสผ่านอย่างน้อย 6 ตัว')
                setLoad(false)
            }
            else {
                setLoad(false)
                fetchData()
                setPassword('')
                close()
            }
        }
    }

    const reset = () => {
        setLoad(false)
        setErr(false)
    }

    return (
        <>
            <Modal open={open} closeOnEscape={true} onClose={() => close()} size="tiny">
                <Modal.Header><div>แก้ไขข้อมูล</div> </Modal.Header>
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
                        <div><Icon name='checkmark' />แก้ไขรหัสผ่าน</div>
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

export default ModalEdit