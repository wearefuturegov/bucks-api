import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />

                    <meta name="twitter:card" content="summary"></meta>
                    <meta name="twitter:username" content="@buckscc"></meta>
                    <meta property="og:url" content="http://buckscc.gov.uk" />
                    <meta property="og:title" content="Care and support for adults, their families and carers" />
                    <meta property="og:description" content="Helping you find the right information and support in Buckinghamshire." />
                    <meta property="og:image" content="http://bucks-care-staging.herokuapp.com/static/share-image.jpg" />

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument