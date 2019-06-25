import React from "react"
import PropTypes from "prop-types"
import OptionBubble from "../OptionBubble"

const KeywordQuestion = ({
    selection,
    onChange
}) => 
    <section className="question question--animated">
        <h2 className="question__title">What do you need help with?</h2>
        <p className="question__help-text">Select as many as you want</p>
        <div className="question__options">
            <OptionBubble selectionState={selection} onChange={onChange} name="keywords" value="caring" label="Caring for someone else"/>
            <OptionBubble selectionState={selection} onChange={onChange} name="keywords" value="transport" label="Getting out and about"/>
            <OptionBubble selectionState={selection} onChange={onChange} name="keywords" value="housework" label="Housework"/>
            <OptionBubble selectionState={selection} onChange={onChange} name="keywords" value="meals" label="Meals and nutrition"/>
            <OptionBubble selectionState={selection} onChange={onChange} name="keywords" value="equipment" label="Equipment and safety at home"/>
            <OptionBubble selectionState={selection} onChange={onChange} name="keywords" value="hygiene" label="Personal hygiene and incontinence"/>
            <OptionBubble selectionState={selection} onChange={onChange} name="keywords" value="money" label="Paying for things"/>
        </div>
    </section>


KeywordQuestion.propTypes = {
    selection: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
}

export default KeywordQuestion