import React, {useState, useEffect} from "react"
import Filter from "./Filter"
import AutocompletePlacesInput from "../AutocompletePlacesInput"
import Router from "next/router"

const LocationFilter = () => {

    const [dialogOpen, toggleDialog] = useState(false)
    const [selection, changeSelection] = useState("") 

    useEffect(()=>{
        if(Router.query.location) changeSelection(Router.query.location)
    },[])

    const handleChange = (e) => {
        changeSelection(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        Router.push({
            pathname: "/recommendations",
            query: {
                ...Router.query,
                lat: null,
                lng: null,
                location: selection
            }
        })
        toggleDialog(false)
    }
    
    return(
        <Filter active={true} name="Location" dialogOpen={dialogOpen} toggleDialog={toggleDialog}>
            <form onSubmit={handleSubmit}>
                <AutocompletePlacesInput value={selection} onChange={handleChange}/>
                <button type="submit">Search again</button>
            </form>
        </Filter>
    )
}


export default LocationFilter