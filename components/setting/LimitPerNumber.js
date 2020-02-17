import { Button } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import { changeState } from '../../redux/user/actions'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { setAlert } from '../../redux/alert/actions'
import { filterNumLimitUser } from '../../helper/filter'
import { serviceAdmiCreateLimitUser } from '../../service/admin'
import { ObjectDateToBasicDate } from '../../helper/convert'

const LimitPerNumber = (props) => {
    const { changeDate, changeLotto, changeSubLotto, change } = props.userStore
    const [value, setValue] = useState('')

    useEffect(() => {
        setValue(filterNumLimitUser(props.numRoleStore.numlimit_user, props.menuStore.lottery_name))
    }, [])

    useEffect(() => {
        setValue(filterNumLimitUser(props.numRoleStore.numlimit_user, props.menuStore.lottery_name))
    }, [changeDate, changeLotto, changeSubLotto, change])

    const handlerChange = (e) => {
        setValue(e.target.value)
    }

    const nextEdit = async () => {
        if (filterNumLimitUser(props.numRoleStore.numlimit_user, props.menuStore.lottery_name) === '') {
            var res = await serviceAdmiCreateLimitUser({
                token: props.userStore.access_token,
                date: ObjectDateToBasicDate(props.dateStore.now),
                limit: value,
                lottery_name: props.menuStore.lottery_name,

            })
            if (res !== 'err') {
                props.setAlert('บันทึกสำเร็จ', 'positive')
            }
            else {
                props.setAlert('ข้อผิดพลาดระหว่างบันทึก', 'negative')
            }
        }
        else {
            props.setAlert('ระบบยังไม่รองรับการแก้ไข', 'negative')
        }
    }

    return (
        <>
            <main>
                <h3 className="ui header mb-10 w-100">
                    <div className="content">
                        ยอดอั้นลูกค้าซื้อต่อเลข
                        <div className="sub header">
                        </div>
                    </div>
                </h3>
                <div className='ui input mb-10 w-100'>
                    <input
                        type="number"
                        placeholder="number"
                        onChange={handlerChange}
                        value={value}
                    />
                </div>
                <Button color='instagram' className="w-100" onClick={nextEdit}><div>บันทึก</div></Button>
            </main>
            <style jsx>{`
                main {
                    margin: 20px 50px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 250px;
                }
            `}</style>
        </>
    )
}
const mapStateToProps = state => {
    return {
        dateStore: state.dateStore,
        userStore: state.userStore,
        menuStore: state.menuStore,
        numRoleStore: state.numRoleStore,
    }
}

export default compose(
    connect(mapStateToProps, { changeState, setAlert })
)(LimitPerNumber)