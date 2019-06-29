import React, { useState} from "react"
import { GoogleMap, LoadScript, Marker, InfoWindow, MarkerClusterer } from "@react-google-maps/api"
import supportMarker from "./support-marker.svg"
import activeMarker from "./active-marker.svg"
import learningMarker from "./learning-marker.svg"
import culturalMarker from "./cultural-marker.svg"
import socialMarker from "./social-marker.svg"
import "./style.scss"
import mapStyles from "./style.json"
import { truncate } from "../../lib/utils"

const markerIcon = (category) => {
    if (category === "support") return supportMarker
    if (category === "active") return activeMarker
    if (category === "learning") return learningMarker
    if (category === "cultural") return culturalMarker
    if (category === "social") return socialMarker
}


const ServiceMarker = ({service}) => {
    const [infoBoxOpen, toggleInfoBox] = useState(false)
    return(
        <>
            <Marker
                position={{
                    lat: service.geo.coordinates[1],
                    lng: service.geo.coordinates[0]
                }}
                // icon={markerIcon(service.category)}
                icon={{
                    url: markerIcon(service.category),
                    optimized: false,
                    scaledSize: new google.maps.Size(40, 40),
                }}
                onClick={()=>{
                    toggleInfoBox(true)
                }}
            />
            {infoBoxOpen && 
            
                <InfoWindow
                    position={{
                        lat: service.geo.coordinates[1],
                        lng: service.geo.coordinates[0]
                    }}
                    onCloseClick={()=>{
                        toggleInfoBox(false)
                    }}
                >
                    <>
                        <h1>{service.name || service.parentOrganisation}</h1>
                        <p>{truncate(service.description, 10)}</p>
                    </>
                </InfoWindow>
            
            }
        </>
    )
}

const WrappedMap = ({lat, lng, services})=> {

    return(
        <>
            <LoadScript
                id="script-loader"
                googleMapsApiKey={process.env.GOOGLE_CLIENT_KEY}
            >
                <GoogleMap 
                    options={{
                        mapTypeControl: false,
                        streetViewControl: false,
                        styles: mapStyles
                    }}
                    key={services}
                    zoom={12} 
                    center={{
                        lat: lat, 
                        lng: lng
                    }}
                    mapContainerClassName="list-map"
                    onLoad={map => {
                        const bounds = new window.google.maps.LatLngBounds()
                        services.map(service => {
                            bounds.extend(new window.google.maps.LatLng(
                                service.geo.coordinates[1],
                                service.geo.coordinates[0]
                            ))
                        })
                        map.fitBounds(bounds)
                    }}
                >
                    {services.map((service, i)=>
                        <ServiceMarker key={i} service={service}/>
                    )}
                </GoogleMap>
            </LoadScript>
        </>
    )
}

export default WrappedMap