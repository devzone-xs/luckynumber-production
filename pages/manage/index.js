import { compose } from 'redux'
import { useState, useEffect } from 'react'
import withAdmin from '../../hocs/withAuthenticatedAdmin'
import Layout from '../../layout/layout'
import ManageMenu from '../../components/menu/ManageMenu'
import SubHeader from '../../components/numstate/Header'
import ListUser from '../../components/order/ListUser'
import { serviceAdminGetAssistent, serviceAdminGetUser } from '../../service/admin'
import { filterLock } from '../../helper/filter'
import ModalAdd from '../../components/manage/ModalAdd'
import ModalLock from '../../components/manage/ModalLock'
import ModalUnLock from '../../components/manage/ModalUnLock'
import ModalDelete from '../../components/manage/ModalDelete'

const Manage = (props) => {
    const { userStore } = props
    const [nowState, setNowState] = useState('')
    const [userlist, setUserlist] = useState(false)
    const [openAdd, setOpenAdd] = useState(false)
    const [openLock, setOpenLock] = useState(false)
    const [openUnLock, setOpenUnLock] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [lockUser, setLockUser] = useState('')

    useEffect(() => {
        initialManageState()
    }, [])

    const initialManageState = () => {
        if (userStore.payload.role === 1) {
            setNowState('mn1')
            fetchData('mn1')
        }
        else if (userStore.payload.role === 2) {
            setNowState('mn2')
            fetchData('mn2')
        }
    }

    const fetchData = async (e = nowState) => {
        if (e === 'mn1')
            var res = await serviceAdminGetAssistent(userStore.access_token)
        else if (e === 'mn2')
            var res = await serviceAdminGetUser(userStore.access_token)

        if (res !== 'err') {
            setUserlist(res)
        }
    }

    const nextAddMember = () => { setOpenAdd(true) }
    const closeAddMember = () => { setOpenAdd(false) }
    const nextLockMember = (username) => {
        setLockUser(username)
        setOpenLock(true)

    }
    const closeLockMember = () => { setOpenLock(false) }
    const nextUnLockMember = (username) => {
        setLockUser(username)
        setOpenUnLock(true)

    }
    const closeUnLockMember = () => { setOpenUnLock(false) }
    const nextDeleteMember = (username) => {
        setLockUser(username)
        setOpenDelete(true)

    }
    const closeDelete = () => { setOpenDelete(false) }

    const changeNowState = (e) => () => {
        setNowState(e)
        fetchData(e)
    }

    return (
        <>
            <Layout userStore={userStore} page="manage">
                <ModalAdd
                    open={openAdd}
                    close={closeAddMember}
                    token={userStore.access_token}
                    nowState={nowState}
                    fetchData={fetchData}
                    role={userStore.payload.role}
                />
                <ModalLock
                    open={openLock}
                    close={closeLockMember}
                    username={lockUser}
                    token={userStore.access_token}
                    nowState={nowState}
                    fetchData={fetchData}
                    role={userStore.payload.role}
                />
                <ModalUnLock
                    open={openUnLock}
                    close={closeUnLockMember}
                    username={lockUser}
                    token={userStore.access_token}
                    nowState={nowState}
                    fetchData={fetchData}
                    role={userStore.payload.role}
                />
                <ModalDelete
                    open={openDelete}
                    close={closeDelete}
                    username={lockUser}
                    token={userStore.access_token}
                    nowState={nowState}
                    fetchData={fetchData}
                    role={userStore.payload.role}
                />
                <ManageMenu
                    userStore={userStore}
                    changeNowState={changeNowState}
                    mn1={nowState === 'mn1' ? true : false}
                    mn2={nowState === 'mn2' ? true : false}
                />
                <main>
                    <div className="left">
                        <section className="list-user">
                            <ListUser
                                nowState={nowState}
                                userlist={userlist}
                                nextAddMember={nextAddMember}
                                nextLockMember={nextLockMember}
                                nextUnLockMember={nextUnLockMember}
                                nextDeleteMember={nextDeleteMember}
                            />
                        </section>
                    </div>
                    <div className="right card">
                        <SubHeader>สรุปยอด</SubHeader>
                        <section className="field">
                            <label>{nowState === 'mn1' ? 'จำนวนผู้ช่วยทั้งหมด' : nowState === 'mn2' ? 'จำนวนผู้ใช้ทั้งหมด' : ''}</label>
                            <span className="num-state">{userlist ? userlist.length : 'กำลังโหลด...'}</span>
                        </section>
                        <section className="field">
                            <label>{nowState === 'mn1' ? 'จำนวนผู้ช่วยที่ถูกล๊อค' : nowState === 'mn2' ? 'จำนวนผู้ใช้ที่ถูกล๊อค' : ''}</label>
                            <span className="num-state">{userlist ? filterLock(userlist) : 'กำลังโหลด...'}</span>
                        </section>
                    </div>
                </main>


            </Layout>
            <style jsx>{`
                main {
                    display: flex;
                    margin: 10px;
                }
                .left {
                    width: 100%;
                }
                .right {
                    width: 320px;
    
                }
                .field {
                    margin: 20px;
                    display: flex;
                    flex-direction: column;
                }
                .num-state {
                    margin: 10px 0;
                    font-size: 25px;
                }
            `}</style>
        </>
    )
}

export default compose(
    withAdmin,
)(Manage) 