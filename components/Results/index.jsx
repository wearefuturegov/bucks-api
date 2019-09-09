import React, { useState, useEffect } from "react"
import styled from "styled-components"
import theme from "../_theme"
import ServiceCard from "../ServiceCard"
import queryString from "query-string"
import Button from "../Button"
import Switch from "../Switch"
import ListMap from "../Maps/ListMap"
import { listFavourites, removeFavourite, addFavourite, isFavourited } from "../../lib/localStorage"
import {logEvent} from "../../lib/analytics"

const Outer = styled.section`
    background: ${theme.background};
    padding: 40px 20px;
    @media screen and (min-width: ${theme.tablet}){
        padding: 50px 20px;
    }
`

const Inner = styled.div`
    max-width: ${theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
`

const FavouritesContainer = styled.div`
    margin-bottom: 20px;
`

const Grid = styled.ul`
    list-style: none;
    @media screen and (min-width: ${theme.tablet}){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 25px;
    }
`

const StyledButton = styled(Button)`
    background-color: ${theme.darkText};
    margin: 0 auto;
    &:after{
        content: none;
    }
    &:hover{
        filter: brightness(1.3)
    }
`

const Headline = styled.h2`
    color: ${theme.darkText};
    margin-bottom: 15px;
    font-size: 1.3em;
`

const Results = ({
    services,
    query,
    totalPages
}) => {

    const [page, setPage ] = useState(1)
    const [mapOpen, toggleMap] = useState(false)
    const [extraServices, setServices ] = useState([])
    const allServices = services.concat(extraServices)
    const [favourites, setFavourites] = useState([])

    useEffect(()=>{
        setFavourites(listFavourites())
    }, [])

    const loadMore = async () => {
        const res = await fetch(`/api/services?${queryString.stringify({
            ...query,
            page: page + 1
        })}`)
        const newServices = await res.json()
        setServices(extraServices.concat(newServices.results))
        setPage(page+1)
        logEvent("Recommendations", "Load more results")
    }

    const fave = (service) => {
        addFavourite(service)
        setFavourites(listFavourites())
        logEvent("Recommendations", "Save a service")
    }

    const unfave = (assetId) => {
        removeFavourite(assetId)
        setFavourites(listFavourites())
        logEvent("Recommendations", "Unsave a service")
    }

    return(
        <Outer>
            <Inner>
                {favourites.length > 0 &&
                    <FavouritesContainer>
                        <Headline>Saved from your last visit</Headline>
                        <Grid>
                            {favourites.map(service =>
                                <ServiceCard
                                    key={service.assetId}
                                    service={service}
                                    fave={fave}
                                    unfave={unfave}
                                    favourited={favourites.find(el => {if(el.assetId === service.assetId) return el})}
                                />
                            )}
                        </Grid>
                    </FavouritesContainer>
                }
                <Switch 
                    value={mapOpen}
                    onChange={() => {
                        toggleMap(!mapOpen)
                        logEvent("Recommendations", "Toggle map view")
                    }}
                    name="test"
                    label="Show on a map?"
                />
                {mapOpen && <ListMap
                    lat={parseFloat(query.lat)}
                    lng={parseFloat(query.lng)}
                    services={allServices}
                />}
                <Grid>
                    {allServices.map(service =>
                        <ServiceCard
                            key={service.assetId}
                            service={service}
                            fave={fave}
                            unfave={unfave}
                            favourited={favourites.find(el => {if(el.assetId === service.assetId) return el})}
                        />
                    )}
                </Grid>
                {(page < totalPages) && <StyledButton onClick={loadMore}>Load more results</StyledButton>}
            </Inner>
        </Outer>
    )
}

export default Results