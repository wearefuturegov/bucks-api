import React from "react"

const Alert = ({children, className}) =>
    <div className={`alert ${className}`}>
        {children}
    </div>

export default Alert