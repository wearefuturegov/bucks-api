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
    toggleLocationFilterDialog
}) => {
    
    const [filtersOpen, toggleFilters] = useState(false)
    const [shareDialogOpen, toggleShareDialog] = useState(false)

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
                <div>
                    <CategoryFilter />
                    <KeywordsFilter/>
                    <LocationFilter dialogIsOpen={locationFilterIsOpen} toggleDialog={toggleLocationFilterDialog}/>
                    <AgesFilter/>
                    <DaysFilter/>
                    <AccessibilityFilter/>
                </div>
                <button className="share-button--for-list" onClick={()=>{
                    toggleShareDialog(true)
                }}>Share</button>
            </section>
            <ShareDialog dialogIsOpen={shareDialogOpen} toggleDialog={toggleShareDialog}/>
        </>
    )
}

export default Filters