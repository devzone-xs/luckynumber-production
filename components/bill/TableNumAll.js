const TableNum = (props) => {
    const { data, tablePerAll, category } = props
    return (
        <>
            <table className="ui celled very compact table mb-10">
                <thead>
                    <tr>
                        <th className="A">ลำดับ</th>
                        {category == 1 ? <th className="B">เลขบน</th> : ''}
                        {category == 2 ? <th className="B">เลขล่าง</th> : ''}
                        {category == 3 ? <th className="B">เลข 3 ตัวตรง</th> : ''}
                        {category == 4 ? <th className="B">เลขโต้ด</th> : ''}

                        <th className="C">จำนวน</th>
                    </tr>
                </thead>
                <tbody>
                    {data ? data.map((i, k) => (
                        <>
                            {i.pass === 0 ?
                                <tr key={k}>
                                    <td><span className="c-gray"> {k + 1}</span></td>
                                    <td className={`${parseInt(i.reward) == 1 ? 'c-green' : ''}`}>{i.num}</td>
                                    <td><span className="c-blue">{i.price}</span></td>
                                </tr>
                                :
                                <tr key={k} className="error">
                                    <td><span className="c-gray"> {k + 1}</span></td>
                                    <td className="c-red"><del>{i.num}</del></td>
                                    <td><span className="c-red"><del>{i.price}</del></span></td>
                                </tr>
                            }</>
                    )) : ''}
                </tbody>
            </table>
            <style jsx>{`
                .A {
                    width: 25%;
                    min-width: 25%;
                }
                .C {
                    width: 30%;
                    min-width: 30%; 
                }
            `}</style>
        </>
    )
}

export default TableNum