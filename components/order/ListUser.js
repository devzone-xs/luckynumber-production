import { Button } from 'semantic-ui-react'
import Lock from 'svg-react-loader?name=Lock!../../static/icon/padlock.svg'
import Set from 'svg-react-loader?name=Set!../../static/icon/settings.svg'
import Del from 'svg-react-loader?name=Del!../../static/icon/garbage.svg'

const ListUser = (props) => {
    const { nowState, userlist } = props
    return (
        <>
            <div className="card mr-10 pa-10">
                <div className="bt-add">
                    <Button positive onClick={() => props.nextAddMember()}>
                        <div>เพิ่มสมาชิก</div>
                    </Button>
                </div>
                <table className="ui single line table">
                    <thead>
                        <tr>
                            <th className="A">{nowState === 'mn1' ? 'ชื่อผู้ช่วย' : nowState === 'mn2' ? 'ชื่อผู้ใช้' : ''}</th>
                            <th>จัดการ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userlist ? userlist.map((i, k) => (
                            <tr key={k}>
                                <td>{i.username}</td>
                                <td>
                                    <section className="setting">
                                        <BlockIcon>{i.lock === 0 ?
                                            <div className="lock">
                                                <Lock width="20px" height="20px" onClick={() => props.nextUnLockMember(i.username)} />
                                            </div> :
                                            <Lock width="20px" height="20px" onClick={() => props.nextLockMember(i.username)} />}</BlockIcon>
                                        <BlockIcon>
                                            <Set width="20px" height="20px" onClick={() => props.nextEditMember(i.username)} />
                                        </BlockIcon>
                                        <BlockIcon>
                                            <Del onClick={() => props.nextDeleteMember(i.username)} width="20px" height="20px" />
                                        </BlockIcon>
                                    </section>

                                </td>
                            </tr>
                        )) : ''}

                    </tbody>
                </table>
            </div>
            <style jsx>{`
                .setting {
                    display: flex;
                }
                .bt-add {
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                }
                .A {
                    width: 420px;
                    min-width: 420px;
                }
            `}</style>
        </>
    )
}

export default ListUser

export const BlockIcon = (props) => {
    return (
        <div className="block-icon" onClick={props.onClick}>
            {props.children}
        </div>
    )
}