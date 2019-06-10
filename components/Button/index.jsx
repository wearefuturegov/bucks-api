import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import './style.scss'

const Button = ({href, children}) =>
    <Link href={href}>
        <a className="button">
            {children}
        </a>
    </Link>

Button.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default Button