import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog"
import "@reach/dialog/styles.css"
import './style.scss'
import CheckboxItem from './CheckboxItem'

const Filter = ({title, updateFilter, applyFilters, currentFilter, name, options}) => {

    const [dialogIsOpen, showDialog] = useState(false)

    const handleChange = (e) => {
        console.log(e.target.value, e.target.checked)
        // TODO trigger update filter function
        
    }

    return (
        <>
            <button className="filter-button" onClick={() => {showDialog(true)}}>{title}</button>
            <Dialog
                className="filter-dialog"
                isOpen={dialogIsOpen}
                onDismiss={() => {showDialog(false)}}
                >
                    <main className="filter-dialog__body">
                        <h2 className="filter-dialog__title">{title}</h2>
                        {options.map((option, i)=>
                            <CheckboxItem 
                                label={option.label}
                                name={name}
                                value={option.value}
                                checked={option.checked}
                                handleChange={handleChange}
                                key={i}
                                id={`${name}-${i}`}
                                />
                        )}
                    </main>
                    <footer className="filter-dialog__footer">
                        {/* <button>Show everything</button> */}
                        <button onClick={()=>{
                            applyFilters()
                        }}>Apply</button>
                    </footer>
            </Dialog>
        </>
    )
}

export default Filter