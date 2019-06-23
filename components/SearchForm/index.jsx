import React from "react"
import PropTypes from "prop-types"
import icon from "./icon.svg"
import "./style.scss"

const SearchForm = ({large}) =>
    <form className={(large)? "search search--large" : "search"} action="https://www.careadvicebuckinghamshire.org/s4s/WhereILive/Council?pageId=2239" method="get">
        <label className="visually-hidden" htmlFor={(large)? "query-large" : "query"}>Search query</label>
        <input className="search__input" type="search" id={(large)? "query-large" : "query"} name="Search" placeholder="Search for advice" required></input>
        <input type="hidden" name="pageId" value="2239"/>
        <button className="search__submit" type="submit">
            <img className="search__icon" src={icon} alt="Submit search"/>
        </button>
    </form>

SearchForm.propTypes = {
    large: PropTypes.bool
}

export default SearchForm