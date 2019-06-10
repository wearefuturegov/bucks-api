import React from 'react'
import Link from 'next/link'
import './style.scss'

const Button = ({href, children}) =>
    <Link href={href}>
        <a className="button">
            {children}
        </a>
    </Link>

export default Button