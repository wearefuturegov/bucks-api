import React from "react"
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"

const WrappedMap = withScriptjs(withGoogleMap(({lat, lng, services})=>
    <>
        <GoogleMap 
            key={new Date().getTime()}
            defaultZoom={16} 
            center={{
                lat: lat, 
                lng: lng
            }}
        >
            {services.map((service, i)=>
                <Marker
                    position={{
                        lat: service.geo.coordinates[1],
                        lng: service.geo.coordinates[0]
                    }}
                    key={i}
                />
            )}
        </GoogleMap>
    </>
))

WrappedMap.defaultProps = {
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_CLIENT_KEY}&v=3.exp&libraries=geometry,drawing,places`
}

export default WrappedMap