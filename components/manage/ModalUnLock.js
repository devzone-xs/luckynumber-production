import { useState } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import { serviceAdminUnlockAssistent, serviceAdminUnlockUser } from '../../service/admin'
import { serviceUnlockAdmin } from '../../service/super'

const ModalUnLock = (props) => {
    const { open, close, nowState, token, fetchData, username, role } = props
    const [load, setLoad] = useState(false)

    const nextLock = async () => {
        setLoad(true)
        if (role === 1) {
            if (nowState === 'mn1') {
                var res = await serviceAdminUnlockAssistent({ token, username })
            }
            else if (nowState === 'mn2') {
                var res = await serviceAdminUnlockUser({ token, username })
            }
        }
        else if (role === 0 && nowState === 'mn1') {
            var res = await serviceUnlockAdmin({ token, username })
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
                            การปลดล๊อคสมาชิกจะทำให้ บัญชีผู้ใช้สามารถเข้าสู่ระบบได้ตามปกติ คุณยืนยันที่จะปลดล๊อคหรือไม่
                        </main>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button basic color='red' onClick={close} inverted>
                        <div><Icon name='remove' />ปิด</div>
                    </Button>
                    <Button color='green' inverted onClick={nextLock} loading={load}>
                        <div><Icon name='checkmark' />ยืนยันการปลดล๊อค</div>
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

export default ModalUnLock