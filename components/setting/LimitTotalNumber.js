import { Button } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import { changeState } from '../../redux/user/actions'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { setAlert } from '../../redux/alert/actions'
import { serviceGetNumLimitAll, serviceSetNumLimitAll } from '../../service/admin'
import { ObjectDateToBasicDate } from '../../helper/convert'

const LimitTotalNumber = (props) => {
    const { changeDate, changeSubLotto, changeLotto } = props.userStore
    const [value, setValue] = useState('')

    useEffect(() => {
        initialValue(props.userStore.limit)
    }, [props.userStore.limit])

    useEffect(() => {
        fetchNumLimitAll()
    }, [changeDate, changeSubLotto, changeLotto])

    const initialValue = (v) => {
        if (v === false)
            setValue('')
        else
            setValue(v)
    }

    const fetchNumLimitAll = async () => {
        var res = await serviceGetNumLimitAll({
            token: props.userStore.access_token,
            date: ObjectDateToBasicDate(props.dateStore.now),
            lottery_name: props.menuStore.lottery_name
        })
        if (res !== 'err') {
            if (res.length !== 0) {
                setValue(res[0].limit)
            }
            else {
                setValue('')
            }
        }
        else {

        }
    }

    const nextSetNumLimitAll = async () => {
        if (value > 0) {
            var res = await serviceSetNumLimitAll({
                token: props.userStore.access_token,
                date: ObjectDateToBasicDate(props.dateStore.now),
                lottery_name: props.menuStore.lottery_name,
                limit: value
            })
            res !== 'err' ?
                props.setAlert('บันทึกยอดรวมต่อเลขสำเร็จ', 'positive') :
                props.setAlert('มีข้อผิดพลาดในการบันทึก', 'negative')

        }

    }

    return (
        <>
            <main>
                <h3 className="ui header mb-10 w-100">
                    <div className="content">
                        ยอดรวมต่อเลข
                        <div className="sub header">
                        </div>
                    </div>
                </h3>
                <div className='ui input mb-10 w-100'>
                    <input
                        type="number"
                        placeholder="number"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </div>
                <Button color='instagram' className="w-100" onClick={nextSetNumLimitAll}><div>บันทึก</div></Button>
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
        userStore: state.userStore,
        dateStore: state.dateStore,
        menuStore: state.menuStore,
    }
}

export default compose(
    connect(mapStateToProps, { changeState, setAlert })
)(LimitTotalNumber)