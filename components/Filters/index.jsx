import React, { useState } from "react"
import CategoryFilter from "../Filter/CategoryFilter"
import LocationFilter from "../Filter/LocationFilter"
import KeywordsFilter from "../Filter/KeywordsFilter"
import AgesFilter from "../Filter/AgesFilter"
import DaysFilter from "../Filter/DaysFilter"
import AccessibilityFilter from "../Filter/AccessibilityFilter"
import "./style.scss"
import filterIcon from "./filter.svg"
import crossIcon from "./cross.svg"
import ShareDialog from "../ShareDialog"

const Filters = ({
    locationFilterIsOpen, 
    toggleLocationFilterDialog,
    query
}) => {
    
    const [filtersOpen, toggleFilters] = useState(false)

    return(
        <>
            <button 
                onClick={()=>{toggleFilters(!filtersOpen)}}
                aria-expanded={filtersOpen}
                aria-controls="recommendation-filters"
                className="recommendation-toggle"
            >
                {filtersOpen ? 
                    <><img className="recommendation-toggle__icon" alt="" aria-hidden="true" src={crossIcon}/> Close filters</> 
                    : 
                    <><img className="recommendation-toggle__icon" alt="" aria-hidden="true" src={filterIcon}/> Filters</> 
                }
            </button>
            <section className={filtersOpen ? "recommendation-filters container recommendation-filters--open" : "recommendation-filters container"}>
                <CategoryFilter query={query} />
                <KeywordsFilter query={query}/>
                <LocationFilter query={query} dialogIsOpen={locationFilterIsOpen} toggleDialog={toggleLocationFilterDialog}/>
                <AgesFilter query={query}/>
                <DaysFilter query={query}/>
                <AccessibilityFilter query={query}/>
                
                <ShareDialog/>
            </section>
        </>
    )
}


export default Filters