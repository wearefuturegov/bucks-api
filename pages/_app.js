import React from "react"
import App, { Container } from "next/app"
import Router from "next/router"
import { initGA, logPageView } from "../lib/analytics"

const handleRouteChange = url => {
    console.log("App is changing to: ", url)
    logPageView()
}
  
Router.events.on("routeChangeComplete", handleRouteChange)
Router.events.on("hashChangeComplete", handleRouteChange)

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    componentDidMount () {
        if (!window.GA_INITIALIZED) {
            initGA()
            window.GA_INITIALIZED = true
        }
        logPageView()
        console.log("fuck")
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