import React from 'react'
import Link from 'next/link'

const MenuItem = ({href, text}) =>
    <li className="site-menu__item">
        <Link href={href}>
            <a className="mobile-menu__link">{text}</a>
        </Link>
    </li>

export default MenuItem