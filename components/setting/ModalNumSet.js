import { useState } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import { codeCategoryToName } from '../../helper/convert'
import { NunOffSortByNum } from '../../helper/sort'
import {
    serviceAdminDeleteNumOff,
    serviceAdminDeleteNumLimit,
} from '../../service/admin'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { changeState } from '../../redux/user/actions'
import { LotteryToName } from '../../helper/convert'
import { setAlert } from '../../redux/alert/actions'

const ModalNumSet = (props) => {
    const { open, close, list, num, state, head } = props

    const deleteNumoff = (numoff_id) => async () => {
        var res = await serviceAdminDeleteNumOff({
            token: props.userStore.access_token,
            numoff_id,
        })
        if (res !== 'err') {
            props.setAlert('ลบสำเร็จ', 'positive')
        }
        else if (res === 'err') {
            props.setAlert('ข้อผิดพลาด', 'negative ')
        }
        props.changeState(!props.userStore.change)
    }

    const deleteNumLimit = (id) => async () => {
        var res = await serviceAdminDeleteNumLimit({
            token: props.userStore.access_token,
            numlimit_id: id,
        })
        props.fetchNew()
        if (res !== 'err') {
            props.setAlert('ลบสำเร็จ', 'positive')
        }
        else if (res === 'err') {
            props.setAlert('ข้อผิดพลาด', 'negative ')
        }
        props.changeState(!props.userStore.change)
    }


    return (
        <>
            <Modal open={open} closeOnEscape={true} onClose={() => close()} size="tiny">
                <Modal.Header><div>{head}{LotteryToName(props.menuStore.lottery_name)}</div> </Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <main className="numset">
                            <table className="ui celled very compact table">
                                <thead>
                                    <tr><th>ลำดับ</th>
                                        <th>เลข</th>
                                        <th>ประเภท</th>
                                        {state === 'limit' ?
                                            <th>จำนวน</th> : ''
                                        }
                                        <th>ลบ</th>
                                    </tr></thead>
                                <tbody>
                                    {state === 'off' ? <>{list ? NunOffSortByNum(list).map((i, k) => (
                                        <tr key={k}>
                                            <td className="c-gray">{k + 1}</td>
                                            <td className="off">{i.numoff}</td>
                                            <td>{codeCategoryToName(i.category)}</td>
                                            <td className="del" onClick={deleteNumoff(i.numoff_id)} >ลบ</td>
                                        </tr>
                                    )) : ''}</> :
                                        <>
                                            {list ? list.map((i, k) => (
                                                <tr key={k}>
                                                    <td className="c-gray">{k + 1}</td>
                                                    <td className="limit">{i.numlimit}</td>
                                                    <td>{codeCategoryToName(i.category)}</td>
                                                    <td className="c-blue">{i.limit}</td>
                                                    {props.stateShow === 'user' ? <td>{i.name}</td> : ''}
                                                    {props.stateShow === 'user' ?
                                                        <td className="del" onClick={deleteNumLimit(i.numlimit_user_id)}  >ลบ</td> :
                                                        <td className="del" onClick={deleteNumLimit(i.numlimit_id)}  >ลบ</td>
                                                    }

                                                </tr>
                                            )) : ''}</>}
                                </tbody>
                            </table>
                        </main>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='red' inverted onClick={close}>
                        <div><Icon name='remove' />ปิด</div>
                    </Button>
                </Modal.Actions>
            </Modal>
            <style jsx>{`
            
            `}</style>
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
)(ModalNumSet)