import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import hero from './hero.jpg'
import triangle from './triangle.svg'
import Header from '../Header'
import CallToAction from './CallToAction'

const Hero = ({
    title,
    description,
    menuItems,
    ctaTitle,
    ctaDescription,
    ctaHref,
    ctaLinkText
}) => 
    <section className="hero">
        <Header menuItems={menuItems}/>
        <div className="hero__inner container">
            <h1 className="hero__title">{title}</h1>
            <p className="hero__description">{description}</p>
            <CallToAction
                title={ctaTitle}
                description={ctaDescription}
                href={ctaHref}
                linkText={ctaLinkText}
            />
        </div>
        <img src={triangle} alt="" className="hero__triangle"/>
    </section>

Hero.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    menuItems: PropTypes.array
}

export default Hero