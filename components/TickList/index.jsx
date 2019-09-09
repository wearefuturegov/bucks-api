import React from "react"
import { prettyList } from "../../lib/utils"
import styled from "styled-components"
import theme from "../_theme"
import tick from "./tick.svg"

const Outer = styled.section`
    background-color: ${theme.background};
    padding: 40px 20px;
    @media screen and (min-width: ${theme.tablet}){
        padding: 60px 20px;
    }
    font-size: 1.1em;
`

const Inner = styled.div`
    max-width: ${theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width: ${theme.tablet}){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-column-gap: 40px;
    }
`

const Column = styled.div`
    margin-bottom: 25px;
    &:last-of-type{
        margin-bottom: 0px;
    }
    @media screen and (min-width: ${theme.tablet}){
        margin-bottom: 0px;
    }
`

const List = styled.ul`
    list-style-type: none;
`

const ListItem = styled.li`
    margin-bottom: 10px;
    color: ${theme.darkText};
    position: relative;
    padding-left: 35px;
    &:before{
        position: absolute;
        left: 0px;
        top: 7px;
        content: "";
        display: inline-block;
        margin-right: 10px;
        background-image: url(${tick});
        width: 20px;
        height: 15px;
        background-size: contain;
        background-repeat: no-repeat;
    }
`

const Headline = styled.h3`
    color: ${theme.darkText};
    margin-bottom: 15px;
`


const TickLists = ({
    suitability, 
    accessibility, 
    price, 
    ages
}) =>
    <Outer>
        <Inner>
            {accessibility.length > 0 &&
                <Column>
                    <Headline>Accessibility</Headline>
                    <List>
                        {prettyList(accessibility).map((item, i)=>
                            <ListItem key={i}>{item}</ListItem>
                        )}
                    </List>
                </Column>
            }

            {suitability.length > 0 && 
                <Column>
                    <Headline>Suitability</Headline>
                    <List>
                        {prettyList(suitability).map((item, i)=>
                            <ListItem key={i}>{item}</ListItem>
                        )}
                    </List>
                </Column>
            }

            {ages.length > 0 && 
                <Column>
                    <Headline>Age groups</Headline>
                    <List>
                        {prettyList(ages).map((item, i)=>
                            <ListItem key={i}>{item}</ListItem>
                        )}
                    </List>
                </Column>
            }

            {price &&
                <Column>
                    <Headline>Price</Headline>
                    <p>{price}</p>
                </Column>
            }
        </Inner>
    </Outer>

export default TickLists