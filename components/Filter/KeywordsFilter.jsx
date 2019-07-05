import React, {useState, useEffect} from "react"
import { Dialog } from "@reach/dialog"
import CheckboxItem from "./CheckboxItem"
import Router from "next/router"
import "@reach/dialog/styles.css"
import "./style.scss"
import cross from "./cross.svg"

const KeywordsFilter = () => {

    const [dialogIsOpen, toggleDialog] = useState(false)
    const [selection, changeSelection] = useState([])

    useEffect(()=>{
        Router.query.keywords && changeSelection([].concat(Router.query.keywords))
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
                keywords: selection
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
                Kinds of support
            </button>

            <Dialog
                className="filter-dialog"
                isOpen={dialogIsOpen}
                onDismiss={updateResults}
            >

                <form method="get" action="/recommendations" onSubmit={updateResults}>
                    <fieldset className="filter-dialog__body">
                        <h2 className="filter-dialog__title"><legend>Kinds of support</legend></h2>

                        <div className="filter-dialog__options">
                            <CheckboxItem selectionState={selection} onChange={handleChange} name="keywords" value="caring" label="Caring for someone else"/>
                            <CheckboxItem selectionState={selection} onChange={handleChange} name="keywords" value="transport" label="Getting out and about"/>
                            <CheckboxItem selectionState={selection} onChange={handleChange} name="keywords" value="housework" label="Housework"/>
                            <CheckboxItem selectionState={selection} onChange={handleChange} name="keywords" value="meals" label="Meals and nutrition"/>
                            <CheckboxItem selectionState={selection} onChange={handleChange} name="keywords" value="equipment" label="Equipment and safety at home"/>
                            <CheckboxItem selectionState={selection} onChange={handleChange} name="keywords" value="hygiene" label="Personal hygiene and incontinence"/>
                            <CheckboxItem selectionState={selection} onChange={handleChange} name="keywords" value="money" label="Paying for things"/>
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

export default KeywordsFilter