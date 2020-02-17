import { Button, Icon, Modal } from 'semantic-ui-react'
import { codeCategoryToName } from '../../helper/convert'
import { serviceAdminCreateNumLimitName, serviceAdminCreateNumLimit } from '../../service/admin'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { changeState } from '../../redux/user/actions'
import { CodeToLotteryName, ObjectToTextDate, LotteryToName } from '../../helper/convert'
import { setAlert } from '../../redux/alert/actions'

const ModaLimitConfirm = (props) => {
    const { open, close, numLimitSet } = props

    const nextConfirm = async () => {
        var res = await serviceAdminCreateNumLimit({
            token: props.userStore.access_token,
            lottery_name: props.menuStore.lottery_name,
            date: ObjectToTextDate(props.dateStore.now),
            nums: numLimitSet,
        })

        close()
        if (res !== 'err') {
            props.setAlert('บันทึกสำเร็จ', 'positive')
        }
        else if (res === 'err') {
            props.setAlert('ข้อผิดพลาด', 'negative ')
        }
    }

    return (
        <>
            <Modal open={open} closeOnEscape={true} onClose={() => close()} size="tiny">
                <Modal.Header><div>ยืนยันการเพิ่มเลข{props.head}{LotteryToName(CodeToLotteryName(props.menuStore.lt1_lotto))}</div> </Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <main className="numset">
                            <table className="ui celled very compact table">
                                <thead>
                                    <tr><th>ลำดับ</th>
                                        <th>เลข</th>
                                        <th>ประเภท</th>
                                        <th>จำนวน</th>
                                    </tr></thead>
                                <tbody>
                                    {numLimitSet ? numLimitSet.map((i, k) => (
                                        <tr key={k}>
                                            <td>{k + 1}</td>
                                            <td>{i.numlimit}</td>
                                            <td>{codeCategoryToName(i.category)}</td>
                                            <td>{parseInt(i.limit).toLocaleString()}</td>
                                        </tr>
                                    )) : ''}
                                </tbody>
                            </table>
                        </main>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button positive onClick={nextConfirm}>
                        <div><Icon name='check' />ยืนยัน</div>
                    </Button>
                    <Button color='red' inverted onClick={close}>
                        <div><Icon name='remove' />ปิด</div>
                    </Button>
                </Modal.Actions>
            </Modal>
        </>
    )
}
const mapStateToProps = state => {
    return {
        menuStore: state.menuStore,
        dateStore: state.dateStore,
        userStore: state.userStore,
    }
}
export default compose(
    connect(mapStateToProps, {
        changeState,
        setAlert,
    }),
)(ModaLimitConfirm)