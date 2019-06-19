import React from 'react'
import PropTypes from 'prop-types'
import CategoryFilter from '../Filter/CategoryFilter'
import LocationFilter from '../Filter/LocationFilter'
import KeywordsFilter from '../Filter/KeywordsFilter'
import DaysFilter from '../Filter/DaysFilter'
import AdviceSnippetsGrid from '../AdviceSnippetGrid'
import ServicesGrid from '../ServicesGrid'
import './style.scss'

const Recommendations = ({services, snippets, query}) => 
    <>
        <section className="recommendation-filters container">
            <CategoryFilter query={query} />
            <KeywordsFilter query={query}/>
            <LocationFilter query={query}/>
            <DaysFilter query={query}/>
        </section>

        <section className="recommendations">
            <div className="container">
                {snippets.length > 0 && <AdviceSnippetsGrid snippets={snippets}/>}
                <ServicesGrid services={services}/>
            </div>
        </section>
    </>

Recommendations.propTypes = {
    services: PropTypes.array.isRequired,
    snippets: PropTypes.array.isRequired,
    query: PropTypes.object
}

export default Recommendations