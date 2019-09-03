/* global google */
import React, {useRef} from "react"
import { Hint, Question } from "./utils"
import styled from "styled-components"
import theme from "../_theme"

const Input = styled.input`
    margin-top: 20px;
    font-size: 1em;
    border: 2px solid ${theme.darkText};
    padding: 10px;
    border-radius: 2px;
    display: block;
    width: 100%;
`

class LocationQuestion extends React.Component{

    constructor(props){
        super(props)
        this.autocompleteInput = React.createRef();
        this.autocomplete = null;
        this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
    }

    componentDidMount() {
        this.autocomplete = new google.maps.places.Autocomplete(
            this.autocompleteInput.current,
            { types: ["geocode"] }
        );
        this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
    }

    handlePlaceChanged() {
        const place = this.autocomplete.getPlace();
        console.log("place changed: ", place)
        // this.props.onPlaceChanged(place);
    }


    render(){
    return(
        <>

            <label><Question>3. Where do you want to look?</Question></label>
            <Hint>Give a town or postcode in Buckinghamshire</Hint>

            <Input 
                ref={this.autocompleteInput}
                id="autocomplete"
                name="location" 
                placeholder="Town or postcode"
            />

        </>
    )
    }

}



export default LocationQuestion