import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import ServiceCard from '../ServiceCard'
import Filter from '../Filter'

const ServiceResults = ({services, location, applyFilters, updateFilters, currentFilters}) =>
    <section className="service-results">
        <div className="container">
            <h2 className="section-title">Services near {location ? <span>{location}</span> : "you" }</h2>
            
            <div className="service-results__filters">

                <Filter 
                    title="Your interests"
                    updateFilter={updateFilters} 
                    currentFilter={currentFilters.category}
                    applyFilters={applyFilters}
                    options={[
                        {
                            label: "Active",
                            value: "active",
                            checked: false
                        },
                        {
                            label: "Learning",
                            value: "learning",
                            checked: false
                        },
                        {
                            label: "Cultural",
                            value: "lultural",
                            checked: false
                        },
                        {
                            label: "Social",
                            value: "social",
                            checked: false
                        },
                        {
                            label: "Support",
                            value: "support",
                            checked: false
                        }
                    ]}
                    />

            </div>
            
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