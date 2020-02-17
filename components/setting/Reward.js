import { Button } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import {
    editSettingLottoRewardMain,
    editSettingLottoRewardUp,
    editSettingLottoRewardDown
} from '../../service/admin'
import { changeState } from '../../redux/user/actions'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { setAlert } from '../../redux/alert/actions'
import { RewardUpThreeToTwo } from '../../helper/convert'

const Reward = (props) => {
    const { category, settingStore, token, userStore } = props
    const { reward_up, reward_down, reward_three, status } = props.settingStore
    const [reward, setReward] = useState('')

    useEffect(() => {
        if (settingStore) {
            if (category === 'main') {
                setReward(settingStore.reward_three)
                if (reward_three === null) {
                    setReward('')
                }
            }
            else if (category === 'up') {
                setReward(settingStore.reward_up)
                if (reward_up === null) {
                    setReward('')
                }
            }
            else if (category === 'down') {
                setReward(settingStore.reward_down)
                if (reward_down === null) {
                    setReward('')
                }
            }
        }

    }, [reward_three, reward_up, reward_down])

    const inputReward = (e) => {
        if (category === 'main' && e.target.value.length <= 3) {
            setReward(e.target.value)
        }
        else if (category === 'up' && e.target.value.length <= 3) {
            setReward(e.target.value)
        }
        else if (category === 'down' && e.target.value.length <= 2) {
            setReward(e.target.value)
        }
    }

    const nextSetReward = async () => {
        var res
        if (category === 'main' && reward.length === 3) {
            res = await editSettingLottoRewardMain({
                token,
                lottery_name: settingStore.lottery_name,
                date: settingStore.date,
                reward_three: reward,
            })
            if (res.message === 'update succeed') {
                props.changeState(!userStore.change)
                props.setAlert('บันทึกสำเร็จ', 'success')
            }
        }
        else if (category === 'up' && reward.length <= 3 && reward.length >= 2) {
            res = await editSettingLottoRewardUp({
                token,
                lottery_name: settingStore.lottery_name,
                date: settingStore.date,
                reward_up: RewardUpThreeToTwo(reward),
            })
            if (res.message === 'update succeed') {
                props.changeState(!userStore.change)
                props.setAlert('บันทึกสำเร็จ', 'success')
            }
        }
        else if (category === 'down' && reward.length === 2) {
            res = await editSettingLottoRewardDown({
                token,
                lottery_name: settingStore.lottery_name,
                date: settingStore.date,
                reward_down: reward,
            })
            if (res.message === 'update succeed') {
                props.changeState(!userStore.change)
                props.setAlert('บันทึกสำเร็จ', 'success')
            }
        }
        else {
            props.setAlert('กรอกผลรางวัลให้ถูกรูปแบบก่อนบันทึก', 'negative')
        }
    }

    return (
        <>
            <main>
                <h3 className="ui header mb-10 w-100">
                    <div className="content">
                        ผลรางวัล
                        <div className="sub header">
                            {category === 'up' ? "เลขบน" : ''}
                            {category === 'down' ? "เลขล่าง" : ''}
                            {category === 'main' ? "3 ตัวตรง" : ''}
                        </div>
                    </div>
                </h3>
                <div className='ui input mb-10 w-100'>
                    <input
                        type="number"
                        placeholder="number"
                        value={reward}
                        onChange={inputReward}
                    />
                </div>
                {status === 0 ?
                    <Button className="w-100"><div>ตลาดยังไม่ปิด</div></Button> :
                    <Button color='instagram' className="w-100" onClick={nextSetReward}><div>บันทึก</div></Button>
                }

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
        userStore: state.userStore
    }
}

export default compose(
    connect(mapStateToProps, { changeState, setAlert })
)(Reward)