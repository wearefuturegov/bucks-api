import React from 'react'
import PropTypes from 'prop-types'
import { useMenuState, Menu, MenuDisclosure } from "reakit/Menu";
import Link from 'next/link'


const MobileMenuItem = ({href, text}) =>
    <li className="mobile-menu__item">
        <Link href={href}>
            <a className="mobile-menu__link">{text}</a>
        </Link>
    </li>

const MobileMenu = ({menuItems}) => {
    const menu = useMenuState();
    console.log(menu.visible)
    return (
        <>
            <MenuDisclosure {...menu} className="site-header__button">{(menu.visible)? "Close menu": "Menu"}</MenuDisclosure>
            <Menu {...menu} aria-label="Menu" className="mobile-menu">
                <ul className="mobile-menu__items" >
                    {(menuItems.map((menuItem, i)=>
                        <MobileMenuItem 
                            href={menuItem.href} 
                            text={menuItem.text} 
                            key={i} 
                            mobile
                            />    
                    ))}
                </ul>
            </Menu>
        </>
    )
}

MobileMenu.propTypes = {
    menuItems: PropTypes.array.isRequired
}

export default MobileMenu