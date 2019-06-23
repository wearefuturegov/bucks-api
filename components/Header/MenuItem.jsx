import React from "react"
import PropTypes from "prop-types"
import Link from "next/link"

const MenuItem = ({href, text}) =>
    <li className="site-menu__item">
        <Link href={href}>
            <a className="site-menu__link">{text}</a>
        </Link>
    </li>

MenuItem.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default MenuItem