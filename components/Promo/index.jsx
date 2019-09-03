import React from "react"
import Link from "next/link"
import PropTypes from "prop-types"
import "./style.scss"

const Promo = ({title, description, href}) =>
    <li className="promo">
        <Link href={href}>
            <a className="promo__link">
                <h3 className="promo__title">{title}</h3>
                <p className="promo__description">{description}</p>
            </a>
        </Link>
    </li>

Promo.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
}

export default Promo