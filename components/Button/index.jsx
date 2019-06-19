import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import './style.scss'

const Button = ({href, children, background}) =>
    <>
        {href ? 
            <Link href={href}>
                <a className={`button button--${background}`}>
                    {children}
                </a>
            </Link>
        :
            <button className={`button button--${background}`}>
                {children}
            </button>
        }
    </>
    
Button.propTypes = {
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    background: PropTypes.string
}

export default Button