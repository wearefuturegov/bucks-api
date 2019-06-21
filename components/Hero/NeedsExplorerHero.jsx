import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import triangle from './triangle.svg'
import Header from '../Header'

const Hero = ({
    title,
    description
}) => 
    <section className="hero hero--needs">
        <Header inverted/>
        <div className="hero__inner container">
            <h1 className="hero__title">{title}</h1>
            <p className="hero__description">{description}</p>
        </div>
        <img src={triangle} alt="" className="hero__triangle"/>
    </section>

Hero.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Hero