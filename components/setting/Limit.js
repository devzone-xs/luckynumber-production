import { Button } from 'semantic-ui-react'

const Limit = (props) => {
    const { head } = props
    return (
        <>
            <main>
                <h2 className="ui header mb-10 w-100">
                    <div className="content">
                        {head}
                        <div className="sub header">

                        </div>
                    </div>
                </h2>
                <div className="ui input mb-10 w-100">
                    <input type="number" placeholder="number" />
                </div>
                <Button color='instagram' className="w-100"><div>บันทึก</div></Button>
            </main>
            <style jsx>{`
                main {
                    margin: 20px 50px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 250px;
                }
            `}</style>
        </>
    )
}

export default Limit