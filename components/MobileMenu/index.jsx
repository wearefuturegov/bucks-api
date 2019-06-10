import React from 'react'
import PropTypes from 'prop-types'
import {
    Menu,
    MenuList,
    MenuButton,
    MenuItem,
    MenuLink,
  } from "@reach/menu-button"
import Link from 'next/link'


const MobileMenuItem = ({href, text}) =>
    <li className="mobile-menu__item">
        <Link href={href}>
            <a className="mobile-menu__link">{text}</a>
        </Link>
    </li>

const MobileMenu = ({menuItems}) => {
    return (
        <>

        <Menu>
            <MenuButton className="site-header__button">Menu</MenuButton>
            <MenuList className="mobile-menu">
                {/* <MenuItem onSelect={() => alert("Download")}>Download</MenuItem>
                <MenuItem onSelect={() => alert("Copy")}>Create a Copy</MenuItem>
                <MenuItem onSelect={() => alert("Mark as Draft")}>Mark as Draft</MenuItem>
                <MenuItem onSelect={() => alert("Delete")}>Delete</MenuItem>
                <MenuLink
                as="a"
                href="https://reach.tech/workshops"
                >Attend a Workshop</MenuLink> */}

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


            </MenuList>
        </Menu>



            {/* <MenuDisclosure {...menu} className="site-header__button">{(menu.visible)? "Close menu": "Menu"}</MenuDisclosure>
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
            </Menu> */}
        </>
    )
}

MobileMenu.propTypes = {
    menuItems: PropTypes.array.isRequired
}

export default MobileMenu