import React from 'react'
import PropTypes from 'prop-types'
import ServiceCard from '../ServiceCard'
import './style.scss'




const ServicesGrid = ({services}) =>
    <>
        <h2 className="recommendations__section-title">Services near you</h2>
        {services.length > 0 ? 
            <ol className="services-grid">
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
        : 
            <div className="services-grid__no-results">
                <h3>No results</h3>
                <p>Improve your search results by removing filters, double-checking your spelling or searching for something less specific.</p>
            </div>
        }
    </>

ServicesGrid.propTypes = {
    services: PropTypes.array.isRequired
}

export default ServicesGrid