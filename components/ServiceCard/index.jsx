import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Link from "next/link"
import { truncate, prettyFeatures } from "../../lib/utils"
import Favouriter from "../Favouriter"

const Outer = styled.li`
    background: white;
    padding: 25px;
    display: block;
    margin-bottom: 25px;
    box-shadow: 0 4px 0 ${theme.shadow};
    position: relative;
    @media screen and (min-width: ${theme.tablet}){
        padding: 30px;
    }
    &:active{
        transform: translateY(4px);
        background: ${theme.activeCard};
    }
`

const StyledLink = styled.a`
    color: ${theme.darkText};
    text-decoration: none;
    &:focus{
        &:after{
            box-shadow: 0 0 0 3px ${theme.focus};
        }
    }
    &:after{
        content: "";
        display: block;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        /* z-index: 1; */
        /* background: green; */
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
    @media screen and (min-width: ${theme.tablet}){
        padding-right: 30px;
    }
`

const FavouriterHolder = styled.div`
    display: none;
    @media screen and (min-width: ${theme.tablet}){
        display: block;
        z-index: 2;
        position: absolute;
        right: 20px;
        bottom: 20px;
    }
`

const ServiceCard = ({
    service,
    onChange,
    favourited
}) => {
    let {
        name,
        parentOrganisation,
        description,
        assetId,
        category,
        distance,
        accessibility,
        days,
    } = service

    let href = `/service/${assetId}`

    return(
        <Outer>
            <Link href={href}>
                <StyledLink href={href}>
                    <Headline>{name || parentOrganisation}</Headline>
                </StyledLink>
            </Link>
            <Deck>{truncate(description, 20)}</Deck>
            <Meta>
                <Tag category={category}>{category}</Tag>
                <span dangerouslySetInnerHTML={{__html: prettyFeatures(distance, accessibility, days)}}></span>
            </Meta>
            <FavouriterHolder>
                <Favouriter onChange={onChange} favourited={favourited} service={service}/>
            </FavouriterHolder>
        </Outer>
    )
}

export default ServiceCard