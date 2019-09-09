import React from "react"
import styled from "styled-components"
import theme from "../_theme"

const Bar = styled.section`
    padding: 50px 40px;
    @media screen and (min-width: ${theme.tablet}){
        padding: 80px 40px;
    }
`

const Inner = styled.section`
    max-width: 500px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
`

const Headline = styled.h1`
    margin-bottom: 10px;
    color: ${theme.darkText};
    font-size: 1.5em;
    @media screen and (min-width: ${theme.tablet}){
        font-size: 1.9em;
    }
    @media screen and (min-width: ${theme.desktop}){
        font-size: 2.4em;
        margin-bottom: 15px;
    }
`

const Deck = styled.div`
    line-height: 1.6;
    color: ${theme.darkText};
    word-wrap: break-word;
    @media screen and (min-width: ${theme.tablet}){
        font-size: 1.15em;
    }
    @media screen and (min-width: ${theme.desktop}){
        font-size: 1.3em;
    }
    a{
        color: ${theme.link};
        font-weight: bold;
        &:hover{
            text-decoration: none;
        }
        &:focus{
            outline: 3px solid ${theme.focus};
            background: ${theme.focus};               
        }
    }
`

const CallToAction = ({
    headline,
    children
}) =>
    <Bar>
        <Inner>
            <Headline>{headline}</Headline>
            <Deck>{children}</Deck>
        </Inner>
    </Bar>

export default CallToAction