import { compose } from 'redux'
import { connect } from 'react-redux'
import Header from './Header'
import Items from './Items'

const NumLimit = (props) => {

    return (
        <>
            <section className="card numlimit">
                <Header>เลขอั้น</Header>
                <main>
                    {props.numRoleStore.numlimit ?
                        <Items digit={props.numRoleStore.numlimit} status="numlimit" /> : ''}
                </main>
            </section>
            <style jsx>{`
                section {
                    margin: 10px;
                }
                .numlimit {
                    min-height: 80px;
                }
                div {
                    font-weight: normal;
                }
                @media (min-width: 1026px) {
                    .numlimit {
                        width: 100%;
                    } 
                }
            `}</style>
        </>
    )
}

NumLimit.defaultProps = {
    digit: [{ num: 10 }, { num: 11 }, { num: 40 }, { num: 50 }, { num: 60 },
    { num: 10 }, { num: 11 }, { num: 40 }, { num: 50 }, { num: 60 },
    { num: 10 }, { num: 11 }, { num: 40 }, { num: 50 }, { num: 60 },
    ]
}

const mapStateToProps = state => {
    return {
        numRoleStore: state.numRoleStore,
    }
}

export default compose(
    connect(mapStateToProps, {

    })
)(NumLimit)