import React from "react"
import PropTypes from "prop-types"
import Link from "next/link"
import "./style.scss"
import {truncate} from "../../lib/utils"

const ServiceCard = ({
    assetId,
    category,
    title,
    // parentOrganisation,
    description,
    features,
    service,
    setActiveService
}) => {

    const handleClick = (e) => {
        e.preventDefault()
        setActiveService(service)
    }

    return(
        <li className={`service-card service-card--${category}`}>
            <a 
                href={`/service/${assetId}`}
                className="service-card__link"
                onClick={handleClick}
            >
                <h3 className="service-card__title">{title}</h3>
            </a>

            {description && <p className="service-card__description">{truncate(description, 15)}</p>}
            <div className="service-card__footer">
                {/* <SaveForLater/> */}
                {features && <p className="service-card__features" dangerouslySetInnerHTML={{__html: features}}></p>}
            </div>
        </li>
    )
}


ServiceCard.propTypes = {
    assetId: PropTypes.number.isRequired,
    category: PropTypes.string,
    title: PropTypes.string,
    parentOrganisation: PropTypes.string,
    description: PropTypes.string,
    features: PropTypes.string
}

export default ServiceCard