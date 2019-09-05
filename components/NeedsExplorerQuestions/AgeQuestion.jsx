import React from "react"
import PropTypes from "prop-types"
import OptionBubble from "../OptionBubble"

const AgeQuestion = ({
    selection,
    onChange
}) => 
    <fieldset className="question">
        <h2 className="question__title"><legend>Show me recommendations for...</legend></h2>
        <p className="question__help-text">Choose one option</p>
        <div className="question__options">
            <OptionBubble type="radio" selectionState={selection} onChange={onChange} name="age" value="" label="Everyone"/>
            <OptionBubble type="radio" selectionState={selection} onChange={onChange} name="age" value="young adults" label="Just young adults" helpText="18-25"/>
            <OptionBubble type="radio" selectionState={selection} onChange={onChange} name="age" value="older adults" label="Just older adults"  helpText="65+"/>
        </div>
    </fieldset>


AgeQuestion.propTypes = {
    selection: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
}

export default AgeQuestion