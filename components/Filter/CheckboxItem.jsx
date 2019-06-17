import React from 'react'

const CheckboxItem = ({
    label,
    value,
    name,
    id,
    checked,
    handleChange
}) =>
    <div className="checkbox-item">
        <input className="checkbox-item__input visually-hidden" type="checkbox" 
            name={name} 
            value={value} 
            id={id} 
            defaultChecked={checked} 
            onChange={handleChange}
            />
        <label className="checkbox-item__label" htmlFor={id}>{label}</label>
        <br/>
    </div>

export default CheckboxItem