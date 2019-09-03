import React from "react"
import PropTypes from "prop-types"
import "./style.scss"

const CentredText = ({title, children}) =>
    <section className="centred-text">
        <div className="container centred-text__inner">
            <h2 className="centred-text__title">{title}</h2>
            <p className="centred-text__description">{children}</p>
        </div>
    </section>

CentredText.propTypes = {
    title: PropTypes.string.isRequired
}

export default CentredText