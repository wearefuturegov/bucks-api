import React, {useState} from "react"
import PropTypes from "prop-types"
import { Dialog } from "@reach/dialog"
import CheckboxItem from "./CheckboxItem"
import queryString from "query-string"
import Router from "next/router"
import "@reach/dialog/styles.css"
import "./style.scss"
import cross from "./cross.svg"

const DaysFilter = ({query}) => {

    const [dialogIsOpen, toggleDialog] = useState(false)
    const [selection, changeSelection] = useState((query.days)? [].concat(query.days) : [])

    // Add and remove checked and unchecked items from array
    const handleChange = (e) => {
        let {checked, value} = e.target
        if(checked){
            changeSelection([...selection, value]  )
        } else {
            changeSelection(selection.filter(el=>{
                return el != value
            }))
        }
    }

    // Create new query from state and push new route
    const updateResults = (e) => {
        if(e) e.preventDefault()
        let newQuery = {
            ...query,
            days: selection
        }
        Router.push(`/recommendations?${queryString.stringify(newQuery)}`)
        toggleDialog(false)
    }

    // Create new query, clear state and push new route
    const clearFilter = (e) => {
        if(e) e.preventDefault()
        changeSelection([])
        let newQuery = {
            ...query,
            days: []
        }
        Router.push(`/recommendations?${queryString.stringify(newQuery)}`)
        toggleDialog(false)
    }

    return (
        <>
            <button 
                className={(selection.length > 0)? "filter-button filter-button--active" : "filter-button"}
                onClick={() => {toggleDialog(true)}}
            >
                When you're free
            </button>

            <Dialog
                className="filter-dialog"
                isOpen={dialogIsOpen}
                onDismiss={updateResults}
            >

                <form method="get" action="/recommendations" onSubmit={updateResults}>
                    <div className="filter-dialog__body">
                        <h2 className="filter-dialog__title">When you're free</h2>

                        <div className="filter-dialog__options">
                            <CheckboxItem selectionState={selection} onChange={handleChange} name="days" value="monday" label="Mondays"/>
                            <CheckboxItem selectionState={selection} onChange={handleChange} name="days" value="tuesday" label="Tuesdays"/>
                            <CheckboxItem selectionState={selection} onChange={handleChange} name="days" value="wednesday" label="Wednesdays"/>
                            <CheckboxItem selectionState={selection} onChange={handleChange} name="days" value="thursday" label="Thursdays"/>
                            <CheckboxItem selectionState={selection} onChange={handleChange} name="days" value="friday" label="Fridays"/>
                            <CheckboxItem selectionState={selection} onChange={handleChange} name="days" value="saturday" label="Saturdays"/>
                            <CheckboxItem selectionState={selection} onChange={handleChange} name="days" value="sunday" label="Sundays"/>
                        </div>
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

DaysFilter.propTypes = {
    query: PropTypes.object.isRequired
}

export default DaysFilter