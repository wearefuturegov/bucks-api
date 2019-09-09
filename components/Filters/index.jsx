import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import LocationFilter from "./LocationFilter"
import Filter from "./Filter"
import ShareDialog from "../ShareDialog"
import config from "../../_config"

const Outer = styled.section`
    padding: 0px 20px;
    margin-bottom: 10px;
`

const Inner = styled.div`
    max-width: ${theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width: ${theme.desktop}){
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }
`
const Filters = () =>
    <Outer>
        <Inner>
            <LocationFilter/>
            <Filter
                label="Interests"
                name="category"
                options={config.interestsOptions}
            />
            <Filter
                label="Kinds of support"
                name="keywords"
                options={config.supportOptions}
            />
            <Filter
                label="When you're free"
                name="days"
                options={config.daysOptions}
            />
            <Filter
                label="Ages"
                name="age"
                options={config.ageOptions}
            />
            <Filter
                label="Accessibility"
                name="accessibility"
                options={config.accessibilityOptions}
            />
            <ShareDialog/>
        </Inner>
    </Outer>
    
export default Filters
