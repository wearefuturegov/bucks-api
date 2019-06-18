import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import './style.scss'
import { SSL_OP_MSIE_SSLV2_RSA_PADDING } from 'constants';

const truncate = (str, noWords) => {
    if(str.split(" ").length > noWords){
        return str.split(" ").splice(0,noWords).join(" ") + "..."
    } else {
        return str
    }
}

const prettyDistance = (meters)=>{
    let miles = Math.round(meters/1609.44)
    if(miles < 1) return "Less than one mile away"
    if(miles === 1) return "About a mile away"
    return `About ${miles} miles away`
}

const ServiceCard = ({
    assetId,
    category,
    title,
    description,
    distance
}) => 
    <li className={`service-card service-card--${category}`}>
        <Link href={`/service/${assetId}`}>
            <a className="service-card__link">
                <h3 className="service-card__title">{title}</h3>
            </a>
        </Link>
        {description && <p className="service-card__description">{truncate(description, 15)}</p>}
        <div className="service-card__footer">
            {/* <SaveForLater/> */}
            <p className="service-card__distance"><em>{distance && prettyDistance(distance)}</em></p>
        </div>
    </li>

export default ServiceCard