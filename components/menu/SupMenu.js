import { compose } from 'redux'
import { connect, useStore } from 'react-redux'
import { useEffect, useState } from 'react'
import { Button } from 'semantic-ui-react'
import {
    setSubLotto,
    setLottoryName,
} from '../../redux/menu/actions'
import { setStateDate } from '../../redux/date/actions'
import { Statistic } from 'semantic-ui-react'
import { changeState, changeStateDate, changeStateSubLotto } from '../../redux/user/actions'
import moment from 'moment'

const Menu = (props) => {
    const { c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, dateStore } = props
    const { now_lotto } = props.menuStore
    const [yesterday, setYesterday] = useState(false)

    useEffect(() => {

    }, [])

    const editDate = async () => {
        if (!yesterday) {
            let date = moment().add(-1, 'days').format('L')
            let sub = date.split('/')
            var newDate = {
                day: sub[1],
                mon: sub[0],
                year: sub[2],
            }
            setYesterday(true)
        }
        else if (yesterday) {
            let date = moment().format('L')
            let sub = date.split('/')
            var newDate = {
                day: sub[1],
                mon: sub[0],
                year: sub[2],
            }
            setYesterday(false)
        }

        //Set Date Store
        props.setStateDate(newDate)
        props.changeStateDate(!props.userStore.changeDate)
    }

    const handleChangeSubLotto = (n, t) => () => {
        props.setLottoryName(t)
        props.setSubLotto(n)
        props.changeStateSubLotto(!props.userStore.changeSubLotto)
    }

    return (
        <>
            <section className="sup-menu">
                <div className="box">
                    {now_lotto === 'th' ? <>
                        <Button className="px-15 bt-menu px-m-10" primary={c1} onClick={handleChangeSubLotto('c1', 'th_mon_market')}>
                            <div className="text">หุ้นไทยเช้า (ตลาด)</div>
                        </Button>
                        <Button className="px-15 bt-menu" bt-menu primary={c2} onClick={handleChangeSubLotto('c2', 'th_mon')}>
                            <div className="text">หุ้นไทยเช้า</div>
                        </Button>
                        <Button className="px-15 bt-menu" bt-menu primary={c3} onClick={handleChangeSubLotto('c3', 'th_non')}>
                            <div className="text">หุ้นไทยเที่ยง</div>
                        </Button>
                        <Button className="px-15 bt-menu" bt-menu primary={c4} onClick={handleChangeSubLotto('c4', 'th_afn_market')}>
                            <div className="text">หุ้นไทยบ่ายตลาด</div>
                        </Button>
                        <Button className="px-15 bt-menu" bt-menu primary={c5} onClick={handleChangeSubLotto('c5', 'th_afn')}>
                            <div className="text">หุ้นไทยบ่าย</div>
                        </Button>
                        <Button className="px-15 bt-menu" bt-menu primary={c6} onClick={handleChangeSubLotto('c6', 'th_evn')}>
                            <div className="text">หุ้นไทยเย็น</div>
                        </Button>
                    </> : ''}

                    {now_lotto === 'fr' ? <>
                        <Button className="px-15 bt-menu px-m-10" color={c1 ? 'orange' : ''} onClick={handleChangeSubLotto('c1', 'fr_dj')}>
                            <div className="text">ดาวโจนส์</div>
                        </Button>
                        <Button className="px-15 bt-menu" bt-menu color={c2 ? 'orange' : ''} onClick={handleChangeSubLotto('c2', 'fr_nk_mon')}>
                            <div className="text">นิเคอิเช้า</div>
                        </Button>
                        <Button className="px-15 bt-menu" bt-menu color={c3 ? 'orange' : ''} onClick={handleChangeSubLotto('c3', 'fr_ch_mon')}>
                            <div className="text">จีนเช้า</div>
                        </Button>
                        <Button className="px-15 bt-menu" bt-menu color={c4 ? 'orange' : ''} onClick={handleChangeSubLotto('c4', 'fr_hs_mon')}>
                            <div className="text">ฮั่งเส็งเช้า</div>
                        </Button>
                        <Button className="px-15 bt-menu" bt-menu color={c5 ? 'orange' : ''} onClick={handleChangeSubLotto('c5', 'fr_tw')}>
                            <div className="text">ใต้หวัน</div>
                        </Button>
                        <Button className="px-15 bt-menu" bt-menu color={c6 ? 'orange' : ''} onClick={handleChangeSubLotto('c6', 'fr_nk_afn')}>
                            <div className="text">นิเคอิบ่าย</div>
                        </Button>
                        <Button className="px-15 bt-menu" bt-menu color={c7 ? 'orange' : ''} onClick={handleChangeSubLotto('c7', 'fr_kr')}>
                            <div className="text">เกาหลี</div>
                        </Button>
                        <Button className="px-15 bt-menu" bt-menu color={c8 ? 'orange' : ''} onClick={handleChangeSubLotto('c8', 'fr_ch_afn')}>
                            <div className="text">จีนบ่าย</div>
                        </Button>
                        <Button className="px-15 bt-menu" bt-menu color={c9 ? 'orange' : ''} onClick={handleChangeSubLotto('c9', 'fr_hs_afn')}>
                            <div className="text">ฮั่งเส็งบ่าย</div>
                        </Button>
                        <Button className="px-15 bt-menu" bt-menu color={c10 ? 'orange' : ''} onClick={handleChangeSubLotto('c10', 'fr_sp')}>
                            <div className="text">สิงคโปร์</div>
                        </Button>
                        <Button className="px-15 bt-menu" bt-menu color={c11 ? 'orange' : ''} onClick={handleChangeSubLotto('c11', 'fr_id')}>
                            <div className="text">อินเดีย</div>
                        </Button>
                        <Button className="px-15 bt-menu" bt-menu color={c12 ? 'orange' : ''} onClick={handleChangeSubLotto('c12', 'fr_ey')}>
                            <div className="text">อียิปต์</div>
                        </Button>
                    </> : ''}

                    {now_lotto === 'ts' ? <>
                        <Button className="px-15 bt-menu px-m-10" color={c1 ? 'green' : ''} onClick={handleChangeSubLotto('c1', 'ts_rs')}>
                            <div className="text">รัสเซีย</div>
                        </Button>
                        <Button className="px-15 bt-menu" bt-menu color={c2 ? 'green' : ''} onClick={handleChangeSubLotto('c2', 'ts_ge')}>
                            <div className="text">เยอรมัน</div>
                        </Button>
                        <Button className="px-15 bt-menu" bt-menu color={c3 ? 'green' : ''} onClick={handleChangeSubLotto('c3', 'ts_en')}>
                            <div className="text">อังกฤษ</div>
                        </Button>
                    </> : ''}

                    {now_lotto === 'hn' ? <>
                        <Button className="px-15 bt-menu px-m-10" color={c1 ? 'purple' : ''} onClick={handleChangeSubLotto('c1', 'hn')}>
                            <div className="text">ฮานอย</div>
                        </Button>
                        <Button className="px-15 bt-menu px-m-10" color={c2 ? 'purple' : ''} onClick={handleChangeSubLotto('c2', 'hn_vip')}>
                            <div className="text">ฮานอย VIP</div>
                        </Button>
                    </> : ''}


                    {now_lotto === 'lo' ? <>
                        <Button className="px-15 bt-menu px-m-10" color={c1 ? 'yellow' : ''} onClick={handleChangeSubLotto('c1', 'lo')}>
                            <div className="text">ลาว</div>
                        </Button>
                    </> : ''}


                    {now_lotto === 'ms' ? <>
                        <Button className="px-15 bt-menu px-m-10" color={c1 ? 'teal' : ''} onClick={handleChangeSubLotto('c1', 'ms')}>
                            <div className="text">มาเลย์</div>
                        </Button>
                    </> : ''}


                    {now_lotto === 'gm' ? <>
                        <Button className="px-15 bt-menu px-m-10" color={c1 ? 'black' : ''} onClick={handleChangeSubLotto('c1', 'gm')}>
                            <div className="text">รัฐบาล</div>
                        </Button>
                    </> : ''}

                </div>
                <div className="date">
                    <Button className="px-15 bt-menu mx-5" inverted color='green' onClick={editDate}>
                        <div className="text">
                            {yesterday ? 'ดูข้อมูลวันนี้' : 'ดูข้อมูลเมื่อวาน'}
                        </div>
                    </Button>

                    <Statistic size='tiny' className="my-0 ml-15">
                        <Statistic.Value>{dateStore.now.day}</Statistic.Value>
                        <Statistic.Label><div>วัน</div></Statistic.Label>
                    </Statistic>
                    <Statistic size='tiny' className="my-0">
                        <Statistic.Value>{dateStore.now.mon}</Statistic.Value>
                        <Statistic.Label><div>เดือน</div></Statistic.Label>
                    </Statistic>
                    <Statistic size='tiny' className="my-0 mr-15">
                        <Statistic.Value>{dateStore.now.year}</Statistic.Value>
                        <Statistic.Label><div>ปี</div></Statistic.Label>
                    </Statistic>
                </div>
            </section>
            <style jsx>{`
                section {
                    margin: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                div {
                    font-weight: normal;
                }
                
            `}</style>
        </>
    )
}

const mapStateToProps = state => {
    return {
        menuStore: state.menuStore,
        dateStore: state.dateStore,
        userStore: state.userStore
    }
}

export default compose(
    connect(mapStateToProps, {
        setStateDate,
        changeState,
        changeStateDate,
        changeStateSubLotto,
        setSubLotto,
        setLottoryName,
    }),
)(Menu)