import React, {useEffect, useRef} from "react"
import Header from "../Header"
import styled from "styled-components"

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
        <Header/>
        {children}
    </FocusOnMount>

export default Layout