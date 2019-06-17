import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import './style.scss'

const truncate = (str, noWords) => {
    if(str.split(" ").length > noWords){
        return str.split(" ").splice(0,noWords).join(" ") + "..."
    } else {
        return str
    }
}

const ServiceCard = ({
    assetId,
    category,
    title,
    description
}) => 
    <li className={`service-card service-card--${category}`}>
        <Link href={`/service/${assetId}`}>
            <a className="service-card__link">
                <h3 className="service-card__title">{title}</h3>
            </a>
        </Link>
        <p className="service-card__description">{truncate(description, 15)}</p>
        <div className="service-card__footer">
            {/* <SaveForLater/> */}
            <p className="service-card__distance"><em>Less than a mile away</em></p>
        </div>
    </li>

export default ServiceCard