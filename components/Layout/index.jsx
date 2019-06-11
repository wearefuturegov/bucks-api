import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import PhaseBanner from '../PhaseBanner'
import IsPageUseful from '../IsPageUseful'
import './style.scss'

const Layout = ({children})=>
<>
    <Head>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700&display=swap" rel="stylesheet"/> 
    </Head>
    <PhaseBanner href="#"/>
    {children}
    <IsPageUseful/>
</>

Layout.propTypes = {
    children: PropTypes.node
}

export default Layout