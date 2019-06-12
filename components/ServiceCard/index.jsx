import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import './style.scss'

const ServiceCard = ({
    assetId,
    title,
    description
}) => 
    <li className="service-card">
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__description">{description}</p>
        <Link href={`/service/${assetId}`}>
            <a>See details</a>
        </Link>
        <div className="service-card__footer">
            {/* <SaveForLater/> */}
            <p><em>Less than a mile away</em></p>
        </div>
    </li>

export default ServiceCard