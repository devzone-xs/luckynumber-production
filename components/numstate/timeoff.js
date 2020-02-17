import Header from './Header'
import { selectLotto } from '../../helper/condition'

const TimeOff = (props) => {
    return (
        <>
            <section className="card timeoff">
                <Header>เวลาปิด</Header>
                <div className="time">
                    {selectLotto(props.settingStore, props.lottery_name) ? selectLotto(props.settingStore, props.lottery_name).time_out : 'กำลังโหลด...'}
                </div>
            </section>
            <style jsx>{`
                .timeoff {
                    margin-top: 10px;
                }
                .time {
                    margin: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                }
            `}</style>
        </>
    )
}

export default TimeOff