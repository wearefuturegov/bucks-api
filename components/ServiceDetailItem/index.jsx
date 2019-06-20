import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

import place from './place.svg'
import calendar from './calendar.svg'
import contact from './contact.svg'

const ServiceDetailItem = ({kind, children}) =>
    <div className="service-detail-item">

        {kind === "place" && <img className="service-detail-item__icon" src={place} alt="Venue and address"/>}
        {kind === "calendar" && <img className="service-detail-item__icon" src={calendar} alt="Dates and times"/>}
        {kind === "contact" && <img className="service-detail-item__icon" src={contact} alt="Contact details"/>}

        <div className="service-detail-item__inner">
            {children}
        </div>
    </div>

ServiceDetailItem.propTypes = {
    children: PropTypes.node.isRequired,
    kind: PropTypes.string.isRequired
}

export default ServiceDetailItem