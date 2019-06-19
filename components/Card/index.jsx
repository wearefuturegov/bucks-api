import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import './style.scss'

const Card = ({
    title, description, image, imageAlt, href, green
}) =>

    <div className={(green? "card card--with-green-background" : "card")}>
        <Link href={href}>
            <a className="card__link">
                {image && <img src={image} alt={imageAlt} className="card__image" loading="lazy"/>}
                <div className="card__body">
                    <h3 className="card__title">{title}</h3>
                    <p className="card__description">{description}</p>
                </div>
            </a>
        </Link>
    </div>

Card.defaultProps = {
    imageAlt: ""
}
  
Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    href: PropTypes.string.isRequired,
    green: PropTypes.bool
}

export default Card