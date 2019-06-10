import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import MenuItem from './MenuItem'

import logo from './logo.svg'

const Header = ({menuItems}) => 
    <header className="site-header">
        <div className="site-header__inner">
            
            <img className="site-header__logo" src={logo} alt={logoAlt}/>

            <nav className="site-header__navigation" >
                {/* <SearchForm/> */}
                <ul className="site-header__menu site-menu" >
                    {(menuItems.map((menuItem, i)=>
                        <MenuItem href={menuItem.href} text={menuItem.text} key={i}/>    
                    ))}
                </ul>
            </nav>

        </div>
    </header>

export default Header

Header.propTypes = {
    menuItems: PropTypes.array.isRequired
}