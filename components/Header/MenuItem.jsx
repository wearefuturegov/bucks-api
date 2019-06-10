import React from 'react'
import Link from 'next/link'

const MenuItem = ({href, text, mobile}) =>
    <li className={(mobile)? "mobile-menu__item" : "site-menu__item"}>
        <Link href={href}>
            <a className={(mobile)? "mobile-menu__link" : "site-menu__link"}>{text}</a>
        </Link>
    </li>

export default MenuItem