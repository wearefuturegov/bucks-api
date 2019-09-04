import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Breadcrumbs from "../Breadcrumbs"

const Outer = styled.section`
    background-color: ${(props) => props.backgroundColor};
    padding: 20px;
`

const Inner = styled.div`
    max-width: ${theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
`

const TextBox = styled.div`
    padding: 20px 0px;
    @media screen and (min-width: ${theme.tablet}){
        padding: 40px 0px;
        max-width: 55%;
    }
`

const Headline = styled.h1`
    margin-bottom: 10px;
    color: ${theme.darkText};
    font-size: 1.6em;
    @media screen and (min-width: ${theme.tablet}){
        font-size: 1.9em;
    }
    @media screen and (min-width: ${theme.desktop}){
        font-size: 2.4em;
        margin-bottom: 15px;
    }
`

const Deck = styled.p`
    margin-bottom: 10px;
    line-height: 1.6;
    color: ${theme.lightText};
    @media screen and (min-width: ${theme.tablet}){
        font-size: 1.15em;
    }
    @media screen and (min-width: ${theme.desktop}){
        font-size: 1.3em;
    }
`

const HeroWithColor = ({
    breadcrumbs,
    headline,
    deck,
    backgroundColor
}) =>
    <Outer backgroundColor={backgroundColor}>
        <Inner>
            <Breadcrumbs breadcrumbs={breadcrumbs}/>
            <TextBox>
                <Headline>{headline}</Headline>
                <Deck>{deck}</Deck>
            </TextBox>
        </Inner>
    </Outer>
    
export default HeroWithColor

HeroWithColor.defaultProps = {
    backgroundColor: theme.background
}