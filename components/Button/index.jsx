import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import './style.scss'

const Button = ({href, children, background, withBottomMargin, centredSecondary, ...props}) =>
    <>
        {href ? 
            <Link href={href}>
                <a {...props} className={`button  ${centredSecondary ? `button--centred` : ""}  ${background ? `button--with-${background}` : ""} ${withBottomMargin ? "button--with-bottom-margin" : ""}`}>
                    {children}
                </a>
            </Link>
        :
            <button {...props} className={`button  ${centredSecondary ? `button--centred` : ""}  ${background ? `button--with-${background}` : ""} ${withBottomMargin ? "button--with-bottom-margin" : ""}`}>
                {children}
            </button>
        }
    </>
    
Button.propTypes = {
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    background: PropTypes.string,
    withBottomMargin: PropTypes.bool
}

export default Button