import { compose } from 'redux'
import { useEffect } from 'react'
import Router from 'next/router'
import withAdmin from '../hocs/withAuthenticatedAdmin'

const App = () => {
    useEffect(() => {
        Router.push('/lotto')
    }, [])

    return (
        <div></div>
    )
}

export default compose(withAdmin)(App)