import { Button } from 'semantic-ui-react'
import { Menu, Segment } from 'semantic-ui-react'
import Link from 'next/link'

const MainMenu = (props) => {
    const { m1, m2, m3, m4, role } = props
    return (
        <>
            <section className="mainmenu">
                <Menu pointing secondary>

                    <Link href="/lotto">
                        <Menu.Item
                            name='หน้าแทง'
                            active={m1 ? true : false}
                            className="list"
                        />
                    </Link>

                    <Link href="/lotto/order">
                        <Menu.Item
                            name='รายการแทง'
                            active={m2 ? true : false}
                            className="list"
                        />
                    </Link>

                    {role === 1 ? <>
                        <Link href="/lotto/summary">
                            <Menu.Item
                                name='สรุปผล'
                                active={m3 ? true : false}
                                className="list"

                            />
                        </Link>
                        <Link href="/lotto/setting">
                            <Menu.Item
                                name='ตั้งค่า'
                                active={m4 ? true : false}
                                className="list"
                            />
                        </Link>
                    </> : ''}
                </Menu>
            </section>
            <style jsx>{`
                section {
                    margin: 0 10px 10px 10px;
                }
                div {
                    font-weight: normal;
                }
                .icon {
                    margin: 5px;
                }
            `}</style>
        </>
    )
}

export default MainMenu