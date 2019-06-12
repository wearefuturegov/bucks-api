import React from 'react'
import PropTypes from 'prop-types'
import SearchForm from '../SearchForm'
import MobileMenu from '../MobileMenu'
import MenuItem from './MenuItem'
import Link from 'next/link'
import './style.scss'
import logo from './logo.svg'
import invertedLogo from './logo-inverted.svg'

const Header = ({menuItems, inverted}) => 
    <header className={(inverted)? "site-header site-header--inverted": "site-header"}>
        <div className="site-header__inner container">
            <Link href="/">
                <a>
                    <img className="site-header__logo" src={(inverted)? invertedLogo : logo} alt="Buckinghamshire County Council"/>
                </a>
            </Link>

            <MobileMenu menuItems={menuItems}/>

            <nav className="site-header__navigation" role="navigation">
                <SearchForm/>
                <ul className="site-header__menu site-menu" >
                    {(menuItems.map((menuItem, i)=>
                        <MenuItem href={menuItem.href} text={menuItem.text} key={i}/>    
                    ))}
                </ul>
            </nav>

        </div>
    </header>

Header.propTypes = {
    menuItems: PropTypes.array.isRequired
}

export default Header