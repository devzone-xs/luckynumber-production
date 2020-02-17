import { compose } from 'redux'
import { useState, useEffect } from 'react'
import withSuper from '../../hocs/withAuthenticatedSuper'
import Layout from '../../layout/layout'
import ManageMenu from '../../components/menu/ManageMenu'
import SubHeader from '../../components/numstate/Header'
import ListUser from '../../components/order/ListUser'
import { serviceSuperGetAdmin } from '../../service/super'
import { filterLock } from '../../helper/filter'
import ModalAdd from '../../components/manage/ModalAdd'
import ModalLock from '../../components/manage/ModalLock'
import ModalUnLock from '../../components/manage/ModalUnLock'
import ModalDelete from '../../components/manage/ModalDelete'
import ModalEdit from '../../components/manage/ModalEdit'

const Super = (props) => {
    const { userStore } = props
    const [nowState, setNowState] = useState('mn1')
    const [userlist, setUserlist] = useState(false)
    const [openAdd, setOpenAdd] = useState(false)
    const [openLock, setOpenLock] = useState(false)
    const [openUnLock, setOpenUnLock] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [lockUser, setLockUser] = useState('')

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async (e = nowState) => {
        let res = await serviceSuperGetAdmin(userStore.access_token)
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

    const nextEditMember = (username) => {
        setLockUser(username)
        setOpenEdit(true)
    }
    const closeEdit = () => { setOpenEdit(false) }

    return (
        <>
            <Layout userStore={userStore} page="manage">
                <ModalAdd
                    role={userStore.payload.role}
                    open={openAdd}
                    close={closeAddMember}
                    token={userStore.access_token}
                    nowState={nowState}
                    fetchData={fetchData}
                />
                <ModalEdit
                    role={userStore.payload.role}
                    open={openEdit}
                    close={closeEdit}
                    token={userStore.access_token}
                    nowState={nowState}
                    fetchData={fetchData}
                    username={lockUser}
                />
                <ModalLock
                    role={userStore.payload.role}
                    open={openLock}
                    close={closeLockMember}
                    username={lockUser}
                    token={userStore.access_token}
                    nowState={nowState}
                    fetchData={fetchData}
                />
                <ModalUnLock
                    role={userStore.payload.role}
                    open={openUnLock}
                    close={closeUnLockMember}
                    username={lockUser}
                    token={userStore.access_token}
                    nowState={nowState}
                    fetchData={fetchData}
                />
                <ModalDelete
                    role={userStore.payload.role}
                    open={openDelete}
                    close={closeDelete}
                    username={lockUser}
                    token={userStore.access_token}
                    nowState={nowState}
                    fetchData={fetchData}
                />
                <ManageMenu
                    userStore={userStore}
                    mn1={nowState === 'mn1' ? true : false}
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
                                nextEditMember={nextEditMember}
                            />
                        </section>
                    </div>
                    <div className="right card">
                        <SubHeader>สรุปยอด</SubHeader>
                        <section className="field">
                            <label>จำนวนผู้ดูแลระบบทั้งหมด</label>
                            <span className="num-state">{userlist ? userlist.length : 'กำลังโหลด...'}</span>
                        </section>
                        <section className="field">
                            <label>จำนวนผู้ดูแลระบบที่ถูกล๊อค</label>
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
    withSuper
)(Super)