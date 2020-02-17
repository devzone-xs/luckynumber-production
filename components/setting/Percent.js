import { useState, useEffect } from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { changeState } from '../../redux/user/actions'
import { selectLotto, perUnitfilter } from '../../helper/condition'
import { setAlert } from '../../redux/alert/actions'
import { serviceAdminUpdatePercent, serviceAdminEditPricePerUnit } from '../../service/admin'

const Percent = (props) => {
    const { percent } = props.settingStore
    const { head, sub } = props

    const [percentInput, setPercentInput] = useState('')

    useEffect(() => {
        setPercentInput(selectLotto(percent, props.menuStore.lottery_name))
    }, [props.numSummaryStore])

    const handleChangePerInput = (e) => {
        if (e.target.value.length >= 0 && e.target.value.length <= 3) {
            setPercentInput({ ...percentInput, percent: e.target.value })
        }
    }

    const nextSetPercent = async () => {
        if (percentInput.percent.length > 0 && percentInput.percent.length <= 3) {
            var res = await serviceAdminUpdatePercent({
                token: props.userStore.access_token,
                lottery_name: percentInput.lottery_name,
                percent_id: percentInput.percent_id,
                percent: percentInput.percent,
            })
            if (res.message === 'update succeed') {
                props.changeState(!props.userStore.change)
                props.setAlert('บันทึกเปอร์เซ็นต์สำเร็จ', 'positive')
            }

        }
        else {
            props.setAlert('ข้อมูลที่ป้อนไม่ถูกต้อง', 'negative')
        }
    }

    return (
        <>
            <main>
                <h3 className="ui header mb-10 w-100">
                    <div className="content">
                        {head}
                        <div className="sub header">
                            {sub}
                        </div>
                    </div>
                </h3>
                <div className="ui input mb-10 w-100">
                    <input
                        type="number"
                        placeholder="number"
                        value={percentInput.percent}
                        onChange={handleChangePerInput}
                    />
                </div>
                <Button color='instagram' className="w-100" onClick={nextSetPercent}><div>บันทึก</div></Button>
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
        menuStore: state.menuStore,
        dateStore: state.dateStore,
        userStore: state.userStore,
        numSummaryStore: state.numSummaryStore,
        settingStore: state.settingStore,
    }
}

export default compose(
    connect(mapStateToProps, {
        changeState,
        setAlert,
    }),
)(Percent)