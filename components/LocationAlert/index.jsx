import React from "react"
import PropTypes from "prop-types"
import Alert from "../Alert"

const LocationAlert = ({onClick}) => 
    <Alert>
        <p className="alert__message">That location doesn't look right.</p> 
        <button className="alert__button" onClick={onClick}>Check it now</button>
    </Alert>

Alert.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default LocationAlert