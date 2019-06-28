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

            {/* <Marker position={{
                lat: props.coordinates[1], 
                lng: props.coordinates[0]
            }}/> */}
        </GoogleMap>
    </>
))

export default WrappedMap