import React from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import marker from "./marker.svg"

const libs = ["places"]

const DetailMap = ({coordinates}) => {

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.GOOGLE_CLIENT_KEY,
        libraries: libs
    })

    const renderMap = () => {
        return (
            <GoogleMap 
                options={{
                    mapTypeControl: false,
                    streetViewControl: false
                }}
                zoom={16} 
                center={{
                    lat: coordinates[1], 
                    lng: coordinates[0]
                }}
                mapContainerClassName="detail-map"
            >
                <Marker
                    position={{
                        lat: coordinates[1], 
                        lng: coordinates[0]
                    }}
                    icon={{
                        url: marker,
                        optimized: false,
                        scaledSize: new window.google.maps.Size(60, 60),
                    }}
                />
            </GoogleMap>
        )
    }
    
    if (loadError) {
        return <div>There was a problem loading the map.</div>
    }
    
    return isLoaded ? renderMap() : <p>Loading...</p>
}

export default DetailMap