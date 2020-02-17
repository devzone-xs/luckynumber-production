import { useState, useEffect } from 'react'
import { Button, Icon, Modal, Tab } from 'semantic-ui-react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const modalPattern = (props) => {
    return (
        <>
            <Modal open={props.open} closeOnEscape={true} onClose={props.close} >
                <Modal.Header> <h3>รูปแบบที่รองรับ</h3> </Modal.Header>
                <Modal.Content>
                    <main>
                        <Tab panes={panes} />
                    </main>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='red' inverted onClick={props.close}>
                        <div><Icon name='close' /> ปิด</div>
                    </Button>

                </Modal.Actions>
            </Modal>

            <style jsx>{`
                
            `}</style>
        </>
    )
}



export default modalPattern

const panes = [
    { menuItem: 'เลขชุดปกติ', render: () => <Tab.Pane><TabPattern pt={patternTextNormal} /></Tab.Pane> },
    { menuItem: 'เลขรูด', render: () => <Tab.Pane><TabPattern pt={patternTextTear} /></Tab.Pane> },
    { menuItem: 'เลขวิน', render: () => <Tab.Pane><TabPattern pt={patternTextWin} /></Tab.Pane> },
]

const TabPattern = (props) => (
    <main>
        <table className="ui basic table very compact">
            <thead>
                <tr>
                    <th className="a">#</th>
                    <th className="b">รูปแบบ</th>
                    <th className="c">คัดลอก</th>
                </tr>
            </thead>
            <tbody>
                {props.pt.map((i, k) => (
                    <tr key={k}>
                        <td>{k + 1}</td><td>{i.text}</td><td>
                            <CopyToClipboard text={i.text}>
                                <Button compact><div>คัดลอก</div></Button>
                            </CopyToClipboard>
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>
        <style jsx>{`
            .a { width: 30px; min-width: 30px; }
            .b { width: 100%; }
            .c { width: 100px; min-width: 100px; }
        `}</style>
    </main>
)

const patternTextNormal = [
    { text: 'ไทยเช้า/โชคดี 10-20-30-40=บ10ล20ก30' },
    { text: 'ไทยเช้า/โชคดี 10/20/30/40=บ10ล20' },
    { text: 'ไทยเช้า/โชคดี 10,20,30,40=ล20ก30' },
    { text: 'ทช/โชคดี 10-20-30-40=บลก30 40-50-60-70=บ20ล40ก30' },
    { text: 'ทช/โชคดี 10/20/30/40=บ20' },
    { text: 'ทช/โชคดี 10/20/30/40=บก20' },
    { text: 'ทช/โชคดี 10,20,30,40=ล50' },
    { text: 'ไทยเช้า/โชคดี 10/20/30/40=บ10ล20' },
    { text: 'ทช/โชคดี 10,20,30,40=ลก50' },
    { text: 'ทช/โชคดี 10-20-30-40=บ50 10-20-30-40=บ90' },
]

const patternTextWin = [
    { text: 'ไทยเช้า/โชคดี วิน59784=บ10ล20' },
    { text: 'ไทยเช้า/โชคดี วิน597=บล20' },
    { text: 'ไทยเช้า/โชคดี วิน5978=บ10ล20' },
    { text: 'ไทยเช้า/โชคดี วิน597841=บ10' },
    { text: 'ไทยเช้า/โชคดี วิน5978423=ล20 วิน123456=บ20' },
    { text: 'ไทยเช้า/โชคดี วิน12345678=ล20' },
]

const patternTextTear = [
    { text: 'ไทยเช้า/โชคดี รูด3=บ10' },
    { text: 'ไทยเช้า/โชคดี รูดหน้า3=บล10' },
    { text: 'ไทยเช้า/โชคดี รูดหลัง3=บ10ล20' },
    { text: 'ไทยเช้า/โชคดี รูดเบิ้ล=บ10ล50' },
    { text: 'ไทยเช้า/โชคดี รูดพี่น้อง=บ50ล20' },
    { text: 'ไทยเช้า/โชคดี รูด3/4=บ10' },
    { text: 'ไทยเช้า/โชคดี รูดหลัง3/4=บ10' },
    { text: 'ไทยเช้า/โชคดี รูดหน้า3/4=บ10ล20' },
    { text: 'ไทยเช้า/โชคดี รูด3/4/5=บ10' },
]