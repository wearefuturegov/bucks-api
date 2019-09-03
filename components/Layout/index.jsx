import React from "react"
import PhaseBanner from "../PhaseBanner"
import Header from "../Header"
import Footer from "../Footer"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *{
        font-family: "Open Sans", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`
const Layout = ({ children }) =>
    <>
        <GlobalStyle/>
        <PhaseBanner/>
        <Header/>
        {children}
        <Footer/>
    </>

export default Layout