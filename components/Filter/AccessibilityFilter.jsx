import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Dialog } from "@reach/dialog"
import CheckboxItem from './CheckboxItem'
import queryString from 'query-string'
import Router from 'next/router'
import "@reach/dialog/styles.css"
import './style.scss'

const AccessibilityFilter = ({query}) => {

    const [dialogIsOpen, toggleDialog] = useState(false)
    const [selection, changeSelection] = useState((query.accessibility)? [].concat(query.accessibility) : [])

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
            accessibility: selection
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
            accessibility: []
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
                Accessibility
            </button>

            <Dialog
                className="filter-dialog"
                isOpen={dialogIsOpen}
                onDismiss={updateResults}
                >

                <form method="get" action="/recommendations" onSubmit={updateResults}>
                    <div className="filter-dialog__body">
                        <h2 className="filter-dialog__title">Accessibility</h2>

                        <div className="filter-dialog__options">
                            <CheckboxItem selectionState={selection} onChange={handleChange} name="accessibility" value="Building Lift" label="Building lift"/>
                            <CheckboxItem selectionState={selection} onChange={handleChange} name="accessibility" value="Building Wheelchair Access" label="Building wheelchair access"/>
                            <CheckboxItem selectionState={selection} onChange={handleChange} name="accessibility" value="Hearing Induction Loop" label="Hearing induction loop"/>
                            <CheckboxItem selectionState={selection} onChange={handleChange} name="accessibility" value="Nearby Bus Stop" label="Nearby bus stop"/>
                            <CheckboxItem selectionState={selection} onChange={handleChange} name="accessibility" value="On-Site Parking" label="On-Site parking"/>
                            <CheckboxItem selectionState={selection} onChange={handleChange} name="accessibility" value="WC Wheelchair Access" label="WC wheelchair access"/>
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
            </Dialog>
            
        </>
    )
}

AccessibilityFilter.propTypes = {
    query: PropTypes.object.isRequired
}

export default AccessibilityFilter