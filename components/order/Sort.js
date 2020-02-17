import { Select, Button } from 'semantic-ui-react'
import { useState } from 'react'

const selectSort = [
    { key: 1, value: 1, text: 'ยอดแทงมากไปน้อย' },
    { key: 2, value: 2, text: 'ยอดแทงน้อยไปมาก' },
    { key: 3, value: 3, text: 'หมายเลขมากไปน้อย' },
    { key: 4, value: 4, text: 'หมายเลขน้อยไปมาก' },
    { key: 5, value: 5, text: 'ชื่อลูกค้า' },
    { key: 6, value: 6, text: 'ยอดแทงถูกมากไปน้อย' },

]

const Sort = (props) => {
    const { searchText, setSearchText, setSortOption } = props

    return (
        <>
            <main className="card-x ma-10 pa-10">
                <h4 className="mb-10">จัดเรียง</h4>
                <section>
                    <div className="group">
                        <div className="ui category search mr-10">
                            <div className="ui icon input">
                                <input
                                    onChange={(e) => setSearchText(e.target.value)}
                                    value={searchText}
                                    className=""
                                    type="text"
                                    placeholder="Search"
                                />
                                <i className="search icon"></i>
                            </div>
                            <div className="results"></div>
                        </div>
                    </div>
                    <div className="group">
                        <Select
                            className="mr-10 select-c"
                            placeholder='ประเภทการจัดเรียง'
                            options={selectSort}
                            key={selectSort.key}
                            onChange={(e, val) => setSortOption(val.value)}
                        />
                    </div>

                </section>

            </main>
            <style jsx>{`
                main {
                    display: flex;
                    flex-direction: column;
                }
                section {
                    display: flex;
                    justify-content: space-between;
                }
                .group {
                    display: flex;
                }
                @media (max-width: 426px) {
                    section {
                        flex-direction: column;
                    }
                    .group {
                        margin-bottom: 5px;
                    }
                }
            `}</style>
        </>
    )
}

export default Sort