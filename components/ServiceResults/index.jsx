import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const ServiceResults = ({services}) =>
    <section className="service-results">
        <div className="container">
            <h2 className="section-title">Services near you</h2>
        </div>
    </section>

ServiceResults.propTypes = {
    services: PropTypes.array.isRequired
}

export default ServiceResults