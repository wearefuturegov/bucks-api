import React from "react"
import PropTypes from "prop-types"
import "./style.scss"
import Button from "../../Button"

const CallToAction = ({
    title, description, href, linkText
}) =>
    <section className="hero-call-to-action">
        <h2 className="hero-call-to-action__title">{title}</h2>
        {description && <p className="hero-call-to-action__description">{description}</p>}
        {href && <Button href={href}>{linkText}</Button>}
    </section>

CallToAction.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    href: PropTypes.string,
    linkText: PropTypes.string
}


export default CallToAction