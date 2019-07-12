import React, {useState, useEffect} from "react"
import { Dialog } from "@reach/dialog"
import CheckboxItem from "./CheckboxItem"
import Router from "next/router"
import "@reach/dialog/styles.css"
import "./style.scss"
import cross from "./cross.svg"

const InterestsFilter = () => {

    const [dialogIsOpen, toggleDialog] = useState(false)
    const [selection, changeSelection] = useState([])

    useEffect(()=>{
        Router.query.category && changeSelection([].concat(Router.query.category))
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
                category: selection
            }
        })
        toggleDialog(false)
    }

    // Clear state
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
                Your interests
            </button>
            <Dialog
                className="filter-dialog"
                isOpen={dialogIsOpen}
                onDismiss={updateResults}
            >
                <form method="get" action="/recommendations" onSubmit={updateResults}>
                    <fieldset className="filter-dialog__body">
                        <h2 className="filter-dialog__title"><legend>Your interests</legend></h2>
                        <div className="filter-dialog__options">
                            <CheckboxItem 
                                label="Staying active"
                                name="category"
                                value="active"
                                selectionState={selection}
                                onChange={handleChange}
                            />
                            <CheckboxItem 
                                label="Socialising"
                                name="category"
                                value="social"
                                selectionState={selection}
                                onChange={handleChange}
                            />
                            <CheckboxItem 
                                label="Support"
                                name="category"
                                value="support"
                                selectionState={selection}
                                onChange={handleChange}
                            />
                            <CheckboxItem 
                                label="Visiting new places"
                                name="category"
                                value="cultural"
                                selectionState={selection}
                                onChange={handleChange}
                            />
                            <CheckboxItem 
                                label="Learning new things"
                                name="category"
                                value="learning"
                                selectionState={selection}
                                onChange={handleChange}
                            />
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

export default InterestsFilter