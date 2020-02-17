import { ArrToNewArrNum, LotteryToName } from '../../helper/convert'

const Order = (props) => {
    const { buy_lottery_id, name, total } = props.selectList
    const { lottery_name, nums, date } = buy_lottery_id
    return (
        <>
            <div className="card ma-10 pa-10">
                <section className="head">{LotteryToName(lottery_name)}</section>
            </div>
            <style jsx>{`
                    .head {
                        font-size: 16px;
                    }
                `}</style>
        </>
    )
}

export default Order