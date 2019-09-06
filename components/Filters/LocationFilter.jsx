import React, {useState, useEffect} from "react"
import Filter from "./Filter"
import AutocompletePlacesInput from "../AutocompletePlacesInput"
import Router from "next/router"

const LocationFilter = () => {

    const [dialogOpen, toggleDialog] = useState(false)
    const [selection, changeSelection] = useState(false) 

    // console.log(selection)



    useEffect(()=>{
        if(Router.query.location) changeSelection(Router.query.location)
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        Router.push({
            pathname: "/recommendations",
            query: {
                ...Router.query,
                lat: false,
                lng: false,
                location: selection
            }
        })
        toggleDialog(false)
    }
    
    return(
        <Filter name="Location" dialogOpen={dialogOpen} toggleDialog={toggleDialog}>
            <form onSubmit={handleSubmit}>
                <AutocompletePlacesInput defaultValue={selection}/>
                <button type="submit">Search again</button>
            </form>
        </Filter>
    )
}


export default LocationFilter