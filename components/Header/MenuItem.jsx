import React from 'react'

const MenuItem = ({href, text}) =>
    <li className="site-menu__item">
        <Link href={href}>
            <a className="site-menu__link">{text}</a>
        </Link>
    </li>

export default MenuItem