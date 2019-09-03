import React, {useEffect, useRef} from "react"
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

const Div = styled.div`
    outline: 0 !important;
    &:focus{
        outline: 0 !important;
    }
`

const FocusOnMount = ({children}) => {
    const ref = useRef(null)
    useEffect(()=>{ref.current.focus()})
    return(
        <Div ref={ref} tabIndex="-1">
            {children}
        </Div>
    )
}

const Layout = ({ children }) =>
    <FocusOnMount>
        <GlobalStyle/>
        <PhaseBanner/>
        <Header/>
        {children}
        <Footer/>
    </FocusOnMount>

export default Layout