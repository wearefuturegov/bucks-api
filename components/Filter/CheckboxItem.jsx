import React from "react"
import PropTypes from "prop-types"

const CheckboxItem = ({
    label,
    value,
    name,
    selectionState,
    onChange,
    helpText
}) =>
    <div className="checkbox-item">
        <input className="checkbox-item__input visually-hidden" type="checkbox" 
            name={name} 
            value={value} 
            id={`${name}-${value}`} 
            checked={selectionState.includes(value)}
            onChange={onChange}
        />
        <label className="checkbox-item__label" htmlFor={`${name}-${value}`}>
            <div>
                {label}
                {helpText && <p className="checkbox-item__help-text">{helpText}</p>}
            </div>
        </label>
    </div>

CheckboxItem.propTypes = {
    name: PropTypes.string.isRequired, 
    value: PropTypes.string.isRequired, 
    label: PropTypes.string.isRequired, 
    onChange: PropTypes.func.isRequired, 
    selectionState: PropTypes.array.isRequired,
    helpText: PropTypes.string
}

export default CheckboxItem