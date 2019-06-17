import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"
import './style.scss'
import CheckboxItem from './CheckboxItem'

const Filter = ({title, name, options, handleChange, applyChanges, showAll}) => {

    const [dialogIsOpen, showDialog] = useState(true)

    const applyAndDismiss = () => {
        showDialog(false)
        applyChanges()
    }

    const showAllAndDismiss = (name) => {
        showDialog(false)
        showAll(name)
    }

    return (
        <>
            <button className="filter-button" onClick={() => {showDialog(true)}}>Your interests</button>
            <Dialog
                className="filter-dialog"
                isOpen={dialogIsOpen}
                onDismiss={applyAndDismiss}
                >
                    <main className="filter-dialog__body">
                        <h2 className="filter-dialog__title">Your interests</h2>
                        {options.map((option, i)=>
                            <CheckboxItem 
                                label={option.label}
                                name="category"
                                value={option.value}
                                checked={option.checked}
                                handleChange={handleChange}
                                key={i}
                                id={`category-${i}`}
                                />
                        )}
                    </main>
                    <footer className="filter-dialog__footer">
                        <button className="filter-dialog__action filter-dialog__action--secondary" onClick={()=>{showAllAndDismiss(name)}}>Show all</button>
                        <button className="filter-dialog__action" type="submit" onClick={applyAndDismiss}>Apply</button>
                    </footer>


            </Dialog>
        </>
    )
}

export default Filter