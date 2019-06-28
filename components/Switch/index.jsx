import React from "react"
import "./style.scss"

const Switch = ({ onChange, name, checked }) =>
    <div className="switch">
        <input 
            type="checkbox"
            id={name}
            name={name}
            checked={checked}
            onChange={onChange}
            className="switch__input visually-hidden"
        />
        <label className="switch__label" htmlFor={name}>
            Show on a map?
        </label>
    </div>

export default Switch