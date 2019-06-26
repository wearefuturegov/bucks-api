import React from "react"
import CategoryFilter from "../Filter/CategoryFilter"
import LocationFilter from "../Filter/LocationFilter"
import KeywordsFilter from "../Filter/KeywordsFilter"
import AgesFilter from "../Filter/AgesFilter"
import DaysFilter from "../Filter/DaysFilter"
import AccessibilityFilter from "../Filter/AccessibilityFilter"

const Filters = ({
    locationFilterIsOpen, 
    toggleLocationFilterDialog,
    query
}) => 
    <section className="recommendation-filters container">
        <CategoryFilter query={query} />
        <KeywordsFilter query={query}/>
        <LocationFilter query={query} dialogIsOpen={locationFilterIsOpen} toggleDialog={toggleLocationFilterDialog}/>
        <AgesFilter query={query}/>
        <DaysFilter query={query}/>
        <AccessibilityFilter query={query}/>
    </section>

export default Filters