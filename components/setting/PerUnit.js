import { useState, useEffect } from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { changeState } from '../../redux/user/actions'
import { perUnitfilter } from '../../helper/condition'
import { setAlert } from '../../redux/alert/actions'
import {
    serviceAdminEditPricePerUnit,
    serviceAdminEditPricePerUnitMain,
    serviceAdminEditPricePerUnitSec,
    serviceAdminEditPricePerUnitUp,
    serviceAdminEditPricePerUnitDown,
} from '../../service/admin'
import { ObjectToTextDate } from '../../helper/convert'

const PerUnit = (props) => { 
    const { per_unit } = props.settingStore
    const { head, sub, category } = props
    const { now } = props.dateStore

    const [percentUnit, setPercentUnit] = useState('')

    useEffect(() => {
        // setPercentUnit(perUnitfilter(per_unit, props.menuStore.lottery_name))
        setPercentUnit(perUnitfilter(per_unit, props.menuStore.lottery_name))
    }, [props.numSummaryStore])

    const handleChangePerUnitInput = (e) => {
        if (e.target.value.length >= 0) {
            if (props.menuStore.now_lotto === 'th')
                setPercentUnit({ ...percentUnit, price: e.target.value })
            else {
                if (category === 'main')
                    setPercentUnit({ ...percentUnit, price_main: e.target.value })
                else if (category === 'sec')
                    setPercentUnit({ ...percentUnit, price_sec: e.target.value })
                else if (category === 'up')
                    setPercentUnit({ ...percentUnit, price_up: e.target.value })
                else if (category === 'down')
                    setPercentUnit({ ...percentUnit, price_down: e.target.value })
            }
        }
    }

    const nextSetPerUnit = async () => {
        if (props.menuStore.now_lotto === 'th') {
            var res = await serviceAdminEditPricePerUnit({
                token: props.userStore.access_token,
                lottery_name: percentUnit.lottery_name,
                per_id: percentUnit.per_id,
                price: percentUnit.price,
                date: ObjectToTextDate(now)
            })
        }
        else {
            if (category === 'main')
                var res = await serviceAdminEditPricePerUnitMain({
                    token: props.userStore.access_token,
                    lottery_name: percentUnit.lottery_name,
                    per_id: percentUnit.per_id,
                    price_main: percentUnit.price_main,
                    date: ObjectToTextDate(now)
                })
            else if (category === 'sec')
                var res = await serviceAdminEditPricePerUnitSec({
                    token: props.userStore.access_token,
                    lottery_name: percentUnit.lottery_name,
                    per_id: percentUnit.per_id,
                    price_sec: percentUnit.price_sec,
                    date: ObjectToTextDate(now)
                })
            else if (category === 'up')
                var res = await serviceAdminEditPricePerUnitUp({
                    token: props.userStore.access_token,
                    lottery_name: percentUnit.lottery_name,
                    per_id: percentUnit.per_id,
                    price_up: percentUnit.price_up,
                    date: ObjectToTextDate(now)
                })
            else if (category === 'down')
                var res = await serviceAdminEditPricePerUnitDown({
                    token: props.userStore.access_token,
                    lottery_name: percentUnit.lottery_name,
                    per_id: percentUnit.per_id,
                    price_down: percentUnit.price_down,
                    date: ObjectToTextDate(now)
                })
        }

        if (res === 'err') {
            props.setAlert('มีข้อผิดพลาดโปรดลองใหม่', 'negative')
        }
        else if (res.message === 'update succeed') {
            props.setAlert('บันทึกอัตราจ่ายสำเร็จ', 'positive')
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

                {props.menuStore.now_lotto === 'th' ? <div className="ui input mb-10 w-100">
                    <input
                        type="number"
                        placeholder="number"
                        value={percentUnit.price}
                        onChange={handleChangePerUnitInput}
                    />
                </div> : ''}

                {props.menuStore.now_lotto !== 'th' ? <div className="ui input mb-10 w-100">
                    <>
                        {category === 'main' ?
                            <input
                                type="number"
                                placeholder="number"
                                value={percentUnit.price_main}
                                onChange={handleChangePerUnitInput}
                            /> : ''}
                        {category === 'sec' ?
                            <input
                                type="number"
                                placeholder="number"
                                value={percentUnit.price_sec}
                                onChange={handleChangePerUnitInput}
                            /> : ''}
                        {category === 'up' ?
                            <input
                                type="number"
                                placeholder="number"
                                value={percentUnit.price_up}
                                onChange={handleChangePerUnitInput}
                            /> : ''}
                        {category === 'down' ?
                            <input
                                type="number"
                                placeholder="number"
                                value={percentUnit.price_down}
                                onChange={handleChangePerUnitInput}
                            /> : ''}
                    </>
                </div> : ''}

                <Button color='instagram' className="w-100" onClick={nextSetPerUnit}><div>บันทึก</div></Button>

            </main>
            <style jsx>{`
                main { 
                    margin: 20px 25px;
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
)(PerUnit)