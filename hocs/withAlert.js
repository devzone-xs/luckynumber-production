import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

export default WrapComponent => {
    const withAlert = (props) => {
        const { alertStore } = props
        return (
            <>
                <WrapComponent {...props} />
                {alertStore.state ? <div className="alert">
                    <div className={`ui message pa-24 ${alertStore.color}`}>
                        <div className="content">
                            <p>{alertStore.message}</p>
                        </div>
                    </div>
                </div> : ''}

                <style jsx>{`
                    .alert {
                        z-index: 9999;
                        position: fixed;
                        bottom: 0;
                        right: 0;
                        width: 280px;
                        min-width: 280px;
                        margin-bottom: 15px;
                        margin-right: 15px;
                    }
                    p {
                        font-size: 16px;
                    }
                `}</style>
            </>
        )
    }

    const mapStateToProps = state => {
        return {
            alertStore: state.alertStore
        }
    }

    return compose(
        connect(mapStateToProps, {})
    )(withAlert)
}