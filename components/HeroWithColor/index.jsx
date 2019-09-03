import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Breadcrumbs from "../Breadcrumbs"

const Hero = styled.section`
    background-color: ${theme.background};
    padding: 20px;
`

const HeroInner = styled.div`
    max-width: ${theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
`

const TextBox = styled.div`
    max-width: 80%;
    padding: 20px 0px;
    @media screen and (min-width: ${theme.tablet}){
        padding: 50px 0px;
        max-width: 50%;
    }

`

const Headline = styled.h1`
    margin-bottom: 10px;
    color: ${theme.darkText};
    font-size: 1.5em;
    @media screen and (min-width: ${theme.tablet}){
        font-size: 1.9em;
    }
    @media screen and (min-width: ${theme.desktop}){
        font-size: 2.3em;
        margin-bottom: 15px;
    }
`

const Deck = styled.p`
    margin-bottom: 10px;
    color: ${theme.darkText};
    @media screen and (min-width: ${theme.tablet}){
        font-size: 1.1em;
    }
    @media screen and (min-width: ${theme.desktop}){
        font-size: 1.2em;
    }
`

const HeroWithColor = ({
    breadcrumbs,
    headline,
    deck,
}) =>
    <Hero>
        <HeroInner>
        <Breadcrumbs breadcrumbs={breadcrumbs}/>
            <TextBox>
                <Headline>{headline}</Headline>
                <Deck>{deck}</Deck>
            </TextBox>
        </HeroInner>
    </Hero>
    
export default HeroWithColor