import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog"
import "@reach/dialog/styles.css"
import './style.scss'
import CheckboxItem from './CheckboxItem'

const Filter = ({options, currentSelection, changeSelection}) => {

    const [dialogIsOpen, showDialog] = useState(false)

    return (
        <>
            <button className="filter-button" onClick={() => {showDialog(true)}}>Your interests</button>
            <Dialog
                className="filter-dialog"
                isOpen={dialogIsOpen}
                onDismiss={() => {showDialog(false)}}
                >
                    <main className="filter-dialog__body">
                        <h2 className="filter-dialog__title">Your interests</h2>
                        {options.map((option, i)=>
                            <CheckboxItem 
                                label={option.label}
                                name="category"
                                value={option.value}
                                checked={currentSelection.includes(option.value)}
                                handleChange={changeSelection}
                                key={i}
                                id={`category-${i}`}
                                />
                        )}
                    </main>
                    <footer className="filter-dialog__footer">
                        {/* <button>Show everything</button> */}
                        <button onClick={()=>{
                            // applyFilters()
                        }}>Apply</button>
                    </footer>
            </Dialog>
        </>
    )
}

export default Filter