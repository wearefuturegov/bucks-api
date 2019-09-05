import React, {useState} from "react"
import Filter from "./Filter"
// import styled from "styled-components"
// import theme from "../_theme"
import AutocompletePlacesInput from "../AutocompletePlacesInput"

const LocationFilter = () => {
    const [dialogOpen, toggleDialog] = useState(false)
    
    return(
        <Filter name="Location" dialogOpen={dialogOpen} toggleDialog={toggleDialog}>
            <AutocompletePlacesInput/>
        </Filter>
    )
}


export default LocationFilter