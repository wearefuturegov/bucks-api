import React from "react"
import "./style.scss"

const Alert = ({children, className}) =>
    <div className={`alert ${className}`}>
        {children}
    </div>

export default Alert