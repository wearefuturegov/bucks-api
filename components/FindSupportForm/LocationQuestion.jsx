import React, {useRef, useEffect} from "react"
import { Hint, Question } from "./utils"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.div`
    margin-bottom: 55px;
`

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
    support,
    setLatLng
}) => {

    const inputRef = useRef(false)

    let autocomplete = null

    useEffect(() => {
        autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, { 
            types: ["geocode"]
        })
        autocomplete.setComponentRestrictions({"country": ["gb"]})
        autocomplete.addListener("place_changed", handlePlaceChanged)
    }, [])

    const handlePlaceChanged = () => {
        const place = autocomplete.getPlace()
        const lat = place.geometry.location.lat()
        const lng = place.geometry.location.lng()
        setLatLng([lat, lng])
    }

    return(
        <Outer>
            <label htmlFor="location">
                <Question>{support ? "3" : "2"}. Where do you want to look?</Question>
            </label>
            <Hint>Give a town or postcode in Buckinghamshire.</Hint>
            <Input 
                ref={inputRef}
                id="autocomplete"
                name="location" 
                required
            />
        </Outer>
    )
}

export default LocationQuestion