import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import './style.scss'

const WideCallToActionPanel = ({
    title, description, linkText, href
}) =>
<div className="container">
    <section className="wide-call-to-action">
        <div>
            <h2 className="wide-call-to-action__title">{title}</h2>
            {description && <p className="wide-call-to-action__description">{description}</p>}
        </div>
        <Button
            href={href}
            icon="phone"
            background="white"
            >{linkText}</Button>
    </section>
</div>

WideCallToActionPanel.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    linkText: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
}

export default WideCallToActionPanel

