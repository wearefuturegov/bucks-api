import React, {useState} from 'react'
import Layout from '../components/Layout'
import NeedsExplorerHero from '../components/NeedsExplorerHero'
import fetch from 'isomorphic-unfetch'

const Home = () => {

    const [rawLocation, changeRawLocation] = useState([])
    const [latLng, changeLatLng] = useState(false)
    const [formattedLocation, changeFormattedLocation] = useState([])


    const getLatLong = async (e) => {
        e.preventDefault()
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

    return(
        <Layout>
            <NeedsExplorerHero
                title="Find people and services near you"
                description="Answer a few questions to find activities and support groups in your area"
                menuItems={[
                    {
                        href: "https://www.careadvicebuckinghamshire.org/s4s/WhereILive/Council?pageId=1228",
                        text: "Information and advice"
                    },
                    {
                        href: "/recommendations",
                        text: "All services"
                    },
                    {
                        href: "https://www.careadvicebuckinghamshire.org/s4s/Auth",
                        text: "Log in"
                    },
                    {
                        href: "https://www.careadvicebuckinghamshire.org/s4s/WhereILive/Council?pageId=1636",
                        text: "Sign up"
                    },
                ]}
                />

            <form method="get" action="/recommendations">

                <p>What are you interested in?</p>
                <input type="checkbox" name="category" value="active" id="c1" />
                <label htmlFor="c1">Staying active</label>
                <br/>
                <input type="checkbox" name="category" value="support" id="c2"/>
                <label htmlFor="c2">Support</label>
                <br/>
                <input type="checkbox" name="category" value="cultural" id="c3"/>
                <label htmlFor="c3">Cultural</label>
                <br/>
                <input type="checkbox" name="category" value="social" id="c4"/>
                <label htmlFor="c4">Socialising</label>
                <br/>
                <input type="checkbox" name="category" value="learning" id="c5"/>
                <label htmlFor="c5">Learning new things</label>
                <br/>

                <br/>


                <label htmlFor="near">Where are you</label>
                <input type="text" name="near" value={rawLocation} onChange={(e)=>{
                    changeRawLocation(e.target.value)
                }}></input>

                <button onClick={getLatLong}>get lat long</button>

                <input type="" name="lat" value={latLng[0]}></input>
                <input type="" name="lng" value={latLng[1]}></input>

                <input type="" name="near" value={formattedLocation}></input>

                <br/>

                <button type="submit">see your recommendations</button>

            </form>

        </Layout>
    )
}

export default Home