import React from "react"
import PropTypes from "prop-types"
import OptionBubble from "../OptionBubble"

const CategoryQuestion = ({
    selection,
    onChange
}) => 
    <section className="question">
        <h2 className="question__title">What are you interested in?</h2>
        <p className="question__help-text">Select as many as you want</p>
        <div className="question__options">
            <OptionBubble withColours selectionState={selection} onChange={onChange} name="category" value="active" label="Staying active"/>
            <OptionBubble withColours selectionState={selection} onChange={onChange} name="category" value="social" label="Socialising"/>
            <OptionBubble withColours selectionState={selection} onChange={onChange} name="category" value="support" label="Support"/>
            <OptionBubble withColours selectionState={selection} onChange={onChange} name="category" value="cultural" label="Visiting new places"/>
            <OptionBubble withColours selectionState={selection} onChange={onChange} name="category" value="learning" label="Learning new things"/>
        </div>
    </section>


CategoryQuestion.propTypes = {
    selection: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
}

export default CategoryQuestion