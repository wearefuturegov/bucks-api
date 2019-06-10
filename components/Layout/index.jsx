import React from 'react'
import Head from 'next/head'
import { Provider } from 'reakit'
import './style.scss'

const Layout = ({children})=>
<>
    <Head>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700&display=swap" rel="stylesheet"/> 
    </Head>
    <Provider>
        {children}
    </Provider>
</>

export default Layout