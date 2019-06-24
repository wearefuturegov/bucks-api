import React from "react"
import PropTypes from "prop-types"
import RadioBubble from "../RadioBubble"

const AgeQuestion = ({
    selection,
    onChange
}) => 
    <section className="question">
        <h2 className="question__title">Show me recommendations for...</h2>
        <p className="question__help-text">Choose one option</p>
        <div className="question__options">
            <RadioBubble selectionState={selection} onChange={onChange} name="age" value="Young adults" label="Young adults (18-25)"/>
            <RadioBubble selectionState={selection} onChange={onChange} name="age" value="Older adults" label="Older adults (60+)"/>
            <RadioBubble selectionState={selection} onChange={onChange} name="age" value="" label="Show everything"/>
        </div>
    </section>


AgeQuestion.propTypes = {
    selection: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
}

export default AgeQuestion