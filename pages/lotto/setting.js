import { compose } from 'redux'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import withAdmin from '../../hocs/withAuthenticatedAdmin'
import withSummary from '../../hocs/withSummary'
import withSetting from '../../hocs/withSetting'
import withAlert from '../../hocs/withAlert'
import Layout from '../../layout/layout'
import Reward from '../../components/setting/Reward'
import NumOff from '../../components/setting/Numset'
import NumLimit from '../../components/setting/NumLimit'
import LimitPerNumber from '../../components/setting/LimitPerNumber'
import LimitTotalNumber from '../../components/setting/LimitTotalNumber'
import Percent from '../../components/setting/Percent'
import PerUnit from '../../components/setting/PerUnit'
import TimeOffSet from '../../components/setting/TimeOffSet'
import { CodeToLotteryName, ObjectDateToBasicDate } from '../../helper/convert'
import { selectLotto } from '../../helper/condition'
import withNumRole from '../../hocs/withNumRole'

const Setting = (props) => {
    const { userStore, dateStore, menuStore } = props

    return (
        <>
            <Layout
                userStore={userStore}
                lotto="th"
                page="setting"
            >
                <main className="setting pa-10">
                    <section className="reward card pa-10">
                        {props.menuStore.now_lotto !== 'th' ?
                            <Reward
                                category="main"
                                className="mr-40"
                                token={userStore.access_token}
                                settingStore={selectLotto(props.settingStore, props.menuStore.lottery_name)}
                            /> : ''
                        }
                        <Reward
                            category="up"
                            className="mr-40"
                            token={userStore.access_token}
                            settingStore={selectLotto(props.settingStore, props.menuStore.lottery_name)}
                        />
                        <Reward
                            category="down"
                            token={userStore.access_token}
                            settingStore={selectLotto(props.settingStore, props.menuStore.lottery_name)}
                        />
                    </section>
                    <section className="numset card pa-10">
                        <div className="field-area">
                            <TimeOffSet
                                token={userStore.access_token}
                                settingStore={selectLotto(props.settingStore, props.menuStore.lottery_name)}
                            />
                        </div>
                        <div className="field-area">
                            <NumOff
                                head="เลขปิด"
                                num="off"
                                token={userStore.access_token}
                                date={ObjectDateToBasicDate(dateStore.now)}
                                lottery_name={CodeToLotteryName(menuStore.lt1_lotto)}
                                change={userStore.change}
                            />
                            <NumLimit
                                token={userStore.access_token}
                                date={ObjectDateToBasicDate(dateStore.now)}
                                lottery_name={CodeToLotteryName(menuStore.lt1_lotto)}
                                change={userStore.change}
                            />

                        </div>
                        <div className="field-area">
                            <LimitPerNumber />
                            <LimitTotalNumber />

                        </div>
                        {props.menuStore.now_lotto === 'th' ?
                            <div className="field-area">
                                <PerUnit head="อัตราจ่ายบาทละ" />
                                <Percent head="ตั้งเปอร์เซ็นต์" />
                            </div> : ''}
                        {props.menuStore.now_lotto !== 'th' ?
                            <>
                                <div className="field-area">
                                    <Percent head="ตั้งเปอร์เซ็นต์" />
                                </div>
                                <div className="field-area">
                                    <PerUnit
                                        head="อัตราจ่าย (บาทละ)"
                                        sub="3 ตรง"
                                        category="main"
                                    />
                                    <PerUnit
                                        head="อัตราจ่าย (บาทละ)"
                                        sub="3 โต้ด"
                                        category="sec"
                                    />
                                    <PerUnit
                                        head="อัตราจ่าย (บาทละ)"
                                        sub="2 ตัวบน"
                                        category="up"
                                    />
                                    <PerUnit
                                        head="อัตราจ่าย (บาทละ)"
                                        sub="2 ตัวล่าง"
                                        category="down"
                                    />
                                </div>
                            </> : ''}
                    </section>
                </main>
            </Layout>
            <style jsx>{`
                .reward {
                    display: flex;
                    justify-content: center;
                }
                .numset {
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                }
                .field-area {
                    display: flex;
                }
            `}</style>
        </>
    )
}
const mapStateToProps = state => {
    return {
        menuStore: state.menuStore,
        settingStore: state.settingStore,
    }
}

export default compose(
    withAdmin,
    withAlert,
    withSummary,
    withSetting,
    withNumRole,
    connect(mapStateToProps, {})
)(Setting)