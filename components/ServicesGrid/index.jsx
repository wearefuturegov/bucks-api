import React, {useState} from 'react'
import PropTypes from 'prop-types'
import ServiceCard from '../ServiceCard'
import './style.scss'

const ServicesGrid = ({initialServices}) => 
    <>
        <h2 className="recommendations__section-title">Services near you</h2>
        {initialServices.length > 0 ? 
            <ol className="services-grid">
                {initialServices.map((service, i)=>
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
                <p>Improve your search results by removing filters or double-checking your spelling.</p>
            </div>   
        }
    </>
    
ServicesGrid.propTypes = {
    initialServices: PropTypes.array.isRequired
}

export default ServicesGrid