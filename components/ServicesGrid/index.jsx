import React from "react"
import PropTypes from "prop-types"
import ServiceCard from "../ServiceCard"
import "./style.scss"
import { prettyFeatures } from "../../lib/utils"

const ServicesGrid = ({services, totalServices}) => 
    <>
        <h2 className="recommendations__section-title"><strong>{totalServices}</strong> services near you</h2>
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
                        features={prettyFeatures(service)}
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
    services: PropTypes.array.isRequired,
    totalServices: PropTypes.number.isRequired
}

export default ServicesGrid