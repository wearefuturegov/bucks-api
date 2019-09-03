import React, {useState, useEffect} from "react"
import { Dialog } from "@reach/dialog"
import CheckboxItem from "./CheckboxItem"
import Router from "next/router"
import "@reach/dialog/styles.css"
import "./style.scss"
import cross from "./cross.svg"

const AccessibilityFilter = () => {

    const [dialogIsOpen, toggleDialog] = useState(false)
    const [selection, changeSelection] = useState([])

    useEffect(()=>{
        Router.query.accessibility && changeSelection([].concat(Router.query.accessibility))
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
                accessibility: selection
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
                Accessibility
            </button>

            <Dialog
                className="filter-dialog"
                isOpen={dialogIsOpen}
                onDismiss={updateResults}
            >
                <form method="get" action="/recommendations" onSubmit={updateResults}>
                    <fieldset className="filter-dialog__body">
                        <h2 className="filter-dialog__title"><legend>Accessibility</legend></h2>

                        <div className="filter-dialog__options">
                            <CheckboxItem selectionState={selection} onChange={handleChange} name="accessibility" value="building lift" label="Building has lift"/>
                            <CheckboxItem selectionState={selection} onChange={handleChange} name="accessibility" value="building wheelchair access" label="Building wheelchair access"/>
                            <CheckboxItem selectionState={selection} onChange={handleChange} name="accessibility" value="hearing induction loop" label="Hearing induction loop"/>
                            <CheckboxItem selectionState={selection} onChange={handleChange} name="accessibility" value="nearby bus stop" label="Nearby bus stop"/>
                            <CheckboxItem selectionState={selection} onChange={handleChange} name="accessibility" value="on-site parking" label="On-Site parking"/>
                            <CheckboxItem selectionState={selection} onChange={handleChange} name="accessibility" value="wc wheelchair access" label="Wheelchair-accessible bathroom"/>
                        </div>

                    </fieldset>

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

export default AccessibilityFilter