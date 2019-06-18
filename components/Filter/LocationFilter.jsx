import React, {useState} from 'react'
import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"
import './style.scss'
import queryString from 'query-string'
import Router from 'next/router'

const LocationFilter = ({query}) => {

    const [dialogIsOpen, toggleDialog] = useState(false)
    const [rawLocation, changeRawLocation] = useState(false)

    return (
        <>
            <button 
                className={(rawLocation.length > 0)? "filter-button filter-button--active" : "filter-button"}
                onClick={() => {toggleDialog(true)}}
                >
                Near you
            </button>

            <Dialog
                className="filter-dialog"
                isOpen={dialogIsOpen}
                // onDismiss={updateResults}
                >

                <form method="get" action="/recommendations">
                    <div className="filter-dialog__body">
                        <h2 className="filter-dialog__title">Near you</h2>

                        <div className="filter-dialog__options">

                        </div>

                    </div>

                    <footer className="filter-dialog__footer">
                        {/* <button className="filter-dialog__action filter-dialog__action--secondary" onClick={clearFilter}>Show all</button> */}
                        
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