import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const List = ({
    title,
    items
}) =>
    <div className="service-suitability-panel__column">
        <h2 className="service-suitability-panel__title">{title}</h2>
        <ul className="service-suitability-panel__list">
            {items.map((item, i)=>
                <li className="service-suitability-panel__item" key={i}>{item}</li>
            )}
        </ul>
    </div>

const ServiceSuitabilityPanel = ({
    suitability, 
    accessibility, 
    price, 
    ages
}) =>
    <section className="service-suitability-panel">
        <div className="service-suitability-panel__inner container">

            {accessibility.length > 0 && <List title="Accessibility" items={accessibility}/>}
            {suitability.length > 0 &&<List title="Suitable for" items={suitability}/>}
            {ages.length > 0 && <List title="Age groups" items={ages}/>}

            {price &&
                <div className="service-suitability-panel__column">
                    <h2 className="service-suitability-panel__title">Price</h2>
                    <p>{price}</p>
                </div>
            }

        </div>
    </section>

ServiceSuitabilityPanel.propTypes = {
    suitability: PropTypes.array,
    accessibility: PropTypes.array,
    price: PropTypes.string,
    ages: PropTypes.array
}

export default ServiceSuitabilityPanel