import React from 'react'
import SearchForm from '../SearchForm'

const FullWidthSearchPanel = () =>
    <section className="full-width-search">
        <div className="container full-width-search__inner">
            <aside>
                <h2>Search</h2>
                <p>Find information, advice and guidance</p>
                <SearchForm/>
            </aside>
            <aside>
                <h3>Popular pages</h3>
                <ul>
                    <li></li>
                </ul>
            </aside>
        </div>
    </section>