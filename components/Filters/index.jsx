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

const supportOptions = [
    {
        value: "caring",
        label: "Caring for someone else"
    },
    {
        value: "transport",
        label: "Getting out and about"
    },
    {
        value: "housework",
        label: "Housework"
    },
    {
        value: "meals",
        label: "Meals and nutrition"
    },
    {
        value: "equipment",
        label: "Equipment and safety at home"
    },
    {
        value: "hygiene",
        label: "Personal hygiene and incontinence"
    },
    {
        value: "money",
        label: "Paying for things"
    },
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
    }
]

const ageOptions = [
    {
        value: "young people",
        label: "Young people"
    },{
        value: "young adults",
        label: "Young adults"
    },{
        value: "older adults",
        label: "Older adults"
    }
]

const accessibilityOptions = [
    {
        value: "nearby bus stop",
        label: "Nearby bus stop"
    },{
        value: "on-site parking",
        label: "On-site parking"
    },{
        value: "wc wheelchair access",
        label: "Wheelchair-accessible bathroom"
    },    {
        value: "building lift",
        label: "Building has lift"
    },{
        value: "hearing induction loop",
        label: "Hearing induction loop"
    },{
        value: "building wheelchair access",
        label: "Building has wheelchair access"
    }
]

const Filters = () =>
    <Outer>
        <Inner>
            <LocationFilter/>
            <Filter
                label="Interests"
                name="category"
                options={interestsOptions}
            />
            <Filter
                label="Kinds of support"
                name="keywords"
                options={supportOptions}
            />
            <Filter
                label="When you're free"
                name="days"
                options={daysOptions}
            />
            <Filter
                label="Ages"
                name="age"
                options={ageOptions}
            />
            <Filter
                label="Accessibility"
                name="accessibility"
                options={accessibilityOptions}
            />
        </Inner>
    </Outer>
    
export default Filters
