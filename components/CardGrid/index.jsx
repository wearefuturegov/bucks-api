import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Card from "../Card"

const Outer = styled.section`
    background-color: ${theme.background};
    padding: 40px 20px;
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

const Headline = styled.h2`
    margin-bottom: 25px;
    color: ${theme.darkText};
`

const CardGrid = ({
    headline,
    cards
}) =>
    <Outer>
        <Inner>
            {headline && <Headline>{headline}</Headline>}
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