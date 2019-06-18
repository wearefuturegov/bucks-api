import React from 'react'

const CheckboxItem = ({
    label,
    value,
    name,
    selectionState,
    onChange
}) =>
    <div className="checkbox-item">
        <input className="checkbox-item__input visually-hidden" type="checkbox" 
            name={name} 
            value={value} 
            id={`${name}-${value}`} 
            checked={selectionState.includes(value)}
            onChange={onChange}
            />
        <label className="checkbox-item__label" htmlFor={`${name}-${value}`}>{label}</label>
        <br/>
    </div>

export default CheckboxItem