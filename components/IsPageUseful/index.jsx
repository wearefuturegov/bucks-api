import React from "react"
import "./style.scss"

const IsPageUseful = () =>
    <section className="is-page-useful">
        <div className="container">
            <form className="is-page-useful__panel">
                <p>Is this page useful?</p>
                <button className="is-page-useful__button">Yes</button>
                <button className="is-page-useful__button">No</button>
            </form>
        </div>
    </section>

export default IsPageUseful