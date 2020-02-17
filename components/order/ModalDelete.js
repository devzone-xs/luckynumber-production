import { useState,useEffect } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'


const ModalDelete = (props) => {
    const { open, close, nowState, fetchData, role, confirm } = props

    const nextLock = async () => {
        confirm()
        close()
    }

    return (
        <>
            <Modal open={open} closeOnEscape={true} onClose={() => close()} size="tiny" basic>
                <Modal.Header><div>ยืนยันการลบ</div> </Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <main>
                            การลบบิลรายการมีผลให้เมื่อคุณ ถูกรางวัลคุณจะไม่ได้รับรางวัล ยืนยันการลบ
                        </main>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button basic color='red' onClick={close} inverted>
                        <div><Icon name='remove' />ไม่</div>
                    </Button>
                    <Button color='green' inverted onClick={nextLock}>
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