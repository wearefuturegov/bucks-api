import React from "react"
import PropTypes from "prop-types"
import SearchForm from "../SearchForm"
import Link from "next/link"
import "./style.scss"

const PopularPages = ({pages}) =>
    <ul className="popular-pages">
        {pages.map((page, i)=>
            <li key={i} className="popular-pages__item">
                <Link href={page.href}>
                    <a className="popular-pages__link">{page.title}</a>
                </Link>
            </li>
        )}
    </ul>

const FullWidthSearchPanel = ({popularPages}) =>
    <section className="full-width-search">
        <div className="container">
            <h2 className="full-width-search__title">Search</h2>
            <div className="full-width-search__inner">
                <aside>
                    <p className="full-width-search__description">Find information, advice and guidance</p>
                    <SearchForm large/>
                </aside>
                <aside>
                    <h3 className="popular-pages__title">Popular pages</h3>
                    <PopularPages pages={popularPages}/>
                </aside>
            </div>
        </div>
    </section>

FullWidthSearchPanel.propTypes = {
    popularPages: PropTypes.array.isRequired
}

export default FullWidthSearchPanel