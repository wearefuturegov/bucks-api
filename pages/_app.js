import React from "react"
import App, { Container } from "next/app"
import Router from "next/router"
import ReactGA from "react-ga"
ReactGA.initialize(process.env.GOOGLE_TRACKING_ID)

const handleRouteChange = url => {
    console.log("route changing to: " + url)
    ReactGA.pageview(url)
}
  
Router.events.on("routeChangeStart", handleRouteChange)

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props

        return (
            <Container>
                <Component {...pageProps} />
            </Container>
        )
    }
}

export default MyApp