import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Dialog } from "@reach/dialog"
import CheckboxItem from './CheckboxItem'
import queryString from 'query-string'
import Router from 'next/router'
import "@reach/dialog/styles.css"
import './style.scss'

const InterestsFilter = ({query}) => {

    const [dialogIsOpen, toggleDialog] = useState(false)
    const [selection, changeSelection] = useState((query.category)? [].concat(query.category) : [])

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
            category: selection
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
            category: []
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
                Your interests
            </button>

            <Dialog
                className="filter-dialog"
                isOpen={dialogIsOpen}
                onDismiss={updateResults}
                >

                <form method="get" action="/recommendations" onSubmit={updateResults}>
                    <div className="filter-dialog__body">
                        <h2 className="filter-dialog__title">Your interests</h2>

                        <div className="filter-dialog__options">
                            <CheckboxItem 
                                label="Support"
                                name="category"
                                value="support"
                                selectionState={selection}
                                onChange={handleChange}
                                />

                            <CheckboxItem 
                                label="Social"
                                name="category"
                                value="social"
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

                            <CheckboxItem 
                                label="Staying active"
                                name="category"
                                value="active"
                                selectionState={selection}
                                onChange={handleChange}
                                />

                            <CheckboxItem 
                                label="Cultural"
                                name="category"
                                value="cultural"
                                selectionState={selection}
                                onChange={handleChange}
                                />
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

InterestsFilter.propTypes = {
    query: PropTypes.object.isRequired
}

export default InterestsFilter