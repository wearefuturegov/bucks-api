import React from "react"
import styled from "styled-components"
import theme from "../_theme"

const Banner = styled.section`
    background: ${theme.focus};
    color: ${theme.darkText};
    padding: 10px 20px;
`

const BannerInner = styled.div`
    max-width: ${theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`

const Tag = styled.strong`
    background: ${theme.darkText};
    color: ${theme.focus};
    padding: 2px 7px;
    display: inline-block;
    text-transform: uppercase;
    margin-right: 15px;
`

const StyledLink = styled.a`
    color: ${theme.darkText};
    &:hover{
        text-decoration: none;
    }
    &:focus{
        outline: 3px solid ${theme.darkText};
        background: ${theme.darkText};
        color: ${theme.focus};
    }
`

const PhaseBanner = () =>
    <Banner>
        <BannerInner>
            <Tag>Beta</Tag>
            <p>This is a new website - <StyledLink href="/feedback">your feedback</StyledLink> will help us improve it.</p>
        </BannerInner>
    </Banner>

export default PhaseBanner