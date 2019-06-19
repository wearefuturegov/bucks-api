import React from 'react'
import PropTypes from 'prop-types'

const LocationQuestion = ({
    rawLocation,
    formattedLocation,
    onChange,
    onBlur
}) =>
    <section className="question">
        <label htmlFor="near"><h2 className="question__title">Find your nearest services</h2></label>
        <p className="question__help-text">Give a town or postcode in Buckinghamshire</p>
        <input 
            type="text" 
            className="question__text-input" 
            name="near"
            placeholder="eg. Aylesbury..."
            value={rawLocation} 
            required
            onChange={onChange}
            onBlur={onBlur}
            ></input>
        {formattedLocation && <p className="question__help-text"><strong>{formattedLocation}</strong></p>}
    </section>

LocationQuestion.propTypes = {
    rawLocation: PropTypes.string.isRequired,
    formattedLocation: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired
}

export default LocationQuestion