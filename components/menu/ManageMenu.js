import { Button } from 'semantic-ui-react'

const ManageMenu = (props) => {
    const { mn1, mn2, changeNowState, userStore } = props

    return (
        <>
            <section>
                <div>
                    {userStore.payload.role === 1 ?
                        <Button className="px-15 px-m-10" primary={mn1} onClick={changeNowState('mn1')}>
                            <div className="text">ผู้ช่วย</div>
                        </Button> : ''}
                    {userStore.payload.role === 1 || userStore.payload.role === 2 ?
                        <Button className="px-15" primary={mn2} onClick={changeNowState('mn2')}>
                            <div className="text">ผู้ใช้งาน</div>
                        </Button> : ''}
                    {userStore.payload.role === 0 ?
                        <Button className="px-15" primary={mn1}>
                            <div className="text">ผู้ดูแลระบบ</div>
                        </Button> : ''}
                </div>
            </section>
            <style jsx>{`
        section {
            margin: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .right {
            display: flex;
            align-items: center; 
        }
        div {
            font-weight: normal;
        }

        `}</style>
        </>
    )

}

export default ManageMenu