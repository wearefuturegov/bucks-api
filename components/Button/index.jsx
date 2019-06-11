import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import './style.scss'

const Button = ({href, children, background}) =>
    <Link href={href}>
        <a className={`button button--${background}`}>
            {children}
        </a>
    </Link>

Button.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default Button