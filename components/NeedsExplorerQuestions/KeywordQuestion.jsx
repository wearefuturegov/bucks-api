import React from "react"
import PropTypes from "prop-types"
import CheckboxBubble from "../CheckboxBubble"

const KeywordQuestion = ({
    selection,
    onChange
}) => 
    <section className="question question--animated">
        <h2 className="question__title">What do you need help with?</h2>
        <p className="question__help-text">Select as many as you want</p>
        <div className="question__options">
            <CheckboxBubble selectionState={selection} onChange={onChange} name="keywords" value="caring" label="Looking after someone"/>
            <CheckboxBubble selectionState={selection} onChange={onChange} name="keywords" value="transport" label="Getting out and about"/>
            <CheckboxBubble selectionState={selection} onChange={onChange} name="keywords" value="housework" label="Housework"/>
            <CheckboxBubble selectionState={selection} onChange={onChange} name="keywords" value="meals" label="Meals and nutrition"/>
            <CheckboxBubble selectionState={selection} onChange={onChange} name="keywords" value="equipment" label="Equipment and gadgets"/>
            <CheckboxBubble selectionState={selection} onChange={onChange} name="keywords" value="hygiene" label="Personal hygiene and continence"/>
            <CheckboxBubble selectionState={selection} onChange={onChange} name="keywords" value="money" label="Money matters"/>
        </div>
    </section>


KeywordQuestion.propTypes = {
    selection: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
}

export default KeywordQuestion