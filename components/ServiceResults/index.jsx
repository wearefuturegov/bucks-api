import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import ServiceCard from '../ServiceCard'

import InterestsFilter from '../Filter/InterestsFilter'
import LocationFilter from '../Filter/LocationFilter'

const ServiceResults = ({services, query}) => 
    <section className="service-results">
        <div className="container">

            <h2 className="section-title service-results__title">{query.location ? `Services near you` : "All services" }</h2>
            
            <div className="service-results__filters">
                <InterestsFilter query={query} />
                <LocationFilter query={query}/>
            </div>

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

ServiceResults.propTypes = {
    services: PropTypes.array.isRequired,
    query: PropTypes.object
}

export default ServiceResults