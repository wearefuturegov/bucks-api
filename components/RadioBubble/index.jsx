import React from "react"
import PropTypes from "prop-types"
// import './style.scss'

const RadioBubble = ({name, value, label, onChange}) =>
    <div className="checkbox-bubble">
        <input 
            className="checkbox-bubble__input visually-hidden" 
            type="radio" 
            name={name} 
            value={value} 
            autocomplete="off"
            id={`${name}-${value}`}
            onChange={onChange}
        />
        <label className="checkbox-bubble__label" htmlFor={`${name}-${value}`}>
            {label}
        </label>
    </div>

RadioBubble.propTypes = {
    name: PropTypes.string.isRequired, 
    value: PropTypes.string.isRequired, 
    label: PropTypes.string.isRequired, 
    onChange: PropTypes.func.isRequired
}

export default RadioBubble