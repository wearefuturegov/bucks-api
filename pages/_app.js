import React from "react"
import App, { Container } from "next/app"
import Router from "next/router"
import { initGA, logPageView } from "../lib/analytics"
import Head from "next/head"
  
Router.events.on("routeChangeComplete", logPageView)
Router.events.on("hashChangeComplete", logPageView)

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