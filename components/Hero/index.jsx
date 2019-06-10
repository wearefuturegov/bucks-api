import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import hero from './hero.jpg'
import Header from '../Header'

const Hero = ({
    title,
    description
}) => 
    <section className="hero">
        <div className="hero__inner">
            <h1 className="hero__title">{title}</h1>
            <p className="hero__description">{description}</p>
        </div>
    </section>

export default Hero

Hero.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}