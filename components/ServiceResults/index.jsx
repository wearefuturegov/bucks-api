import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import ServiceCard from '../ServiceCard'

const ServiceResults = ({services}) =>
    <section className="service-results">
        <div className="container">
            <h2 className="section-title">Services near you</h2>
            <ol className="service-results__list">
                {services.map((service, i)=>
                    <ServiceCard
                        key={i}
                        assetId={service.assetId}
                        category={service.category}
                        title={service.name || service.parentOrganisation}
                        description={service.description}
                        />
                )}
            </ol>
        </div>
    </section>

ServiceResults.propTypes = {
    services: PropTypes.array.isRequired
}

export default ServiceResults