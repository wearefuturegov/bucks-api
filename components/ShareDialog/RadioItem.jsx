import React from "react"
import PropTypes from "prop-types"

const RadioItem = ({name, label, value, checked, onChange}) =>
    <div className="radio-item">
        <input 
            type="radio"
            name={name}
            value={value}
            className="radio-item__input visually-hidden"
            required
            id={`${name}-${value}`}
            checked={checked === value}
            onChange={onChange}
        />
        <label 
            htmlFor={`${name}-${value}`}
            className="radio-item__label"
        >{label}</label>
    </div>

RadioItem.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default RadioItem