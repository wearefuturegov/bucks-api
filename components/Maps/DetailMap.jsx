import React from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import supportMarker from "./support-marker.svg"
import activeMarker from "./active-marker.svg"
import learningMarker from "./learning-marker.svg"
import culturalMarker from "./cultural-marker.svg"
import socialMarker from "./social-marker.svg"
import mapStyles from "./map-styles.json"

const markerIcon = (category) => {
    if (category === "support") return supportMarker
    if (category === "active") return activeMarker
    if (category === "learning") return learningMarker
    if (category === "cultural") return culturalMarker
    if (category === "social") return socialMarker
}

const DetailMap = ({coordinates, category}) => 
    <LoadScript
        id="script-loader-2"
        googleMapsApiKey={process.env.GOOGLE_CLIENT_KEY}
    >
        <GoogleMap 
            options={{
                mapTypeControl: false,
                streetViewControl: false,
                styles: mapStyles
            }}
            zoom={16} 
            center={{
                lat: coordinates[1], 
                lng: coordinates[0]
            }}
            mapContainerClassName="list-map"
        >
            <Marker
                position={{
                    lat: coordinates[1], 
                    lng: coordinates[0]
                }}
                icon={{
                    url: markerIcon(category),
                    optimized: false,
                    // scaledSize: new google.maps.Size(60, 60),
                }}
            />

        </GoogleMap>
    </LoadScript>

export default DetailMap