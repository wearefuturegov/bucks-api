import React, { useState } from "react"
import styled from "styled-components"
import theme from "../_theme"
import ServiceCard from "../ServiceCard"
import queryString from "query-string"

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

const Grid = styled.ul`
    list-style: none;
    @media screen and (min-width: ${theme.tablet}){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 25px;
    }
`

const Results = ({
    services,
    snippets,
    query,
    totalServices,
    totalPages
}) => {

    const [page, setPage ] = useState(1)
    const [extraServices, setServices ] = useState([])
    const allServices = services.concat(extraServices)

    const loadMore = async () => {
        const res = await fetch(`/api/services?${queryString.stringify({
            ...query,
            page: page + 1
        })}`)
        const newServices = await res.json()
        setServices(extraServices.concat(newServices.results))
        setPage(page+1)
    }


    return(
        <Outer>
            <Inner>
                <Grid>
                    {allServices.map(service =>
                        <ServiceCard
                            headline={service.name || service.parentOrganisation}
                            deck={service.description}
                            href={`/service/${service.assetId}`}
                            category={service.category}
                            distance={service.distance}
                        />
                    )}
                    <button onClick={loadMore}>Load more results</button>
                </Grid>
            </Inner>
        </Outer>
    )
}


export default Results