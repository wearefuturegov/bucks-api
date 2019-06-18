import React, {useState} from 'react'
import fetch from 'isomorphic-unfetch'
import './style.scss'
import Button from '../Button'
import CheckboxBubble from '../CheckboxBubble'
import queryString from 'query-string'
import Router from 'next/router'
import geocode from '../../lib/geocode-client'

const NeedsExplorerQuestions = () => {

    const [categorySelection, changeCategorySelection] = useState([])
    // Add and remove checked and unchecked items from array
    const handleCategoryChange = (e) => {
        let {checked, value} = e.target
        if(checked){
            changeCategorySelection([...categorySelection, value])
        } else {
            changeCategorySelection(categorySelection.filter(selection=>{
                return selection != value
            }))
        }
    }

    const [rawLocation, changeRawLocation] = useState([])
    const [formattedLocation, changeFormattedLocation] = useState([])


    const handleBlur = async () => {
        let location = await geocode(rawLocation)
        changeFormattedLocation(location.formattedLocation)
    }
    

    // Turn state into a URL query and change route
    const handleSubmit = async (e) => {
        e.preventDefault()
        let geocoded = await geocode(rawLocation)
        let query = {
            category: categorySelection,
            location: rawLocation,
            lat: geocoded.lat,
            lng: geocoded.lng
            // ...geocoded
        }
        Router.replace(`/recommendations?${queryString.stringify(query)}`).then(() => window.scrollTo(0, 0))
    }

    return(
        <main className="questions">
        <div className="questions__inner">

            <form method="get" action="/recommendations" onSubmit={handleSubmit}>

                <section className="question">
                    <h2 className="question__title">What are you interested in?</h2>
                    <p className="question__help-text">Select as many as you want</p>
                    <div className="question__options">
                        <CheckboxBubble selectionState={categorySelection} onChange={handleCategoryChange} name="category" value="social" label="Socialising"/>
                        <CheckboxBubble selectionState={categorySelection} onChange={handleCategoryChange} name="category" value="cultural" label="Museums and culture"/>
                        <CheckboxBubble selectionState={categorySelection} onChange={handleCategoryChange} name="category" value="learning" label="Learning new things"/>
                        <CheckboxBubble selectionState={categorySelection} onChange={handleCategoryChange} name="category" value="active" label="Staying active"/>
                        <CheckboxBubble selectionState={categorySelection} onChange={handleCategoryChange} name="category" value="support" label="Support"/>
                    </div>
                </section>

                <section className="question">
                    <label htmlFor="near"><h2 className="question__title">Find your nearest services</h2></label>
                    <p className="question__help-text">Give a town or postcode in Buckinghamshire</p>
                    <input 
                        type="text" 
                        className="question__text-input" 
                        name="near"
                        placeholder="eg. Aylesbury..."
                        value={rawLocation} 
                        required
                        onChange={(e)=>{
                            changeRawLocation(e.target.value)
                        }}
                        onBlur={handleBlur}
                        ></input>
                    {formattedLocation && <p className="question__help-text"><strong>{formattedLocation}</strong></p>}
                </section>

                <Button>See your recommendations</Button>
            </form>

        </div>
    </main>
    )
}
   

export default NeedsExplorerQuestions