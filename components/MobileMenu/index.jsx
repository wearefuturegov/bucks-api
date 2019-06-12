import React, { useState } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Router from 'next/router'
import './style.scss'

const MobileMenu = ({menuItems}) => {

    const [isOpen, open] = useState(false)

    return (
        <nav role="navigation">
            <button 
                className="site-header__button" 
                onClick={()=>{
                    open(!isOpen)

                    // console.log(
                    document.querySelector(".mobile-menu a").focus()
                    // )
                }} 
                // aria-haspopup="true"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                >
                {(isOpen)? "Close menu": "Menu"}
            </button>

            <ul 
                className={(isOpen)? "mobile-menu mobile-menu--visible" : "mobile-menu"} 
                aria-hidden={!isOpen}
                id="mobile-menu"
                >

                {(menuItems.map((menuItem, i)=>
                    <li key={i}>
                        <Link href={menuItem.href}>
                            <a className="mobile-menu__link">{menuItem.text}</a>
                        </Link>
                    </li>
                ))}

            </ul>

        </nav>
    )
}

MobileMenu.propTypes = {
    menuItems: PropTypes.array.isRequired
}

export default MobileMenu