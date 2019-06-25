import React, {useState} from "react"
import PropTypes from "prop-types"
import CategoryFilter from "../Filter/CategoryFilter"
import LocationFilter from "../Filter/LocationFilter"
import KeywordsFilter from "../Filter/KeywordsFilter"
import AgesFilter from "../Filter/AgesFilter"
import DaysFilter from "../Filter/DaysFilter"
import AccessibilityFilter from "../Filter/AccessibilityFilter"
import AdviceSnippetsGrid from "../AdviceSnippetGrid"
import ServicesGrid from "../ServicesGrid"
import Alert from "../Alert"
import Button from "../Button"
import "./style.scss"

const Recommendations = ({services, snippets, query, onLoadMore, moreToLoad, totalServices}) => {

    // Location filter state moved up so that alert bar can trigger dialog
    const [dialogIsOpen, toggleDialog] = useState(false)

    return(
        <>
            <section className="recommendation-filters container">
                <CategoryFilter query={query} />
                <KeywordsFilter query={query}/>
                <LocationFilter query={query} dialogIsOpen={dialogIsOpen} toggleDialog={toggleDialog}/>
                <AgesFilter query={query}/>
                <DaysFilter query={query}/>
                <AccessibilityFilter query={query}/>
            </section>

            <section className="recommendations">
                <div className="container">

                    {(query.formattedLocation === "Buckinghamshire, UK") && <Alert onClick={()=>{
                        toggleDialog(true)
                    }}/>}

                    <ServicesGrid services={services} totalServices={totalServices}/>
                    {moreToLoad && <Button centredSecondary onClick={onLoadMore}>Show more results</Button>}
                    {snippets.length > 0 && <AdviceSnippetsGrid snippets={snippets}/>}
                </div>
            </section>
        </>
    )
}


Recommendations.propTypes = {
    services: PropTypes.array.isRequired,
    snippets: PropTypes.array.isRequired,
    query: PropTypes.object,
    moreToLoad: PropTypes.bool,
    totalServices: PropTypes.number.isRequired
}

export default Recommendations