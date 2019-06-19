import React, {useState} from 'react'
import './style.scss'
import Button from '../Button'
import queryString from 'query-string'
import Router from 'next/router'
import geocode from '../../lib/geocode-client'

import CategoryQuestion from './CategoryQuestion'
import KeywordQuestion from './KeywordQuestion'
import LocationQuestion from './LocationQuestion'

const NeedsExplorerQuestions = () => {

    const [categorySelection, changeCategorySelection] = useState([])
    const handleCategoryChange = (e) => {
        let {checked, value} = e.target
        // Clear out keywords whenever the support category is hit
        if(value === "support") changeKeywordSelection([])
        if(checked){
            changeCategorySelection([...categorySelection, value])
        } else {
            changeCategorySelection(categorySelection.filter(selection=>{
                return selection != value
            }))
        }
    }

    const [keywordSelection, changeKeywordSelection] = useState([])
    const handleKeywordChange = (e) => {
        let {checked, value} = e.target
        if(checked){
            changeKeywordSelection([...keywordSelection, value])
        } else {
            changeKeywordSelection(keywordSelection.filter(selection=>{
                return selection != value
            }))
        }
    }

    const [rawLocation, changeRawLocation] = useState("")
    const [formattedLocation, changeFormattedLocation] = useState("")
    const handleRawLocationChange = (e) => {
        changeRawLocation(e.target.value)
    }
    const handleBlur = async () => {
        let location = await geocode(rawLocation)
        changeFormattedLocation(location.formattedLocation)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let geocoded = await geocode(rawLocation)
        let query = {
            category: categorySelection,
            keywords: keywordSelection,
            location: rawLocation,
            lat: geocoded.lat,
            lng: geocoded.lng
        }
        Router.push(`/recommendations?${queryString.stringify(query)}`).then(() => window.scrollTo(0, 0))
    }

    return(
        <main className="questions">
            <div className="questions__inner">
                <form method="get" action="/recommendations" onSubmit={handleSubmit}>
                    <CategoryQuestion 
                        selection={categorySelection} 
                        onChange={handleCategoryChange}
                        />
                    {categorySelection.includes("support") && 
                        <KeywordQuestion 
                            onChange={handleKeywordChange} 
                            selection={keywordSelection}
                            />
                    }
                    <LocationQuestion 
                        rawLocation={rawLocation} 
                        formattedLocation={formattedLocation} 
                        onChange={handleRawLocationChange} 
                        onBlur={handleBlur}
                        />
                    <Button>See your recommendations</Button>
                </form>
            </div>
        </main>
    )
}

export default NeedsExplorerQuestions