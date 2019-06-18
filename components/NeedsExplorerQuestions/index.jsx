import React, {useState} from 'react'
import fetch from 'isomorphic-unfetch'
import './style.scss'
import Button from '../Button'
import CheckboxBubble from '../CheckboxBubble'

const NeedsExplorerQuestions = () => {

    const [rawLocation, changeRawLocation] = useState([])
    const [latLng, changeLatLng] = useState(false)
    const [formattedLocation, changeFormattedLocation] = useState([])

    const getLatLong = async () => {
        // e.preventDefault()
        if(rawLocation.length > 0){
            const res = await fetch('/api/geocode', {
                method: 'post',    
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ location: rawLocation })
            })
            const data = await res.json()
            if(data.status === "OK"){
                changeLatLng([data.results[0].geometry.location.lat, data.results[0].geometry.location.lng])
                changeFormattedLocation(data.results[0].formatted_address)
            }
        }
    }



    return(
        <main className="questions">
        <div className="questions__inner">

            <form method="get" action="/recommendations">

                <section className="question">
                    <h2 className="question__title">What are you interested in?</h2>
                    <p className="question__help-text">Select as many as you want</p>
                    <div className="question__options">
                        <CheckboxBubble name="category" value="social" label="Socialising"/>
                        <CheckboxBubble name="category" value="cultural" label="Museums and culture"/>
                        <CheckboxBubble name="category" value="learning" label="Learning new things"/>
                        <CheckboxBubble name="category" value="active" label="Staying active"/>
                        <CheckboxBubble name="category" value="support" label="Support"/>
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
                        onBlur={getLatLong}></input>
                    {formattedLocation && <p className="question__help-text"><strong>{formattedLocation}</strong></p>}

                    <input type="hidden" name="lat" value={latLng[0]}></input>
                    <input type="hidden" name="lng" value={latLng[1]}></input>
                    <input type="hidden" name="near" value={formattedLocation}></input>
                </section>

                <Button>See your recommendations</Button>

            </form>

        </div>
    </main>
    )
}
   

export default NeedsExplorerQuestions