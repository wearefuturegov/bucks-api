import React from "react"
import "./style.scss"

const Alert = ({children, className}) =>
    <div className={`alert ${className}`}>
        <p className="alert__message">
            {children}
        </p>
    </div>

export default Alert