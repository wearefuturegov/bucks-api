import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"
import "./style.scss"
import Router from "next/router"
import geocode from "../../lib/geocode-client"
import cross from "./cross.svg"

// State moved up into parent component so that alert bar can trigger dialog
const LocationFilter = ({dialogIsOpen, toggleDialog}) => {

    const [location, changeLocation] = useState("")
    
    useEffect(()=>{
        Router.query.location && changeLocation(Router.query.location)
    }, dialogIsOpen)

    const updateResults = async (e) => {
        if(e) e.preventDefault()
        toggleDialog(false)
        if(location){
            let newLocation = await geocode(location)
            Router.push({
                pathname: Router.pathname,
                query: {
                    ...Router.query,
                    location: location,
                    lat: newLocation.lat,
                    lng: newLocation.lng,
                    formattedLocation: newLocation.formattedLocation
                }
            })
        }
    }

    const clearFilter = (e) =>{
        if(e) e.preventDefault()
        changeLocation("")
    }

    return (
        <>
            <button 
                className={(location)? "filter-button filter-button--active" : "filter-button"}
                onClick={() => {toggleDialog(true)}}
            >
                Location
            </button>

            <Dialog
                className="filter-dialog"
                isOpen={dialogIsOpen}
                onDismiss={updateResults}
            >

                <form method="get" action="/recommendations" onSubmit={updateResults}>
                    <div className="filter-dialog__body">
                        <h2 className="filter-dialog__title">Near you</h2>


                        <label className="filter-dialog__text-label" htmlFor="location">Town or postcode in Buckinghamshire</label>
                        <input 
                            type="text" 
                            className="filter-dialog__text-input"
                            name="location"
                            id="location"
                            value={location}
                            onChange={(e)=>{
                                changeLocation(e.target.value)
                            }}
                        />
                    </div>

                    <footer className="filter-dialog__footer">
                        <button className="filter-dialog__action" 
                            type="submit" 
                        >
                                Apply
                        </button>
                        <button className="filter-dialog__action filter-dialog__action--secondary" onClick={clearFilter}>Clear</button>
                    </footer>
                </form>
                <button onClick={()=>{
                    toggleDialog(false)
                }} className="filter__close"><img src={cross} alt="close filter" className="filter__close-icon"/></button>
            </Dialog>
            
        </>
    )
}

LocationFilter.propTypes = {
    dialogIsOpen: PropTypes.bool.isRequired,
    toggleDialog: PropTypes.func.isRequired
}

export default LocationFilter