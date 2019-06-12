import React, { useState } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Router from 'next/router'
import './style.scss'

const MobileMenu = ({menuItems}) => {

    const [isOpen, open] = useState(false)

    return (
        <>
            <button className="site-header__button" onClick={()=>{open(!isOpen)}}>{(isOpen)? "Close menu": "Menu"}</button>
            {isOpen && 
                <ul className="mobile-menu">
                    {(menuItems.map((menuItem, i)=>
                        <li>
                            <Link href={menuItem.href}>
                                <a className="mobile-menu__link">{menuItem.text}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            }
        </>
    )
}

MobileMenu.propTypes = {
    menuItems: PropTypes.array.isRequired
}

export default MobileMenu