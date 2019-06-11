import React from 'react'
import PropTypes from 'prop-types'
import {
    Menu,
    MenuList,
    MenuButton,
    MenuItem,
  } from "@reach/menu-button"
import "@reach/menu-button/styles.css"
import Router from 'next/router'
import './style.scss'

const MobileMenu = ({menuItems}) => {
    return (
        <>
            <Menu>
                {({ isOpen }) => (
                    <>
                        <MenuButton className="site-header__button">{(isOpen)? "Close menu": "Menu"}</MenuButton>
                        <MenuList className="mobile-menu">
                            {(menuItems.map((menuItem, i)=>
                                <MenuItem key={i} className="mobile-menu__link" onSelect={() => Router.push(menuItem.href)}>{menuItem.text}</MenuItem>
                            ))}
                        </MenuList>
                    </>
                )}
            </Menu>
        </>
    )
}

MobileMenu.propTypes = {
    menuItems: PropTypes.array.isRequired
}

export default MobileMenu