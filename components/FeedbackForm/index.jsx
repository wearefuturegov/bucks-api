import React from "react"
import Radio from "../Radio"

const FeedbackForm = () =>
    <form>
        <fieldset>
            <h3><legend>Were you able to do what you needed today?</legend></h3>
            <Radio name="satisfied" value="yes">Yes</Radio>
            <Radio name="satisfied" value="somewhat">Somewhat</Radio>
            <Radio name="satisfied" value="no">No</Radio>
        </fieldset>

        <label htmlFor="message">How can we improve this website?</label>
        <textarea name="message" rows="5"></textarea>

        <button>Send feedback</button>
    </form>

export default FeedbackForm