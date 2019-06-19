import React from 'react'
import PropTypes from 'prop-types'
import CheckboxBubble from '../CheckboxBubble'

const CategoryQuestion = ({
    selection,
    onChange
}) => 
    <section className="question">
        <h2 className="question__title">What are you interested in?</h2>
        <p className="question__help-text">Select as many as you want</p>
        <div className="question__options">
            <CheckboxBubble selectionState={selection} onChange={onChange} name="category" value="active" label="Staying active"/>
            <CheckboxBubble selectionState={selection} onChange={onChange} name="category" value="social" label="Socialising"/>
            <CheckboxBubble selectionState={selection} onChange={onChange} name="category" value="support" label="Support"/>
            <CheckboxBubble selectionState={selection} onChange={onChange} name="category" value="cultural" label="Cultural"/>
            <CheckboxBubble selectionState={selection} onChange={onChange} name="category" value="learning" label="Learning new things"/>
        </div>
    </section>


CategoryQuestion.propTypes = {
    selection: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
}

export default CategoryQuestion