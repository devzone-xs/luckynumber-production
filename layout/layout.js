import { compose } from 'redux'
import { connect } from 'react-redux'
import { useState } from 'react'
import { serviceAuthLogout } from '../service/auth'
import Router from 'next/router'
import { removeToken } from '../helper/token'
import {
    RoleToText,
    RoleToLinkManage,
} from '../helper/convert'
import Link from 'next/link'
import Header from '../components/Header'
import Menu from '../components/menu/SupMenu'
import { selectLottoTh, setNowLotto, resetSubLotto, setLottoryName } from '../redux/menu/actions'
import MainMenu from '../components/menu/MainMenu'
import { changeStateLotto } from '../redux/user/actions'

const Layout = (props) => {
    const { userStore, page, setNowLotto, header } = props
    const {
        sub_lotto,
        now_lotto,
    } = props.menuStore

    const [showMenu, setShowMenu] = useState(false)

    const nextLogout = async () => {
        let res = await serviceAuthLogout(props.userStore.access_token)
        if (res !== 'err') {
            removeToken()
            Router.push('/login')
        }
        else {
            removeToken()
            Router.push('/login')
        }
    }

    const handleChangeLotto = (e, t) => () => {
        setNowLotto(e)
        props.setLottoryName(t)
        props.resetSubLotto()
        props.changeStateLotto(!props.userStore.changeLotto)
        setShowMenu(false)
    }

    return (
        <div className="layout">
            <div className="bt-menu-burger" onClick={() => setShowMenu(!showMenu)}>
                <img src="/static/icon/menu.svg" alt="" />
            </div>
            <nav>
                <div className="menu">
                    {userStore.payload.role === 0 ? '' :
                        <>
                            <Link href="/lotto">
                                <section className="bt-link" onClick={handleChangeLotto('th', 'th_mon_market')}>หุ้นไทย</section>
                            </Link>
                            <Link href="/lotto">
                                <section className="bt-link" onClick={handleChangeLotto('fr', 'fr_dj')}>หุ้นต่างประเทศ</section>
                            </Link>
                            <Link href="/lotto">
                                <section className="bt-link" onClick={handleChangeLotto('ts', 'ts_rs')}>สามรัฐ</section>
                            </Link>
                            <Link href="/lotto">
                                <section className="bt-link" onClick={handleChangeLotto('hn', 'hn')}>ฮานอย</section>
                            </Link>
                            <Link href="/lotto">
                                <section className="bt-link" onClick={handleChangeLotto('lo', 'lo')}>ลาว</section>
                            </Link>
                            <Link href="/lotto">
                                <section className="bt-link" onClick={handleChangeLotto('ms', 'ms')}>มาเลย์</section>
                            </Link>

                            <Link href="/lotto">
                                <section className="bt-link" onClick={handleChangeLotto('gm', 'gm')}>รัฐบาล</section>
                            </Link>



                        </>}
                </div>
                <div className="manage">
                    <section className="username">
                        <div>{userStore.payload.username}</div>
                        <span className="tag-role">{RoleToText(userStore.payload.role)}</span>
                    </section>
                    {userStore.payload.role === 1 || userStore.payload.role === 2 ?
                        <>
                            <Link href={RoleToLinkManage(userStore.payload.role)}>
                                <section className="bt-link">จัดการระบบ</section>
                            </Link>
                            <Link href="/summary">
                                <section className="bt-link">สรุปยอดรวม</section>
                            </Link>
                        </> : ''}
                    <section className="bt-link" onClick={nextLogout}>ออกจากระบบ</section>
                </div>
            </nav>
            <nav className={`menu-mobile ${showMenu ? 'active' : 'unactive'}`}>
                <div className="menu">
                    {userStore.payload.role === 0 ? '' :
                        <>
                            <Link href="/lotto">
                                <section className="bt-link" onClick={handleChangeLotto('th', 'th_mon_market')}>หุ้นไทย</section>
                            </Link>
                            <Link href="/lotto">
                                <section className="bt-link" onClick={handleChangeLotto('fr', 'fr_dj')}>หุ้นต่างประเทศ</section>
                            </Link>
                            <Link href="/lotto">
                                <section className="bt-link" onClick={handleChangeLotto('ts', 'ts_rs')}>สามรัฐ</section>
                            </Link>
                            <Link href="/lotto">
                                <section className="bt-link" onClick={handleChangeLotto('hn', 'hn')}>ฮานอย</section>
                            </Link>
                            <Link href="/lotto">
                                <section className="bt-link" onClick={handleChangeLotto('lo', 'lo')}>ลาว</section>
                            </Link>
                            <Link href="/lotto">
                                <section className="bt-link" onClick={handleChangeLotto('ms', 'ms')}>มาเลย์</section>
                            </Link>

                            <Link href="/lotto">
                                <section className="bt-link" onClick={handleChangeLotto('gm', 'gm')}>รัฐบาล</section>
                            </Link>
                        </>}
                </div>

                <div className="manage">
                    <section className="username">
                        <div>{userStore.payload.username}</div>
                        <span className="tag-role">{RoleToText(userStore.payload.role)}</span>
                    </section>
                    {userStore.payload.role === 1 || userStore.payload.role === 2 ?
                        <>
                            <Link href={RoleToLinkManage(userStore.payload.role)}>
                                <section className="bt-link">จัดการระบบ</section>
                            </Link>
                            <Link href="/summary">
                                <section className="bt-link">สรุปยอดรวม</section>
                            </Link>
                        </> : ''}
                    <section className="bt-link" onClick={nextLogout}>ออกจากระบบ</section>
                </div>
            </nav>
            <main className="maincontent">
                <Header>
                    {page !== 'summary_all' ? <>
                        {page === 'manage' ? 'จัดการผู้ใช้' : <>
                            {
                                now_lotto === 'th' ? 'หุ้นไทย' :
                                    now_lotto === 'fr' ? 'หุ้นต่างประเทศ' :
                                        now_lotto === 'ts' ? 'สามรัฐ' :
                                            now_lotto === 'hn' ? 'ฮานอย' :
                                                now_lotto === 'lo' ? 'ลาว' :
                                                    now_lotto === 'ms' ? 'มาเลย์' :
                                                        now_lotto === 'gm' ? 'รัฐบาล' : ''
                            }
                        </>}
                    </> : 'สรุปยอดรวม'}
                </Header>

                {page !== 'summary_all' ?
                    <> {page !== 'manage' ? <>
                        {now_lotto === 'th' ?
                            <Menu
                                c1={sub_lotto === 'c1' ? true : false}
                                c2={sub_lotto === 'c2' ? true : false}
                                c3={sub_lotto === 'c3' ? true : false}
                                c4={sub_lotto === 'c4' ? true : false}
                                c5={sub_lotto === 'c5' ? true : false}
                                c6={sub_lotto === 'c6' ? true : false}
                            /> : ''}

                        {now_lotto === 'fr' ?
                            <Menu
                                c1={sub_lotto === 'c1' ? true : false}
                                c2={sub_lotto === 'c2' ? true : false}
                                c3={sub_lotto === 'c3' ? true : false}
                                c4={sub_lotto === 'c4' ? true : false}
                                c5={sub_lotto === 'c5' ? true : false}
                                c6={sub_lotto === 'c6' ? true : false}
                                c7={sub_lotto === 'c7' ? true : false}
                                c8={sub_lotto === 'c8' ? true : false}
                                c9={sub_lotto === 'c9' ? true : false}
                                c10={sub_lotto === 'c10' ? true : false}
                                c11={sub_lotto === 'c11' ? true : false}
                                c12={sub_lotto === 'c12' ? true : false}
                            /> : ''}

                        {now_lotto === 'ts' ?
                            <Menu
                                c1={sub_lotto === 'c1' ? true : false}
                                c2={sub_lotto === 'c2' ? true : false}
                                c3={sub_lotto === 'c3' ? true : false}
                            /> : ''}

                        {now_lotto === 'hn' ?
                            <Menu
                                c1={sub_lotto === 'c1' ? true : false}
                                c2={sub_lotto === 'c2' ? true : false}
                            /> : ''}

                        {now_lotto === 'lo' ?
                            <Menu
                                c1={sub_lotto === 'c1' ? true : false}
                            /> : ''}

                        {now_lotto === 'ms' ?
                            <Menu
                                c1={sub_lotto === 'c1' ? true : false}
                            /> : ''}

                        {now_lotto === 'gm' ?
                            <Menu
                                c1={sub_lotto === 'c1' ? true : false}
                            /> : ''}

                        {page !== 'summary_all' ?
                            <MainMenu
                                m1={page === 'index' ? true : false}
                                m2={page === 'order' ? true : false}
                                m3={page === 'summary' ? true : false}
                                m4={page === 'setting' ? true : false}
                                role={userStore.payload.role}
                            /> : ''}

                    </> : ''}</> : ''}
                {props.children}
            </main>
        </div >
    )
}

const mapStateToProps = state => {
    return {
        menuStore: state.menuStore,
        userStore: state.userStore,
    }
}

export default compose(
    connect(mapStateToProps, {
        selectLottoTh,
        setNowLotto,
        changeStateLotto,
        resetSubLotto,
        setLottoryName,
    }),
)(Layout)