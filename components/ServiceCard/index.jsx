import React from "react"
import PropTypes from "prop-types"
import Link from "next/link"
import "./style.scss"
import {truncate, prettyDistance} from "../lib/utils"

const ServiceCard = ({
    assetId,
    category,
    title,
    // parentOrganisation,
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
            <p className="service-card__distance"><em>{distance != undefined && prettyDistance(distance)}</em></p>
        </div>
    </li>

ServiceCard.propTypes = {
    assetId: PropTypes.number.isRequired,
    category: PropTypes.string,
    title: PropTypes.string,
    parentOrganisation: PropTypes.string,
    description: PropTypes.string,
    distance: PropTypes.number
}

export default ServiceCard