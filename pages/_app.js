import React from 'react'
import App from 'next/app'
import withReduxStore from '../lib/withReduxStore'
import { Provider } from 'react-redux'
import Head from 'next/head'

import '../styles/layout.scss'
import '../styles/global.scss'
import '../styles/page.scss'
import '../styles/components.scss'

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return { pageProps };
    }

    render() {
        const { Component, pageProps, reduxStore } = this.props
        return (
            <>
                <Head>
                    <title>Lucky Number</title>
                    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                </Head>
                <Provider store={reduxStore}>
                    <Component {...pageProps} />
                </Provider>

                <style jsx global>{`
                    body {
                        font-family: 'Prompt', sans-serif;
                        //font-family: 'Roboto', sans-serif;
                        margin: 0;
                    }
                    ::-webkit-scrollbar {
                         width: 0;
                    }
                    ::-webkit-input-placeholder {
                        font-family: 'Prompt', sans-serif;
                    }
                    input:focus {
                        outline: none;
                    }
                `}</style>
            </>
        )
    }
}

export default withReduxStore(MyApp)