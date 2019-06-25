import React from "react"
import PropTypes from "prop-types"
import "./style.scss"

const Alert = (onClick) => 
    <div className="alert">
        <p className="alert__message">That location doesn't look right.</p> 
        <button className="alert__button" onClick={onClick}>Check it now</button>
    </div>

Alert.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Alert