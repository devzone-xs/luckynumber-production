import { Button, Select } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import { editSettingLottoTimeOut } from '../../service/admin'
import { hourOptions } from '../../helper/date'
import { HourMinuteToTime } from '../../helper/convert'
import { changeState } from '../../redux/user/actions'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { setAlert } from '../../redux/alert/actions'

const TimeOffSet = (props) => {
    const { settingStore, token } = props
    const { now_lotto } = props.menuStore
    const [minute, setMinute] = useState('')
    const [hour, setHour] = useState('')

    useEffect(() => {
        if (settingStore) {
            setHour(settingStore.time_out[0] + settingStore.time_out[1])
            setMinute(settingStore.time_out[3] + settingStore.time_out[4])
        }
    }, [props.settingStore.time_out])

    const onChangeMinute = (e) => {
        if (e.target.value >= 0 && e.target.value < 60 && e.target.value.length < 3 && settingStore.reward_up === null && settingStore.reward_down === null) {
            setMinute(e.target.value)
        }
    }

    const nextSetTime = async () => {
        var res
        if (minute !== '' && hour !== '' && minute.length === 2 && settingStore.reward_up === null && settingStore.reward_down === null) {
            res = await editSettingLottoTimeOut({
                token,
                time_out: HourMinuteToTime(hour, minute),
                lottery_name: settingStore.lottery_name,
                date: settingStore.date,
            })
            if (res.message === 'update succeed') {
                changeState(true)
                props.setAlert('บันทึกสำเร็จ', 'success')
            }
            else {
                props.setAlert('มีข้อผิดพลาดในการบันทึก', 'negative')
            }
        }
    }

    return (
        <>
            <main>
                <h3 className="ui header mb-10 w-100">
                    <div className="content">
                        ตั้งเวลาปิด
                    <div className="sub header">

                        </div>
                    </div>
                </h3>
                <div className="ui input mb-10 w-100 input-time">
                    <Select
                        placeholder='hh'
                        options={hourOptions}
                        className="hour"
                        value={hour}
                        onChange={(e, val) => {
                            if (settingStore.reward_up === null && settingStore.reward_down === null)
                                setHour(val.value)
                        }}
                        defaultValue={hour}
                    />
                    <input
                        type="number"
                        placeholder="mm"
                        className="minute"
                        value={minute}
                        onChange={onChangeMinute}
                    />
                </div>

                {now_lotto === 'th' ? <> {
                    settingStore.reward_up === null && settingStore.reward_down === null ?
                        <Button color='instagram' className="w-100" onClick={nextSetTime}>
                            <div>บันทึก</div>
                        </Button> :
                        <Button className="w-100">
                            <div>ประการศรางวัลแล้ว</div>
                        </Button>
                }
                </> : <> {
                    settingStore.reward_up === null && settingStore.reward_down === null && settingStore.reward_three === null ?
                        <Button color='instagram' className="w-100" onClick={nextSetTime}>
                            <div>บันทึก</div>
                        </Button> :
                        <Button className="w-100">
                            <div>ประการศรางวัลแล้ว</div>
                        </Button>
                }
                    </>}

            </main>
            <style jsx>{`
            main {
                margin: 20px 50px;
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 250px;
            }
            .input-time {
                display: flex;
                justify-content: space-between;
            }
            input {
                width: 50%;
                max-width: 50%;
            }
        `}</style>
        </>
    )
}
const mapStateToProps = state => {
    return {
        menuStore: state.menuStore
    }
}

export default compose(
    connect(mapStateToProps, { changeState, setAlert })
)(TimeOffSet)