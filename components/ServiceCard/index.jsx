import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Link from "next/link"
import { truncate, prettyFeatures } from "../../lib/utils"

const Outer = styled.li`
    background: white;
    padding: 30px;
    display: block;
    margin-bottom: 25px;
    box-shadow: 0 4px 0 ${theme.shadow};
    position: relative;
    &:active{
        transform: translateY(4px);
        background: ${theme.activeCard};
    }
    &:focus-within{
        box-shadow: 0 0 0 3px ${theme.focus};
    }
`

const StyledLink = styled.a`
    color: ${theme.darkText};
    text-decoration: none;

    &:after{
        content: "";
        display: block;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
    }
    &:focus{
        outline: none !important
    }
`

const Headline = styled.h3`
    margin-bottom: 10px;
    font-size: 1.2em;
    @media screen and (min-width: ${theme.tablet}){
        font-size: 1.4em;
    }
`

const Deck = styled.p`
    color: ${theme.lightText};
    line-height: 1.6;
    margin-bottom: 20px;
`

const Tag = styled.strong`
    display: inline-block;
    font-size: 0.95em;
    color: white;
    background: ${(props)=> theme[props.category]};
    padding: 0px 5px;
    text-transform: capitalize;
    margin-right: 15px;
`

const Meta = styled.footer`
    color: ${theme.lightText};
    line-height: 1.7;
`

const ServiceCard = ({
    headline,
    deck,
    href,
    category,
    distance,
    accessibility,
    days
}) =>
    <Link href={href}>
        <Outer>

            <Link href={href}>
                <StyledLink href={href}>
                    <Headline>{headline}</Headline>
                </StyledLink>
            </Link>

            <Deck>{truncate(deck, 20)}</Deck>
            <Meta>
                <Tag category={category}>{category}</Tag>
                <span dangerouslySetInnerHTML={{__html: prettyFeatures(distance, accessibility, days)}}></span>
            </Meta>

        </Outer>
    </Link>

export default ServiceCard