import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Card from "../Card"

// TODO: add styled components

const Outer = styled.section`
    background-color: ${theme.background};
    padding: 20px 20px;
    @media screen and (min-width: ${theme.tablet}){
        padding: 50px 20px;
    }
`

const Inner = styled.section`
    max-width: ${theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
`

const Grid = styled.ul`
    list-style: none;
    @media screen and (min-width: ${theme.tablet}){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 25px;
    }
`

const CardGrid = ({
    headline,
    cards
}) =>
    <Outer>
        <Inner>
            {headline && <Headline>Card grid</Headline>}
            <Grid>
                {cards.map(card => 
                    <Card
                        key={card.headline}
                        headline={card.headline}
                        deck={card.deck}
                        href={card.href}
                        />
                )}
            </Grid>
        </Inner>
    </Outer>

export default CardGrid