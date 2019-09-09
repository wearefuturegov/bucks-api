import React from "react"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.section`
    background: ${(props) => props.staging ? theme.link : theme.focus};
    color: ${(props) => props.staging ? theme.white : theme.darkText};
    padding: 10px 20px;
`

const Inner = styled.div`
    max-width: ${theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`

const Tag = styled.strong`
    background: ${(props) => props.staging ? theme.white : theme.darkText};
    color: ${(props) => props.staging ? theme.link : theme.focus};
    padding: 2px 7px;
    display: inline-block;
    text-transform: uppercase;
    margin-right: 15px;
`

const StyledLink = styled.a`
    color: ${(props) => props.staging ? theme.white : theme.darkText};
    &:hover{
        text-decoration: none;
    }
    &:focus{
        outline: 3px solid ${(props) => props.staging ? theme.white : theme.darkText};
        background: ${(props) => props.staging ? theme.white : theme.darkText};
        color: ${(props) => props.staging ? theme.link : theme.focus};
    }
`

const PhaseBanner = () => {
    if(process.env.STAGING_BANNER == "true") return(
        <Outer staging>
            <Inner>
                <Tag staging>Staging</Tag>
                <p>This is the staging site. You might be looking for <StyledLink staging href="http://bucks-care.herokuapp.com">production</StyledLink>.</p>
            </Inner>
        </Outer>
    )

    return(
        <Outer>
            <Inner>
                <Tag>Beta</Tag>
                <p>This is a new website - <StyledLink href="/feedback">your feedback</StyledLink> will help us improve it.</p>
            </Inner>
        </Outer>
    )
}

export default PhaseBanner