import React from "react"
import PropTypes from "prop-types"
import CategoryFilter from "../Filter/CategoryFilter"
import LocationFilter from "../Filter/LocationFilter"
import KeywordsFilter from "../Filter/KeywordsFilter"
import AgesFilter from "../Filter/AgesFilter"
import DaysFilter from "../Filter/DaysFilter"
import AccessibilityFilter from "../Filter/AccessibilityFilter"
import AdviceSnippetsGrid from "../AdviceSnippetGrid"
import ServicesGrid from "../ServicesGrid"
import Button from "../Button"
import "./style.scss"

const Recommendations = ({services, snippets, query, onLoadMore, moreToLoad, totalServices}) => 
    <>
        <section className="recommendation-filters container">
            <CategoryFilter query={query} />
            <KeywordsFilter query={query}/>
            <LocationFilter query={query}/>
            <AgesFilter query={query}/>
            <DaysFilter query={query}/>
            <AccessibilityFilter query={query}/>
        </section>

        <section className="recommendations">
            <div className="container">
                <ServicesGrid services={services} totalServices={totalServices}/>
                {moreToLoad && <Button centredSecondary onClick={onLoadMore}>Show more results</Button>}
                {snippets.length > 0 && <AdviceSnippetsGrid snippets={snippets}/>}
            </div>
        </section>
    </>

Recommendations.propTypes = {
    services: PropTypes.array.isRequired,
    snippets: PropTypes.array.isRequired,
    query: PropTypes.object,
    moreToLoad: PropTypes.bool,
    totalServices: PropTypes.number.isRequired
}

export default Recommendations