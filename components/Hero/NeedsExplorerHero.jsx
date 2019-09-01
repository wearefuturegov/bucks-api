import React from "react"
import PropTypes from "prop-types"
import "./style.scss"
import Header from "../Header"
import Link from "next/link"

const Hero = ({
    title,
    description
}) => 
    <section className="">
        <Header/>
        <div className="container">
            <h1 className="hero__title">{title}</h1>
            <p className="hero__description">
                {description}
                <span className="hero__all-services">Or, <Link href="/recommendations"><a>see everything</a></Link></span>
            </p>
        </div>
    </section>

Hero.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Hero