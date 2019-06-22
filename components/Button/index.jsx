import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import './style.scss'

const Button = ({href, children, background, withBottomMargin, onClick}) =>
    <>
        {href ? 
            <Link href={href}>
                <a className={`button ${background ? `button--with-${background}` : ""} ${withBottomMargin ? "button--with-bottom-margin" : ""}`}>
                    {children}
                </a>
            </Link>
        :
            <button onClick={onClick} className={`button ${background ? `button--with-${background}` : ""} ${withBottomMargin ? "button--with-bottom-margin" : ""}`}>
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