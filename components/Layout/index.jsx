import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import './style.scss'

const Layout = ({children})=>
<>
    <Head>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700&display=swap" rel="stylesheet"/> 
    </Head>
    {children}
</>

Layout.propTypes = {
    children: PropTypes.node
}

export default Layout