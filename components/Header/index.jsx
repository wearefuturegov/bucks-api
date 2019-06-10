import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
// import MenuItem from './MenuItem'
import SearchForm from '../SearchForm'
import './style.scss'
import logo from './logo.svg'
import MobileMenu from './MobileMenu'
import Link from 'next/link'

const Header = ({menuItems}) => 
    <header className="site-header">
        <div className="site-header__inner container">
            <Link href="/">
                <a>
                    <img className="site-header__logo" src={logo} alt="Buckinghamshire County Council"/>
                </a>
            </Link>

            <MobileMenu menuItems={menuItems}/>

            {/* <nav className="site-header__navigation" >
                <SearchForm/>
                <ul className="site-header__menu site-menu" >
                    {(menuItems.map((menuItem, i)=>
                        <MenuItem href={menuItem.href} text={menuItem.text} key={i}/>    
                    ))}
                </ul>
            </nav> */}

        </div>
    </header>

export default Header

Header.propTypes = {
    menuItems: PropTypes.array.isRequired
}