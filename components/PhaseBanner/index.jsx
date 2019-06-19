import React from 'react'
import './style.scss'

const PhaseBanner = () =>
    <section className="phase-banner">
        <div className="container">
            <p className="phase-banner__inner"><strong className="phase-banner__tag">Beta</strong><span className="phase-banner__inner-text">This is a new service - <a href="#">your feedback</a> will help us improve it.</span></p>
        </div>
    </section>

export default PhaseBanner