import { useState } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import { serviceAdminLockAssistent, serviceAdminLockUser } from '../../service/admin'
import { serviceLockAdmin } from '../../service/super'

const ModalLock = (props) => {
    const { open, close, nowState, token, fetchData, username, role } = props
    const [load, setLoad] = useState(false)

    const nextLock = async () => {
        setLoad(true)
        if (role === 1) {
            if (nowState === 'mn1') {
                var res = await serviceAdminLockAssistent({ token, username })
            }
            else if (nowState === 'mn2') {
                var res = await serviceAdminLockUser({ token, username })
            }
        }
        else if (role === 0 && nowState === 'mn1') {
            var res = await serviceLockAdmin({ token, username })
        }
        if (res !== 'err') {
            setLoad(false)
            fetchData()
            close()
        }
    }

    return (
        <>
            <Modal open={open} closeOnEscape={true} onClose={() => close()} size="tiny" basic>
                <Modal.Header><div>จัดการการล๊อค</div> </Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <main>
                            การล๊อคสมาชิกจะทำให้ บัญชีผู้ใช้ไม่สามารถเข้าสู่ระบบได้ชั่วคราว คุณยืนยันที่จะล๊อคหรือไม่
                        </main>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button basic color='red' onClick={close} inverted>
                        <div><Icon name='remove' />ปิด</div>
                    </Button>
                    <Button color='green' inverted onClick={nextLock} loading={load}>
                        <div><Icon name='checkmark' />ยืนยันการล๊อค</div>
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

export default ModalLock