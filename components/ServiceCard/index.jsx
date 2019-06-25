import React from "react"
import PropTypes from "prop-types"
import Link from "next/link"
import "./style.scss"
import {truncate, prettyDistance} from "../../lib/utils"

const ServiceCard = ({
    assetId,
    category,
    title,
    // parentOrganisation,
    description,
    features
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
            {features && <p className="service-card__features">{features}</p>}
        </div>
    </li>

ServiceCard.propTypes = {
    assetId: PropTypes.number.isRequired,
    category: PropTypes.string,
    title: PropTypes.string,
    parentOrganisation: PropTypes.string,
    description: PropTypes.string,
    features: PropTypes.string
}

export default ServiceCard