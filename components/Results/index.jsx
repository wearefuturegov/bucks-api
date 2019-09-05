import React, { useState } from "react"
import styled from "styled-components"
import theme from "../_theme"
import ServiceCard from "../ServiceCard"
import queryString from "query-string"
import Button from "../Button"

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

const Results = ({
    services,
    query,
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
                            key={service.assetId}
                            headline={service.name || service.parentOrganisation}
                            deck={service.description}
                            href={`/service/${service.assetId}`}
                            category={service.category}
                            distance={service.distance}
                        />
                    )}
                </Grid>
                {(page < totalPages) && <StyledButton onClick={loadMore}>Load more results</StyledButton>}
            </Inner>
        </Outer>
    )
}

export default Results