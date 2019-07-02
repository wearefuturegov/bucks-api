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
import Link from "next/link"

const markerIcon = (category) => {
    if (category === "support") return supportMarker
    if (category === "active") return activeMarker
    if (category === "learning") return learningMarker
    if (category === "cultural") return culturalMarker
    if (category === "social") return socialMarker
}

const ServiceMarker = ({service, clusterer, activeMarker, changeActiveMarker}) => {
    let position = {
        lat: service.geo.coordinates[1] + (service.assetId/1500000),
        lng: service.geo.coordinates[0] + (service.assetId/1500000)
    }
    return(
        <>
            <Marker
                position={position}
                clusterer={clusterer}
                icon={{
                    url: markerIcon(service.category),
                    optimized: false,
                    scaledSize: new window.google.maps.Size(40, 40),
                }}
                options={{
                    styles: {
                        outline: "1px solid red"
                    }
                }}
                // onClick={()=>{changeActiveMarker(service.assetId)}}
            />
            {(service.assetId === activeMarker) && 
                <InfoWindow
                    position={position}
                    // onCloseClick={()=>{changeActiveMarker(0)}}
                    options={{maxWidth: 300}}
                >
                    <>
                        <h1>{service.name || service.parentOrganisation}</h1>
                        <p>{truncate(service.description, 15)}</p>
                        <Link href={`/service/${service.assetId}`}>
                            <a>See details</a>
                        </Link>
                    </>
                </InfoWindow>
            }
        </>
    )
}

const ServiceClusterer = ({services, activeMarker, changeActiveMarker}) => {
    return(
        <>
            {services.map((service, i)=>
                <ServiceMarker 
                    key={i} 
                    service={service} 
                    // clusterer={clusterer}
                    activeMarker={activeMarker} 
                    changeActiveMarker={changeActiveMarker} 
                />
            )}
        </>
    )
}



const WrappedMap = ({lat, lng, services})=> {
    const [activeMarker, changeActiveMarker] = useState(0)
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
                    // key={new Date()}
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
                    <ServiceClusterer activeMarker={activeMarker} changeActiveMarker={changeActiveMarker} services={services}/>
                </GoogleMap>
            </LoadScript>
        </>
    )
}

export default WrappedMap