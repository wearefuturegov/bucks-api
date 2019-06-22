import React from 'react'
import PropTypes from 'prop-types'
import RadioBubble from '../RadioBubble'

const AgeQuestion = ({
    selection,
    onChange
}) => 
    <section className="question">
        <h2 className="question__title">What age group are you?</h2>
        <p className="question__help-text">Choose one option</p>
        <div className="question__options">
            <RadioBubble selectionState={selection} onChange={onChange} name="age" value="" label="Show everything"/>
            <RadioBubble selectionState={selection} onChange={onChange} name="age" value="Young adults" label="Suitable for young adults"/>
            <RadioBubble selectionState={selection} onChange={onChange} name="age" value="Older adults" label="Suitable for over 60s"/>
        </div>
    </section>


AgeQuestion.propTypes = {
    selection: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
}

export default AgeQuestion