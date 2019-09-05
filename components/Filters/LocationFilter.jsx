import React from "react"
import Filter from "./Filter"
// import styled from "styled-components"
// import theme from "../_theme"
import AutocompletePlacesInput from "../AutocompletePlacesInput"

const LocationFilter = () => 
    <Filter name="Location">
        <AutocompletePlacesInput/>
    </Filter>

export default LocationFilter