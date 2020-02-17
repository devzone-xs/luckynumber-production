import { useState, useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Header from './Header'
import Items from './Items'
import { serviceGetNumOff } from '../../service/all'

const NumOff = (props) => {
    const { digit, change, lottery_name, date, token } = props
    const [numoff, setNumOff] = useState(false)

    useEffect(() => {
        fetchNumOff()
    }, [])

    useEffect(() => {
        fetchNumOff()
    }, [change])

    const fetchNumOff = async () => {
        let res = await serviceGetNumOff({
            lottery_name,
            date,
            token
        })
        if (res !== 'err') {
            setNumOff(res)
        }

    }

    return (
        <>
            <section className="card numoff">
                <Header>เลขปิด</Header>
                <main>
                    {props.numRoleStore.numoff ?
                        <Items digit={props.numRoleStore.numoff} status="numoff" /> : ''}
                </main>
            </section>
            <style jsx>{`
                section {
                    margin: 10px;
                }
                .numoff {
                    min-height: 80px;
                } 
                div {
                    font-weight: normal;
                }
                header {
                    display: flex;
                    align-items: center;
                    padding: 0 20px;
                    height: 30px;
                    border-bottom: 1px solid #cdced2;
                }
                @media (min-width: 1026px) {
                    .numoff {
                        width: 100%;
                    } 
                }
            `}</style>
        </>
    )
}

const mapStateToProps = state => {
    return {
        numRoleStore: state.numRoleStore,
    }
}

export default compose(
    connect(mapStateToProps, {

    })
)(NumOff)