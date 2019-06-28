import React from "react"
import PropTypes from "prop-types"
import Head from "next/head"
import Header from "../Header"
import PhaseBanner from "../PhaseBanner"
import IsPageUseful from "../IsPageUseful"
import FullWidthSearch from "../FullWidthSearchPanel"
import Footer from "../Footer"
import "./style.scss"

const Layout = ({children, withHeader, withUseful, withFooter, fullHeight})=>
    <div className={fullHeight ? "layout--full-height" : undefined}>
        <Head>
            <title>Care and support for adults | Buckinghamshire County Council</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700&display=swap" rel="stylesheet"/> 
        </Head>
        <PhaseBanner href="#"/>
        {withHeader && <Header /> }
        {children}
        {withUseful && <IsPageUseful />}
        {withFooter &&
        <>
            <FullWidthSearch
                popularPages={[
                    {
                        title: "Getting equipment",
                        href: "#"
                    },
                    {
                        title: "Keeping yourself safe",
                        href: "#"
                    },
                    {
                        title: "Getting help at home",
                        href: "#"
                    },
                ]}
            />
            <Footer/>
        </>
        }
    </div>

Layout.propTypes = {
    children: PropTypes.node,
    withHeader: PropTypes.bool,
    withUseful: PropTypes.bool,
    withFooter: PropTypes.bool
}

export default Layout