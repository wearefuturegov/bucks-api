import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Breadcrumbs from "../Breadcrumbs"

const Outer = styled.section`
    padding: 0px 20px;
`

const Inner = styled.div`
    max-width: ${theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
`

const Filters = () =>
    <Outer>
        <Inner>
            filters
        </Inner>
    </Outer>
    
export default Filters
