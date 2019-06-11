import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import PhaseBanner from '../PhaseBanner'
import IsPageUseful from '../IsPageUseful'
import FullWidthSearch from '../FullWidthSearchPanel'
import Footer from '../Footer'
import './style.scss'

const Layout = ({children})=>
<>
    <Head>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700&display=swap" rel="stylesheet"/> 
    </Head>
    <PhaseBanner href="#"/>
    {children}
    <IsPageUseful/>
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

Layout.propTypes = {
    children: PropTypes.node
}

export default Layout