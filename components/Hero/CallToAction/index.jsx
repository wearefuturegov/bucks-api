import React from 'react'
import './style.scss'
import Button from '../../Button'

const CallToAction = () =>
    <section className="hero-call-to-action">
        <h2 className="hero-call-to-action__title">Find services in your area</h2>
        <p className="hero-call-to-action__description">Get an idea of what help is available by answering these questions.</p>
        <Button href="/explore-your-needs">Explore your needs</Button>
    </section>


export default CallToAction