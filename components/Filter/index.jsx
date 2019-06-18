import React, {useState, useEffect} from 'react'
import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"
import './style.scss'
import CheckboxItem from './CheckboxItem'

const InterestsFilter = ({categoryFilter, keywordsFilter, updateFilters, showAll}) => {

    const [dialogIsOpen, toggleDialog] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target);
        updateFilters({
            category: data.getAll('category'),
            keywords: data.getAll('keywords')
        })
        toggleDialog(false)
    }

    const showAllAndDismiss = async () => {
        await showAll("category")
        await showAll("keywords")
        toggleDialog(false)
    }

    return (
        <>

            <button 
                className="filter-button"
                onClick={() => {toggleDialog(true)}}
                >
                Your interests
            </button>

            <Dialog
                className="filter-dialog"
                isOpen={dialogIsOpen}
                onDismiss={()=>{toggleDialog(false)}}
                >

                <form method="get" action="/recommendations" onSubmit={(e)=>{handleSubmit(e)}}>
                    <main className="filter-dialog__body">
                        <h2 className="filter-dialog__title">Your interests</h2>

                        <div className="filter-dialog__options">
                            <CheckboxItem 
                                label="Support"
                                name="category"
                                value="support"
                                selectionArray={categoryFilter}
                                id={`category-1`}
                                />

                            <CheckboxItem 
                                label="Social"
                                name="category"
                                value="social"
                                selectionArray={categoryFilter}
                                id={`category-2`}
                                />

                            <CheckboxItem 
                                label="Learning new things"
                                name="category"
                                value="learning"
                                selectionArray={categoryFilter}
                                id={`category-3`}
                                />

                            <CheckboxItem 
                                label="Staying active"
                                name="category"
                                value="active"
                                selectionArray={categoryFilter}
                                id={`category-4`}
                                />

                            <CheckboxItem 
                                label="Cultural"
                                name="category"
                                value="cultural"
                                selectionArray={categoryFilter}
                                id={`category-5`}
                                />
                        </div>
                        <hr/>

                            <CheckboxItem 
                                label="Money matters"
                                name="keywords"
                                value="money"
                                selectionArray={keywordsFilter}
                                id={`keyword-1`}
                                />

                            <CheckboxItem 
                                label="Getting out and about"
                                name="keywords"
                                value="transport"
                                selectionArray={keywordsFilter}
                                id={`keyword-2`}
                                />

                            <CheckboxItem 
                                label="Meals and nutrition"
                                name="keywords"
                                value="meals"
                                selectionArray={keywordsFilter}
                                id={`keyword-3`}
                                />
                            
                            <CheckboxItem 
                                label="Equipment and gadgets"
                                name="keywords"
                                value="equipment"
                                selectionArray={keywordsFilter}
                                id={`keyword-4`}
                                />

                    </main>

                    <footer className="filter-dialog__footer">
                        <button className="filter-dialog__action filter-dialog__action--secondary" onClick={showAllAndDismiss}>Show all</button>
                        
                        <button className="filter-dialog__action" 
                            type="submit" 
                            >
                            Apply
                        </button>

                    </footer>
                </form>
            </Dialog>
            
        </>
    )
}

export default InterestsFilter