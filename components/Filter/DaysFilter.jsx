import React, {useState, useEffect} from "react"
import { Dialog } from "@reach/dialog"
import CheckboxItem from "./CheckboxItem"
import Router from "next/router"
import "@reach/dialog/styles.css"
import "./style.scss"
import cross from "./cross.svg"

const DaysFilter = () => {

    const [dialogIsOpen, toggleDialog] = useState(false)
    const [selection, changeSelection] = useState([])

    useEffect(()=>{
        Router.query.days && changeSelection([].concat(Router.query.days))
    }, dialogIsOpen)

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
        Router.push({
            pathname: Router.pathname,
            query: {
                ...Router.query,
                days: selection
            }
        })
        toggleDialog(false)
    }

    // Create new query, clear state and push new route
    const clearFilter = (e) => {
        if(e) e.preventDefault()
        changeSelection([])
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

export default DaysFilter