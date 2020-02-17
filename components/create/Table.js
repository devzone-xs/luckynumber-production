export const TableThree = (props) => (
    <table className="ui celled very compact table">
        <thead>
            <tr>
                <th className="A">ลำดับ</th>
                <th className="B">{props.category}</th>
                <th className="C">จำนวน (บาท)</th>
            </tr>
        </thead>
        <tbody>
            {props.nums.map((i, k) => (
                <tr key={k}>
                    <td><span className="c-gray"> {k + 1}</span></td>
                    <td>{i.num}</td>
                    <td><span className="c-blue">{i.price}</span></td>
                </tr>
            ))}
        </tbody>
    </table>
)