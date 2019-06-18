import React, {useState} from 'react'
import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"
import './style.scss'
import queryString from 'query-string'
import Router from 'next/router'
import geocode from '../../lib/geocode-client'

const LocationFilter = ({query}) => {

    const [dialogIsOpen, toggleDialog] = useState(false)

    const [location, changeLocation] = useState(query.formattedLocation || "")

    const updateResults = async (e) => {
        if(e) e.preventDefault()
        if(location){
            let newLocation = await geocode(location)
            let newQuery = {
                ...query,
                ...newLocation
            }
            Router.push(`/recommendations?${queryString.stringify(newQuery)}`)
        }
        toggleDialog(false)
    }

    const clearFilter = (e) =>{
        if(e) e.preventDefault()
        changeLocation("")
        let newQuery = {
            ...query,
            formattedLocation: null,
            lat: null,
            lng: null
        }
        Router.push(`/recommendations?${queryString.stringify(newQuery)}`)
        toggleDialog(false)
    }

    return (
        <>
            <button 
                className={(location)? "filter-button filter-button--active" : "filter-button"}
                onClick={() => {toggleDialog(true)}}
                >
                Near you
            </button>

            <Dialog
                className="filter-dialog"
                isOpen={dialogIsOpen}
                onDismiss={updateResults}
                >

                <form method="get" action="/recommendations" onSubmit={updateResults}>
                    <div className="filter-dialog__body">
                        <h2 className="filter-dialog__title">Near you</h2>


                        <label className="filter-dialog__text-label" htmlFor="location">Town or postcode</label>
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
                        <button className="filter-dialog__action filter-dialog__action--secondary" onClick={clearFilter}>Show all</button>
                        
                        <button className="filter-dialog__action" 
                            type="submit" 
                            >
                            Apply
                        </button>

                    </footer>
                </form>
            </Dialog>
            
        </>
    )
}

export default LocationFilter