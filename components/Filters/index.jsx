import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import LocationFilter from "./LocationFilter"
import Filter from "./Filter"

const Outer = styled.section`
    padding: 0px 20px;
`

const Inner = styled.div`
    max-width: ${theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
`

const interestsOptions = [
    {
        value: "active",
        label: "Staying active"
    },
    {
        value: "social",
        label: "Socialising"
    },
    {
        value: "support",
        label: "Support with daily tasks"
    },
    {
        value: "learning",
        label: "Learning new things"
    },
    {
        value: "cultural",
        label: "Culture and visiting new places"
    }
]

const daysOptions = [
    {
        value: "monday",
        label: "Monday"
    },
    {
        value: "tuesday",
        label: "Tuesday"
    },
    {
        value: "wednesday",
        label: "Wednesday"
    },
    {
        value: "thursday",
        label: "Thursday"
    },
    {
        value: "friday",
        label: "Friday"
    },
    {
        value: "saturday",
        label: "Saturday"
    },
    {
        value: "sunday",
        label: "Sunday"
    },
]

const Filters = () =>
    <Outer>
        <Inner>
            {/* <LocationFilter/> */}

            <Filter
                label="Interests"
                name="category"
                options={interestsOptions}
            />
            <Filter
                label="When you're free"
                name="days"
                options={daysOptions}
            />

        </Inner>
    </Outer>
    
export default Filters
