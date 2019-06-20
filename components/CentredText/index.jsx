import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const CentredText = ({title, description}) =>
    <section className="centred-text">
        <div className="container centred-text__inner">
            <h2 className="centred-text__title">{title}</h2>
            <p className="centred-text__description">{description}</p>
        </div>
    </section>

CentredText.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default CentredText