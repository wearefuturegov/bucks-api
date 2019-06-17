import React from 'react'

const CheckboxItem = ({
    label,
    value,
    name,
    id,
    checked,
    handleChange
}) =>
    <>
        <input type="checkbox" 
            name={name} 
            value={value} 
            id={id} 
            checked={checked} 
            onChange={handleChange}
            />
        <label htmlFor={id}>{label}</label>
        <br/>
    </>

export default CheckboxItem