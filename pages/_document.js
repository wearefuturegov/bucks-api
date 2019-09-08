import Document, { Html, Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {

    static async getInitialProps (ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
                })
            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                    </>
                )
            }
        } finally {
            sheet.seal()
        }
    }


    render() {
        const host = process.env.HOST || "https://bucks-care-staging.herokuapp.com"
        return (
            <Html lang="en">
                <Head>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700&display=swap" rel="stylesheet"/> 
                    <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
                    <meta name="twitter:card" content="summary"></meta>
                    <meta name="twitter:username" content="@buckscc"></meta>
                    <meta property="og:url" content="http://buckscc.gov.uk" />
                    <meta property="og:title" content="Care and support for adults, their families and carers" />
                    <meta property="og:description" content="Helping you find the right information and support in Buckinghamshire." />
                    <meta property="og:image" content={`${host}/static/share-image.jpg`} />
                    {this.props.styles}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }


}
