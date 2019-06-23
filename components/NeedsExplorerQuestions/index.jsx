import React, {useState} from "react"
import "./style.scss"
import Button from "../Button"
import queryString from "query-string"
import Router from "next/router"
import geocode from "../../lib/geocode-client"

import CategoryQuestion from "./CategoryQuestion"
import KeywordQuestion from "./KeywordQuestion"
import LocationQuestion from "./LocationQuestion"
import AgeQuestion from "./AgeQuestion"

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

    const [ageSelection, changeAgeSelection] = useState([])
    const handleAgeChange = (e) => {
        changeAgeSelection([e.target.value])
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
            age: ageSelection,
            lat: geocoded.lat,
            lng: geocoded.lng
        }
        Router.push(`/recommendations?${queryString.stringify(query)}`).then(() => window.scrollTo(0, 0))
    }

    return(
        <form method="get" action="/recommendations" onSubmit={handleSubmit}>
            <section className="questions">
                <div className="questions__inner">

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

                    <AgeQuestion 
                        onChange={handleAgeChange} 
                        selection={ageSelection}
                    />

                    <LocationQuestion 
                        rawLocation={rawLocation} 
                        formattedLocation={formattedLocation} 
                        onChange={handleRawLocationChange} 
                        onBlur={handleBlur}
                    />
                </div>
            </section>
            {rawLocation && <section className="continue-to-recommendations container">
                <p className="continue-to-recommendations__message">Continue to your recommendations</p>
                <Button>See your recommendations</Button>
            </section>}

        </form>
    )
}

export default NeedsExplorerQuestions