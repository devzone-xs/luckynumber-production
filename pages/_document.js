import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <>  <Head>
                {/* <link href="/static/semantic/dist/semantic.min.css" rel="stylesheet" /> */}
                <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Prompt&display=swap" rel="stylesheet" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1, width=device-width, user-scalable=no  maximum-scale=1, minimum-scale=1" />
            </Head>
                <Html>

                    <body>
                        <Main />
                        <NextScript />
                    </body>
                </Html>
            </>
        )
    }
}

export default MyDocument