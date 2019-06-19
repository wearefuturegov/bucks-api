import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import ServiceCard from '../ServiceCard'
import AdviceSnippetGrid from '../AdviceSnippetGrid'
import CategoryFilter from '../Filter/CategoryFilter'
import LocationFilter from '../Filter/LocationFilter'
import KeywordsFilter from '../Filter/KeywordsFilter'

const Recommendations = ({services, snippets, query}) => 
    <section className="service-results">
        <div className="container">

            <h2 className="section-title service-results__title">{query.location ? `Services near you` : "All services" }</h2>
            
            <div className="service-results__filters">
                <CategoryFilter query={query} />
                <LocationFilter query={query}/>
                <KeywordsFilter query={query}/>
            </div>
            
            <AdviceSnippetGrid snippets={snippets}/>


            <ol className="service-results__list">
                {services.map((service, i)=>
                    <ServiceCard
                        key={i}
                        assetId={service.assetId}
                        category={service.category}
                        title={service.name || service.parentOrganisation}
                        description={service.description}
                        distance={service.distance}
                        parentOrganisation={service.parentOrganisation}
                        />
                )}
            </ol>
        </div>
    </section>

Recommendations.propTypes = {
    services: PropTypes.array.isRequired,
    snippets: PropTypes.array.isRequired,
    query: PropTypes.object
}

export default Recommendations