import React from "react"
import PropTypes from "prop-types"
import "./style.scss"

const OptionBubble = ({name, value, label, onChange, selectionState, type, helpText, withColours}) =>
    <div className="option-bubble">
        <input 
            className="option-bubble__input visually-hidden" 
            type={type}
            name={name} 
            value={value} 
            autoComplete="off"
            id={`${name}-${value}`}
            checked={selectionState.includes(value)}
            onChange={onChange}
        />
        <label className={(withColours)? `option-bubble__label option-bubble__label--${value}` : "option-bubble__label"} htmlFor={`${name}-${value}`}>
            {label}
            {helpText && <p className="option-bubble__helptext">{helpText}</p>}
        </label>
    </div>

OptionBubble.defaultProps = {
    type: "checkbox"
}

OptionBubble.propTypes = {
    name: PropTypes.string.isRequired, 
    value: PropTypes.string.isRequired, 
    label: PropTypes.string.isRequired, 
    onChange: PropTypes.func.isRequired, 
    selectionState: PropTypes.array.isRequired,
    type: PropTypes.string,
    helpText: PropTypes.string,
    withColours: PropTypes.bool
}

export default OptionBubble