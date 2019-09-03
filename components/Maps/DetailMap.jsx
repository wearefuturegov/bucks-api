import React from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
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

const DetailMap = ({coordinates, category}) => {

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.GOOGLE_CLIENT_KEY
    })

    const renderMap = () => {
        return (
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
                mapContainerClassName="detail-map"
            >
                <Marker
                    position={{
                        lat: coordinates[1], 
                        lng: coordinates[0]
                    }}
                    icon={{
                        url: markerIcon(category),
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














// const DetailMap = ({coordinates, category}) => {
//     <LoadScriptNext
//         id="script-loader"
//         googleMapsApiKey={process.env.GOOGLE_CLIENT_KEY}
//     >
//         {console.log("\n\n\n\n\nfuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuck\n\n\n\n\n")}
// <GoogleMap 
//     options={{
//         mapTypeControl: false,
//         streetViewControl: false,
//         styles: mapStyles
//     }}
//     zoom={16} 
//     center={{
//         lat: coordinates[1], 
//         lng: coordinates[0]
//     }}
//     mapContainerClassName="detail-map"
// >
//     <Marker
//         position={{
//             lat: coordinates[1], 
//             lng: coordinates[0]
//         }}
//         icon={{
//             url: markerIcon(category),
//             optimized: false,
//             scaledSize: new google.maps.Size(60, 60),
//         }}
//     />
    
// </GoogleMap>
//     </LoadScriptNext>
// }
 

export default DetailMap