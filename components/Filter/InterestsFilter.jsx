import React, {useState} from 'react'
import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"
import './style.scss'
import CheckboxItem from './CheckboxItem'
import queryString from 'query-string'
import Router from 'next/router'

const InterestsFilter = ({query}) => {

    const [dialogIsOpen, toggleDialog] = useState(false)
    const [categorySelection, changeCategorySelection] = useState((query.category)? [].concat(query.category) : [])

    // Add and remove checked and unchecked items from array
    const handleCategoryChange = (e) => {
        let {checked, value} = e.target
        if(checked){
            changeCategorySelection([...categorySelection, value]  )
        } else {
            changeCategorySelection(categorySelection.filter(selection=>{
                return selection != value
            }))
        }
    }

    // Create new query from state and push new route
    const updateResults = (e) => {
        if(e) e.preventDefault()
        let newQuery = {
            ...query,
            category: categorySelection
        }
        Router.push(`/recommendations?${queryString.stringify(newQuery)}`)
        toggleDialog(false)
    }

    const clearFilter = (e) => {
        if(e) e.preventDefault()
        changeCategorySelection([])
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
                className={(categorySelection.length > 0)? "filter-button filter-button--active" : "filter-button"}
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
                                selectionState={categorySelection}
                                onChange={handleCategoryChange}
                                />

                            <CheckboxItem 
                                label="Social"
                                name="category"
                                value="social"
                                selectionState={categorySelection}
                                onChange={handleCategoryChange}
                                />

                            <CheckboxItem 
                                label="Learning new things"
                                name="category"
                                value="learning"
                                selectionState={categorySelection}
                                onChange={handleCategoryChange}
                                />

                            <CheckboxItem 
                                label="Staying active"
                                name="category"
                                value="active"
                                selectionState={categorySelection}
                                onChange={handleCategoryChange}
                                />

                            <CheckboxItem 
                                label="Cultural"
                                name="category"
                                value="cultural"
                                selectionState={categorySelection}
                                onChange={handleCategoryChange}
                                />
                        </div>

                    </div>

                    <footer className="filter-dialog__footer">
                        <button className="filter-dialog__action" 
                            type="submit" 
                            >
                            Apply
                        </button>
                        <button className="filter-dialog__action filter-dialog__action--secondary" onClick={clearFilter}>Show all</button>
                    </footer>
                </form>
            </Dialog>
            
        </>
    )
}

export default InterestsFilter