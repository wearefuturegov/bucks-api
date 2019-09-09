import React, {useRef, useEffect, useState} from "react"
import styled from "styled-components"
import theme from "../_theme"
import { useLoadScript } from "@react-google-maps/api"

const libs = ["places"]

const Input = styled.input`
    margin-top: 20px;
    font-size: 1em;
    border: 2px solid ${theme.darkText};
    padding: 10px;
    border-radius: 2px;
    display: block;
    width: 100%;
    &:focus{
        outline: none;
        box-shadow: 0 0 0 3px ${theme.focus};
    }
`

const LocationQuestion = ({
    value,
    onChange
}) => {

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.GOOGLE_CLIENT_KEY,
        libraries: libs
    })

    const [latLng, setLatLng] = useState([0,0])

    const inputRef = useRef(false)

    let autocomplete = null

    useEffect(() => {
        if(isLoaded){
            autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, { 
                types: ["geocode"]
            })
            autocomplete.setComponentRestrictions({"country": ["gb"]})
            autocomplete.addListener("place_changed", handlePlaceChanged)
        }
    }, [isLoaded])

    const handlePlaceChanged = () => {
        const place = autocomplete.getPlace()
        if(place.geometry){
            const lat = place.geometry.location.lat()
            const lng = place.geometry.location.lng()
            setLatLng([lat, lng])
            // feed a synthetic event to the change handler if it exists
            if(onChange) onChange({
                target: {
                    value: place.formatted_address
                }
            })
        }
    }

    return(
        <>
            <Input 
                ref={inputRef}
                id="autocomplete"
                name="location" 
                value={value}
                onChange={onChange}
                required
            />
            <input type="hidden" name="lat" value={latLng[0]} readOnly/>
            <input type="hidden" name="lng" value={latLng[1]} readOnly/>
        </>
    )
}

export default LocationQuestion