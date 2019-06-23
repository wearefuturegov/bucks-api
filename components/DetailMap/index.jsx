import React from "react"
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"

const WrappedMap = withScriptjs(withGoogleMap((props)=>
    <GoogleMap defaultZoom={16} defaultCenter={{
        lat: props.coordinates[1], 
        lng: props.coordinates[0]
    }}>
        <Marker position={{
            lat: props.coordinates[1], 
            lng: props.coordinates[0]
        }}/>
    </GoogleMap>
))

export default WrappedMap