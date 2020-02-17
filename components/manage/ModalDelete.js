import { useState } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import { serviceAdminDeleteAssistent, serviceAdminDeleteUser } from '../../service/admin'
import { serviceSuperDeleteAdmin } from '../../service/super'

const ModalDelete = (props) => {
    const { open, close, nowState, token, fetchData, username, role } = props
    const [load, setLoad] = useState(false)

    const nextLock = async () => {
        setLoad(true)
        if (role === 1) {
            if (nowState === 'mn1') {
                var res = await serviceAdminDeleteAssistent({ token, username })
            }
            else if (nowState === 'mn2') {
                var res = await serviceAdminDeleteUser({ token, username })
            }
        }
        else if (role === 0 && nowState === 'mn1') {
            var res = await serviceSuperDeleteAdmin({ token, username })
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
                <Modal.Header><div>ยืนยันการลบ</div> </Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <main>
                            การลบสมาชิกจะทำให้ บัญชีผู้ใช้และข้อมูลต่างๆ ของผู้ใช้จะหายไปจากระบบฐานข้อมูล คุณยืนยันที่จะลบหรือไม่
                        </main>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button basic color='red' onClick={close} inverted>
                        <div><Icon name='remove' />ไม่</div>
                    </Button>
                    <Button color='green' inverted onClick={nextLock} loading={load}>
                        <div><Icon name='checkmark' />ยืนยันการลบ</div>
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

export default ModalDelete