import React from 'react'
import icon from './icon.svg'
import './style.scss'

const SearchForm = ({large}) =>
    <form className={(large)? "search search--large" : "search"}>
        <label className="visually-hidden" htmlFor="query">Search query</label>
        <input className="search__input" type="search" id="query" name="query" placeholder="Search for advice" required></input>
        <button className="search__submit" type="submit">
            <img className="search__icon" src={icon} alt="Submit search"/>
        </button>
    </form>

export default SearchForm