const TableNum = (props) => {
    const { data, tablePerAll } = props
    return (
        <>
            <table className="ui celled very compact table">
                <thead>
                    <tr>
                        <th className="A">ลำดับ</th>
                        <th className="B">เลข</th>
                        <th className="C">บน</th>
                        <th className="C">ล่าง</th>
                    </tr>
                </thead>
                <tbody>
                    {data ? data.map((i, k) => (
                        <>
                            {tablePerAll(k) ?
                                <>
                                    {i.pass_up === 0 || i.pass_down === 0 ?
                                        <tr key={k}>
                                            <td><span className="c-gray"> {k + 1}</span></td>
                                            <td className={`${parseInt(i.reward) == 1 ? 'c-green' : ''}`}>{i.num}</td>
                                            <td>{i.up === undefined ? '-' : <span className="c-blue">{i.up}</span>}</td>
                                            <td>{i.down === undefined ? '-' : <span className="c-blue">{i.down}</span>}</td>
                                        </tr> :
                                        <tr key={k} className="error">
                                            <td><span> {k + 1}</span></td>
                                            <td><span className="c-red"><del>{i.num}</del></span></td>
                                            <td>{i.up === undefined ? '-' : <span className="c-red"><del>{i.up}</del></span>}</td>
                                            <td>{i.down === undefined ? '-' : <span className="c-red"><del>{i.down}</del></span>}</td>
                                        </tr>
                                    }
                                </> : ''
                            }
                        </>
                    )) : ''}
                </tbody>
            </table>
        </>
    )
}

export default TableNum